require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { Sequelize } = require('sequelize');
const characterModel = require('./models/Character');
const favoriteModel = require("./models/Favorite");
const userModel = require("./models/User");

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{ logging: false, native: false }
);

characterModel(sequelize);
favoriteModel(sequelize);
userModel(sequelize);

const {User, Favorite} = sequelize.models;

User.belongsToMany(Favorite, {through: "UserFavorite"});
Favorite.belongsToMany(User, {through: "UserFavorite"});

module.exports = {
   ...sequelize.models,
   sequelize
};
