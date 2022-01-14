"use strict";

const pearBasket = {};

// propiedades
pearBasket.maxValue = 8;
pearBasket.minValue = 4;
pearBasket.currentValue = 5;
pearBasket.initialValue = 7;

// métodos para añadir o quitar 1 sola pera
pearBasket.add = function () {
  if (this.currentValue < this.maxValue) {
    this.currentValue++;
  }
  return this.currentValue;
};
pearBasket.remove = function () {
  if (this.currentValue > this.minValue) {
    this.currentValue--;
  }
  return this.currentValue;
};
pearBasket.resetValue = function () {
  return (this.currentValue = this.initialValue);
};

console.log("Valor inicial:", pearBasket.initialValue);
console.log("Valor actual:", pearBasket.currentValue);
pearBasket.add();
console.log("Valor actual después de la suma:", pearBasket.currentValue);
pearBasket.remove();
console.log("Valor actual después de la resta:", pearBasket.currentValue);
console.log("Valor inicial de la cesta:", pearBasket.resetValue());
console.log("Valor actual reseteado:", pearBasket.currentValue);

console.log("Objeto cesta:", pearBasket);
