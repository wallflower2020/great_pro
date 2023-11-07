import React, { useState } from "react";
import en1 from "./images/en1.png"
import en2 from "./images/en2.png"
import en3 from "./images/en3.png"
import en4 from "./images/en4.png"
import en5 from "./images/en5.png"
import en6 from "./images/en6.png"
import en7 from "./images/en7.png"
import close from "./images/close.png"
import { Carousel } from "antd";
import style from "./style.module.css"

const Environment: React.FC = () => {
    const [show, setShow] = useState(true)
    return (
        <div className={style.box} style={{ display: show? '' : 'none'}}>
            <img src={close} className={style.close} onClick={() => setShow(false)}/>
            <Carousel arrows={true}>
                <div><img src={en1} className={style.img} /></div>
                <div><img src={en2} className={style.img} /></div>
                <div><img src={en3} className={style.img} /></div>
                <div><img src={en4} className={style.img} /></div>
                <div><img src={en5} className={style.img} /></div>
                <div><img src={en6} className={style.img} /></div>
                <div><img src={en7} className={style.img} /></div>
            </Carousel>
        </div>
    )
}

export default Environment