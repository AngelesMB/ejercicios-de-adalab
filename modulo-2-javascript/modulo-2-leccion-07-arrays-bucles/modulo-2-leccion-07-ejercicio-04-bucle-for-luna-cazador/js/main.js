"use strict";

// Cada 3 años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas.

for (let acc = 2017; acc < 2017 + 45; acc += 3) {
  console.log(`Podrás ver la siguiente luna del cazador en el año ${acc}`);
}
