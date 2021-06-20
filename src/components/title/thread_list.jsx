
import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { AtIcon }  from 'taro-ui'
import Taro from '@tarojs/taro'

import './thread_list.scss'

class Hello extends Component {
constructor (props){
    super(props)
    this.title = this.props.title
    this.link = this.props.link
}

click (){
    Taro.navigateTo({url: this.link })
  }

render(){
    return(
        <View className='at-row at-row__align--center' style='height:35px;' onClick={this.click.bind(this)}>
            <Text className='at-col at-col__offset-1'>{this.title}</Text>
            <AtIcon value='chevron-right' size='20' color='black'></AtIcon>
        </View>
    )
}

}

export {Hello}