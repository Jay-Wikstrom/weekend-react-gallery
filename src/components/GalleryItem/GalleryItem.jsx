function GalleryItem({photo}){
return (
    <div>
        <img src={photo.path} />
        <h3>{photo.title}</h3>
        <div>{photo.description}</div>
        <button>Like</button>
    </div>
    )
}

export default GalleryItem;