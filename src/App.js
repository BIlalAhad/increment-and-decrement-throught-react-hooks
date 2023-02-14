
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const[Value,setValue]=useState(0);
  const[Width,setWidth]=useState(window.screen.width);
  useEffect(()=>{
    window.addEventListener('resize',screenwidth)
  })
  const screenwidth=()=>{
    setWidth(window.screen.width);
  }
  
  const increment=()=>{
    setValue(Value+1);
  }
  
  const decrement=()=>{
      if(Value>0){
        setValue(Value-1);
      }
  }
  useEffect(()=>{
    document.title=(`React ${Value}`);
  },[Value])



  
  return (
    <>
    
    <div className="grid place-items-center h-[100vh] bg-gray-800">
    <p className='text-xl text-white'>{(`your screen width = ${Width}`)}</p>
    <h1 className='text-2xl font-bold text-center shadow-gray-600 bg-white rounded-3xl uppercase italic mx-2 shadow-2xl p-5'>increment And Decrement Buttons Through React hooks</h1>
     <section className="gap-12 grid grid-flow-col justify-center  bg-gray-300 border-x-4 border-black  px-5 py-16 rounded-3xl">
     <div><button className="text-6xl font-bold  hover:text-7xl hover:brightness-75 text-center " onClick={increment} >+</button></div>
     <p className="bg-black rounded-full p-5 text-2xl text-white">{Value}</p>
     <div><button className="text-6xl font-bold  hover:text-7xl hover:brightness-75 text-center " onClick={decrement}>-</button></div>
     </section>
    </div>
    </>
  );
}

export default App;
