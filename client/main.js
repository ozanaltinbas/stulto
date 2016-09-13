import angular from 'angular';

import { Meteor } from 'meteor/meteor';

import { name as Stulto } from '../imports/ui/components/stulto/stulto';

function onReady() {
  angular.bootstrap(document, [
    Stulto
  ], {
    strictDi: true
  });
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}