import React, { useState } from 'react';


function GalleryItem({photo, updateLike}){
    const [pictureClicked, setPictureClicked] = useState(false) 
    
    function photoClicked(){
        // Change false to true to set picture to description 
        pictureClicked ? setPictureClicked(false) : setPictureClicked(true)
    } 
return (

    <div>

        {/* Change from pic to description */}
        {
            pictureClicked ?
                <div><p onClick={photoClicked}>{photo.description}</p></div> :
                <img src={photo.path} onClick={photoClicked} />
        }

        
        
        <button onClick={() => {updateLike(photo.id);}}>Like </button>
        <br />
        <span>{photo.likes} people like this</span>
        
    </div>
    )
}

export default GalleryItem;