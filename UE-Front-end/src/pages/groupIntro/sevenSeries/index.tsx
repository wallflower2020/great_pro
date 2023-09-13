import React, { useState, useEffect } from "react";
import { Panel } from "../../../components/Panel";
import { PreviewTag } from '../../../components/PreviewTag'
import Title from '../../../components/Title'
import boardC1 from './image/A1B4_1_1.png'
import boardC2 from './image/A1B4_1_2.png'
import boardC3 from './image/A1B4_1_3.png'
import boardE1 from './image/A1B4_2_1.png'
import boardE2 from './image/A1B4_2_2.png'
import boardI1 from './image/A1B4_3_1.png'
import boardI2 from './image/A1B4_3_2.png'
import boardP1 from './image/A1B4_4_1.png'
import boardS1 from './image/A1B4_5_1.png'
import boardS2 from './image/A1B4_5_2.png'
import boardS3 from './image/A1B4_5_3.png'
import boardT1 from './image/A1B4_6_1.png'
import boardW1 from './image/A1B4_7_1.png'
import style from './style.module.css'
import { callUe4ByMenu } from "../../../util/ue";

const SevenSeries:React.FC = () => {
    useEffect(() => {
        callUe4ByMenu({
            key: 'A1B4C1C系列',
            cn: 'C系列',
            parameters: {
                major: 'all'
            }
        })
    }, [])

    const [value, setValue] = useState(0)

    const BoardL:Array<string> = [boardC1, boardE1, boardI1, boardP1, boardS1, boardT1, boardW1]

    const Seven = [
        {
            menu: 'A1B4C1',
            name: 'C系列'
        }, {
            menu: 'A1B4C2',
            name: 'E系列'
        }, {
            menu: 'A1B4C3',
            name: 'I系列'
        }, {
            menu: 'A1B4C4',
            name: 'P系列'
        }, {
            menu: 'A1B4C5',
            name: 'S系列'
        }, {
            menu: 'A1B4C6',
            name: 'T系列'
        }, {
            menu: 'A1B4C7',
            name: 'W系列'
        }, 
    ]

    const changeSeven = (e: any, i: any) => {
        setValue(i)
        callUe4ByMenu({
            key: e.menu + e.name,
            cn: e.name,
            parameters: {
                major: 'all'
            }
        })
    }

    const Major = [
        {
            name: '全部',
            en: 'all'
        }, {
            name: '建筑',
            en: 'unit'
        }, {
            name: '结构',
            en: 'structure'
        }, {
            name: '内装',
            en: 'built-in'
        }, {
            name: '给排水',
            en: 'water'
        }, {
            name: '暖通',
            en: 'heat'
        }, {
            name: '电气',
            en: 'electric'
        }, 
    ]

    const changeMajor = (e: any) => {
        callUe4ByMenu({
            key: Seven[value].menu + Seven[value].name,
            cn: Seven[value].name,
            parameters: {
                major: e.en
            }
        })
    }

    return (
        <div>
            <Title id="cscHailong" en="CSC HAILONG" />
            <Panel position="left" className={style.panel}>
                <PreviewTag id={`left${value}`}>
                    <img src={BoardL[value]} alt="集团介绍" style={{width: '17.5vw'}} />
                </PreviewTag>
            </Panel>
            <Panel position="right" className={style.panel}>
                {/* C系列 */}
                <div style={{ display: value === 0 ? '' : 'none' }}>
                    <PreviewTag id="rightC2">
                        <img src={boardC2} alt="樟坑径项目" style={{width: '17.6vw'}} />
                    </PreviewTag>
                    <PreviewTag id="rightC3">
                        <img src={boardC3} alt="广德学校" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* E系列 */}
                <div style={{ display: value === 1 ? '' : 'none' }}>
                    <PreviewTag id="rightE2">
                        <img src={boardE2} alt="深圳中学" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* I系列 */}
                <div style={{ display: value === 2 ? '' : 'none' }}>
                    <PreviewTag id="rightI2">
                        <img src={boardI2} alt="深圳中学" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* P系列 */}
                {/* 暂无 */}

                {/* S系列 */}
                <div style={{ display: value === 4 ? '' : 'none' }}>
                    <PreviewTag id="rightS2">
                        <img src={boardS2} alt="健康驿站" style={{width: '17.6vw'}} />
                    </PreviewTag>
                    <PreviewTag id="rightS3">
                        <img src={boardS3} alt="预制式学校" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* T系列 */}
                {/* 暂无 */}

                {/* W系列 */}
                {/* 暂无 */}

            </Panel>
            <div className={style.seven}>
                {
                    Seven.map((item, index) => {
                        return (
                            <div className={style.sbutton} key={index} onClick={() => changeSeven(item, index)}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className={style.major}>
                {
                    Major.map((item, index) => {
                        return (
                            <div className={style.sbutton} key={index} onClick={() => changeMajor(item)}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SevenSeries