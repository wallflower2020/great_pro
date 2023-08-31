import React from "react";
import styles from "./style.module.css"
import classNames from "classnames";

interface PanelInrProps {
    position: string,
    style?: object,
    className?: string,
    children?: any
}

const PanelInr: React.FC<PanelInrProps> = (props) => {
    const { position = 'left', style, className = '', children } = props

    return (
        <div
            className={classNames(styles.panel, className, position === 'left' ? styles.leftAnimation : styles.rightAnimation)}
            style={{
                ...style,
            }}
        >
            {children}
        </div>
    )
}

export const Panel = PanelInr