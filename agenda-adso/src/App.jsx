// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// export default function App() {
//    const fecha = new Date().toLocaleString(); 

//    return (
//        <main> 
//         <h1>Hola SENA </h1> 
//         <p>Fecha: {fecha}</p> 
//        </main>
//    );
// }
import { useState, useEffect } from "react";

export default function App() {
  const [fecha, setFecha] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFecha(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <main>
      <h1>¡Bienvenid@, soy FABIAN... Aprendiz de ADSO.</h1>
      <p>{fecha}</p>
      <p>Espero adquirir los conocimientos necesarios para crear aplicaciones web con ReactJS, aplicando buenas prácticas y entendiendo cómo manejar el estado, los componentes y la interacción del usuario.</p>
    </main>
  );
}
