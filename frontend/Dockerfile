# Dockerfile for React frontend

FROM node:20

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

RUN yarn

COPY . /app/

EXPOSE 3000

CMD ["yarn", "start"]
