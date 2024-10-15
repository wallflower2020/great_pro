import { useEffect, useRef, useState } from 'react'
import './Clock.css'

export const Clock = () => {
  const timmer: any = useRef()
  const [Hour, setHour] = useState(0);
  // const [Seconds, setSeconds] = useState('');
  const [Minutes, setMinutes] = useState('');
  const [Year, setYear] = useState(0);
  const [Month, setMonth] = useState(0);
  const [Day, setDay] = useState(0);
  const [Weekday, setWeekday] = useState(0)

  const weekdayMap: any = {
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    7: '日'
  }

  const getNewDate = () => {
    const time: Date = new Date();
    const year: number = time.getFullYear();
    const month: number = time.getMonth() + 1;
    const day: number = time.getDate();
    const wday: number = time.getDay()
    const hour: number = time.getHours();
    const minutes: any = time.getMinutes();
    // const s = time.getSeconds();
    // const seconds: any = s <= 9 ? "0" + s : s;
    // const t = `${year}年${month}月${day}日 ${hour}:${minutes}:${seconds}`
    setHour(hour)
    // setSeconds(seconds)
    if (minutes < 10) {
      setMinutes(`0${minutes}`)
    } else {
      setMinutes(minutes)
    }
    setYear(year)
    setMonth(month)
    setDay(day)
    setWeekday(weekdayMap[wday])
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
      <span className='hourclass'>
        <span>{Hour}</span>
        {Hour && <span style={{ margin: '0 2px' }}>{':'}</span>}
        <span>{Minutes}</span>
      </span>
      {/* <span className='secondsclass'>
        {Seconds}
      </span> */}
      <div className='dateclass'>
        {/* {Weekday && <p style={{ fontSize: 20, marginBottom: 5, fontWeight: 'bold' }}>
          {`星期${Weekday}`}
        </p>}
        {Month && <p style={{ fontSize: 15, fontWeight: 'bold' }}>
          {`${Year}年${Month}月${Day}日`}
        </p>} */}
        <div>{`${Year}年${Month}月${Day}日`}</div>
        <div>{`星期${Weekday}`}</div>
      </div>
    </div>
  )
}
