**1. Crear el componente Preview**
Lo primero que te pedimos es que te copies este código en un proyecto de React y lo arranques para ver cómo funciona.
A continuación empezaremos por la pieza más sencilla, la única que solo tiene props y no tiene lifting: el preview.

1. Crea un componente Preview.
2. Mueve la etiqueta `<div className="preview">` desde App a Preview.
3. Desde App debes pasar las props que Preview necesita.
   La única prop que a lo mejor te cuesta un poco saber cómo pasarla es la del método de pago. Para ello:
4. Pasa al componente Preview la prop paymentType.
5. Mueve la función const renderPaymentTypeText = () => { ... } desde el componente App a Preview.
6. Cambia un poco la función renderPaymentTypeText para que use la prop.paymentType en vez de la constante paymentType.

**2. Crear el componente InputGroupText (guarrete)**
Ahora lo vamos a complicar un poquito. Vamos a crear el componente InputGroupText que tiene que recibir props y además hacer lifting.
En este ejercicio queremos:

1. Crear el componente InputGroupText.
2. Pasarle los datos que necesita por props.
3. Que haga un lifting guarrete. En el siguiente ejercicio haremos que el lifting sea limpio y elegante.
   Para ello:
4. Crea el componente InputGroupText.
5. En el código de App hay dos etiquetas `<div className="input-group-text">`. Mueve la primera, la que recubre el input y el label del nombre al componente InputGroupText.
6. El código que acabas de mover está "acoplado" al nombre de la usuaria porque contiene cosas como "Escribe un nombre", es decir, no es un componente reutilizable. Vamos a hacerlo reutilizable. Para ello pásale desde App a InputGroupText todas las props que necesita para convertirse en un componente genérico. Estas props son:

- labelText: el texto que va dentro del label.
- inputName: el atributo name del input.
- inputId: el atributo id del input y el for del label.
- inputPlaceholder: el atributo placeholder del input.
- inputValue: el valor del input.

4. El componente InputGroupText también necesita la función para hacer lifting. Pásale desde App a InputGroupText la prop:
   handleChange: cuyo valor debe ser la función handleName.
5. Ahora que el InputGroupText ya está recibiendo todas las props que necesita, usa estas props dentro del código del retorno del componente.

**3. Crear el componente InputGroupText (inmaculado)**

En el ejercicio anterior hemos creado el componente InputGroupText, le hemos pasado props para personalizarlo y le hemos pasado la función handleName a través de la prop handleChange.
La web está funcionando pero no de la forma más limpia posible. Vuevle a leer el apartado de esta lección llamado Los datos tienen que viajar limpios para dejar este componente fetén.
Lo que está pasando ahora mismo es que cuando la usuaria cambia su nombre, el componente InputGroupText hace lifting hacia arriba subiendo todo el evento. El componente App recibe en la función handleName todo el evento con demasiada información y para encontrar la info que quiere tiene que hacer ev.target.value.

**4. Reutilizar el componente InputGroupText**

Ahora que ya tienes el componente InputGroupText con un código exquisito vamos a reutilizarlo.

1. Sustituye el código anterior por `<InputGroupText />`.
2. Añade al código `<InputGroupText />` todas las props que necesita.
3. Añade también la función setEmail para poder hacer lifting.
4. Refactoriza la función setEmail porque ahora esta recibe el valor del input y no el evento.

**5. Crear el componente InputGroupSelect**

En este nuevo ejercicio lo que queremos es crear el componente InputGroupSelect y mover el selector de región desde App a este nuevo componente.
También queremos que InputGroupSelect sea un componente limpito, así que solo debe enviar hacia arriba por lifting el valor del select, por lo que también hay que cambiar mínimamente la función handleRegion de App.

**6. Crear el componente InputGroupRadio**

Crea este componente y mueve el código de la tarjeta de crédito. Queremos que este componente sea reutilizable para poder utilizarlo también con las opciones de Efectivo y Contra reembolso. Y cómo no, también queremos que sea limpio, por ello sube por lifting el valor del input, no todo el evento.

**7. Crear el componente InputGroupCheck**

Seguimos para bingo y tenemos que hacer más de lo mismo, esta vez con el checkbox de los términos legales. Ya sabes, crea un componente nuevo, mueve el código, pásale props, pásale la función de lifting, refactoriza un poco la función handleLegalTerms de App...

**8. Crear más componentes**

Aún quedarían un par de componentes más por crear como son el botón de Enviar y el de Limpiar el formulario. Crea los correspondientes componentes para estos botones.

Aunque uno sea un input de tipo submit y el otro un button, si quieres puedes usar un único componente para ambos:

- Crea el componente Button.
- Mueve el código del botón "Limpiar el formulario" dentro de este componente.
- Pásale las props y la función para hacer lifting.
- Reutilizalo para el botón de Enviar.
- No pasa nada porque a partir de ahora el botón de Enviar no sea un input de tipo submit y sea un button siempre y cuando la página siga funcionando igual.
