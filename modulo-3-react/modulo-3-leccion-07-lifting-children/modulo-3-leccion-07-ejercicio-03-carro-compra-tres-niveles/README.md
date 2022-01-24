**1. Tres niveles en el carro de la compra**

Vamos a continuar con el carro de la compra porque queremos seguir limpiando nuestro código y dividiéndolo en componentes más pequeños.

Para ello:

- Crea el componente Form.
- Mueve todo el código que está dentro de la etiqueta <form className="form" onSubmit={handleForm}> a este nuevo componente.
- El componente Form está usando el componente InputGroupText. Ahora el componente Form debe recibir por props los datos que debe pasar el componente InputGroupText. El componente Form debe hacer de intermediario entre App y InputGroupText.

**2. Evitando el evento submit**

Atención pregunta: ¿pero quién necesita saber que la usuaria ha pulsado en Enviar y quiere que sus datos se envíen al servidor? Pues el componente App ya que es el más listo de todos y el que lo controla todo.
Por estos dos motivos debemos poner un poco de funcionalidad en el componente Form y otro poco de funcionalidad en App. Sigue los siguientes pasos:

En la función handleForm de App:

- Borra ev.preventDefault(); ya que no es su responsabilidad.
- Puesto que esta función ya no usa el parámetro ev bórralo también.

En el retorno de App:

- Pasa a Form una prop llamada handleFormSubmit. El valor de esta prop debe ser la función handleForm de App. Todo esto lo hacemos para poder hacer lifting, para que Form avise a App de que la usuaria quiere enviar el formulario.

En el componente Form:

- Crea una función manejadora llamada handleForm.
- Asocia esta función al onSubmit del formulario.
- En esta función haz el ev.preventDefault(); ya que sí es su responsabilidad.
- Ejecuta props.handleFormSubmit para hacer el lifting.
