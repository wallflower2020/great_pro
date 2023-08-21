import React from 'react'
import { Panel } from '../../components/Panel';
import { PreviewTag } from '../../components/PreviewTag';
import TravelTicket from './travelTicket';

const DigitalLargeScreen: React.FC = () => {
    return <>
        <Panel position='left'>
            <PreviewTag>
                这是预览组件
                <TravelTicket />
            </PreviewTag>
        </Panel>
    </>
}

export default DigitalLargeScreen;