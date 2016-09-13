import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-translate';

import template from './navigation.html';

class Navigation {
    constructor($scope, $reactive){
        'ngInject';

        $reactive(this).attach($scope);

        $('img').on('dragstart', function(event) { event.preventDefault(); });
    }
}

const name = 'navigation';

export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    controller: Navigation
});