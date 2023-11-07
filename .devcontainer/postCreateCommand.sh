#!/bin/bash

# remove node_modules and .pnpm-store if it exists from the host platform
rm -rf node_modules .pnpm-store

# hard link workaround for docker containers instantiated on darwin
# https://github.com/pnpm/pnpm/issues/7024
if [ $(sysctl -n kern.osversion | cut -d '.' -f 1) -ge 20 ]; then
  echo "Hard links are supported."
else
  echo "Hard links are not supported."

  # edit a fresh .npmrc with package-import-method set to clone-or-copy and ignore git changes on it
  echo "package-import-method=clone-or-copy" >> .npmrc
fi

# install all modules with pnpm
pnpm install
