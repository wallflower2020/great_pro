import React, { useState } from "react";
import { useNavigate } from "react-router";
import style from './style.module.css'
import { Translate } from "../../../../Translate";
import { callUe4ByMenu } from "../../../../../util/ue";
import normal from '../../../../../pages/groupIntro/sevenSeries/image/normal.png'
import active from '../../../../../pages/groupIntro/sevenSeries/image/active.png'

interface IntroProps {
    menu: string
    name: string
    inter: string
    path: string
}

const SecondaryA3: React.FC = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState(0)
    const Intro: Array<IntroProps> = [
        {
            menu: 'A3B1',
            name: '内部配套',
            inter: 'inside',
            path: '/companyIntro/inside'
        }, {
            menu: 'A3B2',
            name: '办公环境',
            inter: 'environment',
            path: '/companyIntro/environment'
        }, {
            menu: 'A3B3',
            name: '园林漫游',
            inter: 'gardenTour',
            path: '/companyIntro/gardenTour'
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
                Intro.map((item: IntroProps, index: any) => {
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

export default SecondaryA3