import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Draggable} from "react-beautiful-dnd";

class Note extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {isDragging , connectDragSource , note} = this.props;
        const opacity = isDragging ? 0 : 1;
        return (
            <Draggable 
            draggableId={String(this.props.note._id) } 
            index={this.props.index} 
            >
            {(provided) => {
              <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <div className="note" style={{ opacity }}>
                {this.props.note.title}
                </div>
              </div>
              }
            }
            </Draggable>
        )
    }
};

const mapStateToProps = store => store;

export default connect(mapStateToProps , {})(Note);
