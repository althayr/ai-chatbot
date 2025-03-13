#!/bin/sh
set -e
echo "🔄 Starting development environment setup..."

## Dev startup
yes | pnpm install;
# pnpm db:generate;
# pnpm db:migrate;
# pnpm dev;

## Prod startup
pnpm build;
pnpm start;

