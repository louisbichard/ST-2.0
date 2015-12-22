var ApiService = (function () {
    function ApiService() {
    }
    ApiService.prototype.GET = function (route) {
        fetch('/api/task')
            .then(function (response) { return response.json(); })
            .then(function (data) { console.log(data); });
        console.log("calling a GET API ' " + route + " '");
    };
    ApiService.prototype.POST = function (route) {
        console.log("calling a POST API ' " + route + " '");
    };
    return ApiService;
})();
exports.GET = new ApiService().GET;
exports.POST = new ApiService().POST;
//# sourceMappingURL=api.js.map