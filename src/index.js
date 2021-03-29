import React from'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';
import App from './components/app';

const store = createStore(reducer);


/* const bindActionCreator = (creator, dispatch) => (...args) => {
    dispatch(creator(...args));
} */


ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>
    , document.getElementById('root'));




