import React, { useState } from 'react';
import SongForm from './SongForm.js'
import Database from './Database.js'


function SongOverview() {

    //save all songs
    const songs = [
        { title: "lol", artist: "ik", genre: "rock", rating: "idontknow" }
    ];

    //settsongdata
    const [songList, setSongs] = useState(songs)

    function addSongToList(newSong) {
        setSongs([...songList, newSong]);
    }

    const onSubmit = (data) => {
        const newSongData = data
        addSongToList(newSongData)
        Database(data)
    }

    return (
        <div>
            <h3>Input songs</h3>
            <SongForm clickFunction={onSubmit} />
            <h3>opgeslagen songs</h3>
            <table>
                <thead>
                    <tr className="song-header">
                        <th className="song-row__item">Song row placeholder</th>
                        <th className="song-row__item">Artist row placeholder</th>
                        <th className="song-row__item">Genre row placeholder</th>
                        <th className="song-row__item">Rating row placeholder</th>
                    </tr>
                </thead>
                <tbody>
                    {songList.map(item => {
                        return (
                            <tr key={item.title}>
                                <td>{item.title}</td>
                                <td>{item.artist}</td>
                                <td>{item.genre}</td>
                                <td>{item.rating}</td></tr>)
                    })
                    }
                </tbody>

            </table>

        </div>
    );
}


export default SongOverview;