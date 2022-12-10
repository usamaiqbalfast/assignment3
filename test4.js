import http from 'k6/http';

import { sleep } from 'k6';


export default function () {

  http.get('https://www.geeksforgeeks.org/');

  sleep(1);

}