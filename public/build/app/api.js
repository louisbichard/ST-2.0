var developer_tools_utils_js_1 = require('./developer_tools.utils.js');
var ApiService = (function () {
    function ApiService() {
    }
    ApiService.prototype.GET = function (route) {
        developer_tools_utils_js_1.log("calling a GET API ' " + route + " '");
    };
    ApiService.prototype.POST = function (route) {
        developer_tools_utils_js_1.log("calling a POST API ' " + route + " '");
    };
    return ApiService;
})();
exports.GET = new ApiService().GET;
exports.POST = new ApiService().POST;
//# sourceMappingURL=api.js.map