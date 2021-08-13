import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({photoList, updateLike}) {
    return (
        <div>
            <h2>My Gallery</h2>
            {photoList.map((photo)=> {
                return (
                    <GalleryItem 
                        key={photo.id} 
                        photo={photo}
                        updateLike={updateLike}
                    />
                )
            })}
        </div>
    );
}

export default GalleryList;