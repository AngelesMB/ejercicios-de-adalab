## Testeando atributos HTML

Queremos testear si el atributo target es correcto en los dos links. Empezamos creando un test para testear el componente cuando recibe la prop openInNewTab a true. Para ello:

1. Crea un proyecto con estos dos componentes.
2. Arranca los tests con npm test.
3. Crea el fichero ...tests.js y en él:
   - Importa las funciones necesarias con import { render, screen } from '@testing-library/react';.
   - Importa el componente.
   - Crea la función test con una buena descripción que indique que queremos comprobar que el valor de target es \_blank cuando el componente recibe la prop openInNewTab a true.
4. Para saber que lo has hecho todo bien el test debería estar en verde.

A continuación queremos probar que el componente MenuLink renderiza un link con target="" cuando no recibe la prop openInNewTab.
