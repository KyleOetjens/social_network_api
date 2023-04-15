const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Reaction');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max_length: 100,
      match: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: `Thought`,
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: `User`,
    }]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);
userSchema
.virtual(`friendCount`).get(function (){
  return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
