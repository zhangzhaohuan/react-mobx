
// 信息传递-contex
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
/*react 15.5以后 PropTypes独立出来*/
import PropTypes from 'prop-types';
//子组件
class Child extends Component {
  constructor() {
    super();
    this.name = 'aa';
  }

  handel = () => {
    this.context.changeCountry(this.name)
  }

  render() {
    return (
      <div>
        <div>
          {this.context.country}
        </div>
        <div onClick={this.handel}>
          点击向上层传递信息
      </div>
      </div>
    )
  }
}

Child.contextTypes = {
  country: PropTypes.string,
  changeCountry: PropTypes.func
}

//父组件
class Father extends Component {
  render() {
    return (
      <div>
        <Child />
      </div>
    )
  }
}

class GrandFather extends Component {
  constructor() {
    super();
    // this.country = 'china';
    this.state = {
      country: 'china'
    }
  }

  changeCountry = (param) => {
    console.log(param);
  }

  getChildContext() {
    return {
      country: this.state.country,
      changeCountry: this.changeCountry
    }
  }

  render() {
    return (
      <div>
        <Father />
      </div>
    )
  }
}

GrandFather.childContextTypes = {
  country: PropTypes.string,
  changeCountry: PropTypes.func
}

export default GrandFather;

ReactDOM.render(<GrandFather />,
  document.getElementById('root'));
