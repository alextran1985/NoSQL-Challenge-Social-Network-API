const { Schema, model } = require('mongoose');


// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique:true,
      required: true,
      trimmed: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      ValidityState: true,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
  }
);

userSchema.virtual('friendCount').get(function() {
  return this.friends.length
});

const User = model('User', userSchema);

module.exports = User;
