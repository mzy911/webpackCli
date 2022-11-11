import React, {useMemo, useState} from 'react'
import Son from './Son'

const MemoCallBack = () => {
  const [count, setCount] = useState(0)
  const [sex, setSex] = useState('男')
 
  // const changeCount = useCallback(() => {
  //   setCount(count + 1)
  // }, [sex])

  const arr = useMemo(() => {
    return [
      {sex: sex, age: 12}, 
      {sex: '女', age: 18}, 
      {sex: '男', age: 6}
    ]
  }, [sex])

  return (
    <div>
      {/* 事件1 */}
      <button onClick={() => { setCount(count + 1) }}>点击</button>

      {/* 事件2 */}
      <button onClick={() => { setSex(sex === '男' ? '女' : '男') }}>改变性别：{sex}</button>

      {/* 事件3 */}
      {/* <button onClick={() => { setArr([...arr, {sex: '男', age: Date.now()}]) }}>新增人员</button> */}


      {/* useMemo */}
      <Son arr={arr}></Son>


      {/* useCallback */}
      {/* <Son changeCount={changeCount}></Son> */}
    </div>
  )
}


export default MemoCallBack
