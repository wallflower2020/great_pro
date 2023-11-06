import React, { useState, useEffect } from 'react'
import style from './style.module.css'
import { Translate } from '../../../components/Translate'
import active from '../../groupIntro/sevenSeries/image/active.png'
import normal from '../../groupIntro/sevenSeries/image/normal.png'
import { callUe4ByMenu, getUe4Interface } from '../../../util/ue'

const Regional: React.FC<any> = () => {
    const [show, setShow] = useState(false)
    const [url, setUrl] = useState("https://www.720yun.com/t/79dj5rtmrk0?scene_id=10052059")

    useEffect(() => {
        callUe4ByMenu({
            key: 'A2B1C1商业',
            cn: '商业',
            parameters: {
                Menu: 'A2B1C1'
            }
        })
    }, [])

    getUe4Interface().Process = (param: any) => {
        if(param === 'DZH') {
            setUrl("https://www.720yun.com/t/79dj5rtmrk0?scene_id=10052059")
            setShow(true)
        }
    }

    const turnDown = () => {
        setShow(false)
        setUrl("")
    }

    const [value, setValue] = useState(0)
    const Facility = [
        {
            menu: 'A2B1C1',
            name: '商业',
            inter: 'business'
        }, {
            menu: 'A2B1C2',
            name: '教育',
            inter: 'education'
        }, {
            menu: 'A2B1C3',
            name: '医疗',
            inter: 'medical'
        }, {
            menu: 'A2B1C4',
            name: '文化',
            inter: 'recreation'
        }, {
            menu: 'A2B1C5',
            name: '景观',
            inter: 'landscape'
        }, {
            menu: 'A2B1C6',
            name: '交通',
            inter: 'traffic'
        }
    ]

    const changeFacility = (e: any, i: any) => {
        setValue(i)
        callUe4ByMenu({
            key: e.menu + e.name,
            cn: e.name,
            parameters: {
                Menu: e.menu
            }
        })
    }

    return (
        <div className={style.facility}>
            {
                Facility.map((item, index) => {
                    return (
                        <div className={style.sbutton} key={index} onClick={() => changeFacility(item, index)} style={{ backgroundImage: value === index ? `url(${active})` : `url(${normal})` }}>
                            <Translate id={item.inter} />
                        </div>
                    )
                })
            }
            <div className={style.show} style={{ display: show? '' : 'none' }}>
                <div className={style.mask} onClick={() => turnDown()}/> 
                <div className={style.video}>
                    <iframe src={url}  width="100%" height="100%" ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Regional