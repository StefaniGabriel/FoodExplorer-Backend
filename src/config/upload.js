const path = require("path");
const multer = require("multer");
const crypto = require("crypto");


const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads");

const storage = multer.diskStorage({
  destination: TMP_FOLDER,
  filename(request, file, callback) {
    const fileHash = crypto.randomBytes(10).toString("hex");
    const filename = `${fileHash}-${file.originalname}`;

    callback(null, filename);
  },
});

const upload = multer({
  storage: storage,
});

module.exports = {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  upload,
};

