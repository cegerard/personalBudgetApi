FROM node:current

# build the projet in this folder
WORKDIR /usr/src/app

# Copy all necessary files for server side run
COPY config ./config
COPY src ./src
COPY package.json .
COPY package-lock.json .
COPY project.js .
COPY server.js .

# install dependencies
RUN npm install

# Expose the api port
EXPOSE 8080

# Command to run on the container
CMD [ "npm", "start" ]
