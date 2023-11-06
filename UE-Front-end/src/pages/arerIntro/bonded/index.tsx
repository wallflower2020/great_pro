import React from 'react'
import Title from '../../../components/Title'
import { Panel } from '../../../components/Panel'
import { PreviewTag } from '../../../components/PreviewTag'
import board1 from '../image/bonded.png'
import board2 from '../image/river1.png'
import board3 from '../image/river2.png'

const bonded: React.FC = () => {

    return (
        <div>
            <Title id='futianFreeTradeZone' en='OVERVIEW of FUTIAN FREE TRADE ZONE' />
            <Panel position='left'>
                <div style={{ marginTop: '19vh' }}>
                    <PreviewTag id='left1'>
                        <img src={board1} alt='福保介绍' style={{ width: '17.6vw' }} />
                    </PreviewTag>
                </div>
            </Panel>
            <Panel position='right'>
                <div>
                    <PreviewTag id='right1'>
                        <img src={board2} alt='深港河套' style={{ width: '17.6vw' }} />
                    </PreviewTag>
                </div>
                <div>
                    <PreviewTag id='right2'>
                        <img src={board3} alt='发展定位' style={{ width: '17.6vw' }} />
                    </PreviewTag>
                </div>
            </Panel>
        </div>
    )
}

export default bonded