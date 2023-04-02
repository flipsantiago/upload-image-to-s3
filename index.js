const serverless = require("serverless-http");
const express = require("express");
const AWS = require('aws-sdk');
const multer = require('multer');
const { uploadConfig } = require('./config');

const app = express();

const upload = multer(uploadConfig);

app.post("/upload", upload.single('image'), async (req, res, next) => {

  const s3 = new AWS.S3({
    accessKeyId: 'AKIAV2RZF3PIF3DLG2ES',
    secretAccessKey: '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'
  });

  const fileName = `public/user-profiles/${Date.now()}.jpg`;

  const buffer = Buffer.from(data);
  fs.writeFileSync('file.jpg', buffer);

  const params = {
    Bucket: 'opsimagesprofile',
    Key: fileName,
    Body: blob,
    ContentType: req.file.mimetype,
    ACL: 'public-read'
  }

  await s3.putObject(params).promise();

  res.send('Alo');

});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
