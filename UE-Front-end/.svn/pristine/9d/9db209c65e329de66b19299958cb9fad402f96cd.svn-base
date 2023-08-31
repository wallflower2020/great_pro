import React, { useState, useEffect } from 'react'
import enUS from '../../locales/en-US'
import zhCN from '../../locales/zh-CN'
import zhHK from '../../locales/zh-HK'

/**
 * 国际化组件示例：
 * <Translate id="XXX" />
 * XXX: 参见locales文件夹下对应文本文件对象键值
 */

interface TranslateInrProps {
    id: string,
}

const TranslateInr: React.FC<TranslateInrProps> = (props) => {
    const { id } = props
    const [lang, setLang] = useState(zhCN)

    const la = window.localStorage.getItem('lang')

    useEffect(() => {
        if(la === 'zhHK') {
            setLang(zhHK)
        } else if(la === 'enUS') {
            setLang(enUS)
        } else {
            setLang(zhCN)
        }
    }, [la])

    window.addEventListener('setItem', ()=> {
        const l = sessionStorage.getItem('lang')
        if(l === 'zhHK') {
            setLang(zhHK)
        } else if(l === 'enUS') {
            setLang(enUS)
        }
    })

    return (
        <div>{lang[id]}</div>
    )
}

export const Translate = TranslateInr