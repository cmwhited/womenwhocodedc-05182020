# 1st stage
FROM node:12.13-alpine As development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=development
COPY . .
RUN npm run build
EXPOSE 3000 9229 5432
CMD [ "npm", "run", "local:offline" ]