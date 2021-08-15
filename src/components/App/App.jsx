import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';
import '../GalleryItem/GalleryItem.css'
import GalleryForm from '../GalleryForm/GalleryForm';
import React from 'react';

//Object destructuring
import { useState, useEffect } from 'react';


function App() {
  //Array Destructuring
  const [photoList, setPhotoList] = useState([])

  //Lifestyle hook gets called when component loads
  useEffect(() => {
    fetchPhotos();
  }, []);


  const fetchPhotos = () => {
    console.log('In Get');
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      // Set photo list data from response
      setPhotoList(response.data);
    }).catch(error => {
      console.log('GET /Gallery error', error)
    })
  }


  //POST
  const postPhoto = (newPhoto) => {
    //e.preventDefault();
    console.log('in postItem')

    axios({
      method: 'POST',
      url: '/gallery',
      data: newPhoto
    }).then(response => {
      console.log('POST /item', response);

      fetchPhotos();
    }).catch(error => {
      console.log('POST /item failed', error);
    });
  };

  //PUT
  const likeItem = (idToLike) => {
    console.log('id', idToLike.id)
    console.log('id', idToLike)

    axios({
      method: 'PUT',
      url: `/gallery/` + idToLike.id,
    }).then(function (res) {
      fetchPhotos()
    })
  }

  //DELETE
  const deleteItem = (idToDelete) => {
    console.log('id', idToDelete.id)
    console.log('id', idToDelete)

    axios({
      method: 'DELETE',
      url: `/gallery/` + idToDelete.id
    }).then(function (res) {
      fetchPhotos()
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>

        <GalleryForm
          onCreateGallery={postPhoto}
        />

        {/* Render GalleryList component */}
        <GalleryList
          //Pass photoList prop to photoList component
          photoList={photoList}
          likeItem={likeItem}
          deleteItem={deleteItem}
        />
      </div>
    );
} //end app function

export default App;
