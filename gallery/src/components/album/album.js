import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './album.css';

function Album(props) {
    const [data, setTitle] = useState(props)

    return (
        <div className='album_link' onClick={data.onClick}>
            <div className='album'>
                <img src={data.background} />
                <h3>{data.title}</h3>
                <div>{data.photos} фотографий в альбоме</div>
            </div>
        </div>
    )
}

export default Album;