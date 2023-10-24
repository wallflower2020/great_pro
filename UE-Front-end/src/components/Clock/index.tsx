import { useEffect, useRef, useState } from 'react'
import './Clock.css'

interface clockProps {
  getHour?: Function
}

export const Clock = (props: clockProps) => {
  const { getHour } = props
  const timmer: any = useRef()
  const [Hour, setHour] = useState(0);
  const [Minutes, setMinutes] = useState('');

  const getNewDate = () => {
    const time: Date = new Date();
    const hour: number = time.getHours();
    const minutes: any = time.getMinutes();
    // const t = `${year}年${month}月${day}日 ${hour}:${minutes}:${seconds}`
    setHour(hour)
    getHour&&getHour(hour)
    if (minutes < 10) {
      setMinutes(`0${minutes}`)
    } else {
      setMinutes(minutes)
    }
  }

  useEffect(() => {
    timmer.current = setInterval(getNewDate, 1000);
    return () => {
      clearTimeout(timmer.current)
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div className="clockclass">
      {/* <span className='hourclass'> */}
        <span>{Hour > 12 ? 'PM' : 'AM'}</span>
        <span style={{ margin: '0 2px' }}>{':'}</span>
        <span>{Hour > 12 ? (Hour - 12) : Hour}</span>
        {Hour && <span style={{ margin: '0 2px' }}>{':'}</span>}
        <span>{Minutes}</span>
      {/* </span> */}
      {/* <span className='secondsclass'>
        {Seconds}
      </span> */}
      {/* <div className='dateclass'>
        {Weekday && <p style={{ fontSize: 20, marginBottom: 5, fontWeight: 'bold' }}>
          {`星期${Weekday}`}
        </p>}
        {Month && <p style={{ fontSize: 15, fontWeight: 'bold' }}>
          {`${Year}年${Month}月${Day}日`}
        </p>}
      </div> */}
    </div>
  )
}
