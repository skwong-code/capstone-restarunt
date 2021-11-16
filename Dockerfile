FROM node:14
ENV PORT=3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY packages*.json /usr/src/app/
RUN npm install
COPY . /user/src/app
RUN npm run build
EXPOSE 3000

CMD "npm" "run" "dev"
