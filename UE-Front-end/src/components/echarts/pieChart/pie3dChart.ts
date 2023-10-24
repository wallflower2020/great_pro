import { getPie3D } from "../util"

interface chartInterface {
    optionsData: [
        {
            name: string,
            value: number,
            itemStyle: {
                color: string
            }
        }
    ],
    unit: String,
    position?: {
        center: [string, string],
        top: any,
        left: any,
    }
}

export const get3dPieActiveChart = async (result: chartInterface) => {
    const { optionsData, unit, position } = result
    const series = getPie3D(optionsData, 0.7);

    //  补充一个透明的圆环，用于支撑高亮功能的近似实现。
    series.push({
        name: 'mouseoutSeries',
        type: 'surface',
        parametric: true,
        wireframe: {
          show: false,
        },
        itemStyle: {
          opacity: 0.1,
          color: '#E1E8EC',
        },
        parametricEquation: {
          u: {
            min: 0,
            max: Math.PI * 2,
            step: Math.PI / 20,
          },
          v: {
            min: 0,
            max: Math.PI,
            step: Math.PI / 20,
          },
          x: function (u:any, v:any) {
            return ((Math.sin(v) * Math.sin(u) + Math.sin(u)) / Math.PI) * 2;
          },
          y: function (u:any, v:any) {
            return ((Math.sin(v) * Math.cos(u) + Math.cos(u)) / Math.PI) * 2;
          },
          // z: function (u:any, v:any) {
          //   return Math.cos(v) > 0 ? -0.5 : -5;
          // },
        },
      });

      //  补充一个透明的圆环，用于支撑高亮功能的近似实现。
      series.push({
        name: 'mouseoutSeries',
        type: 'surface',
        parametric: true,
        wireframe: {
          show: false,
        },
        itemStyle: {
          opacity: 0.1,
          color: '#E1E8EC',
        },
        parametricEquation: {
          u: {
            min: 0,
            max: Math.PI * 2,
            step: Math.PI / 20,
          },
          v: {
            min: 0,
            max: Math.PI,
            step: Math.PI / 20,
          },
          x: function (u:any, v:any) {
            return ((Math.sin(v) * Math.sin(u) + Math.sin(u)) / Math.PI) * 2;
          },
          y: function (u:any, v:any) {
            return ((Math.sin(v) * Math.cos(u) + Math.cos(u)) / Math.PI) * 2;
          },
          // z: function (u:any, v:any) {
          //   return Math.cos(v) > 0 ? -5 : -7;
          // },
        },
      });
      series.push({
        name: 'mouseoutSeries',
        type: 'surface',
        parametric: true,
        wireframe: {
          show: false,
        },
        itemStyle: {
          opacity: 0.1,
          color: '#E1E8EC',
          
        },
    
        parametricEquation: {
          u: {
            min: 0,
            max: Math.PI * 2,
            step: Math.PI / 20,
          },
          v: {
            min: 0,
            max: Math.PI,
            step: Math.PI / 20,
          },
          x: function (u:any, v:any) {
            return ((Math.sin(v) * Math.sin(u) + Math.sin(u)) / Math.PI) * 2.2;
          },
          y: function (u:any, v:any) {
            return ((Math.sin(v) * Math.cos(u) + Math.cos(u)) / Math.PI) * 2.2;
          },
          // z: function (u:any, v:any) {
          //   return Math.cos(v) > 0 ? -7 : -7;
          // },
        },
      });

    const legend: any = [];    //图例
    optionsData.map((item: any) => { legend.push(item.name) })
    series.push({
        name: 'pie2d',
        type: 'pie',
        label: {
            opacity: 1,
            fontSize: 12,
            textStyle: {
                fontSize: 14,
                color: '#59DFF3',
            },
        },
        labelLine: {
            length: 17,
            length2: 32,

        },
        startAngle: -38, //起始角度，支持范围[0, 360]。
        clockwise: false, //饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
        radius: ['50%', '70%'],
        center: position?.center ?? ['48%', '48%'],
        data: optionsData,
        itemStyle: {
            opacity: 0,
        },
    })
    // 准备待返回的配置项，把准备好的 legendData、series 传入。
    const options = {
        animation: true,
        title: {
            show: true,
            subtext: `单位: ${unit}`,
            left: 4,
            top: -15,
            subtextStyle: {
                fontSize: '14px',
                fontFamily: 'PingFang SC',
                color: '#FFFFFF',
            },

        },
        grid: {
            top: '50%',
        },
        tooltip: {
          backgroundColor: "rgba(0,0,0,0.8)",
            formatter: (params: any) => {
                if (params?.seriesName !== 'mouseoutSeries' && params?.seriesName !== 'pie2d') {
                    return `${params.seriesName}<br/>
                    <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};">
                    </span>${options.series[params.seriesIndex].pieData.value}`;
                }
            },
            textStyle: {
                fontSize: 14,
                color:'#fff'

            },
        },
        labelLine: {
            show: true,
            lineStyle: {
                color: '#fff',
            },
        },
        label: {
            show: true,
            position: 'outside',
            formatter: (data: any) => {
                let info = data.data;
                let str = `{icon|●}{b|${info.name}}\n {c|${info.value}}`; //这里对不同的内容进行标识 a，b，或者可以随便自己起个别的名字

                return str;
            },
            textStyle: {
                color: '#fff',
                fontSize: 14,
            },
            rich: {
                b: {
                    fontSize: '14px',
                    fontFamily: 'PingFang SC',
                    color: '#59DFF3',
                },
                c: {
                    fontSize: '16px',
                    fontFamily: 'PingFang SC',
                    color: '#FFFFFF',
                    padding: [5, 10, 0, 10],

                },
                icon: {
                    fontSize: 14,
                    color: 'inherit',
                    padding: [0, 1, 0, 1],
                },
            }

        },
        xAxis3D: {
            min: -1,
            max: 1,
        },
        yAxis3D: {
            min: -1,
            max: 1,
            name: '12312'

        },
        zAxis3D: {
            min: -1,
            max: 1,
        },

        grid3D: {
            show: false,
            boxHeight: 0.3,
            top: position?.top ?? 10,
            left: position?.left ?? -15,
            // bottom: '50%',
            viewControl: {
                distance: 140,      // 大小
                alpha: 25,          // 面向屏幕的角度
                beta: 50,          // 开始旋转的角度
                autoRotate: true, // 自动旋转
            },
        },

        series: series,

    };
    return options

}