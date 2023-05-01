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
    "url": "assets/_...all_-7d2c31d7.js",
    "revision": null
  }, {
    "url": "assets/_name_-a2008fed.js",
    "revision": null
  }, {
    "url": "assets/404-7489ffcc.js",
    "revision": null
  }, {
    "url": "assets/aos-de4a0d3f.js",
    "revision": null
  }, {
    "url": "assets/app-a61ca8b1.js",
    "revision": null
  }, {
    "url": "assets/default0-78a4418a.js",
    "revision": null
  }, {
    "url": "assets/home-5452b306.js",
    "revision": null
  }, {
    "url": "assets/index-d2d12337.css",
    "revision": null
  }, {
    "url": "assets/katalogs-576c8074.css",
    "revision": null
  }, {
    "url": "assets/katalogs-f5fb975d.js",
    "revision": null
  }, {
    "url": "assets/start-717dd227.css",
    "revision": null
  }, {
    "url": "assets/start-da9805f7.js",
    "revision": null
  }, {
    "url": "assets/TheFooter-04651040.css",
    "revision": null
  }, {
    "url": "assets/TheFooter-9789c052.js",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-a6866dfe.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-dc90f814.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "2bb1e7600c2047d9968a6697c625a4f6"
  }, {
    "url": "katalogs.html",
    "revision": "28e79016bc7774c5d968c69dfe3e1047"
  }, {
    "url": "start.html",
    "revision": "50cb8254c79da32381cfa70a48475a5b"
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
