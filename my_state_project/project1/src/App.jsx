
import './App.css';
import Course from './Course';
import { useState } from 'react';

function getRandomCourse(){
  const CourseArr=['Angular','Bootstrap','Csharp','KompleWeb'];
  return CourseArr[Math.floor(Math.random()*CourseArr.length)];
}

function App() {

  const [courses, setCourses] = useState([]);

  const handleClick= () =>{
      setCourses([...courses,getRandomCourse()]);
  }
  const courseList=courses.map((course,index)=>{
    return <Course key={index}  courseName={course}/>
  }

  )
   return (
    <>
      <div className='App'>
        <button className='appButton' onClick={handleClick}>Resim Ekle</button>
        <div className='courseList'>{courseList}</div>
      </div>
      
      <Course/>
    </>
  )
}

export default App
