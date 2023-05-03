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
    "url": "assets/_...all_-6be047bc.js",
    "revision": null
  }, {
    "url": "assets/_name_-27d93cf0.js",
    "revision": null
  }, {
    "url": "assets/404-2df36cb8.js",
    "revision": null
  }, {
    "url": "assets/aos-b0484546.js",
    "revision": null
  }, {
    "url": "assets/app-e05dbd5f.js",
    "revision": null
  }, {
    "url": "assets/default0-7c4d1be7.js",
    "revision": null
  }, {
    "url": "assets/home-60d8cff1.js",
    "revision": null
  }, {
    "url": "assets/index-029ace91.css",
    "revision": null
  }, {
    "url": "assets/katalogs-2de35e9c.css",
    "revision": null
  }, {
    "url": "assets/katalogs-bb618eec.js",
    "revision": null
  }, {
    "url": "assets/start-717dd227.css",
    "revision": null
  }, {
    "url": "assets/start-c2d78add.js",
    "revision": null
  }, {
    "url": "assets/TheFooter-04651040.css",
    "revision": null
  }, {
    "url": "assets/TheFooter-2b78b709.js",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-06210158.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-dc90f814.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "451a25eba19c020b1fdec51d89b80beb"
  }, {
    "url": "katalogs.html",
    "revision": "5ed23b6ac1e1064a10b06a725649f81c"
  }, {
    "url": "start.html",
    "revision": "4bd29051b198cd42b674aed6b5403ab0"
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
    "revision": "4a5d0f72671f8df8debc5805960bfcd4"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
