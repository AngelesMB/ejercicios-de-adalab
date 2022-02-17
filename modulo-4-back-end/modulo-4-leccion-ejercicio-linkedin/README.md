# Ejercicio de Linkedin

Ejercicio hecho en clase.

## Enunciado

1. Al arrancar la página hay que coger los datos desde https://randomuser.me/api/?results=50
1. Pintar las usuarias.
1. Filtrar por los campos del formulario.
1. Al clickar en una usuaria abrir el detalle de la ficha de la usuaria en una ruta nueva.
1. Guardar en el local storage los datos de las usuarias y los datos de los campos del formulario.

### Datos

- Las usuaria del API. Arranca con un array vacío >>> en el estado.
- Los campos del formulario >>> en el estado
- Identificador de la usuaria >>> en la ruta

### Acciones

- Al arrancar la página:
  - Comprobar si hay usuarias en el local storage
    - Sí hay >>>> Cojo y los guardo en el estado.
    - No hay >>> Llamar a la API y limpiar los datos.
  - Comprobar si hay datos de los filtros en el local storage
    - Sí hay >>> Guardar los filtros en el estado.
    - No hay >>> Nada.
  - Pintarlos.
  - Escuchar los filtros.
    - Guardar los filtros en el estado.
    - Pintar las usuarias filtradas.
  - Al cambiar de ruta:
    - Pinto el detalle de la usuaria.

### Pasos

1. Fetch / API
  1. Limpiar datos
1. Pintar
   1. Maquetar el HTML
   1. Programar el App
   1. Dividir en componentes
1. Filtrar:
  1. Escuchar los filtros
  1. Guardar el filtro en el estado
  1. Pintar filtrando las usuarias
1. Pintar el detalle de la usuaria
1. Local storage:
  1. Guardar
  1. Leer