import React, { useEffect } from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router';
import { callUe4ByMenu } from '../../../util/ue'
import menu from '../../../assets/image/menu.png'
import menu1 from '../../../assets/image/menuB1.png'
import menu2 from '../../../assets/image/menuB2.png'
import menu3 from '../../../assets/image/menuB3.png'
import menu4 from '../../../assets/image/menuB4.png'
import menu5 from '../../../assets/image/menuB5.png'
import menu6 from '../../../assets/image/menuB6.png'

const MenuF: React.FC<any> = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/testPageOne')
    }, [])

    const menuB: Array<string> = [menu1, menu2, menu3, menu4, menu5, menu6]

    const buttonArr = [
        {
            han: '集团介绍',
            en: 'GROUP OVERVIEW',
            tag: 'A1B1',
        },
        {
            han: '片区介绍',
            en: 'ARER OVERVIEW',
            tag: 'A2'
        },
        {
            han: '公司介绍',
            en: 'CO. OVERVIEW',
            tag: 'A3'
        },
    ]

    const handleClick = (param: any) => {
        console.log("测试数据", param.han)
        if(param.han === '公司介绍') {
            navigate('/digitalLargeScreen')
        } else if(param.han === '片区介绍') {
            navigate('/testPageTwo')
        } else {
            navigate('/testPageOne')
        }

        callUe4ByMenu({
            key: param.tag
        })
    }

    const changeColor = (e: any) => {
        e.target.src = menuB[Number(e.target.alt) + 3]
    }

    const changeBack = (e: any) => {
        e.target.src = menuB[Number(e.target.alt)]
    }

    return (
        <div className={style.bottomMenu}>
            {
                buttonArr.map((item, index) => {
                    return (
                        <div className={style.button} onClick={() => handleClick(item)} key={item.tag}>
                            <img src={menuB[index]} alt={index.toString()} className={style.menuButton} onMouseOver={changeColor} onMouseOut={changeBack}/>
                            <div className={style.en}>{item.en}</div>
                            <div className={style.han}>{item.han}</div>
                        </div>
                    )
                })
            }
            <img src={menu} className={style.menuImg} />
        </div>
    )
}

export default MenuF;