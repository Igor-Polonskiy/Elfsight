import './gallery.css';
import { Fragment, useEffect, useState } from "react";
import Album from '../album/album';


function Gallery(props) {
    const [albums, setAlbums] = useState([]);
    const [isLoad, setLoad] = useState(false);
    const [userid,] = useState(props.id);
    const [photos,] = useState(props.photos);


    function getData() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(res => res.filter(item => item.userId === userid))
            .then(res => setAlbums(res))
            .then(() => setLoad(true))
    }

    useEffect(() => {
        getData()
    }, []);

    function handleClick(id) {
        props.getShownAlbum(id);
    }

    return (
        <Fragment>
            <h1>{`Альбомы ${props.name}`}</h1>
            <div className='gallery'>
                {isLoad ? albums.map((item) => {
                    let count = photos.filter(photo => photo.albumId === item.id)

                    return (
                        <Album
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            title={item.title}
                            photos={count.length}
                            background={count[1].thumbnailUrl}
                            altImg={count[1].title}
                        />)
                }) : <div>not Yet</div>}
            </div>
        </Fragment>
    )
}

export default Gallery;