FROM node:14

COPY package*.json .

RUN npm i

COPY . .

CMD npm run start:dev
