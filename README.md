# LighthouseApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Getting started

### Install frontend dependencies

```
nvm use
npm ci
```

### Install backend dependencies

```
virtualenv venv
source ./venv/bin/activate
pip install -r requirements.txt
```

### Google credentials

To run the project locally you will need to download a JSON key from
a service account in the GCP project and save it locally. Then export the path
to the file as GOOGLE_APPLICATION_CREDENTIALS, typically in your .bashrc or
.zshrc file. For example:

```sh
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/credentials.json"
```

### Run the project

`npm run dev` and hit `localhost:4200`.
