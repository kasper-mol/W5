const getAllTracks = async () => {
    const allSongsData = await fetch('https://eindopdracht-w5.firebaseio.com/database.json', {
    });
    const allSongs = await allSongsData.json()
    return allSongs
}

export default getAllTracks