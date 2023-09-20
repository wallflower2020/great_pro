import React, { useState } from 'react'
import { Panel } from '../../../components/Panel'
import board1 from '../../../assets/image/board1.png'
import board2 from '../../../assets/image/board2.png'
import board3 from '../../../assets/image/board3.png'
import board4 from '../../../assets/image/board4.png'
import board5 from '../../../assets/image/board5.png'
import board6 from '../../../assets/image/board6.png'
import board7 from '../../../assets/image/board7.png'
import board8 from '../../../assets/image/board8.png'
import { PreviewTag } from '../../../components/PreviewTag'
import Title from '../../../components/Title'
import { getUe4Interface } from '../../../util/ue'

const cscecInter: React.FC = () => {

    const Board:Array<string> = [board2, board3, board4, board5, board6, board7, board8]

    const [value, setValue] = useState(0)
    getUe4Interface().Introduce = (param: any) => {
        changeImg(Number(param))
    }

    const changeImg = (param: number) => {
        if (param < 8 && param > 0) {
            setValue(param - 1)
        }
    }

    return (
        <div>
            <Title id='cscecInternational' en='CSCEC INTERNATIONAL'/>
            <Panel position='left'>
                <div style={{marginTop: '19vh'}}>
                    <PreviewTag id='left1'>
                        <img src={board1} alt='集团介绍' style={{ width: '17.6vw' }} onClick={() => changeImg(1)}/>
                    </PreviewTag>
                </div>
            </Panel>
            {/** 图片判断改为循环调用panel组件，实现切换后panel组件重新渲染展示缩放效果 */}
            {
                Board.map((board, index) => {
                    return(
                        <Panel position='right' style={{ display: value === index ? '' : 'none' }} key={index}>
                            <div style={{marginTop: '8.5vh'}}>
                                <PreviewTag id={`right${index}`}>
                                    <img src={board} alt={board} style={{ width: '18vw' }}/>
                                </PreviewTag>
                            </div>
                        </Panel>
                    )
                })
            }
        </div>
    )
}

export default cscecInter