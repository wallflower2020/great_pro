self.addEventListener('message', function (event) {
    //获取UDP数据包
    const udpPacket = event.data;

    //解析UDP数据包
    const view = new DataView(udpPacket);
    const data = view.getUint32(0);

    // 处理接收到的UDP消息
    this.self.postMessage(data);
})