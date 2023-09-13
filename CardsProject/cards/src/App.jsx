import { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css'; //css
import { Course } from './Course'// Course.jsx de denebilir.
import angularimg from './imgs/c.png';
import bootsimg from './imgs/csharp.png';
import kompleimg from './imgs/linq.png';
import frontendimg from './imgs/react.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">

      <section className="hero is-danger myClass">
        <div className="hero-body">
          <p className="title">
            Kurslarım
          </p>
        </div>
      </section>
        <div className='container'>
          <div className='columns'>

            <div className='column'>
              <Course
                image={angularimg}
                title="Angular" 
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, cumque."
              /> 
            </div>  
            <div className='column'>
              <Course 
                image={bootsimg}
                title="Bootstrap5" 
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, cumque."
               /> 
            </div> 
            <div className='column'>
              <Course 
                image={kompleimg}
                title="Komple Web" 
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, cumque."
              /> 
            </div> 
            <div className='column'>
             <Course 
                image={frontendimg}
                title="Frontend" 
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, cumque."
             /> 
            </div> 

          </div>
        </div>
        
        
        
       
       
      

      </div>
      
    </>
  )
}

export default App
