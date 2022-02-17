## Relaciones N a N

Ejemplo de los materiales. Probar con Postman.
Las relaciones N a N relacionan varios registros de una tabla de base de datos con varios registros de otra tabla.
Una relación N a N se produce cuando un registro de la tabla A puede estar relacionado con varios registros de la tabla B, y a su vez un registro de la tabla B puede estar relacionado con varios registros de la tabla A.
Si pensamos en una tienda virtual la relación entre productos y pedidos es la siguiente:
- ¿Un producto puede estar en varios pedidos? Sí, muchas personas pueden comprar el mismo producto. Esto es una relación 1 a N.
- ¿Un pedido puede tener varios productos? Sí, una persona en un solo pedido puede comprar varios productos. Esto es otra relación 1 a N.
Como los pedidos y los productos están relacionados por dos relaciones 1 a N, significa que su relación es N a N.
