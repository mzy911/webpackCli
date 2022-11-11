
import {useState, useEffect} from 'react'

const useClock = () => {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    let timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    console.log('挂在')
      
    // 清除定时器，类似willUnmount
    return () => {
      console.log('卸载')
      clearInterval(timer)
      timer = null
    }
  }, [])
  return date
}

export default useClock