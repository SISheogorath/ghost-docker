FROM ghost:0.11.10-alpine

RUN cd / && npm install lodash && echo $PWD

RUN  cp $GHOST_SOURCE/config.example.js $GHOST_CONTENT/config.example.js

COPY config.js $GHOST_SOURCE/config.js

ENV GHOST_DATABASE_CONNECTION_FILENAME=$GHOST_CONTENT/data/ghost.db \
    GHOST_PATHS_CONTENTPATH=$GHOST_CONTENT/
