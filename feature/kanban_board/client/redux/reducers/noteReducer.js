const INITIAL_STATE = {
    noteList : null,
    isFetchingNoteList: false,
    isCreatingNoteList: false,
    isCreatingNote: false
}


function columnReducer(state = INITIAL_STATE , action){
    switch(action.type){
        case "CREATE_NOTE_START" : 
            return {
                ...state,
                isCreatingNote: true
            };
        case "CREATE_NOTE_START" : 
            return {
                ...state,
                isCreatingNote: false
            }
        case "FETCH_NOTE_LIST_START" : 
            return {
                ...state,
                isFetchingnNoteList: true
            };
        case "FETCH_NOTE_LIST_SUCCESS" : 
            return {
                ...state,
                isFetchingNoteList: false,
                noteList: action.data
            };
        default :
            return state;
    }
}

export default columnReducer;