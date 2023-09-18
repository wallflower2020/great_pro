import React, { useState } from "react";
import cut from '../../assets/image/cut.png'
import style from './style.module.css'
import { callUe4ByTitle } from "../../util/ue";

export const Cut: React.FC = () => {
    const [c, setC] = useState(false)

    const changeCut = () => {
        if(c) {
            setC(false)
            callUe4ByTitle({
                key: 'CutClose',
                cn: '剖切关闭',
                parameters: {
                    cut: 'close'
                }
            })
        } else {
            setC(true)
            callUe4ByTitle({
                key: 'CutOpen',
                cn: '剖切开启',
                parameters: {
                    cut: 'open'
                }
            })
        }
    }

    return (
        <div>
            {
                c? 
                <div className={style.cutbox1} onClick={changeCut}>
                    <img alt="cut" src={cut} style={{ width: '1.1vw' }} />
                </div> : 
                <div className={style.cutbox} onClick={changeCut}>
                    <img alt="cut" src={cut} style={{ width: '1.1vw' }} />
                </div>
            }
        </div>
    )
}