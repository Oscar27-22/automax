FROM node:18-alpine
WORKDIR /app
COPY app.js .
COPY WWW ./WWW
EXPOSE 8888
CMD ["node", "app.js"]