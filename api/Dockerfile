FROM node:14-alpine
ENV HOST=0.0.0.0 PORT=3000
EXPOSE ${PORT}
CMD [ "node", "." ]
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
USER node
WORKDIR /home/node/app
COPY --chown=node package*.json ./
RUN npm install
COPY --chown=node . .
RUN npm run build

