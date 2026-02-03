const User = require("../models/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const createUserService = async ({name, email, password}) => {
    try {
      //hash user password trước khi lưu vào db (bcryptjs, argon2)
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      //save user to db
      let result = await User.create({
        name: name,
        email: email,
        password: hashedPassword,
        role: 'user'
      })
      return result;

    } catch (error) {
        console.log(error);
        return null;
    }
}

const loginService = async ({email, password}) => {
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        //create a token (JWT)
        return "Login successful";
      } else {
        return {
          EC: 2,
          EM: 'Email/Password is incorrect',
        }
      }
    } else {
      return {
        EC: 1,
        EM: 'Email/Password is incorrect',
      }
    }
  }
  catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = {
  createUserService,
  loginService
}