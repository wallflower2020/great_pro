import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router';
import { callUe4ByMenu } from '../../../util/ue'
import button1 from '../../../assets/image/button1.png'
import button2 from '../../../assets/image/button2.png'
import go from '../../../assets/image/GO.png'
import { Translate } from '../../Translate';

const MenuF: React.FC<any> = () => {
    const navigate = useNavigate()
    const [curr, setCurr] = useState(0)

    useEffect(() => {
        navigate('/testPageOne')
    }, [])

    const menuB: Array<string> = [button1, button2]

    const buttonArr = [
        {
            han: '集团介绍',
            en: 'groupIntroduction',
            tag: 'A1B1',
        },
        {
            han: '片区介绍',
            en: 'arerIntroduction',
            tag: 'A2'
        },
        {
            han: '公司介绍',
            en: 'companyIntroduction',
            tag: 'A3'
        },
    ]

    const handleClick = (param: any) => {
        if(param.han === '公司介绍') {
            navigate('/digitalLargeScreen')
            setCurr(2)
        } else if(param.han === '片区介绍') {
            navigate('/testPageTwo')
            setCurr(1)
        } else {
            navigate('/testPageOne')
            setCurr(0)
        }

        callUe4ByMenu({
            key: param.tag
        })
    }

    const changeColor = (e: any) => {
        if(curr !== Number(e.target.alt)) {
            e.target.src = menuB[1]
        }
    }

    const changeBack = (e: any) => {
        if(curr !== Number(e.target.alt)) {
            e.target.src = menuB[0]
        }
    }

    return (
        <div className={style.bottomMenu}>
            {
                buttonArr.map((item, index) => {
                    return (
                        <div className={style.button} style={{ left: `${0.7 + 8.2 * index}vw` }} onClick={() => handleClick(item)} key={item.tag}>
                            <img src={curr === index ? menuB[1] : menuB[0]} alt={index.toString()} className={style.menuButton} onMouseOver={changeColor} onMouseOut={changeBack}/>
                            <img src={go} className={style.en} />
                            <div className={style.han}>
                                <Translate id={item.en} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuF;