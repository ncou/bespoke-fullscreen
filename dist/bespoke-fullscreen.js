/*!
 * bespoke-fullscreen v1.0.0
 *
 * Copyright 2015, Dan Allen
 * This content is released under the MIT license
 * 
 */

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self);var f=n;f=f.bespoke||(f.bespoke={}),f=f.plugins||(f.plugins={}),f.fullscreen=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = function(options) {
  return function(deck) {
    var KEYCODE = { f: 70, f11: 122 },
      fullscreenEnabled = document.fullscreenEnabled || document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled || document.msFullscreenEnabled,
      toggleUserFullscreen = function() {
        var element, method;
        // NOTE does not exit from full screen if initiated by F11 outside this window
        if (document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement) {
          method = (element = document).exitFullscreen || element.webkitExitFullscreen ||
              element.mozCancelFullScreen || element.msExitFullscreen;
        }
        else {
          method = (element = document.documentElement).requestFullscreen || element.webkitRequestFullscreen ||
              element.mozRequestFullScreen || element.msRequestFullscreen;
        }
        if (method) method.apply(element);
      },
      isModifierKeyDown = function(e) {
        return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey;
      };

    if (fullscreenEnabled) {
      document.addEventListener('keydown', function(e) {
        var keyCode = e.which;
        if ((keyCode === KEYCODE.f || keyCode === KEYCODE.f11) && !isModifierKeyDown(e)) {
          toggleUserFullscreen();
          if (keyCode === KEYCODE.f11) {
            e.preventDefault();
          }
        }
      }, false);
    }
  };
};

},{}]},{},[1])
(1)
});