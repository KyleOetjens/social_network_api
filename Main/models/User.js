const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Reaction');

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
    thoughts: [thoughtsSchema],
    friends: [userSchema]
  },
  {
    toJSON: {
      virtuals: true,
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
