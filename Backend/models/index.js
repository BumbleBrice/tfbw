const dbConfig = require("./../config/db.config.js");
const {Sequelize}  = require("sequelize");
const config = require("../config/db.config");

const sequelize = new Sequelize('tfbw-db', 'user', 'pass', config)

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users.model.js')(sequelize, Sequelize);
db.players = require('./players.model.js')(sequelize, Sequelize);
db.teams = require('./teams.model.js')(sequelize, Sequelize);

// Works and Categories Relationships
db.teams.hasMany(db.players, {as: "players"})
db.players.belongsTo(db.teams, {
	foreignKey: 'teamsId',
	as: 'teams'
});

// Works and Users Relationships
db.users.hasMany(db.players, {as: "players"})
db.players.belongsTo(db.users, {
	foreignKey: 'userId',
	as: 'user'
});

module.exports = db;
