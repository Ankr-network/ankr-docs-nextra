FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn 
RUN yarn install

EXPOSE 3000
CMD [ "yarn", "next" ]