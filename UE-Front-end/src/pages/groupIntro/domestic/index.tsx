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
import { getUe4Interface } from '../../../util/ue'

const Domestic: React.FC = () => {

    const Board:Array<string> = [board3, board8, board4, board6, board5, board7, board2]

    const [value, setValue] = useState(6)

    getUe4Interface().Introduce = (param: any) => {
        setValue(Number(param))
    }

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
            {
                Board.map((board, index) => {
                    return(
                        <Panel position='right' style={{ display: value === index ? '' : 'none' }} key={index}>
                            <div style={{marginTop: '20.5vh'}}>
                                <PreviewTag id={`right${index}`}>
                                    <img src={board} alt={board} style={{ width: '17.8vw' }}/>
                                </PreviewTag>
                            </div>
                        </Panel>
                    )
                })
            }
        </div>
    )
}

export default Domestic