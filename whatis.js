// ==UserScript==
// @name         New Userscript 1
// @namespace    http://tampermonkey.net/
// @version      2024-01-14
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var request = new XMLHttpRequest();

request.open('GET', 'https://api.ipdata.co/?api-key=c5352f4526f1b9786205bb388532e6fbc23045bcf813174743d7683e');

request.setRequestHeader('Accept', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    if (this.status === 200) {
      var responseData = JSON.parse(this.responseText);
      console.log(responseData);
    } else {
      console.error('Error:', this.status, this.statusText);
    }
  }
};

request.send();
})();