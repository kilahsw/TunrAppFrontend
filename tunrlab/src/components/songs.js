import React from 'react'

const Songs = (props) => {
    const { songs } = props;
    const playList = () => {
        return (
            <>
                {songs.map((song) => (
                    <div>
                        <p style={{ fontWeight: 'bold', color: 'white' }}>{song.title} by {song.artist}</p>
                        <p style={{color: 'white'}}>{song.time}</p>
                        <button style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'hotpink' }}
                            onClick={() => {
                                props.favorites(song);
                            }}>
                            Favorite
                        </button>
                        <br />
                        <button style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'hotpink' }} 
                        onClick={() => {
                            props.deleteSong(song)
                        }}>Delete</button>
                    </div>
                ))}
            </>)

    }
    return songs.length > 0 ? playList() : <h3>...loading</h3>

}

export default Songs
