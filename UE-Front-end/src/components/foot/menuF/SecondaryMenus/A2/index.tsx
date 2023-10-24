import React, { useState } from 'react'
import { Translate } from '../../../../../components/Translate'
import normal from '../../../../../pages/groupIntro/sevenSeries/image/normal.png'
import active from '../../../../../pages/groupIntro/sevenSeries/image/active.png'
import style from './style.module.css'
import { callUe4ByMenu } from '../../../../../util/ue'
import { useNavigate } from 'react-router'
// import { PreviewTag } from '../../components/PreviewTag'

interface PartsProps {
    menu: string
    name: string
    inter: string
    path: string
}

const SecondaryA2: React.FC = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState(0)
    const Parts:Array<PartsProps> = [
        {
            menu: 'A2B1',
            name: '区域划分',
            inter: 'regional',
            path: '/arerIntro/regional'
        }, {
            menu: 'A2B2',
            name: '配套设施',
            inter: 'facilities',
            path: '/arerIntro/facilities'
        }
    ]


    const changeParts = (e: any, i: any) => {
        setValue(i)
        callUe4ByMenu({
            key: e.menu + e.name,
            cn: e.name,
            parameters: {
                Menu: e.menu
            }
        })

        navigate(e.path)
    }

    return (
        <div className={style.part}>
            {
                Parts.map((item: PartsProps, index: any) => {
                    return (
                        <div className={style.sbutton} key={index} onClick={() => changeParts(item, index)} style={{ backgroundImage: value === index ? `url(${active})` : `url(${normal})` }}>
                            <Translate id={item.inter} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SecondaryA2