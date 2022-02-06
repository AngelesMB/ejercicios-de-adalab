## Endpoint para devolver un pedido

Vamos a hacer un servidor que, cuando se le haga una petición a la URL `http://localhost:3000/users/123/orders/456`, la gestione y devuelva algo. ¿Qué tiene que devolver? Da igual, porque aquí nos interesa la parte de la petición, no la de la respuesta.

- Crea un nuevo proyecto con un servidor de Express JS.
- En src/index.js crea un endpoint de tipo GET que sea capaz de atender la petición `http://localhost:3000/users/123/orders/456` y consolear en la terminal los parámetros de la URL.
