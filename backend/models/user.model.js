module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    bankID: {
      type: Sequelize.STRING
    },
    bankPassword: {
      type: Sequelize.STRING
    }
  });

  return User;
};
