# build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# runtime stage
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# 可选：配置 nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf
