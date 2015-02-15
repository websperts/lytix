/**
 * @license
 * Lytix Trak.io Adapter
 * https://github.com/websperts/lytix
 *
 * Copyright (c) 2015 websperts <hello@websperts.com>
 * Licensed under the MIT license.
 * https://github.com/websperts/lytix/blob/master/LICENSE
 */

(function(lytix) {

    'use strict';

    lytix.trackPage = function(path) {
        if (window.trak && trak.io) {
            trak.io.page_view(path);
        }
    };

    lytix.trackEvent = function(properties) {
        if (window.trak && trak.io && properties.action) {
            trak.io.track(properties.action, properties);
        }
    };

    lytix.init();

})(window.lytix);
