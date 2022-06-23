FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 5432

EXPOSE 3000

CMD npm start