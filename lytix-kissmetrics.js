/**
 * @license
 * Lytix KISSmetrics Adapter
 * https://github.com/websperts/lytix
 *
 * Copyright (c) 2015 websperts <hello@websperts.com>
 * Licensed under the MIT license.
 * https://github.com/websperts/lytix/blob/master/LICENSE
 */

(function(lytix) {

    'use strict';

    lytix.trackPage = function(path) {
        if (window._kmq) {
            window._kmq.push(['record', 'Pageview', {
                'Page': path
            }]);
        }
    };

    lytix.trackEvent = function(properties) {
        if (window._kmq && properties.action) {
            window._kmq.push(['record', properties.action, properties]);
        }
    };

    lytix.init();

})(window.lytix);
