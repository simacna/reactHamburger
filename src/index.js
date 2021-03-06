import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// import Person from './Person/Person';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Person />, document.getElementById('root'));
//adding prop to App component for demonstration of this.prop
//this gets affected in app.js when you return <Cockpit you add title as a prop/>
ReactDOM.render(<App appTitle="Person Manager"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
