import http from 'k6/http';

import { sleep } from 'k6';


export default function () {

  http.get('https://www.worldometers.info/world-population/population-by-country/');

  sleep(1);

}