import React, { useEffect } from 'react'
// import { Panel } from '../../components/Panel'
import { callUe4ByPage, getUe4Interface } from '../../util/ue'
import { useNavigate } from 'react-router'


const GroupIntro: React.FC = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/groupIntro/cscecInter')
    }, [])

    // TODO 接收UE参数后事件
    getUe4Interface().ProjectTest = (param: any) => {

        callUe4ByPage({
            key: `${param}, 参数返还`
        })
    }

    return (
        <div>
        </div>
    )
}

export default GroupIntro