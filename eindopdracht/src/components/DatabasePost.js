const postNewTask = async (song) => {
    const fetchBody = JSON.stringify(song);
    const songDatabaseKey = await fetch('https://eindopdracht-w5.firebaseio.com/database.json', {
        method: "post",
        body: fetchBody
    });
    const songKey = await songDatabaseKey.json()
    return songKey.name

}
export default postNewTask

