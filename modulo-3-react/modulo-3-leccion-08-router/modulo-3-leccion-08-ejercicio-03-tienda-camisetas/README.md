## La tienda de camisetas

Queremos hacer una tienda de camisetas to guapas de programación.

Para ello vamos a pintar un catálogo de camisetas y con un botón Ver detalle del producto. Cuando la usuaria pulse en este botón la enviaremos a una página de detalle del producto con un poco más de info sobre la camiseta.

El problema es que toda la información sobre las camisetas la vamos a recibir de un API, es decir, no sabemos cuántas camisetas hay que pintar, ni sus precios ni nada. Por ello estamos obligadas a trabajar con rutas dinámicas.

Sigue los siguientes pasos para conseguirlo:

1. Crea un ejercicio vacío a partir de tu React starter kit.
2. Pide los datos de las camisetas al API en un servicio:
   - Usa un fetch para pedir los datos a este API.
   - Cuando el servidor responda, limpia los datos antes de retornarlos. No te interesa retornar un objeto con la propiedad items, te interesa retornar directamente el array de las camisetas.
3. Guarda las camisetas en el estado:
   - En App, en la respuesta de la llamada al API guarda los datos en un estado de React llamado products.
4. Pinta los productos:
   - Crea un componente llamado `<Catalog />` y pásale por props el array products.
   - Dentro de `<Catalog />`, recorre el array products con un map pintando la imagen, nombre y precio de cada camiseta.
   - Añade un `<Link>` con el texto Ver detalle del producto y con la URL /product-detail/ más el id del producto.
5. Con `<Switch>` y `<Route>` gestiona las rutas dinámicas para que:
   - En la home aparezca el catálogo de productos.
   - En la ruta /product-detail/... aparezca el detalle de un producto, para ello crea el componente `<ProductDetail />`.
6. Para mostrar el detalle del producto:
   - Obtén el id del producto desde la ruta usando el hook useRouteMatch/useParams.
   - Busca en el array products el producto a través de su id.
   - Pasa por props el objeto del producto a `<ProductDetail />`.
   - En `<ProductDetail />` usa los datos que estás recibiendo por props para pintar el detalle del producto.
   - Añade un `<Link>` con el texto Volver al listado de productos debajo del detalle del producto.
