## Respondiendo muchas cosas

Vamos a crear un servidor para diferentes tipos de respuesta:

- Cuando la usuaria haga un GET a /response-a debemos responder { result: 'ok' }.
- Cuando la usuaria haga un GET a /response-b debemos responder con una página HTML en la que el h1 ponga Esta es una página de prueba.
- Cuando la usuaria haga un GET a /response-c debemos calcular un número aleatorio entre 0 y 10 y redireccionar a:
  - Youtube si el número es par.
  - Instagram si el número es impar.
- Cuando la usuaria haga un GET a /response-d
  - con un query param user=1 o user=2 debe responder con un JSON con status 200 y respuesta { result: 'ok' }.
  - si se llama a este endpoint sin query param o con un query param diferente de user=1 o user=2 debe responder un JSON { result: 'error: invalid query param' } con el status 404.
