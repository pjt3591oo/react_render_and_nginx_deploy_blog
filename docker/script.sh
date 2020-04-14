# nginx 컨테이너 생성
docker run --name react_deploy -i -t -p 3000:80 nginx /bin/bash

# 도커파일 빌드
docker build -f Dockerfile -t react_app_deploy .

# 이미지 확인
docker images

# 컨테이너 생성
docker run --name react_app -p 80:80 react_app_deploy

# 컨테이너 생성(데몬형태)
docker run --name react_app -p 80:80 -d react_app_deploy