import { Component } from 'react'
import { View } from '@tarojs/components'
import { AtSearchBar, AtDivider  } from 'taro-ui'
import { Hello } from '../../components/title/thread_list'
import { App } from '../../components/image/thread_list'

import './index.scss'
import { Bottom } from '../../components/bottom/bottom'


class Index extends Component {
constructor () {
  super(...arguments)
  this.state = {
    value: ''
  }
}

onChange (value) {
  this.setState({
    value: value
  })
}

render () {
  return (
    <View>
    <AtSearchBar value={this.state.value} onChange={this.onChange.bind(this)} />
    <AtDivider 
      height='20'
    />
    <Hello
      title='新书速递'
      link='/pages/list1/list1'
    />
    <AtDivider 
      height='20'
    />
    <App
      list='新书速递'
    />
    <AtDivider 
      height='20'
    />
    <Hello
      title='近期热门'
    />
    <AtDivider 
      height='20'
    />
    <App
      list='近期热门'
    />
    <AtDivider 
      height='20'
    />
    <Hello
      title='为你推荐'
    />
    <AtDivider 
      height='20'
    />
    <App
      list='为你推荐'
    />
    <View 
      style='height:75px'
    >
    </View>
    <Bottom></Bottom>
    </View>
  )
}
}

export default Index
