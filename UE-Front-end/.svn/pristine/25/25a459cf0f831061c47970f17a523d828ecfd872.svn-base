import React, { useState } from "react";
import Title from "../../../components/Title";
import { Panel } from "../../../components/Panel";
import { PreviewTag } from "../../../components/PreviewTag";
import board1 from './image/A1B3_1.png'
import board2 from './image/A1B3_2.png'
import board3 from './image/A1B3_3.png'
import board4 from './image/A1B3_4.png'
import board5 from './image/A1B3_5.png'
import board6 from './image/A1B3_6.png'
import board7 from './image/A1B3_7.png'
import board8 from './image/A1B3_8.png'

const Domestic: React.FC = () => {

    const Board:Array<string> = [board2, board3, board4, board5, board6, board7, board8]

    const [value, setValue] = useState(0)

    return (
        <div>
            <Title id="cscHailong" en="CSC HAILONG" />
            <Panel position="left">
                <div style={{marginTop: '22vh'}}>
                    <PreviewTag id="left1">
                        <img src={board1} alt="集团介绍" style={{ width: '16.6vw' }} />
                    </PreviewTag>
                </div>
            </Panel>
            <Panel position="right">
                <div style={{marginTop: '20.5vh'}}>
                    <PreviewTag id="right1">
                        <img src={Board[value]} alt="海龙基地" style={{ width: '17.8vw' }} />
                    </PreviewTag>
                </div>
            </Panel>
        </div>
    )
}

export default Domestic