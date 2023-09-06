import React, { useState } from 'react'
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
            setValue(value - 1)
            callUe4ByMenu({
                key: `A1B${value}`
            })
        }
    }

    const turnRight = () => {
        if(value !== 5) {
            setValue(value + 1)
            callUe4ByMenu({
                key: `A1B${value + 2}`
            })
        }
    }

    return (
        <div className={style.slider}>
            <Slider {...props} value={value} onChange={changeSlider}
                railStyle={{ display: 'none' }}
                trackStyle={{ display: 'none' }}
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
            {/* <div 
                style={{
                    position: 'absolute',
                    height: '3vh',
                    width: '2vw',
                    top: '0',
                    left: '-2.3vw',
                }}
                onClick={turnLeft}
            />
            <div 
                style={{
                    position: 'absolute',
                    height: '3vh',
                    width: '2vw',
                    top: '0',
                    right: '-2.3vw',
                }}
                onClick={turnRight}
            /> */}
        </div>
    )
}

export default SecondaryA1