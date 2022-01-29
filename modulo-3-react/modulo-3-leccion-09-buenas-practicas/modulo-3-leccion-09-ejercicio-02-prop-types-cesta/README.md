**1. Llena tu cesta de la compra con PropTypes**

En la lección de Lifting hicimos unos ejercicios sobre un carro de la compra que tenía todo el código en App. El objetivo era dividir todo ese código en pequeños componentes. Pues ahora queremos añadir propTypes a esos componentes.

Rescata ese ejercicio y sigue los pasos:

1. Edita el componente Preview:

    - Revisa qué props recibe.
    - Decide cuáles de estas props son obligatorios y cuáles no.
    - Añade las propTypes correspondientes para React compruebe en todo momento si las props que está recibiendo este componente son correctas.

2. Para comprobar que lo has hecho bien, edita el código de App en el que usa el componente Preview.

    - Elimina una a una las props que le pasas a Preview y observa los avisos que te aparecen en consola.
    - Cambia el tipo de dato que estás pasando a Preview por props y observa los avisos que te aparecen en consola.

Esta es la manera de comprobar que las propTypes están bien, forzando errores a la hora de pasar las props.

Cuando termines de probar, deshaz estos últimos cambios en App para que tu carro de la compra siga funcionando.

**2. Llena tu cesta de la compra con PropTypes y con lifting**

En este ejercicio queremos añadir propTypes a otro componente que haga lifting.
Elige cualquier otro componente del carro de la compra que trabaje con lifting, como por ejemplo InputGroupText . Sigue los pasos del ejercicio anterior para añadirle propTypes a todas las props que recibe.