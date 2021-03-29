import React from 'react';
import {connect} from 'react-redux'; 
import * as action from '../action';
/* import {bindActionCreators} from 'redux'; */


const Counter = ({counter, inc, dec, reset}) => {
    return (
        <div className="wrapper">
        <div className="number">{counter}</div>
        <div className="wrapper_controls">
          <button onClick={inc} className="control inc"><img src="./icons/Plus.png" alt="hgf"/></button>
          <button onClick={dec} className="control dec"><img src="./icons/Minus.png" alt=""/></button>
          <button onClick={reset} className="control reset"><img src="./icons/Reset.png" alt=""/></button>
        </div>
        <div class="wraper_controls">
          <button className="control download"><img src="./icons/Download.png" alt=""/></button>
          <button className="control upload"><img src="./icons/Upload.png" alt=""/></button>
        </div>
        </div>
    )
}

const mapSateToProps = (state) => {
  return {
    counter: state
  }
}

/* const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(action,dispatch);
} */

export default connect(mapSateToProps, action)(Counter);