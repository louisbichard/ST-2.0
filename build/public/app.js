var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var api_js_1 = require('./api.js');
var getsomeThingFromTheAPI = api_js_1.GET('some new route');
var postsomeThingFromTheAPI = api_js_1.POST('some new route');
var AppComponent = (function () {
    function AppComponent() {
        this.user = 'Louis Bichard';
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n    \n      <h1> Welcome to sharktower 2.0 tasks page </h1>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n            Navigation\n        </div>\n        <div class=\"col-md-6\">\n           Something on the right\n        </div>\n      </div> \n      <h1> Logged in user: {{user}}</h1>\n      ",
            directives: [angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=app.js.map