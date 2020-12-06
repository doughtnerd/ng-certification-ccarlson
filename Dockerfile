
FROM node:alpine as node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:prod

# Build a small nginx image with static website
FROM nginx:mainline-alpine-perl
RUN rm -rf /usr/share/nginx/html/*
COPY /nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/ng-certification-ccarlson /usr/share/nginx/html
EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx