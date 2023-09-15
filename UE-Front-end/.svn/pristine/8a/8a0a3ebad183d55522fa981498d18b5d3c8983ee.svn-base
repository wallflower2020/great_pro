import React from 'react'
import style from './style.module.css'
import { Translate } from '../Translate'
import title from '../../assets/image/title.png'

/**
 * 页面标题组件
 * <Title id='' en='' />
 * id: 国际化编码，参考locales文件内容
 * en：标题英文部分
 */

interface titleProps {
    id: string
    en: string
}

const Title: React.FC<titleProps> = (props) => {
    const { id, en } = props
    return (
        <div className={style.title}>
            <Translate id={id} />
            <img src={title} />
            <div style={{ fontSize: '0.8rem' }}>{en}</div>
        </div>
    )
}

export default Title