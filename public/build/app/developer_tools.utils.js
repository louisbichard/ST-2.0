var Log = (function () {
    function Log() {
        this.config = {
            logs: true
        };
    }
    Log.prototype.set = function (development_tool) {
        this.config[development_tool] = development_tool;
    };
    Log.prototype.output = function (string) {
        console.log(this, this.config);
        console.log(string);
    };
    return Log;
})();
exports.log = new Log().output;
//# sourceMappingURL=developer_tools.utils.js.map