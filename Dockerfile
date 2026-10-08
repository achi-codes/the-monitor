FROM nginx:1.27-alpine

COPY dist/index.html /usr/share/nginx/html/index.html
COPY dist/the-monitor.js /usr/share/nginx/html/the-monitor.js
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
