import React, {memo} from 'react'


// useMemo
const Son = ({arr}) => {
  console.log('arr')
  return (
    <>
      {
        arr.map((item) => (
          <div key={item.age}>姓名：{item.sex}, 年龄：{item.age}</div>
        ))
      }
    </>
  )
}

// useCallback
// const Son = ({changeCount}) => {
//   console.log('changeCount')
//   return (
//     <>
//       子组件
//     </>
//   )
// }


export default memo(Son) 
// export default Son 
