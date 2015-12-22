
import {bootstrap, Component, FORM_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {GET, POST} from './api.js'

let getsomeThingFromTheAPI = GET('some new route');
let postsomeThingFromTheAPI = POST('some new route');

@Component({
    selector: 'my-app',
    template: `
    
      <h1> Welcome to sharktower 2.0 tasks page </h1>
      <div class="row">
        <div class="col-md-6">
            Navigation
        </div>
        <div class="col-md-6">
           Something on the right
        </div>
      </div> 
      <h1> Logged in user: {{user}}</h1>
      `,
    directives: [FORM_DIRECTIVES]
})

class AppComponent {
    public user:string = 'Louis Bichard';
}

bootstrap(AppComponent, [HTTP_PROVIDERS]);