import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
// import { queryTest } from 'common/axios/axios.js'
import { Button } from 'antd';

@inject('test')
@observer
export default class Test extends Component {
  constructor(props) {
    super(props);
    // console.log(this.test);
    this.state = {
      aa: 11
    }
  }

  componentDidMount() {
    const params = {};
    this.props.test.queryTest(params);
  }

  /**
   * 在组件添加@observer后，会多一个生命周期componentWillReact。
   * 当组件内被observable观测的数据改变后，就会触发这个生命周期。
   */
  componentWillReact() {
    console.log('run');
    console.log(this.props.test.age);
  }

  componentWillMount() {
    console.log(1);

  }
  componentDidMount() {
    console.log(0);

  }

  handelClick = () => {
    console.log('handel');

    this.setState({
      aa: this.state.aa + 1
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.test.getDataLength}</p>
        {/* <p>{this.test.age}</p> */}
        {/* <p>{this.props.test.age.toString()}</p> */}
        <p>{1234}</p>
        <Button type="primary" onClick={this.handelClick}>Primary</Button>
        {/* <p>{this.test.getlength.get()}</p> */}
        <p>{this.state.aa>1?'aa':'bb'}</p>
      </div>
    )
  }
}