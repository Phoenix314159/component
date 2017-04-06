angular.module('myApp').component('addProfile', {
    templateUrl: './views/addprofile.html',
    bindToController:{
      name: '=',
      age: '='
    },
    controller: function (mainService) {
        let that = this;
        that.$onInit = function () {
            that.addProfile = function () {
                mainService.postNewProfile().then(function (response) {
                    console.log(response);
                    mainService.getData().then(function (response2) {
                        console.log(response2);
                        that.addedProfile = response.data;
                    })
                })
            }

        }
    }
})
