/**
 * @license
 * Lytix HubSpot Adapter
 * https://github.com/websperts/lytix
 *
 * Copyright (c) 2015 websperts <hello@websperts.com>
 * Licensed under the MIT license.
 * https://github.com/websperts/lytix/blob/master/LICENSE
 */

(function(lytix) {

    'use strict';

    // Don’t send the first page as HubSpot does it
    lytix.settings.autoTrackFirstPage = false;

    lytix.trackPage = function(path) {
        if (window._hsq) {
            _hsq.push();
            _hsq.push(['trackPageView', path]);
        }
    };

    lytix.trackEvent = function(properties) {
        if (properties.value) {
            properties.value = parseInt(properties.value, 10) || 0;
        }
        if (window._hsq && properties.action) {
            _hsq.push();
            _hsq.push(['trackEvent', properties.action, {
                value: properties.value
            }]);
        }
    };

    lytix.init();

})(window.lytix);
