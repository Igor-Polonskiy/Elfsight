import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './album.css';

function Album(props){
const [title, setTitle] = useState(props.title)

    return(
        <Link to={`/user${props.name}`}>
            <div>{title}</div>
        </Link>
    )
}

export default Album;