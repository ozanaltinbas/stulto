import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-messages';

import template from './postAdd.html';

import '../../../api/posts/index';

class PostAdd {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
    }

    sendPost(form) {
        if(form.$valid) {
            Meteor.call('addPost', this.message, this.nickname, (error) => {
                if (error) {
                    console.log(error);
                } else {
                    Materialize.toast('Mesajınız paylaşılmıştır.', 5000);
                    this.reset();
                }
            });
        }
    }

    reset() {
        this.message = '';
    }
}

const name = 'postAdd';

export default angular.module(name, [
    angularMeteor,
    'ngMessages'
]).component(name, {
    template,
    controllerAs: name,
    controller: PostAdd
});