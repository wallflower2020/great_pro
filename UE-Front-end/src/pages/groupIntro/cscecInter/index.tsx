import React, { useState } from 'react'
import style from './style.module.css'

const cscecInter: React.FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(0)

    const roamItem = [{
        name: '漫游1',
        color: 'white'
    }, {
        name: '漫游2',
        color: 'white'
    }, {
        name: '漫游3',
        color: 'white'
    }]

    return (
        <div className={style.roamarea}  onMouseOver={() => setShow(1)} onMouseOut={() => setShow(2)}>
            <div className={(show === 1) ? style.roamboxup : (show === 2) ? style.roamboxdown : style.roambox }>
                {
                    roamItem.map((item, index) => {
                        return (
                            <div key={index} className={style.roamitem} style={{ color: item.color }}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default cscecInter