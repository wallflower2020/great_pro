import React from "react";
import style from './style.module.css'
import logo from '../../assets/image/logo.png'
import cut from '../../assets/image/menucut.png'
import { Clock } from "../Clock";
import setting from '../../assets/image/setting.png'
import sound from '../../assets/image/sound.png'
import close from '../../assets/image/close.png'
import { TransButton } from "../Translate/TransButton";
import { Weather } from "../Weather";
import { Timeline } from "../Timeline";

const Head: React.FC = () => {

    return <>
        <div className={style.head}>
            <img alt="logo" src={logo} className={style.logo} />
            <img alt="cut" src={cut} className={style.cut} />
            <div className={style.clock}>
                <Clock />
            </div>
            <Timeline />
            <div className={style.func}>
                <TransButton />
                <Weather />
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
        </div>
    </>
}

export default Head;