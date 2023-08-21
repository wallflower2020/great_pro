import React from 'react'
import { Panel } from '../../components/Panel'

const Testone: React.FC = () => {
    return (
        <div>
            <Panel position='left'>
                ---789
            </Panel>
            <Panel position='right'>
                这个是从右边弹出的
            </Panel>
        </div>
    )
}

export default Testone