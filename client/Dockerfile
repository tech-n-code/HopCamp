FROM node:lts-alpine3.18
WORKDIR /code
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]