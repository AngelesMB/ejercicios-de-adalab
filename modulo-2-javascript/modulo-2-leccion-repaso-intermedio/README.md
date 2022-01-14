# Repaso intermedio

## Sonríe… o no

Nos han encargado una pequeña aplicación web donde podremos mostrar si tenemos un buen día o si es mejor no pasarse hoy por nuestra mesa. Dispondremos de toda la ventana del navegador para pintar una carilla con un fondo. En la parte baja de la pantalla tendremos un select donde podremos elegir entre dos estados, sonriente o triste, y un botón de actualizar.

<img src="./images/design.png" height=400/>

**Funcionamiento:**

Por defecto vamos a intentar ir de buenas y se mostrará a la criatura sonriente sobre un fondo de un amarillo correcto #ffcc00. - Con el select podremos cambiar nuestro estado de ánimo - El boton Update hará varias cosas: - Recogerá el nuevo estado del select y lo pintará en lugar del actual - Generará un número aleatorio de 100 como máximo y si es un número par colocará el color de fondo del amarillo correcto (#ffcc00) y si es impar, usaremos el naranja fuego chileno (#ff9900).
