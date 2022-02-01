const fs = require("fs");

// Lee el contenido del fichero input-file.json y guárdalo en una constante.
// El contenido de dicha constante será un texto. Conviértelo a objeto
// Modifica alguna propiedad del objeto, como por ejemplo el nombre o la edad.
// Guarda el objeto en modo texto en un fichero de destino llamado output-file.json.

const readFile = (fileName, callback) => {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.log("Error:", err);
    } else {
      callback(data);
    }
  });
};

const writeFile = (fileName, fileContent, callback) => {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log("Error:", err);
    } else {
      callback();
    }
  });
};

readFile("./input-file.json", (fileContent) => {
  const myFileContent = JSON.parse(fileContent);
  console.log(myFileContent);
  myFileContent.age = 33;
  console.log(myFileContent);
  writeFile("./output-file.json", JSON.stringify(myFileContent), () => {
    console.log("The file has been written!");
  });
});
