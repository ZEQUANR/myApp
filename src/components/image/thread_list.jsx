import  { Component } from 'react'
import { Swiper, SwiperItem, Image } from '@tarojs/components'

import data from '../../data/data.json'
import './thread_list.scss'


class App extends Component {
  constructor(){
    super(...arguments)
  }
  
  render (){
    const list = this.props.list
    return (
    <Swiper
      className='test-h'
      displayMultipleItems='3'
      circular
    >
      
      {data[list].map( item => {
      return (
        <SwiperItem>
        <Image 
          className='at-col at-col--auto Padd' 
          src={item}
        />
        </SwiperItem>
      )
    })}
      
    </Swiper>
  )
  }

}

export {App}