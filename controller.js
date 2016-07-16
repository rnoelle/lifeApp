angular.module('lifeApp')
  .controller('mainCtrl', mainCtrl);

function mainCtrl($scope, dataService) {
  this.getDays = function() {
    var days = [];
    for (var i = 1; i < 32; i++) {
      days.push(i);
    }
    return days;
};
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  this.getYears = function() {
    var years = [];
    for (var i = 1906; i < 2017; i++) {
      years.push(i);
    } return years;
  };

  $scope.days = this.getDays();
  $scope.months = months;
  $scope.years = this.getYears();

  $scope.sendBirthday = function () {
    var birth = $scope.birthDay + " " + $scope.birthMonth + " " + $scope.birthYear;
    dataService.getLife(birth, $scope.gender).then(function (result) {
      $scope.result = true;
      console.log(result);
      $scope.life = result.dateString;
    });
  };
}
