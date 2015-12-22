
import {Http} from 'angular2/http';

class ApiService {
   constructor() {
  }

 GET(route: string) {
    fetch('/api/task')
    .then((response) => response.json())
    .then(function(data){console.log(data);});
    console.log(`calling a GET API \' ${route} \'`);  
  }

  POST(route: string) {
    console.log(`calling a POST API \' ${route} \'`);
  }

}

export let GET = new ApiService().GET;
export let POST = new ApiService().POST;