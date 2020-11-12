import { useState } from 'react';
import './album.css';

function Album(props) {
    const [data, ] = useState(props)

    return (
        <div className='album_link' onClick={data.onClick}>
            <div className='album'>
                <img src={data.background} alt={data.altImg}/>
                <h3>{data.title}</h3>
                <div>{data.photos} фотографий в альбоме</div>
            </div>
        </div>
    )
}

export default Album;