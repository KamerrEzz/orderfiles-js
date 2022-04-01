
const utils = require("util");
const fs = require("fs");
const path = require("path");

fs.readdir(path.join(__dirname, "../"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
  
    data.forEach((file) => {
      try {
        const ext = path.extname(file);
        if (ext === ".png") format("png", file);
        if (ext === ".jpg") format("jpg", file);
        if (ext === ".jpeg") format("jpeg", file);
        if (ext === ".gif") format("gif", file);
        if (ext === ".svg") format("svg", file);
        if (ext === ".mp4") format("mp4", file);
        if (ext === ".mp3") format("mp3", file);
        if (ext === ".pdf") format("pdf", file);
        else format("otros", file)
      } catch (error) {
        console.log(error);
      }
    });
});

const format = (format, file) => {
  console.log(`${file} - ${format}`);
  if (!fs.existsSync(path.join(__dirname, `../${format}`))) {
    // crear la carpeta ${format}
    fs.mkdirSync(path.join(__dirname, `../${format}`));
  }
  // mover el archivo a la carpeta ${format}
  fs.cpSync(
    path.join(__dirname, `../`, file),
    path.join(__dirname, `../${format}`, file)
  );
  fs.unlinkSync(path.join(__dirname, `../`, file));
};
