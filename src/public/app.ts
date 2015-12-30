
import {bootstrap, Component, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {GET, POST} from './api.js'
// import {Navigation as Nav} from './components/navigation/navigation.component.js'

@Component({
    selector: 'navigation',
    directives: [NgFor]
    template: `
        <h2> Navigation </h2>         
        <ul *ng-for="#navigation of navigations">  
           <li>{{navigation}}</li>
        </ul>
    `
})

class Navigation {
    public navigations:array = [
        'dashboard',
        'workspace',
        'meetings'
    ];
}

@Component({
    selector: 'my-app',
    template: `
      <div class="row">
        <div class="col-md-7">
            <h2>
                Sharktower 2.0
            </h2>
        </div>
        <div class="col-md-5">
            <h2 class="text-center"> Logged in user: {{user}}</h2>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-2">
            <navigation></navigation>            
        </div>
        <div class="col-md-10">
           <h2> Content </h2>
        </div>
      </div>       
      `,
    directives: [FORM_DIRECTIVES, Navigation]
})

class AppComponent {
    public user:string = 'Louis Bichard';
}

bootstrap(AppComponent, [HTTP_PROVIDERS]);