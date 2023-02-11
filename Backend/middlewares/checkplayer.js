module.exports = (req, res, next) => {
	try{
		const host = req.get('host');
		const firtName = req.body.firtName.trim() ?? undefined;
		const lastName = req.body.lastName.trim() ?? undefined;
		const teamsId = req.body.teams.trim() ?? undefined;
		const userId = req.auth.userId ?? undefined;
		const imageUrl = `${req.protocol}://${host}/images/${req.file.filename}` ?? undefined;
	console.log(firtName,lastName,teamsId,userId,imageUrl)
		if(firstName !== undefined &&
			firstName.length > 0 &&
			lastName !== undefined &&
			lastName.length > 0 &&
			teamsId !== undefined &&
			teamsId > 0 &&
			years !== undefined &&
			years > 0 &&
			userId !== undefined &&
			userId > 0 &&
			imageUrl !== undefined){
			req.player = {firstName, lastName, teamsId, userId, imageUrl}
			next()
		}else{
			return res.status(400).json({error: new Error("Bad Request")})
		}
	}catch(e){
		return res.status(500).json({error: new Error("Something wrong occured")})
	}

}
