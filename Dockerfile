FROM node:14.16.0-alpine AS builder

WORKDIR /usr/frontend-storefront-general-theme

COPY ./package*.json ./

RUN npm install --global npm && \
    node --version && \
    npm --version && \
    NODE_ENV=production \
    npm install \
    --no-audit \
    --no-fund \
    --omit=dev \
    --omit=optional \
    --ignore-scripts

COPY . ./

RUN npm run build --production

EXPOSE 3000

CMD [ "npm", "start" ]
