/**
 * @license
 * Lytix Chartbeat Adapter
 * https://github.com/websperts/lytix
 *
 * Copyright (c) 2015 websperts <hello@websperts.com>
 * Licensed under the MIT license.
 * https://github.com/websperts/lytix/blob/master/LICENSE
 */

(function(lytix) {

    'use strict';

    lytix.trackPage = function(path) {
        if (window.pSUPERFLY) {
            pSUPERFLY.virtualPage(path);
        }
    };

    lytix.trackEvent = function(properties) {
        // Chartbeat doesn’t support event tracking
    };

    lytix.init();

})(window.lytix);
