FROM ghcr.io/puppeteer/puppeteer:latest

# تثبيت chromium
RUN apt-get update && apt-get install -y chromium-browser

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

WORKDIR /usr/src/app
RUN which chromium-browser  # للتحقق من المسار

COPY package*.json ./
RUN npm ci
COPY . .

CMD [ "node", "index.js" ]
