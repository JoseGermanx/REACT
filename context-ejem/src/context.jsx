import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const TemaContexto = createContext();

// Proveedor del contexto
export function TemaProveedor({ children }) {
  const [tema, setTema] = useState('claro');

  const alternarTema = () => {
    setTema((prevTema) => (prevTema === 'claro' ? 'oscuro' : 'claro'));
  };

  return (
    <TemaContexto.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContexto.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useTema() {
  return useContext(TemaContexto);
}
