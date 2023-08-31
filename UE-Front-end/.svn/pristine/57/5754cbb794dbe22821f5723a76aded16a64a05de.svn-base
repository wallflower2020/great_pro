import React, { useEffect } from 'react';
import * as echarts from 'echarts'
import 'echarts-gl'

// declare const echarts: any;

/**
 * 图
 */
// @ts-ignore
interface BBIChartProps extends React.HTMLProps<any> {
    options: any;
    style?: React.CSSProperties;
    handlerClick?: Function,
    onLoad?: Function,
    loading?: boolean;
    mouseover?: Function,
}

const Chart = (props: BBIChartProps) => {
    const domRef: any = React.useRef();

    useEffect(() => {
        const { current } = domRef;
        if (current) {
            let instance: any = echarts.getInstanceByDom(current) || echarts.init(current);
            const resize = (): void => instance.resize();
            window.removeEventListener('resize', resize);
            window.addEventListener('resize', resize);

            // 加载状态
            function showLoading(instance: any): void {
                instance.showLoading('default', {
                    text: '',
                    color: 'rgba(255, 255, 255, 0.3)',
                    textColor: '#000000',
                    maskColor: 'rgba(255, 255, 255, 0)',
                    zlevel: 0,
                });
            }
            showLoading(instance);
            instance && instance.clear();
            instance.setOption(props.options);
            setTimeout(() => {
                instance && instance.resize()
            }, 1000)
            instance.off("click");
            instance.on("click", (event: any) => {
                props.handlerClick && props.handlerClick(event);
            })
            instance.on("mouseover", (event: any) => {
                props.mouseover && props.mouseover(event);
            })
        }
    }, []);

    useEffect(() => {
        if (props.style && 'display' in props.style) {
            const { current } = domRef;
            let instance: any =
                echarts.getInstanceByDom(current) || echarts.init(current);
            instance.resize();
        }
    }, [props.style]);

    useEffect(() => {
        const { current } = domRef;
        if (current) {
            let instance: any =
                echarts.getInstanceByDom(current) || echarts.init(current);
            instance.setOption(props.options, true);
            instance.hideLoading();
            props.onLoad?.(instance, props.options)
        }
    }, [props.options]);

    // @ts-ignore
    return <div ref={domRef} style={props.style}  {...props} />;
};
export default Chart;
