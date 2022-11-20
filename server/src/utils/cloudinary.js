const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dbk8cwuop",
  api_key: "738692185947985",
  api_secret: "ySRX-EdUYGvfGXfT_uSlRpxPI7k",
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: " instaClone",
  },
});

module.exports = { cloudinary, storage };
