## Estilos de CSS con React

Sigue los siguientes pasos para dar estilos a tu página de React:

- Crea un ejercicio nuevo a partir de tu react-starter-kit.
- Arráncalo con npm start.
- Edita el fichero src/components/App.js.
- Crea un par de etiquetas con una clase.
- Guarda el fichero y mira el error que pone en DevTools > Console.
- Como habrás adivinado en React no podemos usar el atributo class, está prohibido, en su lugar vamos a usar el atributo className.
- Sustituye el atributo class por className para que tu código sea:
- Guarda y refresca la página en tu navegador y verás que el error ha desaparecido.

Si inspeccionas el HTML verás que React ha cambiado tu className por class ya que el navegador no entiende className y sí class.

Ya tienes creada la etiqueta en tu HTML. Ahora nos falta darle estilos.

- Edita el fichero src/styles/App.css. Si este fichero no existía: Créalo.
- Añade a la primera línea de src/components/App.js la línea import '../styles/App.css';.
- Añade al fichero src/styles/App.css el código: title {color: red;}
- Guarda y verás el título en rojo en tu página.
