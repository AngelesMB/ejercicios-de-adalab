const fs = require("fs");

// Guarda el objeto tal cual en el fichero de destino output.txt:
// La terminal te muestra un error; ¿sabrías decir por qué?
// Convierte el objeto a texto y consoléalo.
// Guarda el objeto en modo texto en el fichero de destino y verás que sí funciona.
// Abre el fichero de destino y mira cómo se ha guardado la información.

const myObject = {
  user: "Mari Carmen",
  email: "mari@gmail.com",
  age: 28,
};

console.log(myObject);

const writeFile = (fileName, fileContent, callback) => {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log("Error:", err);
    } else {
      callback();
    }
  });
};
writeFile("./output.txt", JSON.stringify(myObject), () => {
  console.log("The file has been written!");
});
