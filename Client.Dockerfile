FROM node:12.7-alpine AS build
WORKDIR /app
RUN npm install -g @angular/cli@latest
COPY . .
RUN npm install
RUN npm run build

CMD ng serve --host 0.0.0.0 --port $FRONTEND_PORT -c env$CONFIG_NO
