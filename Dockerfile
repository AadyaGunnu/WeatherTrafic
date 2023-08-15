FROM node:18.14.0-alpine
WORKDIR /app
ENV PATH \WeatherTrafic\weather_traffic\node_modules
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent
COPY . ./
CMD ["npm", "start"]