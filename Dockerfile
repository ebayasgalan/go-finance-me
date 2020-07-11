FROM node:12-alpine
WORKDIR /go-finance-me
COPY . .
RUN yarn install --production
CMD ["node", "go-finance-me/pages/index.js"]