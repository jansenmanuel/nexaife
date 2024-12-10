FROM node:16.19.0-alpine AS build-stage
WORKDIR /app

# Install dependencies
COPY package.json .
COPY package-lock.json .
RUN rm -rf node_modules

RUN npm install
RUN npm i react-scripts

# Create optimized build
COPY . .
RUN npm run build

FROM nginx:1.21.6-alpine
WORKDIR /usr/share/nginx/html
# Replace nginx default page with react app
RUN rm -rf ./*
COPY --from=build-stage /app/build .

# Replace conf file to fix 404 error on sub-routes
COPY default.conf /etc/nginx/conf.d

# Expose nginx port
EXPOSE 80

# Run nginx when container start
ENTRYPOINT ["nginx", "-g", "daemon off;"]

LABEL com.centurylinklabs.watchtower.enable="true"
LABEL io.portainer.accesscontrol.teams="nexcomponent"
LABEL io.portainer.accesscontrol.users="nexcomponent"