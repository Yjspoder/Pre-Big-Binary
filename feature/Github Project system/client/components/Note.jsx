import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Draggable } from "react-beautiful-dnd";

class Note extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const noteId = this.props.note._id;
    const { index } = this.props;
    return (
      <>
        <Draggable key={noteId} draggableId={noteId} index={index}>
          {(provided, snapshot) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <div className="note">
                  {this.props.note.title}
                </div>
              </div>
            )
          }}
        </Draggable>
      </>
    )
  }
};

const mapStateToProps = store => store;

export default connect(mapStateToProps, {})(Note);
