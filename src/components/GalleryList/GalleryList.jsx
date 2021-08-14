import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({ photoList, likeItem, deleteItem}) {
    // Loop through and render
    return (
        <div>
            <h2>My Gallery</h2>
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