import React, { useState } from 'react';
import { Button } from '@material-ui/core';


function GalleryItem({ photo, setIdToLike, setIdToDelete}){
    //Track if picture has been clicked or not
    const [pictureClicked, setPictureClicked] = useState(false) 

    //Remove photo function
    const onRemoveClick = (e) => {
        let idToDelete = {
            id: e.target.value
        }
        setIdToDelete(idToDelete)
    }

    //Like photo function
    const onLikeClick = (e) => {
        let idToLike = {
            id: e.target.value
        }
        setIdToLike(idToLike)
    }
    
    const photoClicked =() => {
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

        {/* Not sure why but cannot figure out why my onClick function wont work with these material-ui buttons
            <Button variant="contained" color="primary" value={photo.id} onClick={onLikeClick}></Button>
        */}
        <button className="likeBtn" value={photo.id} onClick={onLikeClick}>Like</button>
        <button className="deleteBtn" value={photo.id} onClick={onRemoveClick}>Remove</button>
        <br />
        <span className="likeThis">{photo.likes} people like this</span>
        
    </div>
    )
}

export default GalleryItem;