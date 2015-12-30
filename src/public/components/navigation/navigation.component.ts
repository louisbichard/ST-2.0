import {Component} from 'angular2/angular2';

@Component({
    selector: 'navigation',
    template: `
        <h1> Navigation component({{name}})!! </h1>
        <li> 
            <ol> Dashboad </ol>
            <ol> Workspace </ol>
            <ol> Meetings </ol>
        </li>
    `
})

console.log('navigation component loaded');

export class Navigation {
    name: string = "NAMMEE";
}