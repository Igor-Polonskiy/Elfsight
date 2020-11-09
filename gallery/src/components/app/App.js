import { useEffect, useState } from "react";
import Users from '../users/users';



function App() {
  const [data, setData] = useState([]);
  const [isLoad, setLoad] = useState(false)

  function getData() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setData(res))
      .then(() => setLoad(true))
      
  }
  
  useEffect(() => {
    getData()
    
  }, [])

 if(isLoad) console.log(data[1].name);
    




  return (
    <div className="App">
      {isLoad ?
        <Users users = {data}/> :
        <div>notYet</div>}
    </div>
  );
}

export default App;
