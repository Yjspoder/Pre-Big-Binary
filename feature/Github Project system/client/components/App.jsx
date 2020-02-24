/* eslint-disable quotes */
import React, { Component } from 'react';
import '../assets/stylesheets/style.scss';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { fetchColumnList , createColumn } from "../redux/actions/columnActions";
import { updateNote , fetchNoteList } from "../redux/actions/noteActions";
import Column from './Column';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      columnTitle: ''
    }
  }

  componentDidMount(){
    this.props.fetchColumnList(this.createColumnList)
  }
  
  createColumnList = () => {
    console.log("inside callback")
    const columnTitleList = ["To Do" , "In Progress" , "Review In Progress" , "Review Approved" , "Done"];
    columnTitleList.forEach(title => {
      this.props.createColumn(title)
    })
  }

  handleColumnCreate = e => {
    e.preventDefault();
    const {columnTitle} = this.state;
    if(!columnTitle) return alert('Please enter column title');
    this.props.createColumn(columnTitle ,  this.props.fetchColumnList);
  }

  handleCancel = () => {
    this.setState({columnTitle: ''})
  }

  handleChange = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  handleDrop = (noteId , columnId) => {
    const data = { noteId , columnId }
    console.log(data);
    this.props.updateNote(data , this.props.fetchNoteList);
  }
  
  render() {
    return (
      <>
        <div className="flex-row">
          <DragDropContext onDragEnd={result => 
            this.handleDrop(result.draggableId , result.destination.droppableId)
          }>
          {
            this.props.columnReducer.columnList &&
            this.props.columnReducer.columnList.map((column , index) => {
              return <Column key={index} id={column._id} title={column.title} />
            })
          }
            <form className="add-column-form flex-column">
              <textarea 
              className="add-column-title"
              type="text"
              onChange={this.handleChange}
              name="columnTitle"
              value={this.state.columnTitle}
              placeholder="+ Add Column"
              >
              </textarea>
              <div className="flex-around buttons">
                <button 
                  className="add-note-btn"
                  onClick={this.handleColumnCreate}
                >
                    Add
                </button>
                <button
                  className="cancel-btn"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </DragDropContext>
        </div>
      </>
    );
  };
};

const mapStateToProps = store => store;

export default connect(mapStateToProps, {fetchColumnList , createColumn , updateNote , fetchNoteList})(App);
