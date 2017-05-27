FROM ghost:0.11.9-alpine

ENV GHOST_URL http://127.0.0.1:3000

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT  ["/entrypoint.sh"]
