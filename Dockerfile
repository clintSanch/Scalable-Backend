# Base image
FROM node:18-alpine as buider

LABEL org.opencontainers.image.source="https://github.com/clintSanch/Scalable-Backend"

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dev-dependencies only
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

EXPOSE 3500

# Start the server using the production build
CMD ["node", "dist/main.js"]