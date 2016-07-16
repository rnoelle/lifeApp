angular.module('lifeApp')
  .service('dataService', dataService);

function dataService($http) {
  this.getLife = function (birth, gender) {
    return $http({
      method: 'GET',
      url: 'https://life-left.p.mashape.com/time-left?birth=' + birth + '&gender=' + gender,
      headers: {
        "X-Mashape-Key": "VWyHMli4Yrmshvf1JUjkLTSpSmW2p13iyK0jsn9RY8CFndh8Mk",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
      }
    }).then(function (result) {
      return result.data.data;
    });
  };
  this.getLife();


}//////end module
