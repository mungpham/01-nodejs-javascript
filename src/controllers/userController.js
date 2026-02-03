const { createUserService, loginService } = require("../services/userService");

const creatUser = async (req, res) => {
  const { name, email, password } = req.body;
  const result = await createUserService({ name, email, password });
  return res.status(200).json(result);
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const data = await loginService({ email, password });
  if (!data) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  return res.status(200).json(data);
}

module.exports = {
  creatUser,
  handleLogin,
};
