/**
* @license
* Lytix
* https://github.com/websperts/lytix
*
* Copyright (c) 2015 websperts <hello@websperts.com>
* Licensed under the MIT license.
* https://github.com/websperts/lytix/blob/master/LICENSE
*/

(function(document, window, undefined) {

    'use strict';

    var lytix = window.lytix = {

        settings: {
            autoTrackFirstPage: true,
            autoTrackVirtualPages: true
        },

        map: {
            'action': 'on',
            'event': 'event',
            'category': 'category',
            'label': 'label',
            'value': 'value'
        },

        trackPage: function(path) {},

        trackEvent: function(properties) {},

        addEventListener: function(element, event, callback) {
            if (element.addEventListener) {
                element.addEventListener(event, callback);
            } else if (element.attachEvent) {
                element.attachEvent('on' + event, callback);
            }
        },

        initPageviews: function() {
            if (lytix.settings.autoTrackVirtualPages) {
                var trackVirtualPage = function() {
                    var matches = (window.location.hash || '#').match('^#\!?(.*)$');
                    if (matches) {
                        var path = matches[1] || '/';
                        lytix.trackPage.call(this, path);
                    }
                };
                if ('onhashchange' in window) {
                    lytix.addEventListener(window, 'hashchange', trackVirtualPage);
                } else {
                    window.setInterval(trackVirtualPage, 100);
                }
                if (lytix.settings.autoTrackFirstPage) {
                    trackVirtualPage();
                }
            } else if (lytix.settings.autoTrackFirstPage) {
                lytix.trackPage.call(this, window.location.href);
            }
        },

        initEvents: function() {
            var elements = document.querySelectorAll('[lytix-on], [data-lytix-on], [tracking-on], [data-tracking-on], [analytics-on], [data-analytics-on]');
            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                if (!element.lytix) {
                    element.lytix = {};
                    for (var property in lytix.map) {
                        var cache = element.getAttribute('lytix-' + lytix.map[property]) || element.getAttribute('data-lytix-' + lytix.map[property]) || element.getAttribute('tracking-' + lytix.map[property]) || element.getAttribute('data-tracking-' + lytix.map[property]) || element.getAttribute('analytics-' + lytix.map[property]) || element.getAttribute('data-analytics-' + lytix.map[property]);
                        if (cache !== null) {
                            element.lytix[property] = cache;
                        }
                    }
                    if (!element.lytix.action) {
                        break;
                    }
                    lytix.addEventListener(element, element.lytix.action, function() {
                        lytix.trackEvent.call(this, this.lytix);
                    });
                }
            }
        },

        initObserver: function() {
            if (typeof MutationObserver === 'function') {
                (new MutationObserver(function() {
                    lytix.initEvents();
                })).observe(document.body, {
                    childList: true,
                    subtree: true
                });
            } else {
                window.setInterval(function() {
                    lytix.initEvents();
                }, 100);
            }
        },

        init: function() {
            lytix.initPageviews();
            lytix.initEvents();
            lytix.initObserver();
        }

    };

})(document, window);
