const users = require("../dummydb/users.js");
const bcrypt = require("bcrypt");

const authServices = {
  createUser: async (name, email, password) => {
    let existingUser;
    if (users.length) {
      existingUser = await users.find(
        (alreadyUser) => alreadyUser.email === email
      );
    }
    if (existingUser) {
      return `${existingUser.email} account already exist`;
    } else {
      if (name && email && password) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = {
          name,
          email,
          password: hashedPassword,
        };
        users.push(newUser);
        return `Account ${email} created`;
      }
    }
  },
  authentication: async (email, password) => {
    const user = users.find((userDb) => userDb.email === email);
    if (user) {
      const matchPassword = await bcrypt.compare(password, user.token);
      if (matchPassword) {
        return {
          name: user.name,
          email: user.email,
          token: user.token,
        };
      } else {
        return "Wrong password";
      }
    }
  },
};

module.exports = authServices;
