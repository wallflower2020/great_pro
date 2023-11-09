import React, { useState, useEffect } from 'react'
import style from './style.module.css'
import { Translate } from '../../../components/Translate'
import active from '../../groupIntro/sevenSeries/image/active.png'
import normal from '../../groupIntro/sevenSeries/image/normal.png'
import { callUe4ByMenu, getUe4Interface } from '../../../util/ue'
import board1 from './image/business/board1.png'
import board11 from './image/business/shopping.png'
import board12 from './image/business/dzh.png'
import board13 from './image/business/oneAvenue.png'
import board14 from './image/business/intown.png'
import board15 from './image/business/shixia.png'
import board16 from './image/business/coco.png'

import board2 from './image/education/board2.png'
import board21 from './image/education/huanggang.png'
import board22 from './image/education/innovation.png'
import board23 from './image/education/hongling.png'
import board24 from './image/education/fuqiang.png'
import board25 from './image/education/foreign.png'
import board26 from './image/education/three.png'
import board27 from './image/education/foreign2.png'
import board28 from './image/education/fuyuan.png'
import board29 from './image/education/shixia.png'

import board3 from './image/hospital/board3.png'
import board31 from './image/hospital/fuqiang.png'
import board32 from './image/hospital/yitian.png'
import board33 from './image/hospital/service.png'
import board34 from './image/hospital/united.png'

import board4 from './image/culture/board4.png'
import board41 from './image/culture/palace.png'
import board42 from './image/culture/civic.png'
import board43 from './image/culture/convention.png'
import board44 from './image/culture/library.png'

import board5 from './image/landscape/board5.png'
import board51 from './image/landscape/mangrove.png'
import board52 from './image/landscape/road.png'
import board53 from './image/landscape/huanggang.png'

import board6 from './image/traffic/board6.png'
import board61 from './image/traffic/train1.png'
import board62 from './image/traffic/train2.png'
import traffic from './image/traffic/traffic.png'

import { Panel } from '../../../components/Panel'
import { PreviewTag } from '../../../components/PreviewTag'

const Regional: React.FC<any> = () => {
    const [value, setValue] = useState(0)
    const [curr, setCurr] = useState(-1)
    const board: Array<string> = [board1, board2, board3, board4, board5, board6]
    const intro: Array<Array<string>> = [
        [board11, board12, board13, board14, board15, board16],
        [board21, board22, board23, board24, board25, board26, board27, board28, board29],
        [board31, board32, board33, board34],
        [board41, board42, board43, board44],
        [board51, board52, board53],
    ]

    useEffect(() => {
        callUe4ByMenu({
            key: 'A2B1C1商业',
            cn: '商业',
            parameters: {
                Menu: 'A2B1C1'
            }
        })
    }, [])

    getUe4Interface().Label = (param: any) => {
        const current = Number(param.slice(-1)) - 1
        setCurr(current)
    }



    const Facility = [
        {
            menu: 'A2B1C1',
            name: '商业',
            inter: 'business'
        }, {
            menu: 'A2B1C2',
            name: '教育',
            inter: 'education'
        }, {
            menu: 'A2B1C3',
            name: '医疗',
            inter: 'medical'
        }, {
            menu: 'A2B1C4',
            name: '文化',
            inter: 'recreation'
        }, {
            menu: 'A2B1C5',
            name: '景观',
            inter: 'landscape'
        }, {
            menu: 'A2B1C6',
            name: '交通',
            inter: 'traffic'
        }
    ]

    const changeFacility = (e: any, i: any) => {
        setCurr(-1)
        setValue(i)
        callUe4ByMenu({
            key: e.menu + e.name,
            cn: e.name,
            parameters: {
                Menu: e.menu
            }
        })
    }

    return (
        <div>
            <div className={style.facility}>
                {
                    Facility.map((item, index) => {
                        return (
                            <div className={style.sbutton} key={index} onClick={() => changeFacility(item, index)} style={{ backgroundImage: value === index ? `url(${active})` : `url(${normal})` }}>
                                <Translate id={item.inter} />
                            </div>
                        )
                    })
                }
                <img src={traffic} className={style.traffic} style={{ display: (value === 5) ? '' : 'none' }} />
            </div>
            {
                board.map((item: string, index: any) => {
                    return (
                        <Panel position='left' style={{ display: value === index ? '' : 'none' }} key={index}>
                            <div className={style.leftitem}>
                                <PreviewTag id={`left${index}`}>
                                    <img src={item} style={{ width: '17vw' }} />
                                </PreviewTag>
                            </div>
                        </Panel>
                    )
                })
            }
            {
                intro.map((element: Array<string>, index: any) => {
                    return (
                        <div style={{ display: (value === index) ? '' : 'none' }} key={index}>
                            {
                                element.map((ele: string, i: any) => {
                                    return (
                                        <Panel position='right' style={{ display: (curr === i) ? '' : 'none' }} key={i}>
                                            <div className={style.rightitem}>
                                                <PreviewTag id={`right${i}`}>
                                                    <img src={ele} style={{ width: '17vw' }} />
                                                </PreviewTag>
                                            </div>
                                        </Panel>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
            <div style={{ display: (value === 5) ? '' : 'none' }}>
                <Panel position='right'>
                    <div>
                        <PreviewTag id='train1'>
                            <img src={board61} style={{ width: '17vw' }} />
                        </PreviewTag>
                        <PreviewTag id='train2'>
                            <img src={board62} style={{ width: '17vw' }} />
                        </PreviewTag>
                    </div>
                </Panel>
            </div>
        </div>
    )
}

export default Regional