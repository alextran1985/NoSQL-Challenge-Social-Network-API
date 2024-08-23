const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema(
  {
    thoughtName: {
      type: String,
      required: true,
      min_lenght: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      //Use a getter method to format the timestamp on query
      get: (date) => {
        if (date) return date.toISOString().split("T") [0];
      },

    },
    username: {
        type: String,
        required: true,
      },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'reactionSchema',
      },
    ],
  },
  //Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const thoughts = model('thought', thoughtsSchema);

module.exports = thought;
