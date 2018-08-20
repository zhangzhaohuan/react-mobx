


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


export default class Login extends React.Component {
  render() {
    return (
      <div>
        <p>
          login
          </p>
        <a href='./inde.html'>to index</a>
      </div>
    )
  }
}

ReactDOM.render(
  <Login />,
  document.getElementById('root'));
registerServiceWorker();
