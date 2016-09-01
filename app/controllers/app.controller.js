'use strict';
AppController.$inject = [];

function AppController() {
    var _this = this;
    this.userData = {
        name: '',
        address: '',
        dob: new Date(),
        username: '',
        password: '',
    };
    this.isLogin = true;
    this.isLoginFailed = false;
    this.toggleDiv = ['image1', 'image2', 'userInfo'];
    this.selection = this.toggleDiv[0];

    this.login = function(isFormValid) {
        this.submitted = true;
        if (isFormValid) {
            if (this.userData.username === this.userData.password) {
                this.isLogin = false;
            } else {
                this.isLoginFailed = true;
            }
        }
    }

    this.imageToggle = function() {
        this.selection = (this.selection === this.toggleDiv[2]) ? this.toggleDiv[0] : (this.selection === this.toggleDiv[0]) ? this.toggleDiv[1] : this.toggleDiv[0];
    }

    this.displayForm = function() {
        this.selection = this.toggleDiv[2];
    }

  }

module.exports = AppController;
