// const { Schema, Types } = require('mongoose');

// const reactionSchema = new Schema(
//   {
//     reactionId: {
//       type: Schema.Types.ObjectId,
//       default: () => new Types.ObjectId(),
//     },
//     reactionBody: {
//       type: String,
//       required: true,
//       maxlength: 280,
//     },
//     username: {
//       type: Schema.Types.String, ref:`User`,
//       required: true,
//     },
//     // createdAt: {
//     //   timestamps: true,
//     //   // type: Date,
//     //   // default: Date.now,
//     // },
    
//   },
//   { timestamps: true},
//   {
//     toJSON: {
//       getters: true,
//     },
//     id: false,
//   }
// );

// module.exports = reactionSchema;
