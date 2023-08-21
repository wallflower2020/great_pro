import { get3dPieActiveChart } from "../../../components/echarts/pieChart/pie3dChart";

export const get3dPieChart = async () => {
    // 传入数据生成 option
    const optionsData: any = [
        {
            name: '携程',
            value: 120,
            itemStyle: {
                //   opacity: 0.5,
                color: '#0aadff',
            },
        },
        {
            name: '去哪儿',
            value: 149,
            itemStyle: {
                /* opacity: 1, */
                color: '#3c63ff',
            },
        },
        {
            name: '美团',
            value: 49,
            itemStyle: {
                //   opacity: 0.5,
                color: ' #96ff30',
            },
        },
        {
            name: '其他',
            value: 20,
            itemStyle: {
                //   opacity: 0.5,
                color: '#ffe445',
            },
        },
        {
            name: '现场购票',
            value: 20,
            itemStyle: {
                //   opacity: 0.5,
                color: '#e2e2e2',
            },
        },
    ];
    return get3dPieActiveChart({ optionsData, unit: '万元' })
}