import React from 'react';
import { TemaProveedor, useTema } from './context';

function App() {
  return (
    <TemaProveedor>
      <div>
        <Encabezado />
        <Contenido />
      </div>
    </TemaProveedor>
  );
}

function Encabezado() {
  const { tema, alternarTema } = useTema();

  return (
    <header
      style={{
        padding: '10px',
        backgroundColor: tema === 'claro' ? '#f9f9f9' : '#333',
        color: tema === 'claro' ? '#000' : '#fff',
        textAlign: 'center',
      }}
    >
      <h1>App con Tema {tema}</h1>
      <button onClick={alternarTema}>
        Cambiar a {tema === 'claro' ? 'Oscuro' : 'Claro'}
      </button>
    </header>
  );
}

function Contenido() {
  const { tema } = useTema();

  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: tema === 'claro' ? '#fff' : '#444',
        color: tema === 'claro' ? '#000' : '#ddd',
        minHeight: '200px',
        textAlign: 'center',
      }}
    >
      <p>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod a quos
      </p>
    </main>
  );
}

export default App;
