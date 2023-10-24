import React from 'react'
import { Panel } from '../../components/Panel'
import { Translate } from '../../components/Translate'
// import { PreviewTag } from '../../components/PreviewTag'

interface PartsProps {
    menu: string
    name: string
    inter: string
}

const ArerIntro: React.FC = () => {
    const Parts:Array<PartsProps> = [
        {
            menu: 'A2B1',
            name: '区域划分',
            inter: 'regional'
        }, {
            menu: 'A2B2',
            name: '配套设施',
            inter: 'facilities'
        }
    ]
    return (
        <div>
            <Panel position='left'>
            </Panel>
            <Panel position='right'>
            </Panel>
            <div>
                {
                    Parts.map((item: PartsProps, index: any) => {
                        return (
                            <div key={index}>
                                <Translate id={item.inter} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ArerIntro