#!/bin/bash

# since this is our devcontainer, make it a safe dir for dubious ownership
# https://nvd.nist.gov/vuln/detail/cve-2022-24765
git config --global --add safe.directory ${containerWorkspaceFolder}

# remove .npmrc from the git index
git update-index --assume-unchanged .npmrc
