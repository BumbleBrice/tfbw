const db = require('./../models');
const Teams = db.teams

exports.findAll = async (req, res) =>  {
	try{
		const players = await Tmeas.findAll();
		return res.status(200).json(players);
	}catch(err){
		return res.status(500).json({ error: new Error('Something went wrong')})
	}

}

exports.create = async (req, res) => {

	const teams = await Teams.create({
		name : req.body.name
	})
	return res.status(201).json(teams)
}
