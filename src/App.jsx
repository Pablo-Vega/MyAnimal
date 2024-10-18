import './App.css';
import { useState } from 'react';
import { CustomButton } from "milibreria";

function App() {
  const [count, setCount] = useState(0); 

  const datos = {
    animal: 'animal',
    imagenUrl: '/perro.jpg',
    imagenSize: 150,
  };

  function handleClick() {
    setCount(count + 1); 
  }

  return (
    <>
      <h1>Soy un {datos.animal} y vivo feliz</h1>
      <img
        className='avatar'
        src={datos.imagenUrl}
        alt='img'
        style={{ width: datos.imagenSize, height: datos.imagenSize }}
      />
      
      <CustomButton
        text={`Me picastes ${count} veces`}                        
        size="medium"                      
        onClick={handleClick}              
      />
    </>
  );
}

export default App;


