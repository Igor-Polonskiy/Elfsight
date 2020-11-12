import { useEffect, useState } from "react";
import Users from '../users/users';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Gallery from '../gallery/gallery';
import OpenedAlbum from '../openedAlbum/openedAlbum'



function App() {
  const [data, setData] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const [userid, setUserid] = useState(null);
  const [gallery, setGallery] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [shownAlbum, setShownAlbum] = useState(null);
  const [filtrePhotos, setFiltredPhoto] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setData(res))
      .then(() => setLoad(true))
  }, []);

  function getPhotos(photos) {
    setPhotos(photos)
    setFiltredPhoto(photos.filter(photo => photo.albumId === shownAlbum))
  }
  function getShownAlbum(albumId) {
    setShownAlbum(albumId)
  }

  const handleclick = (id) => {
    setUserid(id);
    setGallery(<Gallery id={id} getPhotos={getPhotos} getShownAlbum={getShownAlbum}/>)
  }


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
        <Route path='/album' >
          <OpenedAlbum photos={filtrePhotos} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
