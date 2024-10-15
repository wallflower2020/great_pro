import React, { useEffect, useState } from "react";
import style from './style.module.css'
import { useNavigate } from 'react-router';
// import logo from '../../assets/image/logo.png'
// import cut from '../../assets/image/menucut.png'
import { Clock } from "../Clock";
// import setting from '../../assets/image/setting.png'
// import sound from '../../assets/image/sound.png'
import home from '../../assets/funcIcon/home.png'
import around from '../../assets/funcIcon/around.png'
import cut from '../../assets/funcIcon/cut.png'
import draw from '../../assets/funcIcon/draw.png'
import close from '../../assets/image/close.png'
import setting from '../../assets/funcIcon/setting.png'
import emma from '../../assets/testImg/userhead.jpg'
import { TransButton } from "../Translate/TransButton";
import { Weather } from "../Weather";
// import { Timeline } from "../Timeline";
import { callUe4ByTitle } from '../../util/ue'
import { Popconfirm, Radio } from 'antd';

const Head: React.FC = () => {
    const navigate = useNavigate()
    const [round, setRound] = useState(false)
    const [cuts, setCuts] = useState(false)
    const [draws, setDraws] = useState(false)
    const [sets, setSets] = useState(false)

    useEffect(() => {
        navigate('/groupIntro')
    }, [])

    const closes = () => {
        callUe4ByTitle({
            key: 'quit',
            cn: '关闭',
            parameters: {
                value: 'quit'
            }
        })
    }

    const goHome = () => {
        callUe4ByTitle({
            key: 'home',
            cn: '首页',
            parameters: {
                value: 'home'
            }
        })
    }

    const changeRound = () => {
        if(round) {
            setRound(false)
            callUe4ByTitle({
                key: 'round',
                cn: '首页',
                parameters: {
                    value: 'stop'
                }
            })
        } else {
            setRound(true)
            callUe4ByTitle({
                key: 'round',
                cn: '首页',
                parameters: {
                    value: 'start'
                }
            })
        }
    }

    const changeCut = () => {
        if(cuts) {
            setCuts(false)
            callUe4ByTitle({
                key: 'cut',
                cn: '首页',
                parameters: {
                    value: 'stop'
                }
            })
        } else {
            setCuts(true)
            callUe4ByTitle({
                key: 'cut',
                cn: '首页',
                parameters: {
                    value: 'start'
                }
            })
        }
    }

    const changeDraw = () => {
        if(draws) {
            setDraws(false)
            callUe4ByTitle({
                key: 'drwa',
                cn: '首页',
                parameters: {
                    value: 'stop'
                }
            })
        } else {
            setDraws(true)
            callUe4ByTitle({
                key: 'draw',
                cn: '首页',
                parameters: {
                    value: 'start'
                }
            })
        }
    }

    const showSetting = () => {
        setSets(!sets)
    }

    const exit = () => {
        navigate('/groupIntro')
    }

    return <>
        <div className={style.head}>
            <div>
            
            </div>
            {/* <img alt="logo" src={logo} className={style.logo} /> */}
            {/* <img alt="cut" src={cut} className={style.cut} /> */}
            {/* <div className={style.clock}>
                <Clock />
            </div>
            <Timeline /> */}
            <div className={style.func}>
                <div className={style.funcbox} onClick={() => goHome()}>
                    <img alt="home" src={home} style={{ width: '1.1vw' }} />
                </div>
                <div className={style.funcbox} style={{ background: round? 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, #FFFFEF 100%)' : '', borderRadius: '0.2vw' }} onClick={() => changeRound()}>
                    <img alt="round" src={around} style={{ width: '1.1vw' }} />
                </div>
                <div className={style.funcbox} style={{ background: cuts? 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, #FFFFEF 100%)' : '', borderRadius: '0.2vw' }} onClick={() => changeCut()}>
                    <img alt="cuts" src={cut} style={{ width: '1.1vw' }} />
                </div>
                <div className={style.funcbox} style={{ background: draws? 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, #FFFFEF 100%)' : '', borderRadius: '0.2vw' }} onClick={() => changeDraw()}>
                    <img alt="draw" src={draw} style={{ width: '1.1vw' }} />
                </div>
                <TransButton />
                <Weather />
                <div className={style.funcbox} onClick={() => showSetting()}>
                    <img alt="setting" src={setting} style={{ width: '1.1vw' }} />
                </div>
                <div style={{ width: '0.2vw' }}/>
                {/* <div className={style.funcbox}>
                    <img alt="setting" src={setting} style={{ width: '1.1vw' }} />
                </div>
                <div className={style.funcbox}>
                    <img alt="sound" src={sound} style={{ width: '1.1vw' }} />
                </div> */}
                <Popconfirm
                    placement="leftTop"
                    title="确认要关闭项目吗？"
                    okText="确认"
                    cancelText="取消"
                    onConfirm={() => closes()}
                >
                    <div className={style.funcbox}>
                        <img alt="close" src={close} style={{ width: '1.1vw' }} />
                    </div>
                </Popconfirm>
                <div style={{ width: '0.2vw' }} />
            </div>
            {
                sets? <div className={style.setbox}>
                    <div className={style.graybox}>
                        <div className={style.grayleft} />
                        <div className={style.grayright} />
                    </div>
                    <div className={style.usermask} />
                    <div className={style.userbox}>
                        <div className={style.userleft}>
                            <div className={style.userhead}>
                                <div className={style.headbox}>
                                    <img src={emma} className={style.headimg} />
                                </div>
                                <div className={style.headtext}>
                                    <span style={{ fontWeight: 'bold' }}>wallflower</span>
                                    <span style={{ fontSize: '0.8rem'}}>nothing...</span>
                                </div>
                            </div>
                            <div className={style.exit} onClick={() => exit()}>退出登录</div>
                        </div>
                        <div className={style.userright} >
                            <div className={style.setLine1}>
                                时间设置：
                                {/* <Timeline /> */}
                            </div>
                            <div className={style.setLine2}>
                                背景音乐：
                                <Radio.Group value={2}>
                                    <Radio value={1}>开启</Radio>
                                    <Radio value={2}>关闭</Radio>
                                </Radio.Group>
                            </div>
                            <div className={style.clocktip}>
                                <div style={{ scale: '0.5' }}>
                                    <Clock />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : ''
            }
        </div>
    </>
}

export default Head;