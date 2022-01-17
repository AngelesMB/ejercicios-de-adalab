## Mis series favoritas

A continuación te proponemos un ejercicio un poco más complejo. No hace falta que lo hagas ahora, hazlo otro día cuando estés descansada.

En esta lección tenemos un ejemplo de cómo trabajar con las series favoritas pero con un solo array. Queremos practicar a trabajar con diferentes arrays. Para ello:

1. Crea un ejercicio nuevo con tu React starter kit.
2. Copia el código del ejercicio de las series favoritas.
3. En este ejercicio ya hay un estado con las series que es:

```
const [series, setSeries] = useState([
  { id: '123', isFavorite: false, name: 'Juego de tronos' },
  { id: '456', isFavorite: false, name: 'Las chicas Gilmore' },
  { id: '678', isFavorite: false, name: 'Gambita de Dama' }
]);
```

Este array guarda las series y si son favoritas o no. Queremos cambiarlo para que la gestión de una serie favorita se haga en otro array. Para ello sustituye el código anterior por:

```
const [series, setSeries] = useState([
  { id: '123', name: 'Juego de tronos' },
  { id: '456', name: 'Las chicas Gilmore' },
  { id: '678', name: 'Gambita de Dama' }
]);
const [favorites, setFavorites] = useState([]);
```

Refactoriza el código del componente para que cuando la usuaria marque una serie como favorita no se modifique el array series. En vez de esto, debemos añadir y sacar del array favorites las series que la usuaria ha marcado como favorita.
