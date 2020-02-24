const INITIAL_STATE = {
    columnList : null,
    isFetchingColumnList: false,
    isCreatingColumnList: false,
}


function columnReducer(state = INITIAL_STATE , action){
    switch(action.type){
        case "FETCH_COLUMN_LIST_START" : 
            return {
                ...state,
                isFetchingColumnList: true
            };
        case "FETCH_COLUMN_LIST_SUCCESS" : 
            return {
                ...state,
                isFetchingColumnList: false,
                columnList: action.data
            };
            default :
                return state;
    }
}

export default columnReducer;