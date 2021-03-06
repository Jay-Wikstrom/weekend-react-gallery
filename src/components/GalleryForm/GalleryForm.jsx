import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import '../GalleryForm/GalleryForm.css'


function CreateGallery({ onCreateGallery}){
    //States for input on form
    const [newTitle, setNewTitle] = useState('');
    const [newPath, setNewPath] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();

        console.log('on submit' , newTitle, newPath, newDescription)

        //Object data to send to server
        let newPhoto = {
            title: newTitle,
            path: newPath,
            description: newDescription
        }
        onCreateGallery(newPhoto);
        
        //Clear inputs
        setNewDescription('');
        setNewPath('');
        setNewTitle('')
    }


    return (
        <form onSubmit={onFormSubmit}>
            <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Photo Title"
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
            />

            <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Url Path"
                value={newPath}
                onChange={e => setNewPath(e.target.value)}
            />

            <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Photo Description"
                value={newDescription}
                onChange={e => setNewDescription(e.target.value)}
            />

            <button className="addBtn">Add to Gallery</button>
        </form>
    )
}

export default CreateGallery;