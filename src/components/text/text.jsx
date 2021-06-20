import { Component } from 'react' 
import { View, Image } from '@tarojs/components'

import data from '../../data/data.json'
import './text.scss'

class TextAndImage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return(
      <View>
        {
          data.新书速递.map( item => {
            return(
            <View style='height:200px;' className='at-row'>
            <View className='jz ' style='width:145px; height:200px;'>
              <Image className='dx' src={item}></Image>
            </View>
            </View>
            )
          })
        }
      </View>
    )
  }
}
export { TextAndImage }