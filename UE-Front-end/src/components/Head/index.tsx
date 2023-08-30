import React from "react";
import style from './style.module.css'
import title from '../../assets/image/title.png'
import { Clock } from "../Clock";

const Head: React.FC = () => {
    return <>
        <div className={style.head}>
            <div className={style.clock}>
                <Clock />
            </div>
            <div className={style.title} >城市价值</div>
            <img src={title} className={style.titleImg} />
            <div className={style.titleEn} >GROUP OVERVIEW</div>
        </div>
    </>
}

export default Head;