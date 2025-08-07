# react_playground
aprendiento react desde cero

No usen mas Create React App. Usen ViteJS

![image](https://imgur.com/fpO6gdL.png)

Dentro de main.tsx.

``StrictMode`` es un componente de React que, cuando se usa, activa una serie de verificaciones y advertencias adicionales para tus componentes y código. El comportamiento más notable de ``StrictMode`` es que ejecuta ciertas partes de tu código dos veces. Esto es intencional y es una de sus verificaciones más importantes.

![image](https://imgur.com/PpNMUjk.png)

# Deteccion de Cambios

Recuera estamos trabajando con SPA(single page application). Un componente en React es, en esencia, una función de JavaScript que devuelve elementos de React lease JSX(similares a html). Estos elementos de React describen lo que debe renderizarse en la interfaz de usuario. React se encarga de convertir este código JSX en código HTML real para mostrarlo en el navegador.
## Triggers

When developers use the term "trigger" in React, they are referring to an action that causes a component to ``re-render``. It’s a way of talking about the events that make React update the user interface

# Componentes

El componente base es `main.tsx`

Un componente tiene que ser la minima unidad de logica posible. Toma por ejemplo un boton.

Cuando se le hace click a un boton, hace algo, no sabemos que es exactamente pero hace algo. El texto del boton(label), podria ser generico. 


Se crea un folder llamado `components` y se agrega un como buena practica un nuevo folder con el nombre del componente
```js
// 'src/components/Button/Button.tsx'

import './Button.css'

interface Props{
    label: string,
    parentMethod: ()=>void,
}


const Button = ({label, parentMethod}: Props) => {
    return(
        <>
        <h3>hello boton</h3>
        <button className="custom-button" onClick={parentMethod}>
            {label}
        </button>
        </>
    );
}

export default Button; 
```

Y desde el componente principal, realizamos su respectiva importacion:

```js
import { useState } from 'react'
import './App.css'
import Button from './components'

function App() {
  const [count, setCount] = useState(0)

  const countMore = () =>{
    setCount(count+1);
  }

  console.log(count);

  return (
    <>
    <Button label={`count is ${count}`} parentMethod={countMore} />
    </>
  )
}

export default App
```



## Barrel File

Para facilitar las importanciones, crear un archivo `index.ts`

# UseState

Concepto de batching.


https://www.youtube.com/watch?v=GMnWXlJnbNo&t=17838s
2:15:00
