FROM node:latest
LABEL authors="reveek"

COPY . .
RUN npm run build
RUN npm install -g serve

CMD ["serve", "-s", "build"]
