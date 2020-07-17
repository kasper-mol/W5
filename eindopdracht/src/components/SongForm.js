import React from 'react';
import { useForm } from "react-hook-form";

function SongForm(props) {

    const { register, handleSubmit } = useForm();
    return (
        <form onSubmit={handleSubmit(props.clickFunction)}>
            <label >Add a song</label><br />
            <input type="text" name="title" id="title" ref={register()} />
            <input type="text" name="artist" id="artist" ref={register()} />
            <input type="text" name="genre" id="genre" ref={register()} />
            <input type="text" name="rating" id="rating" ref={register()} />
            <input type="submit" />
        </form>
    );
}

export default SongForm