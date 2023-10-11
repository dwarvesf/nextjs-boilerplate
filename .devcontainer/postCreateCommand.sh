#!/bin/bash

# remove node_modules if it exists from the host platform
rm -rf node_modules

# remove .pnpm-store if it exists from the host platform
rm -rf .pnpm-store

# install all modules with pnpm
pnpm install
