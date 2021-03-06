/**
 * @license
 * Lytix CNZZ Adapter
 * https://github.com/websperts/lytix
 *
 * Copyright (c) 2015 websperts <hello@websperts.com>
 * Licensed under the MIT license.
 * https://github.com/websperts/lytix/blob/master/LICENSE
 */

(function(lytix) {

    'use strict';

    if (window._czc) {
        _czc.push(['_setAutoPageview', false]);
    }

    lytix.trackPage = function(path) {
        if (window._czc) {
            _czc.push(['_trackPageview', path]);
        }
    };

    lytix.trackEvent = function(properties) {
        if (window._czc) {
            _czc.push(['_trackEvent', properties.category, properties.action, properties.label, properties.value]);
        }
    };

    lytix.init();

})(window.lytix);
