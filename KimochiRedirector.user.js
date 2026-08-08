// ==UserScript==
// @name         KimochiRedirector
// @namespace    http://tampermonkey.net/
// @version      2026-08-08
// @description  try to take over the world!
// @author       y0urak
// @match        https://kimochi.info/download/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const match = location.href.match(/\/download\/(?!file\/)([^\/]+)/);

    if (match?.[1]) {
        location.replace(`https://kimochi.info/download/file/?dl=${match[1]}`);
    }
})();
