/**
 * 菜单文件
 * name 菜单名称
 * en 国际化名称
 * tag: ue传值(唯一，tag + name --> key, tag --> value)
 * path: 路由
 */

export const menus = [
    {
        "name": "集团介绍",
        "en": "groupIntroduction",
        "tag": "A1",
        "path": "/groupIntro",
        "children": [
            {
                "name": "中建国际介绍",
                "en": "A1B1",
                "tag": "A1B1",
                "path": "/cscecInter"
            }, {
                "name": "中建海龙介绍",
                "en": "A1B2",
                "tag": "A1B2",
                "path": "/cschlIntro"
            }, {
                "name": "国内布局",
                "en": "A1B3",
                "tag": "A1B3",
                "path": "/domestic"
            }, {
                "name": "七大主题",
                "en": "A1B4",
                "tag": "A1B4",
                "path": "/sevenSeries"
            }, {
                "name": "重要项目",
                "en": "A1B5",
                "tag": "A1B5",
                "path": "/important"
            }
        ]
    }, {
        "name": "片区介绍",
        "en": "arerIntroduction",
        "tag": "A2",
        "path": "/arerIntro"
    }, {
        "name": "公司介绍",
        "en": "companyIntroduction",
        "tag": "A3",
        "path": "/digitalLargeScreen"
    }
]