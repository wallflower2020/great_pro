import React from "react";
import style from './style.module.css'

const Yellowpage: React.FC = () => {

    return (
        <div className={style.ypage}>
            <div className={style.line1}>
                <div className={style.box1}>111</div>
                <div className={style.box2}>
                    222
                </div>
                <div className={style.box3}>333</div>
            </div>
            <div className={style.line2}>
                <div className={style.box4}>444</div>
                <div className={style.box5}>555</div>
                <div className={style.box6}>666</div>
                <div className={style.box7}>777</div>
            </div>
        </div>
    )
}

export default Yellowpage