FROM nginx:stable-alpine

COPY index.html style.css script.js /usr/share/nginx/html/
COPY images/ /usr/share/nginx/html/images/

EXPOSE 80