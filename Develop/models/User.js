const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

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
      ValidityState: 50,
    },
    thoughts: {
      type: String,
      required: true,
      max_length: 50,
    },
    friends: {
        type: String,
        required: true,
        max_length: 50,
      },
    assignments: [assignmentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model('student', studentSchema);

module.exports = Student;
