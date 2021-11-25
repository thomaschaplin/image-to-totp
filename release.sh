#!/usr/bin/env bash

set -e

checkIsCorrectNpmUser() {
    CURRENT_NPM_USER=$(npm whoami)

    if [ "$CURRENT_NPM_USER" != "thomaschaplin" ];
    then
        echo "You need to be the thomaschaplin NPM user in order to be able to publish this module."
        exit 1
    fi
}

installDependencies() {
    rm -rf node_modules/
    npm ci
}

lint() {
    npm run lintFull
}

build() {
    rm -rf build/
    npm run build
}

publish() {
    npm publish
}

# You need to run `npm version` beforehand to create a new version and you should push this new version to GitHub afterwards!

main() {
    checkIsCorrectNpmUser
    installDependencies
    lint
    build
    publish
}

main
