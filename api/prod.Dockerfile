FROM node:14-alpine as dist
#ENV NODE_ENV=production
WORKDIR /home/node/app
COPY --chown=node package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:14-alpine
WORKDIR /home/node/app
EXPOSE 3000
CMD [ "pm2", "dist/index.js" ]
RUN npm install -g pm2
USER node
COPY --chown=node --from=dist /home/node/app/node_modules ./node_modules
COPY --chown=node --from=dist /home/node/app/dist ./dist

