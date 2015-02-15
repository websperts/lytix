/**
 * @license
 * Lytix Woopra Adapter
 * https://github.com/websperts/lytix
 *
 * Copyright (c) 2015 websperts <hello@websperts.com>
 * Licensed under the MIT license.
 * https://github.com/websperts/lytix/blob/master/LICENSE
 */

(function(lytix) {

    'use strict';

    lytix.trackPage = function(path) {
        if (window.woopra) {
            woopra.track('pv', {
                url: path
            });
        }
    };

    lytix.trackEvent = function(properties) {
        if (window.woopra && properties.action) {
            woopra.track(properties.action, properties);
        }
    };

    lytix.init();

})(window.lytix);
