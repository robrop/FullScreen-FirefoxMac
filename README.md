# FullScreen-FirefoxMac

## Custom full screen

### Dependency

Follow the instructions from https://pmueller.de/firefox-mac-mit-echtem-vollbild/     
Rename `userChrome.css` to `userChromeFullScreen.css`    
At the end you should have the file `/profile-folder/chrome/userChromeFullScreen.css`

### Customisation

If you have the Bookmarks Toolbar enabled change **line 15** in `userChromeFullScreen.css`.

No Bookmarks Toolbar:
```css
margin-top: calc(-40px - var(--tab-min-height));
```
With Bookmarks Toolbar enabled:
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

## Hotkey

The defgault hotkey is **Command-Option-Shift-F**    
To change the hotkey you have to modify **line 31** and **line 32** in `MacFullScreen.uc.js`.
Key | Modifier
----|----
Command ⌘ | accel
Shift ⇧ | shift
Option ⌥ | alt
Control ⌃ | control

More information: https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/Tutorial/Keyboard_Shortcuts


<!--
Install path for js injection
https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Enterprise_deployment_before_60#Configuration
Original userChrome.css
https://pmueller.de/firefox-mac-mit-echtem-vollbild/
-->
