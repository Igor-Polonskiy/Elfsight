import { Link } from 'react-router-dom';
import './album.css';

function Album(props) {

    return (
        <Link to='/album' className='album_link' onClick={props.onClick}>
            <div className='album'>
                <div className='album_img'>
                    <img src={props.background} alt={props.altImg} />
                    <h3>{props.title}</h3>
                </div>
                <div>{props.photos} фотографий в альбоме</div>
            </div>
        </Link>
    )
}

export default Album;