
import {bootstrap, Component, FORM_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS, Response} from 'angular2/http';
import {POST, GET} from './api'

let getsomeThingFromTheAPI = GET('some new route');
let postsomeThingFromTheAPI = POST('some new route');

class User {
  id: number;
  name: string;
}

@Component({
    selector: 'my-app',
      template:`
      <h1> Welcome to sharktower 2.0 tasks page </h1>
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <div>
            <input [(ng-model)]="hero.name" placeholder="name">                        
        </div>
      </div>
      `,
      directives: [FORM_DIRECTIVES]
})

class AppComponent {
  public title = 'Tour of Heroes';
  public tasks = [1, 2, 3, 4];
  public hero: User = {
      id: 1,
      name: 'Lou Bichard'
    };
}

bootstrap(AppComponent);