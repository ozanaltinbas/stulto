import { Meteor } from 'meteor/meteor';
import { Posts } from './collection';

if (Meteor.isServer) {

  Meteor.publish('posts', function(options, searchString) {
    
    var selector = {};

    const fields = {
      fields: {
        nickname : 1,
        indexNickname : 1,
        content : 1,
        indexContent : 1,
        createdAt : 1,
        seq : 1
      }
    };

    if (typeof searchString === 'string' && searchString.length) {
      selector = {
        $or: [
          {
            indexContent : {
              $regex: `.*${searchString.replace(/ /g, '').toLowerCase()}.*`,
              $options : 'i'
            }
          },
          {
            indexNickname : {
              $regex: `.*${searchString.replace(/ /g, '').toLowerCase()}.*`,
              $options : 'i'
            }
          },
          {
            indexSeq : {
              $regex: `.*${searchString}.*`,
              $options : 'i'
            }
          }
        ]
      };
    }

    return Posts.find(selector, options);
  });

}