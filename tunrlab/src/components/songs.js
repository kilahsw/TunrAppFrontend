import React, { useEffect, useState } from 'react'

const Songs = (props) => {

    const [songs, setSongs] = useState([]);
    const getSongs = () => {
        fetch("http://localhost:3000/songs")
            .then(res => res.json())
            .then((res) => {
                setSongs(res.songs);
                console.log(res)
            })
    }
    useEffect(() => {
        getSongs()
    }, [])

    const playList = () => {
        if (songs.length > 0) {
            return songs.map((song) => {
                return (
                    <div>
                        <h6>
                            {song.title}:{song.artist}
                        </h6>
                    </div>
                );
            });
        } else {
            return "...loading"
        }
    }

    return (
        <>
            <h1>TUNR.</h1>
            <p>FOR ALL YOUR PLAYLIST NEEDS</p>
            <h1>PLAYLIST 1</h1>
            {playList()}

        </>
    );
}

export default Songs