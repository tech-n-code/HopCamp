FROM node:18-alpine
RUN apk add --no-cache python3
RUN npm install -g npm@9.8.0
WORKDIR /code
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "start"]