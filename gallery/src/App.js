import { Component, useEffect, useState } from "react";



function App() {
  const [data, setData] = useState([]);
  const [isLoad, setLoad] =useState(false)
 
  function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(res => setData(res))
    .then(()=> setLoad(true))
  
}
useEffect(()=>{
  getData()
},[])

 
 
  return (
    <div className="App">
    {isLoad ?
      <div>{data[0].name}</div>:
      <div>notYet</div>}
    </div>
  );
}

export default App;
