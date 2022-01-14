/*Vamos a preparar en una constante con el nombre de una compañera, y utilizándola tenemos que escribir un saludo en la página. Si nuestra compañera se llamará Lola quedaría así: Hola Lola, encantada de conocerte*/

let herName = "Lola";
let greeting = "Hola " + herName + ", encantada de conocerte.";

console.log(greeting);

herName = "Silvia";
greeting = "Hola " + herName + ", encantada de conocerte.";

console.log(greeting);

// Reescribir usando template strings

let hisName = "Luis";
let hisGreeting = `Hola ${hisName}, encantada de conocerte.`;

console.log(hisGreeting);
