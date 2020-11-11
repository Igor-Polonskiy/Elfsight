import './gallery.css';
import { Fragment, useEffect, useState } from "react";
import Album from '../album/album';
import OpenedAlbum from '../openedAlbum/openedAlbum'

function Gallery(props) {
    const [albums, setAlbums] = useState([]);
    const [isLoad, setLoad] = useState(false);
    const [userid, setUserid] = useState(props.id);
    const [photos, setPhotos] = useState([]);
    const [shownAlbum, setShownAlbum] = useState(null);
    const [isAlbumOpened, setIsAlbumOpened] = useState(true)



    function getData() {


        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(res => res.filter(item => item.userId === userid))
            .then(res => setAlbums(res))


        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(res => setPhotos(res))
            .then(() => setLoad(true))

    }

    useEffect(() => {
        getData()
    }, []);

    function handleClick(id) {
        setShownAlbum(id);
        setIsAlbumOpened(false);
    }
    function handleClickBack() {
        setIsAlbumOpened(true)
    }

    return (

        <div className='gallery'>
            {isAlbumOpened ?
                (isLoad ? albums.map((item) => {
                    let count = photos.filter(photo => photo.albumId === item.id)

                    return (
                        <Album
                            key={item.id}
                            onClick={() => handleClick(item.id)}
                            title={item.title}
                            photos={count.length}
                            background={count[1].thumbnailUrl}
                        />)
                })

                    : <div>not Yet</div>) :
                <div>
                <OpenedAlbum photos = {photos.filter(photo => photo.albumId === shownAlbum)}/>
                    <button onClick={handleClickBack}>назад</button>
                </div>
            }
        </div>

    )

}

export default Gallery;