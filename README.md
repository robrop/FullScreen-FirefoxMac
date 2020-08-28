# FullScreen-FirefoxMac


## Install with userChromeJS

### Dependency

Install userChromeJS:    
https://github.com/xiaoxiaoflood/firefox-scripts

## Install full screen script
Place both file in your profile folder.    
Path:
`/profile-folder/chrome/`

## Customisation

If you have the bookmark-bar enabled change **line 15** in `userChromeFullScreen.css` to    
```css
margin-top: calc(-68px - var(--tab-min-height));
```

<!--
Install path for js injection
https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Enterprise_deployment_before_60#Configuration
-->
