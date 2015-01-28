/**
 * @license
 * Lytix Piwik Adapter
 * https://github.com/websperts/lytix
 *
 * Copyright (c) 2015 websperts <hello@websperts.com>
 * Licensed under the MIT license.
 * https://github.com/websperts/lytix/blob/master/LICENSE
 */

(function(lytix) {

    'use strict';

    lytix.trackPage = function(path) {
        if (window._paq) {
            _paq.push(['setCustomUrl', path]);
            _paq.push(['trackPageView']);
        }
    };

    lytix.trackEvent = function(properties) {
        if (window._paq) {
            _paq.push(['trackEvent', properties.category, properties.action, properties.label, properties.value]);
        }
    };

    lytix.init();

})(window.lytix);
