# gart.dev
react app for gart.dev

# web

## quickstart
```
npm i
npm start
```

## deploy web app
- cd into `/web` dir
`npm run build`
`firebase deploy`

## troubleshoot
if deploy fails for auth reasons you can refresh token via
`firebase login --reauth`