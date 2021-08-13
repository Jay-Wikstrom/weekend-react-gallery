function GalleryList({ photoList }) {

    return (
        <div>
            <h2>My Gallery</h2>
            {photoList.map(photo => {
                return (
                    <div 
                        key={photo.id}>
                        <img src={photo.path} />
                    </div>
                );
            })}
        </div>
    );
}

export default GalleryList;