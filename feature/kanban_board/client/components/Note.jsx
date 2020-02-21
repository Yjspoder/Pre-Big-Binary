import React, {Component} from 'react';
import { connect } from 'react-redux';
import { DragSource } from 'react-dnd';

const noteSource = {
    beginDrag(props) {
        console.log("Dragging");
        return props
    },
    endDrag(props , monitor , component) {
        return props.handleDrop(props.note._id);
    }
}

function collect(connect , monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

class Note extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {isDragging , connectDragSource , note} = this.props;
        const opacity = isDragging ? 0 : 1;
        return connectDragSource(
            <div className="note" style={{ opacity }}>
                {this.props.note.title}
            </div>
        )
    }
};

const mapStateToProps = store => store;

export default connect(mapStateToProps , {})(DragSource('note',noteSource,collect)(Note));
