import React from 'react';
import { useForm } from "react-hook-form";

function SongForm(props) {

    const { register, handleSubmit } = useForm();
    return (
        <form onSubmit={handleSubmit(props.clickFunction)}>
            <label >Add a song</label><br />
            <input type="text" name="title" id="title" ref={register()} />
            <input type="text" name="artist" id="artist" ref={register()} />
            <select name="genre" id="genre" ref={register()} >
                <option value="Pop">Pop</option>
                <option value="Hip-Hop">Hip-Hop</option>
                <option value="Classic">Classic</option>
                <option value="Death Metal">Death Metal</option>
            </select>
            <input type="text" name="rating" id="rating" ref={register()} />
            <input type="submit" />
        </form>
    );
}

export default SongForm