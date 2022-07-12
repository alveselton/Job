FROM node:18

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./

RUN apt-get update && apt-get install -y vim

RUN npm install
COPY . .
COPY --chown=node:node . .

USER node

EXPOSE 2401
#CMD [ "node", "app.js" ]