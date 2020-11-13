import { useEffect, useState } from "react";
import Users from '../users/users';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Gallery from '../gallery/gallery';
import OpenedAlbum from '../openedAlbum/openedAlbum'
import Preloader from '../preloader/preloader'



function App() {
  const [data, setData] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const [gallery, setGallery] = useState(null);
  const [photos, setPhotos] = useState();
  const [shownAlbum, setShownAlbum] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setData(res))

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(res => setPhotos(res))
      .then(() => setLoad(true))

  }, []);

  function getShownAlbum(albumId) {
    setShownAlbum(albumId)
  }

  const handleclick = (id,name) => {
    setGallery(<Gallery id={id} name={name} getShownAlbum={getShownAlbum} photos={photos}/>)
  }

   return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <div className="App">
            {isLoad ?
              <Users users={data} getid={handleclick} /> :
              <Preloader/>}
          </div>
        </Route>
        <Route path='/users' >
          {gallery}
        </Route>
        <Route path='/album' >
          {isLoad ?
            <OpenedAlbum photos={photos.filter(photo => photo.albumId === shownAlbum)} /> :
            <Preloader/>}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
