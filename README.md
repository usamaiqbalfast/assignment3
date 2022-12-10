# assignment3

## Things to do 

explore source code of metabase project

find unit tests for different cases

configure test environment and run different unit test cases

change unit tests

## Task 3
Explore k6

Install and configre K6

Run k6 test cases

### k6 Results


          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: test2.js
     output: -

  scenarios: (100.00%) 1 scenario, 1 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 1 iterations for each of 1 VUs (maxDuration: 10m0s, gracefulStop: 30s)


running (00m03.0s), 0/1 VUs, 1 complete and 0 interrupted iterations
default ✓ [======================================] 1 VUs  00m03.0s/10m0s  1/1 iters, 1 per VU

     data_received..................: 101 kB 34 kB/s
     data_sent......................: 782 B  263 B/s
     http_req_blocked...............: avg=719.01ms min=719.01ms med=719.01ms max=719.01ms p(90)=719.01ms p(95)=719.01ms
     http_req_connecting............: avg=288.12ms min=288.12ms med=288.12ms max=288.12ms p(90)=288.12ms p(95)=288.12ms
     http_req_duration..............: avg=1.22s    min=1.22s    med=1.22s    max=1.22s    p(90)=1.22s    p(95)=1.22s
       { expected_response:true }...: avg=1.22s    min=1.22s    med=1.22s    max=1.22s    p(90)=1.22s    p(95)=1.22s
     http_req_failed................: 0.00%  ✓ 0        ✗ 1
     http_req_receiving.............: avg=872.31ms min=872.31ms med=872.31ms max=872.31ms p(90)=872.31ms p(95)=872.31ms
     http_req_sending...............: avg=972.6µs  min=972.6µs  med=972.6µs  max=972.6µs  p(90)=972.6µs  p(95)=972.6µs
     http_req_tls_handshaking.......: avg=409.49ms min=409.49ms med=409.49ms max=409.49ms p(90)=409.49ms p(95)=409.49ms
     http_req_waiting...............: avg=351.81ms min=351.81ms med=351.81ms max=351.81ms p(90)=351.81ms p(95)=351.81ms
     http_reqs......................: 1      0.336537/s
     iteration_duration.............: avg=2.96s    min=2.96s    med=2.96s    max=2.96s    p(90)=2.96s    p(95)=2.96s
     iterations.....................: 1      0.336537/s
     vus............................: 1      min=1      max=1
     vus_max........................: 1      min=1      max=1


