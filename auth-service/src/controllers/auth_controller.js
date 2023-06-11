const authServices = require("../services/auth_services.js");

const authControllers = {
  createUser: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      let signUpStatus = await authServices.createUser(name, email, password);
      return res.status(200).json({ message: `${signUpStatus}` });
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  },
  authenticateUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const successfulLogin = await authServices.authentication(email, password);
      res.status(200).send(successfulLogin);
    } catch (e) {
      res.status(500).send({ error: `${e}` });
    }
  },
};

module.exports = authControllers;
