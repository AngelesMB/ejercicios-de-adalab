"use strict";
// Hemos organizado una carrera de escobas para que podáis exprimir a fondo vuestra flamante Nimbus 2000. Tenemos los tiempos en este array y nos gustaría conocer la media: ¿nos ayudas a calcularla usando reduce?

const times = [56, 9, 45, 28, 35];

const timesAverage = times.reduce((acc, time) => acc + time, 0) / times.length;

console.log(times);
console.log("La media de tiempos es:", timesAverage);
