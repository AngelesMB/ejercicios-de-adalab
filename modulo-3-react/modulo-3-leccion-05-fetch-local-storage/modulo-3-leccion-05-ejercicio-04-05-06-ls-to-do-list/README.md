## To Do List

**1. Guarda tu ToDo list en el local storage**

Partiendo de la última versión del ejercicio del ToDo list, queremos que cuando la usuaria refresque la página, las tareas se muestren como antes de refrescar, es decir, que conserven los últimos cambios que hizo la usuaria.

**2. Añadir nuevas tareas al ToDo list**

Queremos que la usuaria pueda añadir nuevas tareas a su listado. Partiendo de la última versión del Todo list queremos:

- Añadir un input de texto en algún sitio de la página.
  - Cuando este input cambie debemos guardarlo en el estado de React, por ejemplo en newTaskInput.
- Añadir un botón con el texto "Crear nueva tarea".
  - Cuando la usuaria pulse en este botón debemos pushear al array de tareas un nuevo objeto.
  - El objeto debe tener la propiedad task, cuyo valo es lo que haya en ese momento en newTaskInput.
  - El objeto debe tener la propiedad completed con valor false.
  - Si todo está bien hecho React renderizará el componente y aparecerá en pantalla la nueva tarea.

También puedes hacer que cuando la usuaria pulse en el botón "Crear nueva tarea", el valor del input de texto se limpie. Para ello debes:

- Modificar el estado de newTaskInput.
- Controlar el input de texto.

**3. Borrar tareas del ToDo list**

Supongamos que la usuaria quiere borrar alguna de las tareas del ToDo list. Para ello debemos poner un botón de borrar (o un icono) a la derecha de cada tarea. Sigamos los siguientes pasos:

- Añadir un botón, icono o lo que queramos dentro de cada ```<li />```.
  - A este botón hay que añadirle una función manejadora.
  - A este botón hay que añadirle también un id con el índice de la tarea, para luego identificarla dentro de la función manejadora.
- Crear la función manejadora, en ella:
- Obtenemos el índice de la tarea clickada.
- Borramos la tarea del array.
- Guardamos el array en el estado de React.
