import React from 'react'
import { Panel } from '../../components/Panel'
import border2 from '../../assets/image/border2.png'
import border3 from '../../assets/image/border3.png'
import { PreviewTag } from '../../components/PreviewTag'

const Testtwo: React.FC = () => {
    return (
        <div>
            <Panel position='left'>
                <PreviewTag>
                    <img src={border2} style={{ width: '15vw', marginTop: '10vh' }} />
                </PreviewTag>
            </Panel>
            <Panel position='right'>
                <PreviewTag>
                    <img src={border3} style={{ width: '15vw', marginTop: '10vh' }} />
                </PreviewTag>
            </Panel>
        </div>
    )
}

export default Testtwo