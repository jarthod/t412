![Screenshot](https://cloud.githubusercontent.com/assets/201687/17836343/391b856a-678f-11e6-8b67-9b046a8334ad.png)

---

T412 is a very simple web client for the T411 API built to provide a cleaner UI. It doesn't use a single dependency on the client side and holds entirely in the `t412.html` file (html + css + js):

You can use the public version I'm hosting here: http://t412.fr or https://t412.herokuapp.com

Of you can run it locally (requires node.js >= 4):
```
git clone https://github.com/jarthod/t412
cd t412
npm install
node app.js
```
And then open http://localhost:3000

## Features

The features provided are the absolute minimum to be able to use T411:
- Login and store the authentication token in your browser's local storage
- Fetch you profile details (name, download and upload metric)
- Issue search requests (auto append * to numeric terms)
- Sort results by seeder count
- Click on a result to download the torrent instantly
- Easy keyboard use (use TAB and Shift+TAB to navigate and Enter to download)

## Quality

This is **not** quality code, I wrote it for me to have a better UI to use and also as a little challenge to built this as small as possible and without any js libs. Use it if you want at your own risk, and fell free to fork and PR, though I won't accept PR which increase size and complexity without a good reason.

## Compatibility

This app uses recent feature part of ES6 like `fetch`, `Promise`, arrow functions, etc. and thus will only work in modern browsers. It works fine in Chrome 51 and Firefox 48.

## Server side

Unfortunately as of now the T411 API doesn't send CORS headers and thus it is impossible to use the API directly from the browser. So I had to write a small node.js proxy to relay all the API requests from the server. But if they ever add these headers, all the server side code and node.js dependency will be gone.

