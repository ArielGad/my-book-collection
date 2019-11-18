FROM node:10

WORKDIR /app/frontend

COPY package.json package-lock.json /app/frontend/

RUN npm install

COPY . /app/frontend/

EXPOSE 3000
