import React, { useState } from 'react'
import style from './style.module.css'
import Greenpage from './Greenpage'
import Yellowpage from './Yellowpage'
import { Clock } from '../../../components/Clock'
import sun from '../../../assets/sun.png'

const test: React.FC = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [show, setShow] = useState(0)
    const [page, setPage] = useState('y')
    const menu = [{
        name: '',
        color: 'yellow',
        page: 'y'
    }, {
        name: '',
        color: 'green',
        page: 'g'
    }]

    return (
        <div>
            <div className={style.top}>
                <div className={style.menulist}>
                    {menu.map((item: any) => {
                        return (
                            <div onClick={() => setPage(item.page)} className={style.menubutton} style={{ backgroundColor: item.color }}>
                                {item.name}
                            </div>
                        )
                    })}
                </div>
                <div className={style.title}>
                    标题
                </div>
                <div className={style.daily}>
                    <div className={style.weather}>
                        <img src={sun} style={{ width: '4vh', height: '4vh'}}/>
                        晴
                    </div>
                    <div className={style.clock}>
                        <Clock />
                    </div>
                    <div style={{ width: '0.3vw' }} />
                </div>
            </div>
            {page === 'y' ? <Yellowpage /> : <Greenpage />}
        </div>
        // <Box2 />
    )
}

export default test