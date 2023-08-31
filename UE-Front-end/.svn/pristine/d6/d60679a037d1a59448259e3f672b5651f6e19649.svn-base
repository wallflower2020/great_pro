export const init = () => {
    "object" != typeof (window as any).ue && ((window as any).ue = {});
    const ue4 = function (functoid) {
        "object" != typeof (window as any).ue?.interface && (delete (window as any).ue?.interface, (window as any).ue.interface = {});
        return function (key: any, json: any, cback: any, timeout: any) {
            if ("object" != typeof (window as any).ue["$receive"] || "function" != typeof (window as any).ue["$receive"]["asyn"]) {
                // console.error("[ue.$receive.asyn] drop message .... key" + key + " json" + JSON.stringify(json));
                return;
            }
            "string" == typeof key && ("function" == typeof json && (timeout = cback, cback = json, json = null));
            var backid = functoid(cback, timeout);
            void "string" !== typeof json ? (window as any).ue["$receive"].asyn(key, JSON.stringify(json), backid) : (window as any).ue["$receive"].asyn(key, json, backid);
        };
    }(
        function (callback: any, timeout: any) {
            if ("function" != typeof callback)
                return "";
            var funcid = function () { return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, function (t: any) { return (t ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> t / 4).toString(16) }) }();
            return (window as any).ue.interface[funcid] = callback, setTimeout(function () { delete (window as any).ue.interface[funcid] }, 1e3 * Math.max(2, parseInt(timeout) || 0)), funcid
        }
    );
    (window as any).ue4 = ue4
}

export const callUe4ByMenu = (item: any) => {
    (window as any).ue4('callUe4', {
        category: 'menu',
        key: item.key,
        type: 'menuItem',
        cn: item.cn || '',
        parameters: item.parameters ? item.parameters : {},
        objects: item.objects ? item.objects : []
    });

    console.log({
        category: 'menu',
        key: item.key,
        type: 'menuItem',
        cn: item.cn || '',
        parameters: item.parameters ? item.parameters : {},
        objects: item.objects ? item.objects : []
    })
}

export const callUe4ByTitle = (item: any) => {
    (window as any).ue4('callUe4', {
        category: 'title',
        key: item.key,
        type: 'titleItem',
        cn: item.cn || '',
        parameters: item.parameters ? item.parameters : {},
        objects: item.objects ? item.objects : []
    });

    console.log({
        category: 'title',
        key: item.key,
        type: 'titleItem',
        cn: item.cn || '',
        parameters: item.parameters ? item.parameters : {},
        objects: item.objects ? item.objects : []
    })
}

export const callUe4ByPage = (item: any) => {
    (window as any).ue4('callUe4', {
        category: item.category,
        key: item.key,
        type: 'pageItem',
        cn: item.cn || '',
        parameters: item.parameters || {},
        objects: item.objects || []
    });

    console.log({
        category: item.category,
        key: item.key,
        type: 'pageItem',
        cn: item.cn || '',
        parameters: item.parameters || {},
        objects: item.objects || []
    })
}

export const getUe4Interface = () => {
    return (window as any).ue.interface;
}