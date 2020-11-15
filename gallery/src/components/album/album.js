import { Link } from 'react-router-dom';
import './album.css';

function Album(props) {

    return (
        <Link to='/album' className='album_link' onClick={props.onClick}>
            <div className='album'>
                <div className='album_img'>
                    <div className='album_img-wrapper'>
                        <img src={props.background} alt={props.altImg} />
                    </div>
                    <h3>{props.title}</h3>
                </div>
                <div>{props.photos} фотографий в альбоме</div>
            </div>
        </Link>
    )
}

export default Album;