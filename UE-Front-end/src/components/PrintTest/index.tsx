import React from "react";

const PrintTest: React.FC = () => {

    //美化打印实现方法
    const prettyLog = () => {
        const isEmpty = (value: any) => {
            return value === null || value === undefined || value === '';
        }

        const prettyPrint = (title: string, text: string, color: string) => {
            console.log(
                `%c ${title} %c ${text} %c`,
                `background:${color};border:1px solid ${color} ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
                `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`,
                'background:transparent'
            )
        };
        // 基础信息打印
        const info = (textOrTitle: string, content = '') => {
            const title = isEmpty(content) ? 'Info' : textOrTitle;
            const text = isEmpty(content) ? textOrTitle : content;
            prettyPrint(title, text, '#909399');
        };

        // 错误信息打印
        const error = (textOrTitle: string, content = '') => {
            const title = isEmpty(content) ? 'Error' : textOrTitle;
            const text = isEmpty(content) ? textOrTitle : content;
            prettyPrint(title, text, '#F56C6C');
        };

        // 警告信息打印
        const warn = (textOrTitle: string, content = '') => {
            const title = isEmpty(content) ? 'Warn' : textOrTitle;
            const text = isEmpty(content) ? textOrTitle : content;
            prettyPrint(title, text, '#E6A23C');
        };

        // 成功信息打印
        const success = (textOrTitle: string, content = '') => {
            const title = isEmpty(content) ? 'Success' : textOrTitle;
            const text = isEmpty(content) ? textOrTitle : content;
            prettyPrint(title, text, '#67C23A');
        };

        // 重要信息打印
        const important = (textOrTitle: string, content = '') => {
            const title = isEmpty(content) ? 'Important' : textOrTitle;
            const text = isEmpty(content) ? textOrTitle : content;
            prettyPrint(title, text, '#409EFF');
        };

        // 特殊信息打印
        const mor = (textOrTitle: string, content = '') => {
            const title = isEmpty(content) ? 'Normal' : textOrTitle;
            const text = isEmpty(content) ? textOrTitle : content;
            prettyPrint(title, text, '#FFFF00');
        };

        return {
            info,
            error,
            warn,
            success,
            important,
            mor
        }
    }

    const log = prettyLog();

    const printtest = () => {
        console.log('test0')
        console.info('%c test1', "color: red")
        console.warn('test2')
        console.error('test3')

        log.info('test4')
        log.info('测试六', 'test6')

        log.error('test7')

        log.warn('test8')
        log.warn('测试九', 'test9')

        log.success('test10')
        log.success('测试十一', 'test11')
        log.important('test12')
        log.important('测试十三', 'test13')

    }

    return (
        <div onClick={() => printtest()}>
            <div>PrintTest</div>
        </div>
    );
}

export default PrintTest;