import React from 'react'
import {Tag} from '@mzy123/customcomponentlib'

function Car (){
  return (
    <div>
      <Tag color="#06c">标签</Tag>
      <Tag color="red">标签</Tag>
      <Tag color="orange">标签</Tag>
      <Tag>标签</Tag>
      <Tag color="green" closable>
        标签
      </Tag>
      <Tag closable>标签</Tag>
    </div>
  )
}

export default Car