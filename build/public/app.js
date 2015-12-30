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
// import {Navigation as Nav} from './components/navigation/navigation.component.js'
var Navigation = (function () {
    function Navigation() {
        this.navigations = [
            'dashboard',
            'workspace',
            'meetings'
        ];
    }
    Navigation = __decorate([
        angular2_1.Component({
            selector: 'navigation',
            directives: [angular2_1.NgFor],
            template: "\n        <h2> Navigation </h2>         \n        <ul *ng-for=\"#navigation of navigations\">  \n           <li>{{navigation}}</li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Navigation);
    return Navigation;
})();
var AppComponent = (function () {
    function AppComponent() {
        this.user = 'Louis Bichard';
    }
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            template: "\n      <div class=\"row\">\n        <div class=\"col-md-7\">\n            <h2>\n                Sharktower 2.0\n            </h2>\n        </div>\n        <div class=\"col-md-5\">\n            <h2 class=\"text-center\"> Logged in user: {{user}}</h2>\n        </div>\n      </div>\n      <hr>\n      <div class=\"row\">\n        <div class=\"col-md-2\">\n            <navigation></navigation>            \n        </div>\n        <div class=\"col-md-10\">\n           <h2> Content </h2>\n        </div>\n      </div>       \n      ",
            directives: [angular2_1.FORM_DIRECTIVES, Navigation]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
angular2_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=app.js.map