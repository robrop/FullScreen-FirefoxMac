# FullScreen-FirefoxMac

## Custom full screen

### Dependency

Follow the instructions from https://pmueller.de/firefox-mac-mit-echtem-vollbild/     
Rename `userChrome.css` to `userChromeFullScreen.css`    
At the end you should have the file `/profile-folder/chrome/userChromeFullScreen.css`

### Customisation

If you have the bookmark-bar enabled change **line 15** in `userChromeFullScreen.css` to    
```css
margin-top: calc(-68px - var(--tab-min-height));
```

## Install with userChromeJS

### Dependency

Install userChromeJS:    
https://github.com/xiaoxiaoflood/firefox-scripts

## Install full screen script
Place the `MacFullScreen.uc.js` file in your profile folder.    
Path:
`/profile-folder/chrome/`

<!--
Install path for js injection
https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Enterprise_deployment_before_60#Configuration
-->
