##  Paranormal activity

En la lección en la que explicamos el segundo parámetro (el array) de useEffect decíamos: "Si no ponemos el array: la función se ejecutará siempre que se ejecute el componente App, es decir, siempre que se renderice".

Vamos a probarlo:

1. Crea un nuevo ejercicio desde tu React starter kit.
2. Añade un servicio para trabajar con el API:
    - En este servicio llama a la URL de las series de televisión https://api.tvmaze.com/search/shows?q=paranormal.
    - Retorna la respuesta del servidor en el then de este servicio.
3. En el componente App, en el useEffect:
    - Guarda la respuesta del servicio en el estado de React.
    - No pongas ningún array (ni vacío ni relleno) como segundo parámetro del useEffect.
    - No hace falta que pintes en pantalla la respuesta del API porque no nos interesa para este ejercicio.
4. Mira DevTools > Network y verás que hay una actividad para anormal.

¿Sabrías decir por qué pasa esto porque se llama repetidas veces al API? Sí, no... Queremos solucionarlo para que solo se llame al API una vez. Para ello.

1. Revisa la mini lección en la que explicamos para qué es el segundo parámetro del useEffect.
2. Comprueba en DevTools > Network que al refrescar la página solo se llama una vez al API.
3. Razona porque se estaba renderizando muchas veces el componente.