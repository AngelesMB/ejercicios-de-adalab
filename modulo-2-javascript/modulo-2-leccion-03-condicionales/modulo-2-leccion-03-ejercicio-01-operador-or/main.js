"use strict";

// avatar por defecto
const DEFAULT_AVATAR = "https://picsum.photos/300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

const myAvatar = document.querySelector(".user__avatar");

// En el caso de que no hubiera foto elegida por la usuaria
userAvatar = "";

// Colocamos nuestra foto por defecto
myAvatar.src = userAvatar || DEFAULT_AVATAR;

console.log(myAvatar);
