FROM node:12-alpine
WORKDIR /myweb
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]