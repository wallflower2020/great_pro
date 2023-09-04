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
            {/* <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="611" height="180" viewBox="0 0 611 180">
                    <g id="矩形_1" data-name="矩形 1" fill="#ff2727" stroke="#707070" stroke-width="1">
                        <rect width="611" height="180" rx="32" stroke="none" />
                        <rect x="0.5" y="0.5" width="610" height="179" rx="31.5" fill="none" />
                    </g>
                </svg>
            </div> */}
        </div>
    </>
}

export default Head;