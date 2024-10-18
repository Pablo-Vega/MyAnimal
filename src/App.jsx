import './App.css'
import { CustomButton } from "milibreria";

function App() {
  const datos={
    animal: 'animal',
    imagenUrl: '/perro.jpg',
    imagenSize: 150,
  }
  return (
    <>
      <h1>Soy un {datos.animal} y vivo feliz</h1>
      <img className='avatar' src={datos.imagenUrl} alt='img' style={{width: datos.imagenSize, height: datos.imagenSize}}/>
        
    </>
  )
}

export default App
