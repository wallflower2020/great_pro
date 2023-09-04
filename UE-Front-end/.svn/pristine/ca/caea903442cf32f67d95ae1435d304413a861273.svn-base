import React from "react";
import { callUe4ByTitle } from "../../../util/ue";

export const TransButton: React.FC = () => {
    /**
     * session存储以便当前页面监听语言切换
     * localStorage存储以便页面切换后同步语言切换
     */

    const newStorageEvent = document.createEvent('StorageEvent');

    const setItem = (k: any, val: any) => {
        sessionStorage.setItem(k, val)
        newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, '', null)
        window.dispatchEvent(newStorageEvent)
    }

    const changeCn = () => {
        window.localStorage.setItem('lang', 'LangCN')
        setItem('lang', 'LangCN')
        callUe4ByTitle({
            key: 'LangCN'
        })
    }

    const changeHk = () => {
        window.localStorage.setItem('lang', 'LangHK')
        setItem('lang', 'LangHK')
        callUe4ByTitle({
            key: 'LangHK'
        })
    }

    const changeEn = () => {
        window.localStorage.setItem('lang', 'LangEN')
        setItem('lang', 'LangEN')
        callUe4ByTitle({
            key: 'LangEN'
        })
    }

    return (
        <div>
            <div onClick={changeCn} style={{ width: '150px', height: '50px', backgroundColor: 'rgba(0,0,0,0.2)' }}>切换简中</div>
            <div onClick={changeHk} style={{ width: '150px', height: '50px', backgroundColor: 'rgba(0,0,0,0.2)' }}>切换繁中</div>
            <div onClick={changeEn} style={{ width: '150px', height: '50px', backgroundColor: 'rgba(0,0,0,0.2)' }}>切换英语</div>
        </div>
    )
}