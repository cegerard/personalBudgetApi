FROM node:current-slim

# build the projet in this folder
WORKDIR /usr/src/app

# Copy all necessary files for server side run
COPY server ./server
COPY package.json .
COPY package-lock.json .
COPY .yo-rc.json .

# install dependencies
RUN npm install

# Expose the api port
EXPOSE 3000

# Command to run on the container
CMD [ "npm", "start" ]
