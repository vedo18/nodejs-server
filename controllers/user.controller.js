const userService = require("../services/user.service");

const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    const newUser = await userService.createUser({ username, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser };
