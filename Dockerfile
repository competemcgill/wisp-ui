FROM node:lts-alpine as build-stage
ARG NODE_ENV=production
ARG VUE_APP_WISP_API_URL
ENV NODE_ENV=${NODE_ENV}
ENV VUE_APP_WISP_API_URL=${VUE_APP_WISP_API_URL}
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]