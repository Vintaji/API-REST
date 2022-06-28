FROM node:16-alpine as base

WORKDIR .
COPY package*.json /
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
ENV NODE_OPTIONS=--max_old_space_size=1024
COPY . /
CMD ["node", "bin/www"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
ENV NODE_OPTIONS=--max_old_space_size=1024
COPY . /
CMD ["nodemon", "bin/www"]
