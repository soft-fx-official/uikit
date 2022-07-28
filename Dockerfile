FROM registry.soft-fx.lv/org/nodejs/node:18.5.0-alpine3.16-build as build

COPY . /tmp
WORKDIR /tmp/
RUN echo 'wget types' && \
    wget -d https://common.s3w.soft-fx.lv/main.develop/@types.json && \
    ls -lah && \
    npm install && npm run build
