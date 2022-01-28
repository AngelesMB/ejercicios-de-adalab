**1. Replicando GitHub**

Queremos replicar el menú de la página de GitHub:

1. Para ello crea una página que tenga un menú superior con los enlaces:

- Overview
- Repositories
- Packages
- People
- Teams
- Projects
- Settings

2. Asigna una estática a cada uno de los enlaces.
3. Muestra un contenido diferentes (con un lorem ipsum es suficiente) en cada uno de los enlaces.
4. Y solo si te atreves ;) crea una página para cuando la usuaria entre en una ruta que no exista.

**2. No apto para manazas**

Hasta ahora hemos trabajado con las rutas siempre en el fichero App. Esto es así porque normalmente cuando navegamos de una ruta a otra de una página lo que cambia es el contenido principal.
Ahora lo que queremos es gestionar contenido a través del router pero no en App si no en otro componente, por ejemplo en Header.
El objetivo es que cuando los usuarios entren en la página Settings aparezca un mensaje (dentro de la cabecera) que ponga Zona no apta para manazas.

Para ello:

1. Partiendo del ejercicio anterior crea el componente Header.
   - Mueve el menú dentro de este nuevo componente.
   - Importa y usa Header en App para que la página se muestre igual que antes.
2. Añade un `<div />` al Header con el mensaje No apto para manazas.
3. Con React Router DOM haz que este mensaje solo aparezca cuando estemos en las Settings.

**3. No apto para manzanas (one more time)**

En este último ejercicio queremos que el mensaje No apto para manazas apezca cuando la usuaria entra en Settings y en Projects.
Con los conocimientos que ya tienes sobre React Router DOM ya sabes que puedes utilizar dos `<Route>` para conseguirlo.
Pero también queremos que te acostumbres a leer documentación técnica. Por ello:

1. Entra en la documentación de React Router DOM.
2. Busca información sobre el componente `<Route>`.
3. Dentro de este apartado busca la opción path y leela detenidamente.
4. Ahí encontrarás la pista para hacer que el mensaje No apto para manazas aparezca en las páginas Settings y Projects utilizando un solo `<Route>`.
