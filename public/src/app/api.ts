import {log} from './developer_tools.utils';

class ApiService {
  GET(route: string) {
    log(`calling a GET API \' ${route} \'`);
  }

  POST(route: string) {
    log(`calling a POST API \' ${route} \'`);
  }

}

export let GET = new ApiService().GET;
export let POST = new ApiService().POST;