import React from "react";
import Title from "../../../components/Title";
import board1 from '../../../assets/image/A1B2_1.png'
import board2 from '../../../assets/image/A1B2_2.png'
import board3 from '../../../assets/image/A1B2_3.png'
import { Panel } from "../../../components/Panel";
import { PreviewTag } from "../../../components/PreviewTag";

const CscHailong: React.FC = () => {
    return (
        <div>
            <Title id="cscHailong" en="CSC HAILONG" />
            <Panel position="left">
                <div style={{marginTop: '19vh'}}>
                    <PreviewTag id="left1">
                        <img src={board1} alt="集团介绍" style={{ width: '16.2vw' }} />
                    </PreviewTag>
                </div>
            </Panel>
            <Panel position="right">
                <div style={{marginTop: '-1vh'}}>
                    <PreviewTag id="right1">
                        <img src={board2} alt="模块化建筑的引领者" style={{ width: '17.5vw' }} />
                    </PreviewTag>
                </div>
                <div>
                    <PreviewTag id="right2">
                        <img src={board3} alt="模块化建筑的引领者" style={{ width: '17.5vw' }} />
                    </PreviewTag>
                </div>
            </Panel>
        </div>
    )
}

export default CscHailong