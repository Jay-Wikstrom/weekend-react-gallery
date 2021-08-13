import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {

  useEffect(() => {
    fetchGalleryList();
  }, []);

  const [galleryList, setGalleryList] = useState([])

  const fetchGalleryList = () => {
    console.log('In Get');
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      setGalleryList(response.data);
    }).catch(error => {
      console.log('GET /Gallery error', error)
    })
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <img src="images/MyDog.PNG"/>
        <img src="images/OtherDog.PNG" />
        <img src="images/MyCat.PNG" />
        <img src="images/RoseBowl.jpg" />
        <img src="images/MyFavoriteFootballTeam.jpg" />
        <img src="images/MyFavoriteBasketballTeam.jpg" />  */}
      </div>
    );
}

export default App;
