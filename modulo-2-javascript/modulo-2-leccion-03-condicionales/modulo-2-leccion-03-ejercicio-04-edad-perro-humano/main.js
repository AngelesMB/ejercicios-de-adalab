"use strict";

let dogAge = 4;
let humanAge;

if (dogAge === 1) {
  humanAge = 15;
  console.log(`Tu perro tiene ${humanAge} años humanos`);
} else if (dogAge === 2) {
  humanAge = 24;
  console.log(`Tu perro tiene ${humanAge} años humanos`);
} else if (dogAge > 2) {
  humanAge = 24 + (dogAge - 2) * 5;
  console.log(`Tu perro tiene ${humanAge} años humanos`);
}
