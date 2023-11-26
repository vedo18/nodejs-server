const User = require("../models/user.model");

const createUser = async (userData) => {
  try {
    const user = new User(userData);
    const newUser = await user.save();
    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createUser };
