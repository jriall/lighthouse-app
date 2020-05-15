rm -rf dist/
npm run build
rsync -a backend/ dist
cp app.yaml dist
cp requirements.txt dist

gcloud app deploy ./dist/app.yaml --quiet --project="lighthouse-app-276618" \
--version="test" --no-promote
