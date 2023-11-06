import React, { useState } from "react";
import { Panel } from "../../../components/Panel";
import { PreviewTag } from "../../../components/PreviewTag";
import board1_1 from './image/A1B5_1_L_1.png'
// import board1_2 from './image/A1B5_1_L_2.png'
// import board1_3 from './image/A1B5_1_L_3.png'
// import board1_4 from './image/A1B5_1_L_4.png'
import board2_1 from './image/A1B5_2_L_1.png'
import board3_1 from './image/A1B5_3_L_1.png'
import board4_1 from './image/A1B5_4_L_1.png'
import board5_1 from './image/A1B5_5_L_1.png'
import board1_5 from './image/A1B5_1_R_1.png'
import board2_2 from './image/A1B5_2_R_1.png'
import board3_2 from './image/A1B5_3_R_1.png'
import board4_2 from './image/A1B5_4_R_1.png'
import board5_2 from './image/A1B5_5_R_1.png'
// import board1_6 from './image/A1B5_1_R_2.png'
// import board1_7 from './image/A1B5_1_R_3.png'
// import board1_8 from './image/A1B5_1_R_4.png'
import style from './style.module.css'
import Title from "../../../components/Title";
import { getUe4Interface } from "../../../util/ue";
// import { Carousel } from "antd";

const Important:React.FC = () => {
    const [value, setValue] = useState(0)

    getUe4Interface().Introduce = (param: any) => {
        setValue(Number(param))
    }
    
    return (
        <div>
            <Title id="cscHailong" en="CSC HAILONG" />
            <Panel position="left" className={style.panel}>
                <div style={{ display: value === 0 ? '' : 'none' }}>
                    <div style={{ width: '17.5vw' }}>
                        <PreviewTag id={`left${value}`}>
                            <img src={board1_1} alt="集团介绍1" style={{width: '17.5vw'}} />
                        </PreviewTag>
                        {/* <Carousel autoplay>
                            <PreviewTag id={`left${value}`}>
                                <img src={board1_1} alt="集团介绍" style={{width: '17.5vw'}} />
                            </PreviewTag>
                            <PreviewTag id={`left${value}`}>
                                <img src={board1_2} alt="集团介绍" style={{width: '17.5vw'}} />
                            </PreviewTag>
                            <PreviewTag id={`left${value}`}>
                                <img src={board1_3} alt="集团介绍" style={{width: '17.5vw'}} />
                            </PreviewTag>
                            <PreviewTag id={`left${value}`}>
                                <img src={board1_4} alt="集团介绍" style={{width: '17.5vw'}} />
                            </PreviewTag>
                        </Carousel> */}
                    </div>
                </div>
                <div style={{ display: value === 1 ? '' : 'none' }}>
                    <PreviewTag id="right21">
                        <img src={board2_1} alt="集团介绍2" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                <div style={{ display: value === 2 ? '' : 'none' }}>
                    <PreviewTag id="right31">
                        <img src={board3_1} alt="集团介绍3" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                <div style={{ display: value === 3 ? '' : 'none' }}>
                    <PreviewTag id="right41">
                        <img src={board4_1} alt="集团介绍3" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                <div style={{ display: value === 4 ? '' : 'none' }}>
                    <PreviewTag id="right51">
                        <img src={board5_1} alt="集团介绍3" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
            </Panel>
            <Panel position="right" className={style.panel}>
                {/* 深圳 */}
                <div style={{ display: value === 0 ? '' : 'none' }}>
                    <PreviewTag id="right12">
                        <img src={board1_5} alt="樟坑径项目" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* 合肥 */}
                <div style={{ display: value === 1 ? '' : 'none' }}>
                    <PreviewTag id="right22">
                        <img src={board2_2} alt="骆岗公园" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* 广德 */}
                <div style={{ display: value === 2 ? '' : 'none' }}>
                    <PreviewTag id="right34">
                        <img src={board3_2} alt="广德学校" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* 山东 */}
                <div style={{ display: value === 3 ? '' : 'none' }}>
                    <PreviewTag id="right42">
                        <img src={board4_2} alt="烟台莱山酒店" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
                {/* 香港 */}
                <div style={{ display: value === 4 ? '' : 'none' }}>
                    <PreviewTag id="right52">
                        <img src={board5_2} alt="将军澳医院" style={{width: '17.6vw'}} />
                    </PreviewTag>
                </div>
            </Panel>
        </div>
    )
}

export default Important