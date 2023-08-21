import html2canvas from "html2canvas";
import React, { useState } from "react";
import style from './style.module.css'
import { Image } from "antd";

interface PreviewTagInrProps {
    children: React.ReactNode
}

const PreviewTagInr: React.FC<PreviewTagInrProps> = (props) => {
    const { children } = props

    const [img, setImg] = useState('') // 图片地址
    const [visible, setVisible] = useState(false) // 预览图展示

    const handleClick = (event: any) => {
        if(event.detail === 2) {
            html2canvas(document.querySelector('#capture')!, {
                useCORS: true,
                scale: window.devicePixelRatio < 3 ? window.devicePixelRatio : 2,
                allowTaint: true,
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
            <div id='capture' onClick={handleClick}>
                {children}
            </div>
            {img && <Image width={200} src={img} style={{display: 'none'}} preview={{visible, onVisibleChange: (v) => {setVisible(v)}}} />}
        </>
    )
}

export const PreviewTag = PreviewTagInr