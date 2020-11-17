import React from 'react'

const Songs = (props) => {
    const { songs } = props;
    const playList = () => {
        return (
            <>
                {songs.map((song) => (
                    <div>
                        <p>{song.title} by {song.artist}</p>
                        <p>{song.time}</p>
                        <button
                            onClick={() => {
                                props.favorites(song);
                            }}>
                            Favorite
                        </button>
                        <button onClick={() => {
                            props.deleteSong(song)
                        }}>Delete</button>
                    </div>
                ))}
            </>)

    }
    return songs.length > 0 ? playList() : <h3>...loading</h3>

}

export default Songs


  // const [songs, setSongs] = useState([]);

    // const url = 'http://localhost:3000/songs'

    // const getSongs = () => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then((res) => {
    //             setSongs(res.songs);
    //             console.log(res)
    //         })
    // }
    // useEffect(() => {
    //     getSongs()
    // }, [])

//     //<h1>TUNR.</h1>
//     < p > FOR ALL YOUR PLAYLIST NEEDS</p >
//         <h1>PLAYLIST 1</h1>
// { playList() }
// <h1>Add New Song To Playlist</h1>

 // if (songs.length > 0) {
        //     return songs.map((song) => {
        //         return (
        //             <div>
        //                 <h6>
        //                     {song.title}:{song.artist}
        //                 </h6>
        //             </div>
        //         );
        //     });

        // } else {
        //     return "...loading"
        // }

        // return (
    //     <>
    //         <h1>TUNR.</h1>
    //         <p>FOR ALL YOUR PLAYLIST NEEDS</p>
    //         <h1>PLAYLIST 1</h1>
    //         {playList()}
    //         <h1>Add New Song To Playlist</h1>

    //     </>
    // );
