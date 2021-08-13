function GalleryItem({photo, updateLike}){
return (
    <div>
        <img src={photo.path} />
        <div>
            <h3>{photo.title}</h3>
            <div>{photo.description}</div>
        </div>
        <button onClick={() => {
                updateLike(photo.id);
            }}
        >Like </button>
        <br />
        <span>{photo.likes} people like this</span>
    </div>
    )
}

export default GalleryItem;