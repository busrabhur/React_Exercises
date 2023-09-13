import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [val, setVal] = useState(0);
  const handleClick=()=>{
    setVal(val+1); //value değerini günceller.buttona her tıklandığında 1 artacak.
  }

  return (
    
   <>
      <div className='App'>
        <button onClick={handleClick}>Kurs ekle</button>  {/** react onclick eventi,kullanım için 1.yol*/}
        <div>kurs sayısı:{val}</div>
        
        <button onClick={()=> {
          console.log('hello');
        }}
        >2.yol</button>
      </div>
    </>
  )
}

export default App
