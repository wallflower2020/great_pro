import React from 'react'
import Title from '../../../components/Title'
import { Panel } from '../../../components/Panel'
import { PreviewTag } from '../../../components/PreviewTag'
import board1 from '../image/area.png'
import board2 from '../image/futian.png'

const Facilities: React.FC<any> = () => {
    return (
        <div>
            <Title id='futianDistrict' en='OVERVIEW of FUTIAN DISTRICT' />
            <Panel position='left'>
                <div>
                    <PreviewTag id='left1'>
                        <img src={board1} alt='片区介绍' style={{ width: '17.6vw' }} />
                    </PreviewTag>
                </div>
                <div>
                    <PreviewTag id='left2'>
                        <img src={board2} alt='福田区介绍' style={{ width: '17.6vw' }} />
                    </PreviewTag>
                </div>
            </Panel>
        </div>
    )
}

export default Facilities