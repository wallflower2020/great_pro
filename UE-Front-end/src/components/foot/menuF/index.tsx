import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router';
import { callUe4ByMenu } from '../../../util/ue'
import button1 from '../../../assets/image/button1.png'
import button2 from '../../../assets/image/button2.png'
import go from '../../../assets/image/GO.png'
import ao from '../../../assets/image/AO.png'
import co from '../../../assets/image/CO.png'
import { Translate } from '../../Translate';
import { menus } from './menus';
import SecondaryA1 from './SecondaryMenus/A1';
import SecondaryA2 from './SecondaryMenus/A2';

const MenuF: React.FC<any> = () => {
    const navigate = useNavigate()
    const [curr, setCurr] = useState(0)

    useEffect(() => {
        navigate('/groupIntro')
    }, [])

    const menuB: Array<string> = [button1, button2]
    const menuEn: Array<string> = [go, ao, co]

    const handleClick = (param: any) => {
        if(param.name === '公司介绍') {
            setCurr(2)
        } else if(param.name === '片区介绍') {
            setCurr(1)
        } else {
            setCurr(0)
        }

        callUe4ByMenu({
            key: param.tag + param.name,
            cn: param.name,
            parameters: {
                Menu: param.tag
            }
        })

        navigate(param.path)
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
                menus?.map((item, index) => {
                    return (
                        <div className={style.button} style={{ left: `${0.7 + 8.2 * index}vw` }} onClick={() => handleClick(item)} key={item.tag}>
                            <img src={curr === index ? menuB[1] : menuB[0]} alt={index.toString()} className={style.menuButton} onMouseOver={changeColor} onMouseOut={changeBack}/>
                            <img src={menuEn[index]} className={style.en} />
                            <div className={style.han}>
                                <Translate id={item.en} />
                            </div>
                        </div>
                    )
                })
            }
            {(curr === 0) && <SecondaryA1 />}
            {(curr === 1) && <SecondaryA2 />}
        </div>
    )
}

export default MenuF;