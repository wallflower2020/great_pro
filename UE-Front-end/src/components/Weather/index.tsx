import React, { useState } from 'react'
import style from './style.module.css'
import sun from '../../assets/image/sun.png'
import weather from '../../assets/image/weather.png'
import rain from '../../assets/image/rain.png'
import cloud from '../../assets/image/cloud.png'
import snow from '../../assets/image/snow.png'
import { callUe4ByTitle } from '../../util/ue'

export const Weather: React.FC = () => {

    const [show, setShow] = useState(false)
    const [w, setW] = useState(sun)

    const showWeather = () => {
        setShow(!show)
    }

    const changeWeather = (w: string, v: string) => {
        setW(w)
        callUe4ByTitle({
            key: 'Weather',
            cn: '天气切换',
            parameters: {
                value: v
            }
        })
    }

    return (
        <div className={style.funcbox} onClick={showWeather}>
            <img alt="sweather" src={w} style={{ width: '1.1vw' }} />
            <div className={style.weather} style={{ display: show? 'flex' : 'none' }}>
                <img alt="lang" src={weather} className={style.weatherimg}/>
                <div className={style.funcbox} onClick={() => changeWeather(sun, 'sun')}>
                    <img alt="sun" src={sun} style={{ width: '1.1vw' }} />
                </div>
                <div className={style.funcbox} onClick={() => changeWeather(rain, 'rain')}>
                    <img alt="rain" src={rain} style={{ width: '1.1vw' }} />
                </div>
                <div className={style.funcbox} onClick={() => changeWeather(cloud, 'cloud')}>
                    <img alt="cloud" src={cloud} style={{ width: '1.1vw' }} />
                </div>
                <div className={style.funcbox} onClick={() => changeWeather(snow, 'snow')}>
                    <img alt="snow" src={snow} style={{ width: '1.1vw' }} />
                </div>
            </div>
        </div>
    )
}