const fetchColumnList = cb => dispatch => {
    console.log("inside fetchColumn")
    dispatch({
        type: "FETCH_COLUMN_LIST_START"
    })
    fetch('/api/v1/column/list' , {
        method: "GET"
    })
    .then(res => res.json())
    .then(columnList => {
        console.log(columnList);
        if(columnList.columnList.length < 1){
            cb();
        } else {
            dispatch({
              type: "FETCH_COLUMN_LIST_SUCCESS",
              data: columnList.columnList
            })
        }
    })
}

const createColumn = (title , cb) => dispatch => {
    console.log("inside createColumn")
    dispatch({
        type: "CREATE_COLUMN_START",
    })
    fetch("/api/v1/column/create" , {
        method: "POST",
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({title}),
    })
    .then(res => res.json())
    .then(createdColumn => {
        console.log(createdColumn);
        cb();
    })

}

module.exports = {
    fetchColumnList,
    createColumn
}