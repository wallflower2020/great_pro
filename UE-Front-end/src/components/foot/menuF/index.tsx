import React, { useEffect } from 'react'
import style from './style.module.css'
import { useNavigate } from 'react-router';
import { callUe4ByMenu } from '../../../util/ue'

const MenuF: React.FC<any> = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/digitalLargeScreen')
    }, [])

    const buttonArr = ['test1', 'test2', 'test3', 'test4', 'test5']

    const handleClick = (param: any) => {
        console.log("测试数据", param)
        if(param === 'test2') {
            navigate('/digitalLargeScreen')
        } else if(param === 'test3') {
            navigate('/testPageTwo')
        } else {
            navigate('/testPageOne')
        }

        callUe4ByMenu({
            key: `test key: ${param}`,
            cn: `test cn: ${param}`
        })
    }

    return (
        <div className={style.bottomMenu}>
            {
                buttonArr.map((item, index) => {
                    return (
                        <div className={style.button} onClick={() => handleClick(item)} key={index}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuF;