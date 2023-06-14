FROM node:17-alpine

WORKDIR /usr/src/app
RUN npm install -g pnpm

COPY ["package.json", "tsconfig.json", "./"]

RUN pnpm install

COPY . .

EXPOSE 8080

CMD ["pnpm", "start"]
