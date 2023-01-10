FROM ubuntu:latest
RUN apt update
RUN apt get install nginx=1.22.0
RUN apt get install nodejs
RUN mkdir /app/
COPY . /app/
WORKDIR /app
RUN npm install
RUN npm i serve -g
RUN npm run build
RUN mkdir /var/www/build/
RUN cp /app/build/* /var/www/build/
EXPOSE 80
# CMD ["serve","-s", "build"]
