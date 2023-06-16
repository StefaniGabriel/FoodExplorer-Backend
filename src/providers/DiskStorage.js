const fs = require("fs");
const path = require("path");
const uploadConfig = require("../config/upload");

class DiskStorage {
  async saveFile(file) {
    const tempFilePath = path.resolve(uploadConfig.TMP_FOLDER, file);
    const destinationFilePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

    await fs.promises.rename(tempFilePath, destinationFilePath);

    return file;
  }

  async deleteFile(file) {
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

module.exports = DiskStorage;
