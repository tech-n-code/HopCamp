FROM node:lts-alpine3.18
RUN apk add --no-cache python3 make g++
WORKDIR /code
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 8000
CMD ["npm", "start"]