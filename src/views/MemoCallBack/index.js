import React, {useCallback, useMemo, useState} from 'react'
import Son from './Son'

const MemoCallBack = () => {
  const [count, setCount] = useState(0)
  const [sex, setSex] = useState('男')
 
  const changeCount = useCallback(() => {
    setCount(count + 1)
  }, [sex])

  return (
    <div>
      {/* 事件1 */}
      <button onClick={() => { setCount(count + 1) }}>点击</button>

      {/* 事件2 */}
      <button onClick={() => { setSex(sex === '男' ? '女' : '男') }}>改变性别：{sex}</button>

      <Son changeCount={changeCount}></Son>
    </div>
  )
}


export default MemoCallBack
