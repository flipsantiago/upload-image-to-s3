const S3Storage = require('./s3Storage');

class UploadImagesService {
  async execute(file) {
    const s3 = new S3Storage();

    await s3.saveFile(file.filename);
  }
}

module.exports = UploadImagesService;