FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 8080
COPY nginx /etc/ngnix/conf.d/default.conf
COPY --from=builder /app/build /usr/share/ngnix/html
