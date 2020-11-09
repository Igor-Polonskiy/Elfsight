import { Fragment, useEffect, useState } from "react";
import Users from '../users/users';
import User from '../user/user';


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
  
 

    




  return (
    <Fragment>
    <div className="App">
      {isLoad ?
        <Users users = {data}/> :
        <div>notYet</div>}

    </div>

    </Fragment>
  );
}

export default App;
