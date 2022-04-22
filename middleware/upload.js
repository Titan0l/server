const multer = require('multer')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/downloads')
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`)
  },
})

const fileFilter = (req, file, cb) => {

  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'video/mp4' ||
    file.mimetype === 'video/avi' ||
    file.mimetype === 'video/mkv'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const limits = {
  fileSize: 5000 * 5000 * 5000,
}

module.exports = multer({
  storage,
  fileFilter,
  limits,
})
