import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const myName="Büşra Buhur";

  return (
    <>
      
      <p>selam benim ismim : {myName}</p>
      <p style={{
        backgroundColor:'yellow',
        fontSize:'30px',
      }}>buraya jsx formatı yazılır.Returnden önce js ile değişken tanımlayıp jsx formatı içinde süslü parantezle kullanabilirsin</p>
      <h1 className='baslik'>başlık1</h1>

    </>
  )
}

export default App
