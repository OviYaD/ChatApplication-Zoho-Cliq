FROM ubuntu:latest
RUN apt update
RUN apt install nginx -y
RUN apt install nodejs -y
RUN apt install npm -y
# RUN systemctl start nginx
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
