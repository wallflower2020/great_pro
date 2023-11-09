import React, { useState, useEffect } from 'react'
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
    const [flag, setFlag] = useState(-2)
    const [ddd, setDdd] = useState(false)
    const navigate = useNavigate()

    
    // 前端遥控通信逻辑（填写ws服务监听端口）

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8848'); 

        socket.addEventListener('open', (event) => {
            console.log('已经连接成功', event)
        })

        socket.addEventListener('message', (event) => {
            console.log('收到消息:', event)
            if(event.data === '1') {
                setFlag(-1)
            } else if(event.data === '2') {
                funcB()
            } else if(event.data === '3') {
                setDdd(true)
            } else if(event.data === '4') {
                setDdd(false)
            }
        })
    })

    let auto: any = null

    const funcA = () => {
        auto = setTimeout(() => {
            changeSlider(flag + 1)
            setFlag(flag + 1)
        }, 3000)
    }

    const funcB = () => {
        clearTimeout(auto)
    }

    useEffect(() => {
        if(flag > -2) {
            if(flag === 4) {
                setFlag(-1)
            } else { 
                funcA()
            }
        }
    }, [flag])

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

    const resetPage = () => {
        callUe4ByMenu({
            key: menus[0].children![value].tag + menus[0].children![value].name,
            cn: menus[0].children![value].name,
            parameters: {
                Menu: menus[0].children![value].tag
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
        <div>
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
                    formatter: (name) => <div onClick={() => resetPage()}>{formatter(name)}</div>
                }}
                
            />
            <img src={slider} className={style.sliderImg} />
            <div className={style.turn} style={{ left: '-1vw' }} onClick={turnLeft} />
            <div className={style.turn} style={{ right: '-1vw' }} onClick={turnRight} />
        </div>
            <div style={{ display: ddd ? 'flex' : 'none', position: 'fixed', top: '-70vh', left: '-5vw', width: '40vw', height: '40vh', backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', color: 'white'}}>这是一个弹出框</div>
        </div>
    )
}

export default SecondaryA1