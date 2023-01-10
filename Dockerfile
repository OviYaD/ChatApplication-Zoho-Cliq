# FROM node:alpine
# # FROM ubuntu:latest
# # RUN apt update
# # RUN apt install nginx -y
# # RUN apt install nodejs -y
# # RUN apt install npm -y
# # RUN service nginx start
# RUN mkdir /app/
# COPY . /app/
# WORKDIR /app
# RUN npm install
# RUN npm i serve -g
# RUN npm run build
# # RUN mkdir -p /var/www/build/
# # RUN cp -r /app/build/* /var/www/build/
# EXPOSE 3000
# CMD ["serve","-s", "build"]
FROM node:alpine as ui-builder

RUN mkdir /app/

COPY . /app/

WORKDIR /app

RUN npm install

ARG REACT_APP_HOST_IP_ADDRESS

ENV REACT_APP_HOST_IP_ADDRESS $REACT_APP_HOST_IP_ADDRESS

RUN npm run build

FROM nginx
COPY --from=ui-builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
