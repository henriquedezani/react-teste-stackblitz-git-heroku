import React, { useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const App = () => {

    const [contador, setContador] = useState(1);

    const handlerContador = () => {
      setContador(contador + 1);
    }
  
    return (
      <div>
        <Hello contador={contador} />
        <button onClick={() => setContador(contador + 1)}>Adicionar1</button>
        <button onClick={handlerContador}>Adicionar2</button>
      </div>
    );
};

export default App;