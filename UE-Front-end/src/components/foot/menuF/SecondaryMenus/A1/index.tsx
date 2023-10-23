import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import { Slider } from 'antd'
import slider from '../../../../../assets/image/slider.png'
import vernier from '../../../../../assets/image/vernier.png'
import { callUe4ByMenu } from '../../../../../util/ue'
import { Translate } from '../../../../Translate'
import { useNavigate } from 'react-router'
import { menus } from '../../menus'

const SecondaryA1: React.FC = () => {
    const [value, setValue] = useState(0)
    const navigate = useNavigate()

    // let auto: any = null

    // const funcA = () => {
    //     console.log(value)
    //     auto = setTimeout(() => {
    //         switch(value){
    //             case 0: navigate('/groupIntro/cschlIntro'); break
    //             case 1: navigate('/groupIntro/domestic'); break
    //             case 2: navigate('/groupIntro/sevenSeries'); break
    //             case 3: navigate('/groupIntro/important'); break
    //             case 4: navigate('/groupIntro/cscecInter'); break
    //         }
    //         setValue(value + 1)
    //     }, 6000)
    // }

    // const funcB = () => {
    //     clearTimeout(auto)
    // }

    // useEffect(() => {
    //     if(value === 5) {
    //         setValue(0)
    //     } else {
    //         funcA()
    //     }
    // }, [value])

    const props = {
        max: 4,
        min: 0
    }

    const formatter = (name: any) => {
        return <div style={{ fontSize: '0.75rem', width: '7vw', textAlign: 'center' }}><Translate id={`A1B${name + 1}`} /></div>
    }

    const changeSlider = (e: any) => {
        navigate(`${menus[0].path}${menus[0].children![e].path}`)
        setValue(e)
        callUe4ByMenu({
            key: menus[0].children![e].tag + menus[0].children![e].name,
            cn: menus[0].children![e].name,
            parameters: {
                Menu: menus[0].children![e].tag
            }
        })
    }

    const turnLeft = () => {
        if(value !== 0) {
            changeSlider(value - 1)
        }
    }

    const turnRight = () => {
        if(value !== 4) {
            changeSlider(value + 1)
        }
    }

    return (
        <div className={style.slider}>
            <Slider {...props} value={value} onChange={changeSlider}
                railStyle={{ backgroundColor: 'rgba(0,0,0,0)', height: '2vh' }}
                trackStyle={{ backgroundColor: 'rgba(0,0,0,0)', height: '2vh' }}
                handleStyle={{
                    backgroundImage: `url(${vernier})`,
                    height: '5vh',
                    width: '7vw',
                    backgroundSize: '100% 100%',
                    top: '-5.2vh'
                }}
                tooltip={{
                    open: true,
                    formatter: (name) => formatter(name)
                }}
            />
            <img src={slider} className={style.sliderImg} />
            <div className={style.turn} style={{ left: '-1vw' }} onClick={turnLeft} />
            <div className={style.turn} style={{ right: '-1vw' }} onClick={turnRight} />
        </div>
    )
}

export default SecondaryA1