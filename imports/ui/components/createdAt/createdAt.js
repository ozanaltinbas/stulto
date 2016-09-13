import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './createdAt.html';

class CreatedAt {
    constructor() {}
}

const name = 'createdAt';

export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
      time: '<'
    },
    controller: CreatedAt
});