import React, { useEffect } from 'react'
// import { Panel } from '../../components/Panel'
import { callUe4ByPage, getUe4Interface } from '../../util/ue'
import style from './style.module.css'
import Chart from "../../components/echarts/chart";
import { option1} from './Chartone'
import { option2 } from './Charttwo'
import Login from './Login';
import close from '../../assets/image/close.png'
import { Popconfirm } from 'antd';
import { callUe4ByTitle } from '../../util/ue'


const GroupIntro: React.FC = () => {

    useEffect(() => {
        // navigate('/groupIntro/cscecInter')
    }, [])

    // TODO 接收UE参数后事件
    getUe4Interface().ProjectTest = (param: unknown) => {

        callUe4ByPage({
            key: `${param}, 参数返回`
        })
    }

    const closes = () => {
        callUe4ByTitle({
            key: 'quit',
            cn: '关闭',
            parameters: {
                value: 'quit'
            }
        })
    }

    return (
        <div className={style.maskbox}>
            <div className={style.mask} />
            <div className={style.testback} />
            <div className={style.loginbox}>
                <div className={style.chartbox}>
                    <Chart style={{ height: '18vh', width: '25vw', boxSizing: "border-box", scale: '1', marginTop: '10vh' }}
                        options={option1}
                    />
                    <Chart style={{ height: '18vh', width: '25vw', boxSizing: "border-box", scale: '1', marginBottom: '10vh' }}
                        options={option2}
                    />
                </div>
                <div className={style.inputbox}>
                    {/* <div>
                        账号：<input/>
                    </div>
                    <div>
                        密码：<input type='password'/>
                    </div>
                    <div className={style.loginbutton}>
                        <input type='submit' value='登录'/>
                    </div> */}
                    <Login />
                </div>
            </div>
            <Popconfirm
                placement="leftTop"
                title="确认要关闭项目吗？"
                okText="确认"
                cancelText="取消"
                onConfirm={() => closes()}
            >
                <div className={style.close}>
                    <img alt="close" src={close} style={{ width: '1.1vw' }} />
                </div>
            </Popconfirm>
        </div>
    )
}

export default GroupIntro