// 函数柯理化
import ReactDOM from 'react-dom';
import React, { Component } from 'react'

export default class Currying extends Component {
  add(a, b, c) {
    console.log(a, b, c);

    return a + b + c;
  }

  currying = (fn) => {
    console.log('in');

    return function curried() {
      let args = [].slice.call(arguments);
      return args.length >= fn.length ?
        fn.apply(null, args) : 
        function () {
          let rest = [].slice.call(arguments);
          return curried.apply(null, args.concat(rest))
        }
    }
  }

  curryingAdd = this.currying(this.add);

  componentDidMount() {
    console.log(this.curryingAdd(1, 2)(3));
  }

  render() {
    return (
      <div>
        Currying
      </div>
    )
  }
}




ReactDOM.render(
  <Currying />,
  document.getElementById('root'));
