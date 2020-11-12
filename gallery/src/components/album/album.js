import { useState } from 'react';
import { Link } from 'react-router-dom';
import './album.css';

function Album(props) {
    const [data, ] = useState(props)

    return (
        <Link className='album_link' onClick={data.onClick}>
            <div className='album'>
                <img src={data.background} alt={data.altImg}/>
                <h3>{data.title}</h3>
                <div>{data.photos} фотографий в альбоме</div>
            </div>
        </Link>
    )
}

export default Album;