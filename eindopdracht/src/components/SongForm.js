import React, { useState, useEffect, } from 'react';
import { useForm } from "react-hook-form";




function SongForm(props) {

    const { register, handleSubmit } = useForm();


    return (
        <form onSubmit={handleSubmit(props.clickFunction)}>
            <label >Add a song</label><br />
            <input type="text" name="title" id="name" ref={register()} />
            <input type="text" name="artist" id="name" ref={register()} />
            <input type="text" name="genre" id="name" ref={register()} />
            <input type="text" name="rating" id="name" ref={register()} />
            <input type="submit" />
        </form>
    );
}

export default SongForm