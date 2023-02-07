const multer = require("multer");

const boom = require("@hapi/boom");

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file ||
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(boom.badRequest("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

module.exports = { upload };
