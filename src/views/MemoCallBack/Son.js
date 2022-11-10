import React, {useEffect, memo} from 'react'

const Son = ({changeCount}) => {
  // console.log('pp')
  console.log('changeCount')
  // console.log('是否触发了子组件更新', arr)
  return (
    <>
      子组件
    </>
  )
}


export default memo(Son) 
// export default Son 
