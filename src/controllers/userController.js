const { createUserService } = require("../services/userService");

const creatUser = async (req, res) => {
    const { name, email, password } = req.body;
    const result = await createUserService({name, email, password});
    return res.status(200).json(result);
}

module.exports = {
    creatUser,
}