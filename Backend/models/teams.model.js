
module.exports = (sequelize, DataTypes) => {
	const Teams = sequelize.define(
		"teams",
		{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			},
		},
		{timestamps: false}
	)
	return Teams
}
