import React from "react";

export const TransButton: React.FC = () => {
    /**
     * session存储以便当前页面监听语言切换
     * localStorage存储以便页面切换后同步语言切换
     */

    const newStorageEvent = document.createEvent('StorageEvent');

    const setItem = (k: any, val: any) => {
        sessionStorage.setItem(k, val)
        newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null)
        window.dispatchEvent(newStorageEvent)
    }

    const changeLang = () => {
        window.localStorage.setItem('lang', 'zhHK')
        setItem('lang', 'zhHK')
    }

    const changeEn = () => {
        window.localStorage.setItem('lang', 'enUS')
        setItem('lang', 'enUS')
    }

    return (
        <div>
            <div onClick={changeLang} style={{ width: '150px', height: '50px', backgroundColor: 'rgba(0,0,0,0.2)' }}>切换粤语</div>
            <div onClick={changeEn} style={{ width: '150px', height: '50px', backgroundColor: 'rgba(0,0,0,0.2)' }}>切换英语</div>
        </div>
    )
}