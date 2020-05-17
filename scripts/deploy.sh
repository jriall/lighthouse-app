#!/bin/bash

set -e

if [[ $# -ne 1 ]]; then
  echo "" >&2
  echo "ERROR: Exepected appengine version as a sole argument, got $#!" >&2
  echo "" >&2

  exit 1
fi

readonly VERSION="$1"

rm -rf dist/
npm run build
rsync -a backend/ dist
cp app.yaml dist
cp requirements.txt dist

# Add the Appengine version into the HTML document for Stackdriver.
sed -i "s/data-appengine-version=\"[^\"]*\"/data-appengine-version=\"${VERSION}\"/" \
./dist/lighthouse-app/index.html

# Deploy to Appengine
gcloud app deploy ./dist/app.yaml --quiet --project="lighthouse-app-276618" \
--version="${VERSION}" --no-promote
