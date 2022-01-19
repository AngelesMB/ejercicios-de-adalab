## Crear componentes sencillos

En los primeros días de este módulo migramos a React la web de la evaluación intermedia del módulo 1. Pues vamos a dividirla en componentes más pequeños.

Cuando migraste esta página pusiste todo el código HTML dentro del componente App.js. Pues ahora:

1. Crea un componente Header.js y mueve ahí el HTML de la cabecera. Haz todos los cambios necesarios en tu código para que la página se siga viendo bien.
2. Haz lo mismo moviendo el `<main />` al componente Main.js.
3. Si al finalizar tienes los componentes Appp, Header y Main y la página se sigue viendo igual es que lo has hecho todo bien.
4. Si quieres puedes seguir dividiendo tu código en componentes más pequeños. Puedes hacer que el componente Header importe a su vez los componentes Logo y Menu.

## Personalizando componentes

Continuando con el ejercicio de la evaluación intermedia del módulo 1, vamos a crear un componente personalizable para los links del menú.

1. Debes crear un componente Link.js que contenga un `<li>` como los del código anterior.
   - Este componente debe recibir por props todo aquello que es personalizable.
2. A continuación debes importar y usar este componente en el componente Header.
3. Si consigues que tu página se siga viendo correctamente habrás componentizado bien tu proyecto.

## Abriendo enlaces en otra pestaña

Continuando el ejercicio anterior, queremos hacer que el link del blog se abra en una pestaña nueva, pero el link de contacto se abra en la pestaña actual. Para ello:

1. En el componente Header pasa una nueva prop a los componentes Link.
   - Llama a esta nueva prop openInNewTab.
   - Solo hay dos opciones, el link se puede abrir en una nueva pestaña o en la misma, por ello esta prop debe ser de tipo boolean.
2. Modifica el código del componente Link para que si recibe la prop openInNewTab a true el link se renderice con el atributo target="\_blank".
3. Sabras que has hecho bien el ejercicio si un link se abre en una pestaña nueva y el otro no.
