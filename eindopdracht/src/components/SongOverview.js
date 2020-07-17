import React, { useState } from 'react';
import SongForm from './SongForm.js'
import AddToDatabase from './Database.js'
import DeleteDatabase from './DeleteFromDatabase'



function SongOverview() {

    //settsongdata
    const songs = [];
    const [songList, setSongs] = useState(songs)

    // Change song list
    function addSongToList(newSong) {
        setSongs([...songList, newSong]);
    }

    //Click events
    const onSubmit = async (data) => {
        const getSongKey = await AddToDatabase(data)
        const newSongData = {
            key: getSongKey,
            title: data.title,
            artist: data.artist,
            genre: data.genre,
            rating: data.rating
        }
        addSongToList(newSongData)
    }

    function deleteSongFromList(clickedSong) {
        setSongs(songList.filter(currentSong => currentSong.title !== clickedSong.title))
        DeleteDatabase(clickedSong.key)
    }

    // Render Song list
    function renderSongs() {
        {
            songList.map(item => {
                return (
                    <tr key={item.title}>
                        <td>{item.title}</td>
                        <td>{item.artist}</td>
                        <td>{item.genre}</td>
                        <td>{item.rating}</td>
                        <td><button onClick={() => { deleteSongFromList(item) }}>Delete Song</button></td></tr>)
            })
        }
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
                        <th className="song-row__item">delete placeholder</th>
                    </tr>
                </thead>
                <tbody>
                    <renderSongs />
                </tbody>

            </table>

        </div>
    );
}


export default SongOverview;