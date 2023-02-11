const db = require('./../models');
const Players = db.players

exports.findAll = async (req, res) =>  {
	const players = await Players.findAll({include: 'team'});
	return res.status(200).json(players);
}

exports.create = async (req, res) => {
	const host = req.get('host');
	const firstName = req.body.firstName;
	const lastName = req.body.LastName;
	const teamsId = req.body.teams;
	const userId = req.auth.userId;
	const years = req.body.years;
	const imageUrl = `${req.protocol}://${host}/images/${req.file.filename}`;
	try{
		const player = await Players.create({
			firstName,
			lastName,
			teamsId,
			userId,
			imageUrl,
			years
		})
		return res.status(201).json(player)
	}catch (err) {
		return res.status(500).json({ error: new Error('Something went wrong') })
	}
}

exports.delete = async (req, res) => {
	try{
		await Players.destroy({where:{id: req.params.id}})
		return res.status(204).json({message: 'Player Deleted Successfully'})
	}catch(e){
		return res.status(500).json({error: new Error('Something went wrong')})
	}

}
