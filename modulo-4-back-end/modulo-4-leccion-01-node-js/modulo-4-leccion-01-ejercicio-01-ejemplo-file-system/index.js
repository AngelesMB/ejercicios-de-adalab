const fs = require("fs");

// ------------- Read file --------------------

const handleFile = (err, fileContent) => {
  if (err !== null) {
    console.log("Error:", err);
  } else {
    console.log("El contenido del fichero es:", fileContent);
    console.log("La longitud del contenido es:", fileContent.length);
  }
};
fs.readFile("./input.txt", "utf8", handleFile);
// Ejemplo de error, archivo no existe
// fs.readFile("./input.foo", "utf8", handleFile);

// ------------- Read JSON file ----------------

const handleFileJSON = (err, fileContent) => {
  if (err) {
    console.log("Error:", err);
  } else {
    // console.log('Contenido del fichero en formato texto:', fileContent);
    // Parseamos y accedemos a sus propiedades
    const jsonData = JSON.parse(fileContent);
    console.log("Contenido del fichero en formato objeto:", jsonData);
    console.log(`Título: ${jsonData.title}`);
    console.log(`Contenido: ${jsonData.content}`);
  }
};

fs.readFile("./input.json", "utf8", handleFileJSON);

// ------------- Write file --------------------

const fileContent =
  "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor...";

const handleWriteFile = (err) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("The file has been saved!");
  }
};

fs.writeFile("./output.txt", fileContent, handleWriteFile);

// ------------- Read & Write file ---------------

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

readFile("./input.txt", (fileContent) => {
  const currentDate = new Date().toString();
  const newFileContent = `${currentDate}: ${fileContent}`;
  writeFile("./outputWithDate.txt", newFileContent, () => {
    console.log("The file has been copied!");
  });
});
