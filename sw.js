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
    "url": "assets/_...all_-92a2e6d1.js",
    "revision": null
  }, {
    "url": "assets/_name_-de3aa7d5.js",
    "revision": null
  }, {
    "url": "assets/404-c50f584a.js",
    "revision": null
  }, {
    "url": "assets/app-765ec4a1.js",
    "revision": null
  }, {
    "url": "assets/default0-b6938671.js",
    "revision": null
  }, {
    "url": "assets/home-29d71ce9.js",
    "revision": null
  }, {
    "url": "assets/index-bf875870.css",
    "revision": null
  }, {
    "url": "assets/start-e1cb3cfb.css",
    "revision": null
  }, {
    "url": "assets/start-e1fa373f.js",
    "revision": null
  }, {
    "url": "assets/TheFooter-07a574dd.js",
    "revision": null
  }, {
    "url": "assets/TheFooter-145b0695.css",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-6443091a.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-295a6886.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "e996dfcd26a8cce66a997ef0ce0a7a59"
  }, {
    "url": "start.html",
    "revision": "c57cff3c3e8097ef892306ff7404c663"
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
