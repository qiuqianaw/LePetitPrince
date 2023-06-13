import { View, Text } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { Button } from 'antd-mobile'

import './index.scss'


const Index = () => {

  const [text, setText] = useState('Hello world!')

  useEffect(() => {
    setTimeout(() => {
      setText('aowu')
    }, 1000)
  }, [])
  
  return (
    <View className='index'>
      <Text>{text}</Text>
      <Button color='primary' fill='solid'>
        Button
      </Button>
    </View>
  ) 
}

export default Index