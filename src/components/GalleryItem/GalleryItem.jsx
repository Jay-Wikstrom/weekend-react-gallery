import React, { useState } from 'react';
import { Button } from '@material-ui/core';


function GalleryItem({ photo, setIdToLike, setIdToDelete}){
    const [pictureClicked, setPictureClicked] = useState(false) 

    const onRemoveClick = (e) => {
        let idToDelete = {
            id: e.target.value
        }
        setIdToDelete(idToDelete)
    }

    const onLikeClick = (e) => {
        let idToLike = {
            id: e.target.value
        }
        setIdToLike(idToLike)
    }
    
    function photoClicked(){
        // Change false to true to set picture to description 
        pictureClicked ? setPictureClicked(false) : setPictureClicked(true)
    } 
return (

    <div className="img-container">

        {/* Change from pic to description */}
        {
            pictureClicked ?
                <div className="gallery-desc"><p onClick={photoClicked}>{photo.description}</p></div> :
                <img className="gallery-img" src={photo.path} onClick={photoClicked} />
        }
        
        <br />
        {/* <button onClick={() => {updateLike(photo.id)}}>Like </button> */}

        <Button variant="contained" color="primary"><button value={photo.id} onClick={onLikeClick}>Like</button></Button>
        <Button variant="contained" color="secondary"><button value={photo.id} onClick={onRemoveClick}>Remove</button></Button>
        <br />
        <span className="likeThis">{photo.likes} people like this</span>
        
    </div>
    )
}

export default GalleryItem;