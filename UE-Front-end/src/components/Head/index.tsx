import React, { useState } from "react";
import style from './style.module.css'
import logo from '../../assets/image/logo.png'
import cut from '../../assets/image/menucut.png'
import timeline from '../../assets/image/timeline.png'
import circle from '../../assets/image/circle1.png'
import { Clock } from "../Clock";
// import en from '../../assets/image/en.png'
import sun from '../../assets/image/sun.png'
import setting from '../../assets/image/setting.png'
import sound from '../../assets/image/sound.png'
import close from '../../assets/image/close.png'
import { TransButton } from "../Translate/TransButton";
import { Translate } from "../Translate";

const Head: React.FC = () => {
    const [p, setP] = useState(0)

    // 目前时间线方案：更新精度为小时，不可移动
    const setPercent = (h: any) => {
        setP(h/24)
        // console.log('小时', h)
    }

    return <>
        <div className={style.head}>
            <img alt="logo" src={logo} className={style.logo} />
            <img alt="cut" src={cut} className={style.cut} />
            <div className={style.clock}>
                <Clock getHour={(h: any) => setPercent(h)} />
            </div>
            <div className={style.time}>
                <img alt="timeline" src={timeline} className={style.timeline} />
                <img alt="circle1" src={circle} className={style.circle1} style={{ left: `${p * 90 + 4}%` }}/> 
            </div>
            <div className={style.func}>
                <TransButton />
                <div className={style.funcbox}>
                    <img alt="sun" src={sun} style={{ width: '1.1vw' }} />
                </div>
                <div style={{ width: '0.2vw' }}/>
                <div className={style.funcbox}>
                    <img alt="setting" src={setting} style={{ width: '1.1vw' }} />
                </div>
                <div className={style.funcbox}>
                    <img alt="sound" src={sound} style={{ width: '1.1vw' }} />
                </div>
                <div className={style.funcbox}>
                    <img alt="close" src={close} style={{ width: '1.1vw' }} />
                </div>
                <div style={{ width: '0.2vw' }} />
            </div>
            {/* <div className={style.clock}>
                <Clock />
            </div>
            <div className={style.title} >
                <Translate id="cityValue" />
            </div>
            <img src={title} className={style.titleImg} />
            <div className={style.titleEn} >GROUP OVERVIEW</div>
            <div className={style.translate}>
                <TransButton />
            </div> */}
        </div>
    </>
}

export default Head;