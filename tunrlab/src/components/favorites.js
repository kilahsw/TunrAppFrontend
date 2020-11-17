import React from 'react'

function Favorites(props) {
    console.log("these are favorites")
    return (
        <div>
            {props.favorites.map((favorite) => {
                return (
                    <>
                        <p>{favorite.title}</p>
                    </>
                )
            })}
        </div>
    );
}

export default Favorites;