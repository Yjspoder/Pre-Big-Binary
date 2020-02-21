import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from "react-redux";
import {createNote , fetchNoteList , updateNote } from "../redux/actions/noteActions";
import Note from './Note';
import { DropTarget } from 'react-dnd';

function collect(connect , monitor){
    return{
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        note: monitor.getItem(),
    }
}

class Column extends Component {
    constructor(props){
        super(props);
        this.state={
            isFormOpen: false,
            noteTitle: "",
        }
    }

    componentDidMount(){
        this.props.fetchNoteList();
    }

    cb = () => {
        this.setState({
            isFormOpen: false,
            noteTitle: "",
        })
        this.props.fetchNoteList();
    }

    handleAddForm = () => {
        this.setState({isFormOpen: true})
    }

    handleNoteCreate = e => {
        e.preventDefault();
        const {noteTitle} = this.state;
        const {id} = this.props;
        if(!noteTitle) return alert('Please enter note');
        const data = {noteTitle , id}
        this.props.createNote(data , this.cb);
    }

    handleCancel = () => {
        this.setState({isFormOpen: false})
    }

    handleChange = e => {
        this.setState({[e.target.name] : e.target.value})
    }

    updateNote = (id) => {
        const data={
            noteId: id,
            columnId: this.props.id,
        }
        this.props.updateNote(data , this.props.fetchNoteList);
    }

    render (){
        const { connectDropTarget , hovered , item } = this.props;
        return connectDropTarget(
            <div className="column-container flex-column">
                <div className="column-title flex-between">
                    <h5>{this.props.title}</h5>
                    <button
                    onClick={this.handleAddForm}
                    className="add-form">
                        +
                    </button>
                </div>
                {
                    (this.state.isFormOpen) ? 
                        (
                            <form className="flex-column">
                                <textarea 
                                type="text"
                                value={this.state.noteTitle}
                                onChange={this.handleChange}
                                name="noteTitle"
                                placeholder="Enter a note"
                                >
                                </textarea>
                                <div className="flex-around buttons">
                                    <button 
                                    className="add-note-btn"
                                    onClick={this.handleNoteCreate}
                                    >Add</button>
                                    <button
                                    className="cancel-btn"
                                    onClick={this.handleCancel}
                                    >Cancel</button>
                                </div>
                            </form>
                        ) : 
                        (
                            <></>
                        )
                    }
                    {
                        this.props.noteReducer.noteList &&
                        this.props.noteReducer.noteList.map(note => {
                            return (note.columnId == this.props.id) ? 
                            <Note note={note} handleDrop={(id) => this.updateNote(id)}/> :
                            <></>
                        })
                    }
            </div>
        ) 
    }
}

const mapStateToProps = store => store

export default compose(DropTarget("note" , {} , collect), 
    connect(mapStateToProps , {createNote , fetchNoteList , updateNote}))
    (Column);