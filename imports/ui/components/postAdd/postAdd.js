import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-messages';
import 'angular-recaptcha';

import template from './postAdd.html';

import '../../../api/posts/index';
import { name as Loader } from '../loader/loader';

class PostAdd {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.helpers({
            displayCaptcha() {
                return true;
            }
        });

        this.reset();
    }

    sendPost(form) {
        if(form.$valid) {
            if (this.loadedStatus) {
                this.changeLoadedStatus (false);
                Meteor.call('addPost', this.message, this.nickname, (error) => {
                    if (error) {
                        console.log(error);
                        this.changeLoadedStatus (true);
                    } else {
                        Materialize.toast('Mesajınız paylaşılmıştır.', 5000);
                        this.reset();
                    }
                });
            }
        }
    }

    changeLoadedStatus(status) {
        this.loadedStatus = status;
    }

    reset() {
        this.message = '';
        this.changeLoadedStatus (true);
    }
}

const name = 'postAdd';

export default angular.module(name, [
    angularMeteor,
    'ngMessages',
    'vcRecaptcha',
    Loader
]).component(name, {
    template,
    controllerAs: name,
    controller: PostAdd
});