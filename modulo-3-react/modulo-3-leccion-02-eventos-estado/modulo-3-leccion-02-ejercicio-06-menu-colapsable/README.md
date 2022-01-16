## El menú de hamburguesa

En este ejercicio vamos a programar el típico menú de hamburguesa que se despliega desde la izquierda de la página.

Para ello necesitaremos:
1. Crea un nuevo ejercicio desde tu React starter kit.
2. Empieza por crear el HTML dentro de tu componente App. Debemos añadir:
    - Un icono que al pulsarlo abra el menú.
    - Un contenedor del menú.
    - Un icono que al pulsarlo cierre el menú. Este icono lo meteremos dentro del contenedor del menú.
3. A continuación debemos crear los estilos que nos permitan que añadiendo y quitando una clase al contenedor del menú éste aparezca y desaparezca.
4. Por último tenemos que gestionar el estado del menú con React. Para ello:
    - Crearemos un estado para guardar si el menú está abierto o cerrado. ¿Qué tipo de dato crees que debe ser?
    - Crear una función manejadora que cada vez que se ejecute invierta el valor del estado.
    - Añadir esta única función manejadora a los dos iconos.