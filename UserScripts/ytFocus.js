// ==UserScript==
// @name         Youtube
// @namespace    http://tampermonkey.net/
// @version      2024-05-08
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/watch?*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        window.onurlchange
// ==/UserScript==


/*// @grant        window.onurlchange*/
/* window.addEventListener('load', function() {
    'use strict';
    document.querySelector("ytd-app").style.backgroundColor = "black";
    document.querySelector("#full-bleed-container").style.marginTop="200px";
    document.querySelector("#masthead-container").style.display = "none";
    document.getElementById("below").style.display = "none";
    document.getElementById("secondary").style.display = "none";
    document.querySelector(".annotation.annotation-type-custom.iv-branding").style.display = "none";

}); */

(function(){
    'use strict';
    setTimeout(()=>{
        document.querySelector("ytd-app").style.backgroundColor = "black";
        document.querySelector("#full-bleed-container").style.marginTop="200px";
        document.querySelector("#masthead-container").style.display = "none";
        document.getElementById("below").style.display = "none";
        document.getElementById("secondary").style.display = "none";
        document.querySelector(".branding-img.iv-click-target").style.display = "none";
        document.querySelector(".ytp-size-button.ytp-button").click();
    },7000);

/*     setTimeout(()=>{
        document.querySelector(".branding-img.iv-click-target").style.display = "none";

    },11000);
 */
//     setInterval(()=>{
//         document.getElementById("skip-button:i").click();
//     },20000);
})();
