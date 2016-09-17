import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './loader.html';

class Loader {
    constructor() {}
}

const name = 'loader';

export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        status: '<'
    },
    controller: Loader
});