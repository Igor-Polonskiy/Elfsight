import './gallery.css';
import { useEffect, useState } from "react";

function Gallery(props) {
    const [data, setData] = useState([]);
    const [isLoad, setLoad] = useState(false);
    const [userid, setUserid] = useState(props.id);

    function getData() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then(res => setData(res))
            .then(() => setLoad(true))

    }
    useEffect(() => {
        getData()

    }, []);
    return (
        <div>{userid}</div>
    )

}

export default Gallery;