/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-148cb7e5'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/_...all_-bea00088.js",
    "revision": null
  }, {
    "url": "assets/_name_-66e6d0d6.js",
    "revision": null
  }, {
    "url": "assets/404-bb041f23.js",
    "revision": null
  }, {
    "url": "assets/app-efe65b09.js",
    "revision": null
  }, {
    "url": "assets/default0-4cf02a44.js",
    "revision": null
  }, {
    "url": "assets/home-e9177141.js",
    "revision": null
  }, {
    "url": "assets/index-5ab87a06.css",
    "revision": null
  }, {
    "url": "assets/start-26f34b53.js",
    "revision": null
  }, {
    "url": "assets/start-9ef9634c.css",
    "revision": null
  }, {
    "url": "assets/TheFooter-145b0695.css",
    "revision": null
  }, {
    "url": "assets/TheFooter-2ba90124.js",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-5168c34d.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-295a6886.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "2b55bfd68db53237c82720ef5d268046"
  }, {
    "url": "start.html",
    "revision": "3a828d682df9e2ab3e3ce03ef2c433b8"
  }, {
    "url": "favicon.svg",
    "revision": "9c0135317804268933c342fb51058593"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "3d0337ab1eb7a73219a025394a203870"
  }, {
    "url": "pwa-192x192.png",
    "revision": "d6e06d5734462200aea356be45a71a43"
  }, {
    "url": "pwa-512x512.png",
    "revision": "33f1ec987fdba18f11aad07414c71e7d"
  }, {
    "url": "manifest.webmanifest",
    "revision": "4a5d0f72671f8df8debc5805960bfcd4"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
