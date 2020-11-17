import React, { useState } from 'react'

const Form = (props) => {

    const [formData, setFormData] = useState(props.song);
    //FUNCTIONS
    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleSubmit(formData);
        props.history.push('/');
    };
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData)
    };
    return (
        <form onSubmit={handleSubmit}>
            <p>Title</p>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <p>Artist</p>
            <input
                type="text"
                name="artist"
                value={formData.artist}
                onChange={handleChange}
            />
            <p>Time</p>
            <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
            />
            <br />
            <br />
            <input style={{ color: 'pink', fontWeight: 'bold', backgroundColor: 'gray', border: 'gray' }} type="submit" value="Add Song" />
        </form>
    );
};
export default Form;

//inside useState(props.song)