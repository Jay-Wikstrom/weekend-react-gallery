import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

//Object destructuring
import React, { useState, useEffect } from 'react';


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

        {/* Render GalleryList component */}
        <GalleryList 
          //Pass photoList prop to photoList component
          photoList={photoList} 
        />
      </div>
    );
} //end app function

export default App;
