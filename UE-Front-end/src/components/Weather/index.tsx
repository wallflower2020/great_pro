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

    const changeWeather = (wea: string) => {
        if (wea === 'Sun') {
            setW(sun)
        } else if (wea === 'Rain') {
            setW(rain)
        } else if (wea === 'Cloud') {
            setW(cloud)
        } else {
            setW(snow)
        }
        callUe4ByTitle({
            key: wea
        })
    }

    return (
        <div className={style.funcbox} onClick={showWeather}>
            <img alt="sweather" src={w} style={{ width: '1.1vw' }} />
            <div className={style.weather} style={{ display: show? 'flex' : 'none' }}>
                <img alt="lang" src={weather} className={style.weatherimg}/>
                <div className={style.funcbox} onClick={() => changeWeather('Sun')}>
                    <img alt="sun" src={sun} style={{ width: '1.1vw' }} />
                </div>
                <div className={style.funcbox} onClick={() => changeWeather('Rain')}>
                    <img alt="rain" src={rain} style={{ width: '1.1vw' }} />
                </div>
                <div className={style.funcbox} onClick={() => changeWeather('Cloud')}>
                    <img alt="cloud" src={cloud} style={{ width: '1.1vw' }} />
                </div>
                <div className={style.funcbox} onClick={() => changeWeather('Snow')}>
                    <img alt="snow" src={snow} style={{ width: '1.1vw' }} />
                </div>
            </div>
        </div>
    )
}