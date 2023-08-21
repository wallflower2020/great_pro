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
            <img src={title} style={{ height: '100%' }}/>
        </div>
    </>
}

export default Head;