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
var User = (function () {
    function User() {
    }
    return User;
})();
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.tasks = [1, 2, 3, 4];
        this.hero = {
            id: 1,
            name: 'Lou Bichard'
        };
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n      <h1> Welcome to sharktower 2.0 tasks page </h1>\n      <h1>{{title}}</h1>\n      <h2>{{hero.name}} details!</h2>\n      <div><label>id: </label>{{hero.id}}</div>\n      <div>\n        <label>name: </label>\n        <div>\n            <input [(ng-model)]=\"hero.name\" placeholder=\"name\">                        \n        </div>\n      </div>\n      ",
            directives: [angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=app.js.map