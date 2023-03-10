
module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define(
		"users",
		{
		alias: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
			},
		password: {
			type: DataTypes.STRING,
			allowNull: false
			}
		},
		{timestamps:false}
	)
	return Users
}
