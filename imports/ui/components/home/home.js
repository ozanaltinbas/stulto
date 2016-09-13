import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './home.html';

import { name as PostsList } from '../postsList/postsList';

class Home {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.selector = {};
        this.options = {};
    }
}

const name = 'home';

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    PostsList
]).component(name, {
    template,
    controllerAs: name,
    controller: Home
})
    .config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '/',
            template: '<home></home>'
        });
}