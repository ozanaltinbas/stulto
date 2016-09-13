import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './searchBar.html';

class SearchBar {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
    }

    reset() {
        this.searchtext = '';
    }
}

const name = 'searchBar';

export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        searchtext: '='
    },
    controller: SearchBar
});