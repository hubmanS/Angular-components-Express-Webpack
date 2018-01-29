import angular from 'angular';


class LabelCtrl {
    constructor() {
        this.repo_name = 'JALAs';
    }
}

var labelView = function app() {
    return {
        templateUrl: 'label/label.html',
        controller: 'LabelCtrl',
        controllerAs: 'app'
    }
};

var app = angular.module("label", []);
app.directive("labelView", labelView);
app.controller('LabelCtrl', LabelCtrl);