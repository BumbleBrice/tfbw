
module.exports = (sequelize, DataTypes) => {
	const Players = sequelize.define(
		"players",
		{
		firstName: {
			type: DataTypes.STRING,
			allowNull: false
			},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false
			},
		imageUrl: {
			type: DataTypes.STRING,
			allowNull: false
			},
		years: {
			type: DataTypes.STRING,
			allowNull: false
			}
		},
		{timestamps:false}
	)
	return Players
}
