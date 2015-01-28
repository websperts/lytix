# Lytix

> Avoid dealing with vendor-specific Web analytics tracking codes

Lytix encapsulates tracking codes so you’re able to switch your Web analytics vendor without changing all your tracking. All you need to do is switch the vendor adapter. It’s inspired by [Angulartics](http://luisfarzati.github.io/angulartics/) but runs without any framework.

## Download

[Download the latest release](https://github.com/websperts/lytix/archive/master.zip) to get going with Lytix.

## Usage

Embed `lytix.js` and the Lytix adapter for your vendor within your Web site or Web application. In addition, make sure you deleted any automatic tracking line from your vendor snippet code (e.g. ~~`ga('send', 'pageview');`~~ for Google Analytics).

```html
<script src="lytix.js"></script>
<script src="lytix-google.js"></script>
```

If you’re using a build tool (like [Grunt](http://gruntjs.com/) or [gulp](http://gulpjs.com/)), you may concatenate and minify the files combined with your other scripts into a single file in order to reduce the amount of requests.

## Declarative event tracking

Each vendor has its own set of tracking properties. However, `lytix-on` always needs to be present as it is the attribute that enables event tracking for the element. All other attributes may be omitted, depending on your analytics provider.

```html
<a href="file.pdf" lytix-on="click" lytix-category="Download" lytix-label="Demo123.zip">Download</a>
```

Using `lytix-on` and `lytix-event` is especially useful when working with custom events. Depending on your analytics adapter, the adapter may use `lytix-event` instead of `lytix-on` for the event/action name while Lytix still listens to your custom event specified in `lytix-on`.

```html
<label for="demo">
    <input type="checkbox" id="demo" lytix-on="change" lytix-event="click" lytix-category="Checkbox" lytix-label="confirm_terms">
    Demo
</label>
```

```js
ga('send', 'event', {
    …
    eventAction: properties.event || properties.action || null,
    …
});
```

## Attributes

Instead of `lytix-{XYZ}` attributes, you may also use `tracking-{XYZ}` or `analytics-{XYZ}`. In addition, you can use `data-lytix-{XYZ}`, `data-tracking-{XYZ}`, or `data-analytics-{XYZ}`. In the end, it’s all the same.

## Using the API

In order to track page views and events programmatically from within your application logic, you can use the global `lytix` object and invoke either the `trackPage()` or `trackEvent()` methods.

```js
lytix.trackPage('/some/url');
```

```js
lytix.trackEvent({
  action: 'click',
  category: 'Some category',
  label: 'Some label'
});
```

## Settings

Lytix tracks the initial/first page view by default. In addition, Lytix does automatic virtual page view tracking by default, meaning the entire user navigation across the different routes of your application gets tracked. You can turn this behavior off modifying the following setting properties.

| Setting                                | Default | Purpose                                                                                   |
|:---------------------------------------|:-------:|:------------------------------------------------------------------------------------------|
| `lytix.settings.autoTrackFirstPage`    | `true`  | Decide whether the initial page view shall be tracked or not                              |
| `lytix.settings.autoTrackVirtualPages` | `true`  | Track virtual page views (e.g. `example.com/#!/about-us` will be tracked as `/about-us`)  |

```html
<script src="lytix.js"></script>
<script>
lytix.settings.autoTrackFirstPage = false;
lytix.settings.autoTrackVirtualPages = true;
</script>
<script src="lytix-google.js"></script>
```

## Plugins

| Vendor                     | Page tracking supported?                                                                                                  | Event tracking supported? | File                                                                                            |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------:|:-------------------------:|:------------------------------------------------------------------------------------------------|
| Adobe Analytics (Omniture) | Yes                                                                                                                       | Yes                       | [lytix-adobe.js](https://github.com/websperts/lytix/blob/master/src/lytix-adobe.js)             |
| Google Analytics           | Yes                                                                                                                       | Yes                       | [lytix-google.js](https://github.com/websperts/lytix/blob/master/src/lytix-google.js)           |
| Piwik                      | Yes                                                                                                                       | Yes                       | [lytix-piwik.js](https://github.com/websperts/lytix/blob/master/src/lytix-piwik.js)             |

[lytix-debugging.js](https://github.com/websperts/lytix/blob/master/src/lytix-debugging.js) is a special plugin that logs everything that happens to the browser console. It’s intended to support you while testing/debugging your tracking.

## Contributing

If your analytics vendor of choice is not among the existing plugins, feel free to write your own and create a PR on GitHub. It’ll be most welcomed!

## Changelog

* 0.0.1
  * Initial version

## TODO

- Documentation
- Tests

## License

Copyright (c) 2015 [websperts](http://websperts.com/)  
Licensed under the MIT license.

See LICENSE for more info.
