import  { Component } from 'react'
import { AtTabBar } from 'taro-ui'

import './bottom.scss'

class Bottom extends Component {
    constructor () {
      super(...arguments)
      this.state = {
        current: 0
      }
    }
    handleClick (value) {
      this.setState({
        current: value
      })
    }
    render () {
      return (
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'home' },
            { title: '测试', iconType: 'heart' },
        ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      )
    }
  }

  export {Bottom}