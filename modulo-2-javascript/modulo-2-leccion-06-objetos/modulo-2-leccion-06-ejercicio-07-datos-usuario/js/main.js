"use strict";

const user = {};

let job = "developer";

user.firstName = "Juan";
user.lastName = "Pérez";
user.age = 33;
user.job = job;

console.log(user);

user.firstName = "Jesús";
user.age++;

console.log(user);

job = "pintamonas";

console.log(job);
console.log(user);
