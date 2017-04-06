angular.module('myApp').component('profile', {
    templateUrl: './views/profile.html',
    bindings: {
        name: '=',
        age: '='
    },
    controller:function (mainService) {

        let vm = this;

        vm.$onInit = function () {
            mainService.getData().then(function (response) {
                console.log(response.data);
                vm.profiles = response.data;
            })
        }
    },

})
