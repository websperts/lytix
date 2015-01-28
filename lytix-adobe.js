/**
 * @license
 * Lytix Adobe Analytics (Omniture) Adapter
 * https://github.com/websperts/lytix
 *
 * Copyright (c) 2015 websperts <hello@websperts.com>
 * Licensed under the MIT license.
 * https://github.com/websperts/lytix/blob/master/LICENSE
 */

(function(lytix) {

    'use strict';

    lytix.trackPage = function(path) {
        if (window.s) {
            s.t([path]);
        }
    };

    lytix.trackEvent = function(properties) {
        if (window.s) {
            if (properties.action) {
                if (properties.action.toLowerCase() === 'download') {
                    s.tl(this, 'd', properties.action);
                } else if (properties.action.toLowerCase() === 'exit') {
                    s.tl(this, 'e', properties.action);
                } else {
                    s.tl(this, 'o', properties.action);
                }
            }
        }
    };

    lytix.init();

})(window.lytix);
