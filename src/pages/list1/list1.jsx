import { Component } from 'react'
import { AtNoticebar } from 'taro-ui'
import { View } from '@tarojs/components'

import './list1.scss'
import { TextAndImage } from '../../components/text/text'

class Index extends Component {
    constructor () {
      super()
    }
    
    
    render () {
      return (
        <View>
          <AtNoticebar 
            marquee
            icon='volume-plus'
            close
          >
            这是一条公告公告高高告公告高高告公告公告高高告高高告公告高高告公告高高
          </AtNoticebar>
          <TextAndImage></TextAndImage>
          </View>
      )
    }
    }
    
    export default Index