/**
 * @license
 * Lytix Loggly Adapter
 * https://github.com/websperts/lytix
 *
 * Copyright (c) 2015 websperts <hello@websperts.com>
 * Licensed under the MIT license.
 * https://github.com/websperts/lytix/blob/master/LICENSE
 */

(function(lytix) {

    'use strict';

    lytix.trackPage = function(path) {
        if (window._LTracker) {
            _LTracker.push({
                'tag': 'pageview',
                'path': path
            });
        }

    };

    lytix.trackEvent = function(properties) {
        if (window._LTracker && properties.action) {
            _LTracker.push({
                'action': properties.action,
                'properties': properties
            });
        }
    };

    lytix.init();

})(window.lytix);
