const createNote = (data , cb) => dispatch => {
    const title = data.noteTitle;
    const columnId = data.id;
    const noteData = {title , columnId}
    dispatch({
        type: "CREATE_NOTE_START"
    });
    fetch('/api/v1/note/create' , {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(noteData)
    })
    .then(res => res.json())
    .then(createdNote => {
        dispatch({
            type: "CREATE_NOTE_SUCCESS"
        })
        cb()
    })
}

const fetchNoteList = () => dispatch => {
    dispatch({
        type: "FETCH_NOTE_LIST_START"
    });
    fetch('/api/v1/note/' , {
        method: "GET",
    })
    .then(res => res.json())
    .then(noteList => dispatch({
        type: "FETCH_NOTE_LIST_SUCCESS",
        data: noteList.noteList
        })
    )
}


module.exports = {
    createNote , 
    fetchNoteList
};