import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import Songs from './components/songs'
import Form from './components/form'
import Favorites from './components/favorites'
import './App.css';


function App() {

  const url = 'http://localhost:3000/songs'

  const [songs, setSongs] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (favorite) => {
    setFavorites([...favorites, favorite]);
  };

  const getSongs = () => {
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        setSongs(res.songs);
        console.log(res)
      })
  }
  useEffect(() => {
    getSongs()
  }, [])

  const emptySong = {
    title: "",
    artist: "",
    time: "",
  };

  const handleCreate = (newSong) => {
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newSong)
    })
      .then(response => getSongs())
  }

  const deleteSong = (song) => {
    fetch(url + '/' + song.id, {
      method: "delete"
    })
      .then(response => getSongs())
  }

  return (
    <div className="App">

      <h1>TUNR.</h1>
      <p>FOR ALL YOUR PLAYLIST NEEDS</p>
      <h1>PLAYLIST</h1>
      <Switch>
        <Route
          exact path='/'
          render={(rp) => (
            <Songs {...rp}
              songs={songs}
              favorites={addFavorite}
              deleteSong={deleteSong}
            />
          )}>
        </Route>
      </Switch>
      <h2>Favorite Songs</h2>
      <Switch>
        <Route>
          <Favorites favorites={favorites} />
        </Route>
      </Switch>
      <h1>Add New Song To Playlist</h1>
      <Switch>
        <Route
          exact path='/'
          render={(rp) => (
            <Form {...rp} song={emptySong} handleSubmit={handleCreate} />
          )}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
