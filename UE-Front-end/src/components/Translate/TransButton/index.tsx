import React, { useEffect, useState } from "react";
import { callUe4ByTitle } from "../../../util/ue";
import en from '../../../assets/image/en.png'
import cn from '../../../assets/image/cn.png'
import hk from '../../../assets/image/hk.png'
import lang from '../../../assets/image/lang.png'
import style from './style.module.css'

export const TransButton: React.FC = () => {
    /**
     * session存储以便当前页面监听语言切换
     * localStorage存储以便页面切换后同步语言切换
     */
    const [show, setShow] = useState(false)
    const [l, setL] = useState(cn)

    const la = window.localStorage.getItem('lang')

    useEffect(() => {
        if(la === 'LangHK') {
            setL(hk)
        } else if(la === 'LangEN') {
            setL(en)
        } else {
            setL(cn)
        }
    }, [la])

    const newStorageEvent = document.createEvent('StorageEvent');

    const showLang = () => {
        setShow(!show)
    }

    const setItem = (k: any, val: any) => {
        sessionStorage.setItem(k, val)
        newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, '', null)
        window.dispatchEvent(newStorageEvent)
    }

    const changeLang = (la: string) => {
        window.localStorage.setItem('lang', la)
        setItem('lang', la)
        if (la === 'LangCN') {
            setL(cn)
        } else if (la === 'LangHK') {
            setL(hk)
        } else {
            setL(en)
        }
        callUe4ByTitle({
            key: 'Translate',
            cn: '语言切换',
            parameters: {
                Lang: la
            }
        })
    }

    return (
        <div className={style.funcbox} onClick={showLang}>
            <img alt="slang" src={l} style={{ width: '1.1vw' }} />
            <div className={style.lang} style={{ display: show? 'flex' : 'none' }}>
                <img alt="lang" src={lang} className={style.langimg}/>
                <div className={style.funcbox} onClick={() => changeLang('LangCN')}>
                    <img alt="cn" src={cn} style={{ width: '1.1vw' }} />
                </div>
                <div className={style.funcbox} onClick={() => changeLang('LangHK')}>
                    <img alt="hk" src={hk} style={{ width: '1.1vw' }} />
                </div>
                <div className={style.funcbox} onClick={() => changeLang('LangEN')}>
                    <img alt="en" src={en} style={{ width: '1.1vw' }} />
                </div>
            </div>
        </div>
    )
}