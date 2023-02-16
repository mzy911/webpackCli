import React from 'react'
import {Tag, Button} from '@mzy123/customcomponentlib'

function Car (){
  return (
    <div>
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


      <div>
        <h1>Button</h1>
        <Button type="primary">点击</Button>
      </div>
    </div>
  )
}

export default Car