import { useState } from "react";
import './openedAlbum.css';

function OpenedAlbum(props) {
    const [photos] = useState(props.photos)
    const [isPpopup, setIsPopup] = useState(false)
    const [currentPhoto, setCurrentPhoto] = useState(null)

    function popup(photoId) {
        setIsPopup(true)
        setCurrentPhoto(photoId)
        document.body.style.overflow = 'hidden';

    }
    function closePopup() {
        setIsPopup(false)
        document.body.style.overflow = 'auto';

    }
    function prevPhoto() {
        if (currentPhoto > 0) {
            setCurrentPhoto(currentPhoto - 1)
        }
    }
    function nextPhoto() {
        if (currentPhoto < photos.length-1) {
            setCurrentPhoto(currentPhoto + 1)
        }
    }

    return (
        <div className="photos_container">{
            photos.map((item, id) =>
                <div className='photo_wraper' onClick={() => popup(id)} key={item.id}>
                    <img src={item.thumbnailUrl} alt={item.title} />
                </div>
            )
        }
            {isPpopup ?
                <div className='popup '>
                    <div className='prev' onClick={prevPhoto}> {'< prev'}</div>
                    <div className='popup_photo'>
                        <img src={photos[currentPhoto].url} alt={photos[currentPhoto].title} />
                        <div className='close_popup' onClick={closePopup}>X</div>
                    </div>
                    <div className='next' onClick={nextPhoto}>{'next > '}</div>
                </div> :
                null
            }
        </div>
    )
}
export default OpenedAlbum;