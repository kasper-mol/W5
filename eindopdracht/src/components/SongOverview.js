import React, { useState, useEffect } from 'react';
import SongForm from './SongForm.js'
import Database from './Database.js'


function SongOverview() {

    //save all songs
    const songs = [
        { title: "lol", artist: "ik", genre: "rock", rating: "idontknow" }
    ];

    //settsongdata
    const [songList, setSongs] = useState(songs)

    function addSong(newSong) {
        setSongs([...songList, newSong]);
    }





    const onSubmit = (data) => {
        const newSong = data
        addSong(newSong)
        Database(data)
    }

    return (
        <div>
            <h3>Input songs</h3>
            <SongForm clickFunction={onSubmit} />
            <table>
                <tr className="song-header">
                    <th className="song-row__item">Song row placeholder</th>
                    <th className="song-row__item">Artist row placeholder</th>
                    <th className="song-row__item">Genre row placeholder</th>
                    <th className="song-row__item">Rating row placeholder</th>
                </tr>

                {songList.map(item => {
                    return (
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.artist}</td>
                            <td>{item.genre}</td>
                            <td>{item.rating}</td></tr>)
                })
                }


            </table>

        </div>
    );
}


export default SongOverview;