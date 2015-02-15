/**
 * @license
 * Lytix Flurry Adapter
 * https://github.com/websperts/lytix
 *
 * Copyright (c) 2015 websperts <hello@websperts.com>
 * Licensed under the MIT license.
 * https://github.com/websperts/lytix/blob/master/LICENSE
 */

(function(lytix) {

    'use strict';

    lytix.trackPage = function(path) {
        // Flurry doesn’t support page tracking
    };

    lytix.trackEvent = function(properties) {
        if (window.FlurryAgent) {
            FlurryAgent.logEvent(properties.action, properties);
        }
    };

    lytix.init();

})(window.lytix);
