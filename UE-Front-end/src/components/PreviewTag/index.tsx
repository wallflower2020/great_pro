import html2canvas from "html2canvas";
import React, { useState } from "react";
// import style from './style.module.css'
import { Image } from "antd";

/**
 * 图片预览组件使用示例：
 * <Preview id='XXX1'> XXX2 </Preview>
 * XXX1: 传入节点id（当前页面唯一）
 * XXX2： 预览内容 (显示效果如边缘空白区域等受margin，切图边缘等影响)
 */

interface PreviewTagInrProps {
    children: React.ReactNode
    id: string
}

const PreviewTagInr: React.FC<PreviewTagInrProps> = (props) => {
    const { children, id } = props

    const [img, setImg] = useState('') // 图片地址
    const [visible, setVisible] = useState(false) // 预览图展示

    const handleClick = (event: any) => {
        if(event.detail === 2) {
            html2canvas(document.querySelector(`#${id}`)!, {
                useCORS: true,
                scale: window.devicePixelRatio < 3 ? window.devicePixelRatio : 2,
                allowTaint: true,
                backgroundColor: 'rgba(0,0,0,0)',
                // height: 600,
                // width: 600
            }).then((canvas) => {
                const imgData = canvas.toDataURL('image/jepg', 1.0)
                setImg(imgData)
                setTimeout(() => {
                    setVisible(true)
                }, 300)
            })
        }
    }

    return (
        <>
            <div id={id} onClick={handleClick}>
                {children}
            </div>
            {img && <Image width={200} src={img} style={{display: 'none'}} preview={{visible, onVisibleChange: (v) => {setVisible(v)}}} />}
        </>
    )
}

export const PreviewTag = PreviewTagInr