/**
 * @license
 * Lytix Debugging Adapter
 * https://github.com/websperts/lytix
 *
 * Copyright (c) 2015 websperts <hello@websperts.com>
 * Licensed under the MIT license.
 * https://github.com/websperts/lytix/blob/master/LICENSE
 */

(function(lytix) {

    'use strict';

    lytix.trackPage = function(path) {
        console.log('[trackPage]', path);
    };

    lytix.trackEvent = function(properties) {
        console.log('[trackEvent]', properties);
    };

    lytix.init();

})(window.lytix);
