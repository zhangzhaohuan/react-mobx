import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
// import { queryTest } from 'common/axios/axios.js'

@inject('test')
@observer
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.test = this.props.test;
    // console.log(this.test);
  }

  componentDidMount() {
    const params = {};
    this.test.queryTest(params);
  }
  render() {
    return (
      <div>
        <p>{this.test.getDataLength}</p>
        <p>{this.test.age}</p>
        <p>{this.test.getAge.toString()}</p>
        {/* <p>{this.test.getlength.get()}</p> */}


      </div>
    )
  }
}