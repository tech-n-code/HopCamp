FROM node:18-alpine
RUN apk add --no-cache python3 make g++
WORKDIR /code
COPY package*.json .
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "start"]