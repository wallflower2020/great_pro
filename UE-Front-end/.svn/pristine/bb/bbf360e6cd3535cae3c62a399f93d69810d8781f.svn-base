import React, { useState } from "react";
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

const SevenSeries:React.FC = () => {
    const [value, setValue] = useState(0)

    const BoardL:Array<string> = [boardC1, boardE1, boardI1, boardP1, boardS1, boardT1, boardW1]

    const change = () => {
        if(value === 0) {
            setValue(1)
        } else {
            setValue(0)
        }
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
                <div style={{ display: value === 0 ? '' : 'none' }} onClick={change}>
                    <PreviewTag id="rightC2">
                        <img src={boardC2} alt="樟坑径项目" style={{width: '17.6vw'}} />
                    </PreviewTag>
                    <PreviewTag id="rightC3">
                        <img src={boardC3} alt="广德学校" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* E系列 */}
                <div style={{ display: value === 1 ? '' : 'none' }} onClick={change}>
                    <PreviewTag id="rightE2">
                        <img src={boardE2} alt="深圳中学" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* I系列 */}
                <div style={{ display: value === 2 ? '' : 'none' }} onClick={change}>
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
        </div>
    )
}

export default SevenSeries