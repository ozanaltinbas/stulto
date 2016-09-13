import { Meteor } from 'meteor/meteor';
import { Posts } from './collection';

export function addPost (content, nickname) {
  check (content, String);
  check (nickname, String);
  if (content && content.length <= 750 && nickname && nickname.length >= 3) {
    if (Meteor.isServer) {

      var insertedSequenceNumber = 1;

      var latestPost = Posts.findOne({}, { sort : { createdAt : -1 } });

      if (latestPost) {
        if (typeof latestPost.seq == 'number') {
          insertedSequenceNumber = latestPost.seq + 1;
        }
      }
      Posts.insert({
        nickname : nickname,
        indexNickname : nickname.replace(/ /g, '').toLowerCase(),
        content : content,
        indexContent : content.replace(/ /g, '').toLowerCase(),
        createdAt : new Date(),
        ipAddress : this.connection.clientAddress,
        seq : insertedSequenceNumber,
        indexSeq : '#' + insertedSequenceNumber.toString()
      });
    }
  }
}

Meteor.methods({
  addPost
});