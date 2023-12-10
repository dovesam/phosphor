FROM node:21-alpine
WORKDIR /phospor/
COPY public/ /phospor/public
COPY src /phospor/src
COPY package.json /phospor/
COPY tsconfig.json /phospor/

RUN npm install

CMD ["yarn", "start"]