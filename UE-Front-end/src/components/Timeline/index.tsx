import React from 'react'
import timeline from '../../assets/image/timeline.png'
import circle from '../../assets/image/circle1.png'
import style from './style.module.css'
import { Slider } from 'antd'
import { callUe4ByTitle } from '../../util/ue'

export const Timeline: React.FC = () => {
    const props = {
        min: 0,
        max: 24
    }

    const changeTime = (e: number) => {
        callUe4ByTitle({
            key: e
        })
    }

    return (
        <div className={style.time}>
            <img alt="timeline" src={timeline} className={style.timeline} />
            <div className={style.slider}>
                <Slider
                    {...props}
                    tooltip={{ formatter: null }}
                    railStyle={{ display: 'none' }}
                    trackStyle={{ display: 'none' }}
                    handleStyle={{
                        height: '1.2vh',
                        width: '1.2vh',
                        backgroundImage: `url(${circle})`,
                        backgroundSize: '100% 100%',
                    }}
                    onChange={changeTime}
                />
            </div>
        </div>
    )
}