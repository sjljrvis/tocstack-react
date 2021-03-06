//from system
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appAction from '../../store/action/appAction';
import * as uploadAction from '../../store/action/uploadAction';
import { Grid } from 'react-bootstrap';

class UserSettingsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: [true, false],
    }
  }


  toggleClass = (i) => {
    let currentState = [false, false, false, false];
    currentState[i] = !currentState[i]
    this.setState({ active: currentState });
  };

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Grid>
          <div style={{ height: "100vh" }}>
            <h2>Sorry folks !!!!!</h2>
            <h4>Organisation and team support is still in development phase and will be online soon.....</h4>
          </div>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  appReducer: state.appReducer,
  uploadReducer: state.uploadReducer
});

const mapDispatchToProps = dispatch => ({
  appAction: bindActionCreators(appAction, dispatch),
  uploadAction: bindActionCreators(uploadAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(UserSettingsContainer);
