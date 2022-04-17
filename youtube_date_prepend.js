// ==UserScript==
// @name         Youtube date prepend
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hard to see the release date when zooming in too much?
// @author       PxN
// @match        https://www.youtube.com/*
// @icon         https://www.youtube.com/yts/img/favicon_96-vfldSA3ca.png

// ==/UserScript==

var appendDate = setInterval(function() {
  var titleSelector = "#container > h1 > yt-formatted-string";
  var dateSelector  = "#info-strings > yt-formatted-string";

  if (document.querySelector(titleSelector).innerText.length) {
    clearInterval(appendDate);

    var title = document.querySelector(titleSelector);
    var date  = document.querySelector(dateSelector);

    title.innerHTML = date.innerHTML + "</br>" + title.innerText
  }
}, 100);

appendDate();
