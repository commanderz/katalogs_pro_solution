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
    "url": "assets/_...all_-1f837315.js",
    "revision": null
  }, {
    "url": "assets/_name_-d4787ed5.js",
    "revision": null
  }, {
    "url": "assets/404-1b5a21aa.js",
    "revision": null
  }, {
    "url": "assets/app-9fb4550b.js",
    "revision": null
  }, {
    "url": "assets/default0-b25de719.js",
    "revision": null
  }, {
    "url": "assets/home-e5cebde2.js",
    "revision": null
  }, {
    "url": "assets/index-f6b95575.css",
    "revision": null
  }, {
    "url": "assets/start-53c3153f.js",
    "revision": null
  }, {
    "url": "assets/start-e1cb3cfb.css",
    "revision": null
  }, {
    "url": "assets/TheFooter-145b0695.css",
    "revision": null
  }, {
    "url": "assets/TheFooter-db7fca88.js",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-8c103c4a.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-295a6886.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "4521006a26e8771c9ac371c28154355f"
  }, {
    "url": "start.html",
    "revision": "18b35631a5614bf498d1b61820dc69ce"
  }, {
    "url": "favicon.svg",
    "revision": "9c0135317804268933c342fb51058593"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "3d0337ab1eb7a73219a025394a203870"
  }, {
    "url": "pwa-192x192.png",
    "revision": "a6e9887c7db720319cc89995f37c5bb4"
  }, {
    "url": "pwa-512x512.png",
    "revision": "c7a21fb5fa1fd974473c5ee8b53d6acb"
  }, {
    "url": "manifest.webmanifest",
    "revision": "6fca5c27b1eed0e02489e1d7b57661c5"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
