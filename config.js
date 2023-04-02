const multer = require('multer');
const path = require('path');

const tmpFolder = path.resolve(__dirname, 'tmp');

const uploadConfig = {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const fileHash = Date.now();
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
}

module.exports.uploadConfig = uploadConfig;