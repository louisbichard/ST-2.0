import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private http: Http) { }
    
    get(route) {
        return this.http.get(route)
            .map((res: Response) => res.json());
    }

}
