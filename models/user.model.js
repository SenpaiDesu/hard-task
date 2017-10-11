const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const { JWT_SECRET, PASSWORD_REGEX } = require('../config');
const { getBeautifulMongoError } = require('../tools');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: ['email is required'],
    trim: true,
    lowercase: true,
    validate: {
      validator(email) { return validator.isEmail(email) },
      message: 'Invalid email format'
    },
    unique: true
  },
  password: {
    type: String,
    required: ['password is required'],
    trim: true,
    validate: [
      {
        validator(password) { return validator.isLength(password, { min: 8, max: 40 }); },
        message: 'password must be [8-40] characters in length'
      },
      {
        validator(password) { return PASSWORD_REGEX.test(password); },
        message: 'password must contain lower- and upper-case and at least one digit'
      }
    ]
  },
  username: {
    type: String,
    required: ['username is required'],
    trim: true,
    validate: [
      {
        validator(username) { return validator.isLength(username, { min: 2, max: 15 }); },
        message: 'username must be [2-15] characters in length'
      },
      {
        validator(username) { return validator.isAlphanumeric(username); },
        message: 'username must be alphanumeric'
      }
    ],
    unique: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

userSchema.pre('save', function(next) {
  if (this.isModified('password'))
    this.password = bcrypt.hashSync(this.password);
  next();
});

userSchema.post('save', getBeautifulMongoError);

userSchema.methods = {
  comparePassword(password) {
    return bcrypt.compareSync(password, this.password);
  },

  getPublicData() {
    return {
      _id: this._id,
      email: this.email,
      username: this.username,
      isAdmin: this.isAdmin
    };
  },

  genToken() {
    return jwt.sign(
      this.getPublicData(), 
      JWT_SECRET, 
      { expiresIn: 900 });
  },

  attachToken() {
    return Object.assign({},
      this.getPublicData(),
      { token: this.genToken() }
    );
  }
};

module.exports = mongoose.model('User', userSchema);