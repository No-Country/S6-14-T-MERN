const multer = require("multer");

const boom = require("@hapi/boom");

const storage = multer.memoryStorage();

const whitelist = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (whitelist.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(
        boom.badRequest("Only .png, .jpg, .webp and .jpeg format allowed!")
      );
    }
  },
});

module.exports = { upload };
