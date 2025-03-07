#!/bin/sh
set -e
echo "🔄 Starting development environment setup..."
pnpm install;
pnpm db:generate;
pnpm db:migrate;
pnpm dev;

