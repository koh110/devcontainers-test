FROM node:18-alpine

WORKDIR /app

RUN apk add git && apk add openssh

COPY . .

CMD ["node", "./src/index.mjs"]
