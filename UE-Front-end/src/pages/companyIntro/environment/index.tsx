import React from "react";
import en1 from "./images/en1.jpg"
import en2 from "./images/en2.jpg"
import en3 from "./images/en3.jpg"
import en4 from "./images/en4.jpg"
import en5 from "./images/en5.jpg"
import en6 from "./images/en6.jpg"
import en7 from "./images/en7.jpg"
import { Carousel } from "antd";
import style from "./style.module.css"

const Environment: React.FC = () => {
    return (
        <div className={style.box}>
            <Carousel autoplay arrows={true}>
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