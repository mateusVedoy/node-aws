FROM node:18-alpine

WORKDIR /usr/app

VOLUME /etc/localtime:/etc/localtime:ro /etc/timezone:/etc/timezone:ro

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start"]