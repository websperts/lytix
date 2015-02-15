/**
 * @license
 * Lytix Localytics Adapter
 * https://github.com/websperts/lytix
 *
 * Copyright (c) 2015 websperts <hello@websperts.com>
 * Licensed under the MIT license.
 * https://github.com/websperts/lytix/blob/master/LICENSE
 */

(function(lytix) {

    'use strict';

    lytix.trackPage = function(path) {
        if (window.localytics) {
            localytics.tagScreen(path);
        }
    };

    lytix.trackEvent = function(properties) {
        if (window.localytics && properties.action) {
            localytics.tagEvent(properties.action, properties);
        }
    };

    lytix.init();

})(window.lytix);
