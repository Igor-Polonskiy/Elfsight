import './gallery.css';
import { Fragment, useEffect, useState } from "react";
import Album from '../album/album';

function Gallery(props) {
    const [albums, setAlbums] = useState([]);
    const [isLoad, setLoad] = useState(false);
    const [userid, setUserid] = useState(props.id);

    

    function getAlbums() {
        console.log(props.id)
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(res => res.filter(item => item.userId === userid))
            .then(res => setAlbums(res))
            .then(() => setLoad(true))

    }

    useEffect(() => {
        getAlbums()
    }, []);



    return (
        <Fragment>
            {isLoad ? albums.map((item) =>
             <Album 
             title={item.title}
           
              />)
                : <div>not Yet</div>}
        </Fragment>
    )

}

export default Gallery;