import axios from 'axios';
import React, { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';


function App() {

  const [photoList, setPhotoList] = useState([])

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = () => {
    console.log('In Get');
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      setPhotoList(response.data);
    }).catch(error => {
      console.log('GET /Gallery error', error)
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList photoList={photoList} />
      </div>
    );
}

export default App;
