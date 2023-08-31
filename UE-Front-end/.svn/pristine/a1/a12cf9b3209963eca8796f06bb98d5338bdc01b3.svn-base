self.addEventListener('message', function (event) {
    //获取要发送的数据
    const data = event.data;

    //创建UDP数据包
    const udpPacket = new ArrayBuffer(4);
    const view = new DataView(udpPacket);
    view.setUint32(0, data);

    //发送UDP数据包
    this.self.postMessage(udpPacket);
});