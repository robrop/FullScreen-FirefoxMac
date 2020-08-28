// ==UserScript==
// @name            MacFullScreen
// @author          rojaro
// @include         main
// @startup         UC.FullScreen.exec(win);
// @shutdown        UC.FullScreen.destroy();
// @onlyonce
// ==/UserScript==


UC.FullScreen = {
	exec: function(win) {
		let document = win.document;
		let gBrowser = win.gBrowser;

		var ios = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
		var ds = Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties);

		// Get the chrome directory in the current profile
		var chromepath = ds.get("UChrm", Ci.nsIFile);
		chromepath.append("userChromeFullScreen.css");
		UC.FullScreen.chromefile = ios.newFileURI(chromepath);

		let keyset = _uc.createElement(document, 'keyset', {
			id: 'FullScreen-keyset'
		});
		document.getElementById('mainKeyset').insertAdjacentElement('afterend', keyset);

		let FullScreenKey = _uc.createElement(document, 'key', {
			id: 'FullScreen-key',
			modifiers: 'accel,control,shift',
			key: 'f',
			oncommand: 'UC.FullScreen.toggleFullScreen()',
		});
		keyset.appendChild(FullScreenKey);
	},

	toggleFullScreen() {
		var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);

		if (sss.sheetRegistered(UC.FullScreen.chromefile, sss.USER_SHEET)) {
			sss.unregisterSheet(UC.FullScreen.chromefile, sss.USER_SHEET);
		} else {
			sss.loadAndRegisterSheet(UC.FullScreen.chromefile, sss.USER_SHEET);
		}
	},

	destroy: function() {
		_uc.windows((doc, win) => {
			doc.getElementById('FullScreen-keyset').remove();
		});
		var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);
		if (sss.sheetRegistered(UC.FullScreen.chromefile, sss.USER_SHEET)) {
			sss.unregisterSheet(UC.FullScreen.chromefile, sss.USER_SHEET);
		}
		delete UC.FullScreen;
	}
}
