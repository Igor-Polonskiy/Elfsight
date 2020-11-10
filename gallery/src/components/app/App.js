import { useEffect, useState } from "react";
import Users from '../users/users';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Gallery from '../gallery/gallery';



function App() {
  const [data, setData] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const [userid, setUserid] = useState(null);
  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setData(res))
      .then(() => setLoad(true))
  }, []);

  const handleclick = (id) => {
    setUserid(id);
    setGallery(<Gallery id={id} />)
  }
  useEffect(()=>{
   
  }, [userid])
  
  


  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <div className="App">
            {isLoad ?
              <Users users={data} getid={handleclick} /> :
              <div>notYet</div>}
          </div>
        </Route>
        <Route path='/user' >
          {gallery}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
