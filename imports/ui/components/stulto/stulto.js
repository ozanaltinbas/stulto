import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import 'angular-translate';
import 'angular-materialize';
import 'moment';
import 'moment/locale/tr';
import angularMoment from 'angular-moment';

import template from './stulto.html';

import { name as Navigation } from '../navigation/navigation';
import { name as Home } from '../home/home';

class Stulto {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
    }
}

const name = 'stulto';

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    Home,
    'pascalprecht.translate',
    'ui.materialize',
    Navigation,
    angularMoment
]).component(name, {
    template,
    controllerAs: name,
    controller: Stulto
})
    .config(config);

function config($locationProvider, $urlRouterProvider, $translateProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $translateProvider.preferredLanguage('tr');

    $translateProvider.translations('tr', {
        'APP_NAME' : 'Stulto',
        'SEND' : 'GÖNDER',
        'nickname' : 'Rumuz',
        'message' : 'Mesaj'
    });
    $translateProvider.translations('en', {});
    $translateProvider.translations('es', {});
    $translateProvider.translations('fr', {});
    $translateProvider.translations('it', {});
    $translateProvider.translations('de', {});

}