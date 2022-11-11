import React, {useState, useRef} from 'react'
import useClock from '../../Hooks/useClock'
import useTitle from '../../Hooks/useTitle'
import useForceUpdate from '../../Hooks/useForceUpdate'

const UseHook = () => {
  const update = useForceUpdate()
  return (
    <div>
      {/* 定时器 */}
      <div>
        {/* 定时器：{useClock().toLocaleTimeString()} */}
      </div>

      {/* 动态标题 */}
      <div>
        {useTitle('UseHook')}
      </div>

      {/* 强制更新组件 */}
      <div><button onClick={update}>update</button></div>
    </div>
  )
}

export default UseHook
