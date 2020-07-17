const DeleteSongDatabase = async (songKey) => {
    await fetch(`https://eindopdracht-w5.firebaseio.com/database/${songKey}.json`, {
        method: "delete",
    });
}
export default DeleteSongDatabase