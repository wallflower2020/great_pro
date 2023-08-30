import React, { useState } from 'react'
import { Panel } from '../../components/Panel'
import style from './style.module.css'
import { Slider } from 'antd'
import slider from '../../assets/image/slider.png'
import sliderArrow from '../../assets/image/sliderArrow.png'
import border1 from '../../assets/image/border1.png'
import border4 from '../../assets/image/border4.png'
import { PreviewTag } from '../../components/PreviewTag'


const Testone: React.FC = () => {
    const [value, setValue] = useState(0)

    const props = {
        max: 5,
        min: 0
    }

    const changeSlider = (e: any) => {
        console.log('e: ', e)
        setValue(e)
    }

    const turnLeft = () => {
        if(value !== 0) {
            setValue(value - 1)
        }
    }

    const turnRight = () => {
        if(value !== 5) {
            setValue(value + 1)
        }
    }

    return (
        <div>
            <Panel position='left'>
                <PreviewTag>
                    <img src={border1} style={{ width: '15vw', marginTop: '10vh' }} />
                </PreviewTag>
            </Panel>
            <Panel position='right'>
                <PreviewTag>
                    <img src={border4} style={{ width: '15vw', marginTop: '10vh' }} />
                </PreviewTag>
            </Panel>
            <div className={style.slider}>
                <Slider {...props} value={value} onChange={changeSlider}
                    railStyle={{ display: 'none' }}
                    trackStyle={{ display: 'none' }}
                    handleStyle={{ display: 'none' }}
                />
                <img src={slider} className={style.sliderImg} />
                <div className={style.show} style={{ left: `${value * 9.9}vw`, top: '-6vh' }}>
                    <img src={sliderArrow} className={style.arrowImg} />
                    <div style={{ marginTop: '0' }}>海龙介绍</div>
                </div>
                <div 
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
                />
            </div>
        </div>
    )
}

export default Testone