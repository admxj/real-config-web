FROM nginx
MAINTAINER "admxj" <admxj@126.com>
RUN mkdir -p /usr/share/nginx/html/real-config-web/
COPY ./build/ /usr/share/nginx/html/real-config-web/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 1093
