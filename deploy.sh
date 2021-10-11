#! /bin/bash

mv build ticket
scp -r ./ticket root@aliyun:/usr/local/nginx/html
