const multer = require('multer')

const MIME_TYPE = {
	'image/jpg': 'jpg',
	'image/jpeg': 'jpg',
	'image/png': 'png',
	'image/webp': 'webp',
}

const storage = multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, './images')
	},
	filename:  (req, file, callback) => {
		const filename = file.originalname.split('.').slice(0, -1).join('.');
		const filenameArray = filename.split('.')
		filenameArray.pop()
		const filenameWithoutExtention = filenameArray.join('.')
			const extension = MIME_TYPE[file.mimetype]
		callback(null, filenameWithoutExtention + Date.now() + '.' + extension)
	}
})
const fileFilter = function(req, file, callback) {
    if(Object.keys(MIME_TYPES).includes(file.mimetype)) {
        callback(null, true)
    }else{
        callback(null, false)
    }
}
module.exports = multer({storage}).single('image')
