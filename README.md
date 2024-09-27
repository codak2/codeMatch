# README
---

## How to use
- Add "User javascript and CSS" extension in browser
```
https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld
```
- Add below code in that extension
```javascript
function minclude(filename) {
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.src = filename;
	script.type = 'text/javascript';
	head.appendChild(script);
}
$(document).ready(function () {
	// For Decipher
	minclude('https://ssiprojects.s3.amazonaws.com/ssiconsultancy/Tests/JSadi/compareTXT_2a.js');
	//minclude('https://github.com/codak2/compareTXT/blob/main/compareTXT_Decipher.js');
	// For CMIX
	minclude("https://ssiprojects.s3.amazonaws.com/ssiconsultancy/Tests/JSadi/compareTXT_CMIX.js");
	//minclude('https://github.com/codak2/compareTXT/blob/main/compareTXT_CMIX.js');
});

```
- Add URL Pattern to
  ```
  https://survey-*.dynata.com/*,https://survey-*.yoursurveynow.com/*
  ```
