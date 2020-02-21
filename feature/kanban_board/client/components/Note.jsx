import React, {Component} from 'react';
import { connect } from 'react-redux';

class Note extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="note">
                {this.props.title}
            </div>
        )
    }
};

const mapStateToProps = store => store;

export default connect(mapStateToProps , {})(Note);
