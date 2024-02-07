import React, { useState } from 'react'
import timeline from '../../assets/image/timeline.png'
import circle from '../../assets/image/circle1.png'
import style from './style.module.css'
import { Slider } from 'antd'
import { callUe4ByTitle, getUe4Interface } from '../../util/ue'

/**
 * 
 * @returns 时间滑动条组件
 * 精确到半小时，向UE发送时间变更指令
 */
export const Timeline: React.FC = () => {
    const [time, setTime] = useState(56)

    getUe4Interface().SetWebTime = (param: string) => {
        setTime(Number(param) * 4)
    }

    const props = {
        min: 0,
        max: 96
    }

    // const socket = new WebSocket('ws://localhost:8848'); 

    // socket.addEventListener('open', (event) => {
    //     console.log('已经连接成功', event)
    // })

    // socket.addEventListener('message', (event) => {
    //     console.log('收到消息:', event)
    //     if(event.data === '5') {
    //         changeTime(time + 10)
    //     } else if(event.data === '6') {
    //         changeTime(time - 10)
    //     }
    // })

    const changeTime = (e: number) => {
        callUe4ByTitle({
            key: 'TimeLine',
            cn: '时间线',
            parameters: {
                Time: (e / 4).toString()
            }
        })
        setTime(e)
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
                    value={time}
                />
            </div>
        </div>
    )
}