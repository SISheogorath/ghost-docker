#!/bin/sh

GHOST_CONF_TEMPLATE="/usr/src/ghost/config.example.js"

sed -i "s/url: 'http:\/\/my-ghost-blog.com',/url: process.env.GHOST_URL/g" "$GHOST_CONF_TEMPLATE"
#sed -i "s/mail: {}/mail: { trainsport: 'SMTP', options: { service: 'Mailgun', auth: { user: 'process.env.GHOST_MAILGUN_USER', pass: process.env.GHOST_MAILGUN_PASS } }}/g" "$GHOST_CONF_TEMPLATE"

. /usr/local/bin/docker-entrypoint.sh
