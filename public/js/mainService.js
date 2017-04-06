angular.module('myApp').service('mainService', function ($http) {
    let serverUrl = 'http://localhost:3024';
    this.getData = function () {
        return $http({
            method: 'GET',
            url: serverUrl +'/api/profile'
        })
    };
    this.postNewProfile = function (name, age, height, gender) {
        return $http({
            method: 'POST',
            data: {name: name,age:age, height:height, gender:gender},
            url: serverUrl + '/api/addprofile'
        })
    };
    this.deleteLast = function () {
        return $http({
            method: 'DELETE',
            url: serverUrl + 'api/deletelastprofile'
        })
    }
})
