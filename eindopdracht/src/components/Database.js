const postNewTask = async (song) => {
    const fetchBody = JSON.stringify(song);
    const songDatabaseKey = await fetch('https://eindopdracht-w5.firebaseio.com/test.json', {
        method: "post",
        body: fetchBody
    });
    const songKey = await songDatabaseKey.json()
    console.log(songKey.name)
    return songKey.name
    //const songData = await fetch('https://eindopdracht-w5.firebaseio.com/test.json', {
    //});
    //console.log(songData.json())
}
export default postNewTask