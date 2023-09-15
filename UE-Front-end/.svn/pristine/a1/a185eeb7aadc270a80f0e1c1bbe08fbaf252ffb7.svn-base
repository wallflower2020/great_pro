import React, { useState } from "react";
import { Panel } from "../../../components/Panel";
import { PreviewTag } from "../../../components/PreviewTag";
import board11 from './image/A1B5_1_1.png'
import board12 from './image/A1B5_1_2.png'
import board21 from './image/A1B5_2_1.png'
import board22 from './image/A1B5_2_2.png'
import board31 from './image/A1B5_3_1.png'
import board32 from './image/A1B5_3_2.png'
import board33 from './image/A1B5_3_3.png'
import board34 from './image/A1B5_3_4.png'
import board41 from './image/A1B5_4_1.png'
import board42 from './image/A1B5_4_2.png'
import board51 from './image/A1B5_5_1.png'
import board52 from './image/A1B5_5_2.png'
import board61 from './image/A1B5_6_1.png'
import board62 from './image/A1B5_6_2.png'
import board63 from './image/A1B5_6_3.png'
import board71 from './image/A1B5_7_1.png'
import board72 from './image/A1B5_7_2.png'
import board73 from './image/A1B5_7_3.png'
import board74 from './image/A1B5_7_4.png'
import board81 from './image/A1B5_8_1.png'
import board82 from './image/A1B5_8_2.png'
import style from './style.module.css'
import Title from "../../../components/Title";
import { getUe4Interface } from "../../../util/ue";

const Important:React.FC = () => {
    const [value, setValue] = useState(0)

    const BoardL:Array<string> = [board11, board21, board31, board41, board51, board61, board71, board81]

    getUe4Interface().XiangMu = (param: any) => {
        setValue(Number(param))
    }
    
    return (
        <div>
            <Title id="cscHailong" en="CSC HAILONG" />
            <Panel position="left" className={style.panel}>
                <div style={{ display: (value === 2 || value === 6) ? 'none' : '' }}>
                    <PreviewTag id={`left${value}`}>
                        <img src={BoardL[value]} alt="集团介绍" style={{width: '17.5vw'}} />
                    </PreviewTag>
                </div>
                <div style={{ display: value === 2 ? '' : 'none' }}>
                    <PreviewTag id="right31">
                        <img src={board31} alt="集团介绍31" style={{width: '17.6vw'}} />
                    </PreviewTag>
                    <PreviewTag id="right32">
                        <img src={board32} alt="烟台驿站" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                <div style={{ display: value === 6 ? '' : 'none' }}>
                    <PreviewTag id="right71">
                        <img src={board71} alt="集团介绍71" style={{width: '17.6vw'}} />
                    </PreviewTag>
                    <PreviewTag id="right72">
                        <img src={board72} alt="将军医院" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
            </Panel>
            <Panel position="right" className={style.panel}>
                {/* 项目1 */}
                <div style={{ display: value === 0 ? '' : 'none' }}>
                    <PreviewTag id="right12">
                        <img src={board12} alt="樟坑径项目" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* 项目2 */}
                <div style={{ display: value === 1 ? '' : 'none' }}>
                    <PreviewTag id="right22">
                        <img src={board22} alt="广德学校" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* 项目3 */}
                <div style={{ display: value === 2 ? '' : 'none' }}>
                    {/* <PreviewTag id="rightI2">
                        <img src={board32} alt="深圳中学" style={{width: '17.6vw'}} />
                    </PreviewTag> */}
                    <PreviewTag id="right33">
                        <img src={board33} alt="集团介绍32" style={{width: '17.6vw'}} />
                    </PreviewTag>
                    <PreviewTag id="right34">
                        <img src={board34} alt="坝光酒店" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* 项目4 */}
                <div style={{ display: value === 3 ? '' : 'none' }}>
                    <PreviewTag id="right42">
                        <img src={board42} alt="长圳学校" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* 项目5 */}
                <div style={{ display: value === 4 ? '' : 'none' }}>
                    <PreviewTag id="right52">
                        <img src={board52} alt="香港感染控制中心" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* 项目6 */}
                <div style={{ display: value === 5 ? '' : 'none' }}>
                    <PreviewTag id="right62">
                        <img src={board62} alt="竹蒿湾社区" style={{width: '17.6vw'}} />
                    </PreviewTag>
                    <PreviewTag id="right63">
                        <img src={board63} alt="后德社区" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* 项目7 */}
                <div style={{ display: value === 6 ? '' : 'none' }}>
                    <PreviewTag id="right73">
                        <img src={board73} alt="集团介绍71" style={{width: '17.6vw'}} />
                    </PreviewTag>
                    <PreviewTag id="right74">
                        <img src={board74} alt="将军医院" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* 项目5 */}
                <div style={{ display: value === 7 ? '' : 'none' }}>
                    <PreviewTag id="right82">
                        <img src={board82} alt="深圳中学" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
            </Panel>
        </div>
    )
}

export default Important