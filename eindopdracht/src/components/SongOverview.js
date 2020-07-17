import React, { useState, useEffect } from 'react';
import SongForm from './SongForm.js'
import getAllTracks from './RenderSongsDatabase.js'
import AddToDatabase from './DatabasePost.js'
import DeleteDatabase from './DeleteFromDatabase'

function SongOverview() {
    // Render songs from database on load
    useEffect(() => {
        renderTracks();
    }, [])

    const renderTracks = async () => {
        const databaseTracks = await getAllTracks()
        let songs = Object.keys(databaseTracks).map((key) => ({
            key: key,
            title: databaseTracks[key].title,
            artist: databaseTracks[key].artist,
            genre: databaseTracks[key].genre,
            rating: databaseTracks[key].rating
        }))
        setSongs(songs)
    }

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

    return (
        <div className='songwrap'>
            <h3>Add a song to your favorites</h3>
            <SongForm clickFunction={onSubmit} />
            <h3>opgeslagen songs</h3>
            <table>
                <thead>
                    <tr className="song-header">
                        <th className="song-row__item">Title</th>
                        <th className="song-row__item">Artist</th>
                        <th className="song-row__item">Genre</th>
                        <th className="song-row__item">Rating</th>
                        <th className="song-row__item">Delete song</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        songList.map(item => {
                            return (
                                <tr key={item.key}>
                                    <td>{item.title}</td>
                                    <td>{item.artist}</td>
                                    <td>{item.genre}</td>
                                    <td>{item.rating}</td>
                                    <td><button onClick={() => { deleteSongFromList(item) }}>Delete</button></td></tr>)
                        })
                    }
                </tbody>

            </table>
        </div>
    );

}

export default SongOverview