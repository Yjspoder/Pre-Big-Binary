const INITIAL_STATE = {
    user: null
}

function testReducer(state = INITIAL_STATE , action) {
    switch(action.type){
        default:
            return state;
    }
} 

export default testReducer;