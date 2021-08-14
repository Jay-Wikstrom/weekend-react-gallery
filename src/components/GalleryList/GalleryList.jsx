import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({ photoList, likeItem, deleteItem}) {
    // Loop through and render
    return (
        <div>
            
            {photoList.map((photo)=> {
                return (
                    <GalleryItem 
                        key={photo.id} 
                        photo={photo}
                        setIdToLike={likeItem}
                        setIdToDelete={deleteItem}
                    />
                )
            })}
        
        </div>
    );
}

export default GalleryList;