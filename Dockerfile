FROM node:alpine
RUN mkdir /app/
COPY . /app/
WORKDIR /app
RUN npm install
RUN npm i serve -g
RUN npm run build
EXPOSE 3000
CMD ["serve","-s", "build"]
