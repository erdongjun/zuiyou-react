#!/usr/bin/env bash
sshpass -p RpYCwYufk6Vu scp -P 28138 -r build/fonts  root@144.168.57.87:/home/wwwroot/test/
sshpass -p RpYCwYufk6Vu scp -P 28138 -r build/imgs  root@144.168.57.87:/home/wwwroot/test/
sshpass -p RpYCwYufk6Vu scp -P 28138 -r build/*.js  root@144.168.57.87:/home/wwwroot/test/
sshpass -p RpYCwYufk6Vu scp -P 28138 -r build/*.css  root@144.168.57.87:/home/wwwroot/test/
sshpass -p RpYCwYufk6Vu scp -P 28138 -r build/*.html  root@144.168.57.87:/home/wwwroot/test/
