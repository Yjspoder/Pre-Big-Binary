/* eslint-disable quotes */
import React, { Component } from 'react';
import '../assets/stylesheets/style.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <>
      <div>I am Frontend</div>
      </>
    );
  }
}
const mapStateToProps = store => store;

export default connect(mapStateToProps, {})(withRouter(App));
