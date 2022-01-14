// elemento de HTML
const teacherIsra = document.querySelector(".teacher--isra");
const teacherTuerto = document.querySelector(".teacher--tuerto");
const teacherNasi = document.querySelector(".teacher--nasi");

function changeColor(event) {
  const selectedTeacher = event.currentTarget;
  // Quitamos o ponemos la clase
  selectedTeacher.classList.toggle("teacher--selected");
}

function addRemoveDiv(event) {
  const selectedTeacher = event.currentTarget;
  // Buscamos dentro del elem seleccionado otro elem por clase favorite
  const addRemoveDiv = selectedTeacher.querySelector(".favorite");
  if (selectedTeacher.classList.contains("teacher--selected")) {
    addRemoveDiv.innerHTML = "Quitar";
  } else {
    addRemoveDiv.innerHTML = "Añadir";
  }
}

// handler
function handleClick(event) {
  changeColor(event);
  addRemoveDiv(event);
}

// listener sobre el elemento, con tipo de evento y handler
teacherIsra.addEventListener("click", handleClick);
teacherTuerto.addEventListener("click", handleClick);
teacherNasi.addEventListener("click", handleClick);
