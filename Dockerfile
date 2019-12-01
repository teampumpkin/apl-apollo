ARG app_port
ARG debug_port
# ARG app_db
FROM node:12-alpine
RUN mkdir -p /app/apl
WORKDIR /app/apl
COPY . /app/apl
RUN npm install -g nodemon
RUN npm install
RUN npm install dotenv
RUN npm rebuild node-sass
# RUN npm run-script build
EXPOSE $app_port
EXPOSE $debug_port
CMD [ "npm", "start" ]