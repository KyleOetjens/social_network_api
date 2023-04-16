const { Schema, model } = require('mongoose');

//Subdocument for Reactions
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: Schema.Types.String, ref:`User`,
      required: true,
    },
    // createdAt: {
    //   timestamps: true,
    //   // type: Date,
    //   // default: Date.now,
    // },
    
  },
  { timestamps: true},
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    username: {
      type: Schema.Types.String, ref:`User`,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
thoughtSchema
.virtual(`reactionCount`).get(function (){
  return this.reactions.length;
});
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
