/**
 * @license
 * Lytix Google Analytics Adapter
 * https://github.com/websperts/lytix
 *
 * Copyright (c) 2015 websperts <hello@websperts.com>
 * Licensed under the MIT license.
 * https://github.com/websperts/lytix/blob/master/LICENSE
 */

(function(lytix) {

    'use strict';

    lytix.trackPage = function(path) {
        if (window._gaq) {
            _gaq.push(['_trackPageview', path]);
        } else if (window.ga) {
            ga('send', 'pageview', path);
        }
    };

    lytix.trackEvent = function(properties) {

        if (!properties || !properties.category) {
            return;
        }

        if (properties.value) {
            properties.value = parseInt(properties.value, 10) || 0;
        }

        if (window._gaq) {
            _gaq.push(['_trackEvent', properties.category, properties.event || properties.action, properties.label, properties.value, properties.noninteraction]);
        } else if (window.ga) {

            var eventOptions = {
                eventCategory: properties.category || null,
                eventAction: properties.event || properties.action || null,
                eventLabel: properties.label || null,
                eventValue: properties.value || null,
                nonInteraction: properties.noninteraction || null
            };

            for (var i = 1; i <= 20; i++) {
                // Custom dimensions
                if (properties['dimension' + i]) {
                    eventOptions['dimension' + i] = properties['dimension' + i];
                }
                // Custom metrics
                if (properties['metric' + i]) {
                    eventOptions['metric' + i] = properties['metric' + i];
                }
            }

            ga('send', 'event', eventOptions);

        }

    };

    lytix.init();

})(window.lytix);
