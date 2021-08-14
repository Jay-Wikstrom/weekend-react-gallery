import {useState} from 'react';

function CreateGallery({ onCreateGallery}){
    const [newTitle, setNewTitle] = useState('');
    const [newPath, setNewPath] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();

        console.log('on submit' , newTitle, newPath, newDescription)

        let newPhoto = {
            title: newTitle,
            path: newPath,
            description: newDescription
        }
        onCreateGallery(newPhoto);
    }


    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type="text"
                placeholder="Photo Title"
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
            />

            <input 
                type="text"
                placeholder="Url Path"
                value={newPath}
                onChange={e => setNewPath(e.target.value)}
            />

            <input 
                type="text"
                placeholder="Photo Description"
                value={newDescription}
                onChange={e => setNewDescription(e.target.value)}
            />

        <button>Add to Gallery</button>
        </form>
    )
}

export default CreateGallery;