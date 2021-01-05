# ImmoScout - Web

Web Client of ImmoScout project (ImmoScout24 Web Scraper)

Repository: https://github.com/tobiaskraus/immoscout-web

## Project Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

-   React
-   TypeScript
-   styled-components

### Develop

-   Copy `.env-example` file and pase as new files:
    -   `.env` (for `npm start`)
    -   `.env.prod-api` (for `npm run start:prod-api`)
-   adjust values in these files

if you want to use local API (API Endpoint in `.env` file):

```
npm start
```

if you want to use public API (API Endpoint in `env.prod-api` file):

```
npm run start:prod-api
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deploy

```
npm run build
firebase deploy
```

URL: [tk-immoscout.web.app](https://tk-immoscout.web.app/)
