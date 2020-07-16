const postNewTask = async (song) => {
    const fetchBody = JSON.stringify(song);
    await fetch('https://eindopdracht-w5.firebaseio.com/test.json', {
        method: "post",
        body: fetchBody
    });
}
export default postNewTask