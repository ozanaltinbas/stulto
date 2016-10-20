import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'ng-infinite-scroll';

import { Posts } from '../../../api/posts/index';

import template from './postsList.html';

import { name as SearchBar } from '../searchBar/searchBar';
import { name as CreatedAt } from '../createdAt/createdAt';
import { name as PostAdd } from '../postAdd/postAdd';

class PostsList {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.createdAt = -1;
        this.sort = {
            createdAt: this.createdAt
        };
        this.searchText = '';
        this.limit = 10;

        this.subscribe('posts', () => [{
            limit: this.getReactively('limit'),
            sort: this.getReactively('sort')
            }, this.getReactively('searchText')
        ]);

        this.helpers({
            posts() {
                return Posts.find({}, {
                    sort : this.sort
                });
            }
        });

    }

    incrementLimit () {
        this.limit += 10;
    }
}

const name = 'postsList';

export default angular.module(name, [
    angularMeteor,
    SearchBar,
    CreatedAt,
    'infinite-scroll',
    PostAdd
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        selector: '<',
        options: '<'
    },
    controller: PostsList
});