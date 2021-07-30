const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from habit and mood
/* const Habit = require('./habit');
const Mood = require('./mood'); */

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // set habits to be an array of data that adheres to the habitSchema
    habits:[
      {
        type: Schema.Types.ObjectId,
        ref: 'Habit'
      }
    ],
  
    // set mood to be an array of data that adheres to the mood
    moods:[
      {
        type: Schema.Types.ObjectId,
        ref: 'Mood'
      }
    ]
  },

  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};



const User = model('User', userSchema);

module.exports = User;
