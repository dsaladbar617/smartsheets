FROM node:alpine

WORKDIR /app

COPY . /app
RUN npm install -g nodemon@2.0.15 &&\
    npm install -g knex &&\
    npm install

EXPOSE 8080

CMD ["npm", "start", "build", "seed"]