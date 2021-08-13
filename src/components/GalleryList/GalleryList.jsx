import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({ photoList }) {

    return (
        <div>
            <h2>My Gallery</h2>
            {photoList.map((photo)=> {
                return (
                        <GalleryItem 
                        key={photo.id} 
                        photo={photo}
                    />
                )
            })}
        </div>
    );

}

export default GalleryList;