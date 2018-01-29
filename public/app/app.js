import angular from 'angular';

class AppCtrl {
  constructor() {
    this.repo_name = 'angular-webpack-express-starter';
  }
}

var appView = function app() {
  return {
    templateUrl: 'app/app.html',
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

var app = angular.module("app", []);
app.directive("tekenView", appView);
app.controller('AppCtrl', AppCtrl);