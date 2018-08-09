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

  /**
   * 在组件添加@observer后，会多一个生命周期componentWillReact。
   * 当组件内被observable观测的数据改变后，就会触发这个生命周期。
   */
  componentWillReact() {
    console.log('in');
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