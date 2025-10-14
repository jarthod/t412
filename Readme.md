![Screenshot](https://cloud.githubusercontent.com/assets/201687/17836343/391b856a-678f-11e6-8b67-9b046a8334ad.png)

---

T412 is a very simple web client for the [YGG Unoficial API](https://yggapi.eu/) built to provide a cleaner UI. It doesn't use a single dependency on the client side and holds entirely in the `t412.html` file (html + css + js).

You can use the public version I'm hosting here: http://t412.rootbox.fr

Of you can download `index.html` and open it locally in your browser.

## Features

The features provided are the absolute minimum to be able to use YGG with no clutter:
- Store the passkey in your browser's local storage so you don't need to put it each time
- Issue search requests (auto extract seasons and episode numbers for better search)
- Sort results by most downloaded
- Click on a result to download the torrent file (with your passkey)
- Easy keyboard use (use TAB and Shift+TAB to navigate and Enter to download)

## Quality

This is **not** quality code, I wrote it for me to have a better UI to use and also as a little challenge to built this as small as possible and without any js libs. Use it if you want at your own risk, and fell free to fork and PR, though I won't accept PR which increase size and complexity without a good reason.
