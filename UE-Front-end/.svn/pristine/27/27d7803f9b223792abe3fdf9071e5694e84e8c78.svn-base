import React from "react";
import style from './style.module.css'
import title from '../../assets/image/title.png'
import { Clock } from "../Clock";
import { TransButton } from "../Translate/TransButton";
import { Translate } from "../Translate";

const Head: React.FC = () => {
    return <>
        <div className={style.head}>
            <div className={style.clock}>
                <Clock />
            </div>
            <div className={style.title} >
                <Translate id="cityValue" />
            </div>
            <img src={title} className={style.titleImg} />
            <div className={style.titleEn} >GROUP OVERVIEW</div>
            <div className={style.translate}>
                <TransButton />
            </div>
        </div>
    </>
}

export default Head;