module.exports = function (RED) {
    function StartupTriggerNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function (msg) {
            msg.start = "Started";
            node.send(msg);
        });

        setTimeout(function () {
            node.emit('input', {});
        }, 3000);

    }
    RED.nodes.registerType("start-up-trigger", StartupTriggerNode);


}