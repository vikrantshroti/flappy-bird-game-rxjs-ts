// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2HtCd":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "222e65dabdea7d65";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7PGg5":[function(require,module,exports) {
// RxJS v6+
var _rxjs = require("rxjs");
var _operators = require("rxjs/operators");
var _htmlRenderer = require("./html-renderer");
const gamePipe = (x, y)=>({
        x,
        y,
        checked: false
    })
;
const gameSize = 50;
const createPipes = (y)=>((random)=>Array.from(Array(gameSize).keys()).map((e)=>gamePipe(e, y)
        ).filter((e)=>e.x < random || e.x > random + 2
        )
    )(Math.floor(Math.random() * Math.floor(gameSize)))
;
const gamePipes$ = _rxjs.interval(500).pipe(_operators.scan((acc)=>(acc.length < 2 ? [
        ...acc,
        createPipes(gameSize)
    ] : acc).filter((c)=>c.some((e)=>e.y > 0
        )
    ).map((cols)=>cols.map((e)=>gamePipe(e.x, e.y - 1)
        )
    )
, [
    createPipes(gameSize / 2),
    createPipes(gameSize)
]));
const fly = (xPos)=>xPos > 0 ? xPos -= 1 : xPos
;
const fall = (xPos)=>xPos < gameSize - 1 ? xPos += 1 : gameSize - 1
;
const bird$ = _rxjs.merge(_rxjs.interval(300), _rxjs.fromEvent(document, "keydown")).pipe(_operators.scan((xPos, curr)=>curr instanceof KeyboardEvent ? fly(xPos) : fall(xPos)
, gameSize - 1));
const updateGame = (bird, pipes)=>((game)=>(pipes.forEach((col)=>col.forEach((v)=>game[v.x][v.y] = 2
            )
        ), game[bird][0] = 1, game)
    )(Array(gameSize).fill(0).map((e)=>Array(gameSize).fill(0)
    ))
;
const valueOnCollisionFor = (pipes)=>({
        when: (predicate)=>!pipes[0][0].checked && predicate ? (pipes[0][0].checked = true, 1) : 0
    })
;
_rxjs.combineLatest(bird$, gamePipes$).pipe(_operators.scan((state, [bird, pipes])=>({
        bird: bird,
        pipes: pipes,
        lives: state.lives - valueOnCollisionFor(pipes).when(pipes.some((c1)=>c1.some((c)=>c.y === 0 && c.x === bird
            )
        )),
        score: state.score + valueOnCollisionFor(pipes).when(pipes[0][0].y === 0)
    })
, {
    lives: 3,
    score: 0,
    bird: 0,
    pipes: []
}), _operators.tap((state)=>_htmlRenderer.paint(updateGame(state.bird, state.pipes), state.lives, state.score)
), _operators.takeWhile((state)=>state.lives > 0
)).subscribe();

},{"rxjs":"hCQlm","rxjs/operators":"5mD9t","./html-renderer":"fqzkf"}],"hCQlm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "Observable", ()=>_observable.Observable
);
parcelHelpers.export(exports, "ConnectableObservable", ()=>_connectableObservable.ConnectableObservable
);
parcelHelpers.export(exports, "GroupedObservable", ()=>_groupBy.GroupedObservable
);
parcelHelpers.export(exports, "observable", ()=>_observable1.observable
);
parcelHelpers.export(exports, "Subject", ()=>_subject.Subject
);
parcelHelpers.export(exports, "BehaviorSubject", ()=>_behaviorSubject.BehaviorSubject
);
parcelHelpers.export(exports, "ReplaySubject", ()=>_replaySubject.ReplaySubject
);
parcelHelpers.export(exports, "AsyncSubject", ()=>_asyncSubject.AsyncSubject
);
parcelHelpers.export(exports, "asap", ()=>_asap.asap
);
parcelHelpers.export(exports, "asapScheduler", ()=>_asap.asapScheduler
);
parcelHelpers.export(exports, "async", ()=>_async.async
);
parcelHelpers.export(exports, "asyncScheduler", ()=>_async.asyncScheduler
);
parcelHelpers.export(exports, "queue", ()=>_queue.queue
);
parcelHelpers.export(exports, "queueScheduler", ()=>_queue.queueScheduler
);
parcelHelpers.export(exports, "animationFrame", ()=>_animationFrame.animationFrame
);
parcelHelpers.export(exports, "animationFrameScheduler", ()=>_animationFrame.animationFrameScheduler
);
parcelHelpers.export(exports, "VirtualTimeScheduler", ()=>_virtualTimeScheduler.VirtualTimeScheduler
);
parcelHelpers.export(exports, "VirtualAction", ()=>_virtualTimeScheduler.VirtualAction
);
parcelHelpers.export(exports, "Scheduler", ()=>_scheduler.Scheduler
);
parcelHelpers.export(exports, "Subscription", ()=>_subscription.Subscription
);
parcelHelpers.export(exports, "Subscriber", ()=>_subscriber.Subscriber
);
parcelHelpers.export(exports, "Notification", ()=>_notification.Notification
);
parcelHelpers.export(exports, "NotificationKind", ()=>_notification.NotificationKind
);
parcelHelpers.export(exports, "pipe", ()=>_pipe.pipe
);
parcelHelpers.export(exports, "noop", ()=>_noop.noop
);
parcelHelpers.export(exports, "identity", ()=>_identity.identity
);
parcelHelpers.export(exports, "isObservable", ()=>_isObservable.isObservable
);
parcelHelpers.export(exports, "ArgumentOutOfRangeError", ()=>_argumentOutOfRangeError.ArgumentOutOfRangeError
);
parcelHelpers.export(exports, "EmptyError", ()=>_emptyError.EmptyError
);
parcelHelpers.export(exports, "ObjectUnsubscribedError", ()=>_objectUnsubscribedError.ObjectUnsubscribedError
);
parcelHelpers.export(exports, "UnsubscriptionError", ()=>_unsubscriptionError.UnsubscriptionError
);
parcelHelpers.export(exports, "TimeoutError", ()=>_timeoutError.TimeoutError
);
parcelHelpers.export(exports, "bindCallback", ()=>_bindCallback.bindCallback
);
parcelHelpers.export(exports, "bindNodeCallback", ()=>_bindNodeCallback.bindNodeCallback
);
parcelHelpers.export(exports, "combineLatest", ()=>_combineLatest.combineLatest
);
parcelHelpers.export(exports, "concat", ()=>_concat.concat
);
parcelHelpers.export(exports, "defer", ()=>_defer.defer
);
parcelHelpers.export(exports, "empty", ()=>_empty.empty
);
parcelHelpers.export(exports, "forkJoin", ()=>_forkJoin.forkJoin
);
parcelHelpers.export(exports, "from", ()=>_from.from
);
parcelHelpers.export(exports, "fromEvent", ()=>_fromEvent.fromEvent
);
parcelHelpers.export(exports, "fromEventPattern", ()=>_fromEventPattern.fromEventPattern
);
parcelHelpers.export(exports, "generate", ()=>_generate.generate
);
parcelHelpers.export(exports, "iif", ()=>_iif.iif
);
parcelHelpers.export(exports, "interval", ()=>_interval.interval
);
parcelHelpers.export(exports, "merge", ()=>_merge.merge
);
parcelHelpers.export(exports, "never", ()=>_never.never
);
parcelHelpers.export(exports, "of", ()=>_of.of
);
parcelHelpers.export(exports, "onErrorResumeNext", ()=>_onErrorResumeNext.onErrorResumeNext
);
parcelHelpers.export(exports, "pairs", ()=>_pairs.pairs
);
parcelHelpers.export(exports, "partition", ()=>_partition.partition
);
parcelHelpers.export(exports, "race", ()=>_race.race
);
parcelHelpers.export(exports, "range", ()=>_range.range
);
parcelHelpers.export(exports, "throwError", ()=>_throwError.throwError
);
parcelHelpers.export(exports, "timer", ()=>_timer.timer
);
parcelHelpers.export(exports, "using", ()=>_using.using
);
parcelHelpers.export(exports, "zip", ()=>_zip.zip
);
parcelHelpers.export(exports, "scheduled", ()=>_scheduled.scheduled
);
parcelHelpers.export(exports, "EMPTY", ()=>_empty.EMPTY
);
parcelHelpers.export(exports, "NEVER", ()=>_never.NEVER
);
parcelHelpers.export(exports, "config", ()=>_config.config
);
var _observable = require("./internal/Observable");
var _connectableObservable = require("./internal/observable/ConnectableObservable");
var _groupBy = require("./internal/operators/groupBy");
var _observable1 = require("./internal/symbol/observable");
var _subject = require("./internal/Subject");
var _behaviorSubject = require("./internal/BehaviorSubject");
var _replaySubject = require("./internal/ReplaySubject");
var _asyncSubject = require("./internal/AsyncSubject");
var _asap = require("./internal/scheduler/asap");
var _async = require("./internal/scheduler/async");
var _queue = require("./internal/scheduler/queue");
var _animationFrame = require("./internal/scheduler/animationFrame");
var _virtualTimeScheduler = require("./internal/scheduler/VirtualTimeScheduler");
var _scheduler = require("./internal/Scheduler");
var _subscription = require("./internal/Subscription");
var _subscriber = require("./internal/Subscriber");
var _notification = require("./internal/Notification");
var _pipe = require("./internal/util/pipe");
var _noop = require("./internal/util/noop");
var _identity = require("./internal/util/identity");
var _isObservable = require("./internal/util/isObservable");
var _argumentOutOfRangeError = require("./internal/util/ArgumentOutOfRangeError");
var _emptyError = require("./internal/util/EmptyError");
var _objectUnsubscribedError = require("./internal/util/ObjectUnsubscribedError");
var _unsubscriptionError = require("./internal/util/UnsubscriptionError");
var _timeoutError = require("./internal/util/TimeoutError");
var _bindCallback = require("./internal/observable/bindCallback");
var _bindNodeCallback = require("./internal/observable/bindNodeCallback");
var _combineLatest = require("./internal/observable/combineLatest");
var _concat = require("./internal/observable/concat");
var _defer = require("./internal/observable/defer");
var _empty = require("./internal/observable/empty");
var _forkJoin = require("./internal/observable/forkJoin");
var _from = require("./internal/observable/from");
var _fromEvent = require("./internal/observable/fromEvent");
var _fromEventPattern = require("./internal/observable/fromEventPattern");
var _generate = require("./internal/observable/generate");
var _iif = require("./internal/observable/iif");
var _interval = require("./internal/observable/interval");
var _merge = require("./internal/observable/merge");
var _never = require("./internal/observable/never");
var _of = require("./internal/observable/of");
var _onErrorResumeNext = require("./internal/observable/onErrorResumeNext");
var _pairs = require("./internal/observable/pairs");
var _partition = require("./internal/observable/partition");
var _race = require("./internal/observable/race");
var _range = require("./internal/observable/range");
var _throwError = require("./internal/observable/throwError");
var _timer = require("./internal/observable/timer");
var _using = require("./internal/observable/using");
var _zip = require("./internal/observable/zip");
var _scheduled = require("./internal/scheduled/scheduled");
var _config = require("./internal/config");

},{"./internal/Observable":"k7KRh","./internal/observable/ConnectableObservable":"kGSix","./internal/operators/groupBy":"loOQU","./internal/symbol/observable":"6KCwD","./internal/Subject":"aLwqa","./internal/BehaviorSubject":"8kQOg","./internal/ReplaySubject":"9y70s","./internal/AsyncSubject":"a62Z9","./internal/scheduler/asap":"huX4L","./internal/scheduler/async":"4Vd5T","./internal/scheduler/queue":"7vO4E","./internal/scheduler/animationFrame":"bDejt","./internal/scheduler/VirtualTimeScheduler":"4vwna","./internal/Scheduler":"hhbAy","./internal/Subscription":"ceYgr","./internal/Subscriber":"k0EYi","./internal/Notification":"jqexJ","./internal/util/pipe":"ie2QB","./internal/util/noop":"cZMY5","./internal/util/identity":"cqToy","./internal/util/isObservable":"4dmUT","./internal/util/ArgumentOutOfRangeError":"ay3gU","./internal/util/EmptyError":"2BhSf","./internal/util/ObjectUnsubscribedError":"9ONy1","./internal/util/UnsubscriptionError":"5URES","./internal/util/TimeoutError":"5kKEt","./internal/observable/bindCallback":"i969r","./internal/observable/bindNodeCallback":"1ZgEN","./internal/observable/combineLatest":"dYsYm","./internal/observable/concat":"cR4Mp","./internal/observable/defer":"cYAxq","./internal/observable/empty":"4kIBW","./internal/observable/forkJoin":"1fgh2","./internal/observable/from":"l9OnS","./internal/observable/fromEvent":"6U357","./internal/observable/fromEventPattern":"dlO9t","./internal/observable/generate":"5ztb4","./internal/observable/iif":"jVWR8","./internal/observable/interval":"cnQoB","./internal/observable/merge":"3cUnK","./internal/observable/never":"8Kc7X","./internal/observable/of":"eCgiH","./internal/observable/onErrorResumeNext":"78lPU","./internal/observable/pairs":"3iviU","./internal/observable/partition":"f7LOY","./internal/observable/race":"db7J8","./internal/observable/range":"hnLcA","./internal/observable/throwError":"kMWjR","./internal/observable/timer":"dsAuh","./internal/observable/using":"2Dvaf","./internal/observable/zip":"1e52j","./internal/scheduled/scheduled":"5qUcI","./internal/config":"9X5lH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k7KRh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observable", ()=>Observable1
);
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */ var _canReportError = require("./util/canReportError");
var _toSubscriber = require("./util/toSubscriber");
var _observable = require("./symbol/observable");
var _pipe = require("./util/pipe");
var _config = require("./config");
var Observable1 = function() {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) this._subscribe = subscribe;
    }
    Observable.prototype.lift = function(operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function(observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = _toSubscriber.toSubscriber(observerOrNext, error, complete);
        if (operator) sink.add(operator.call(sink, this.source));
        else sink.add(this.source || _config.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        if (_config.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function(sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            if (_config.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (_canReportError.canReportError(sink)) sink.error(err);
            else console.warn(err);
        }
    };
    Observable.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function(value) {
                try {
                    next(value);
                } catch (err) {
                    reject(err);
                    if (subscription) subscription.unsubscribe();
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function(subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[_observable.observable] = function() {
        return this;
    };
    Observable.prototype.pipe = function() {
        var operations = [];
        for(var _i = 0; _i < arguments.length; _i++)operations[_i] = arguments[_i];
        if (operations.length === 0) return this;
        return _pipe.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var value;
            _this.subscribe(function(x) {
                return value = x;
            }, function(err) {
                return reject(err);
            }, function() {
                return resolve(value);
            });
        });
    };
    Observable.create = function(subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}();
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) promiseCtor = _config.config.Promise || Promise;
    if (!promiseCtor) throw new Error('no Promise impl found');
    return promiseCtor;
}

},{"./util/canReportError":"5ee0l","./util/toSubscriber":"h5Gsz","./symbol/observable":"6KCwD","./util/pipe":"ie2QB","./config":"9X5lH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5ee0l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canReportError", ()=>canReportError
);
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */ var _subscriber = require("../Subscriber");
function canReportError(observer) {
    while(observer){
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) return false;
        else if (destination && destination instanceof _subscriber.Subscriber) observer = destination;
        else observer = null;
    }
    return true;
}

},{"../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"k0EYi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Subscriber", ()=>Subscriber1
);
parcelHelpers.export(exports, "SafeSubscriber", ()=>SafeSubscriber1
);
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */ var _tslib = require("tslib");
var _isFunction = require("./util/isFunction");
var _observer = require("./Observer");
var _subscription = require("./Subscription");
var _rxSubscriber = require("../internal/symbol/rxSubscriber");
var _config = require("./config");
var _hostReportError = require("./util/hostReportError");
var Subscriber1 = function(_super) {
    _tslib.__extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch(arguments.length){
            case 0:
                _this.destination = _observer.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = _observer.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    } else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber1(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber1(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[_rxSubscriber.rxSubscriber] = function() {
        return this;
    };
    Subscriber.create = function(next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function(value) {
        if (!this.isStopped) this._next(value);
    };
    Subscriber.prototype.error = function(err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function() {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function() {
        if (this.closed) return;
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function(value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function(err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function() {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function() {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(_subscription.Subscription);
var SafeSubscriber1 = function(_super) {
    _tslib.__extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (_isFunction.isFunction(observerOrNext)) next = observerOrNext;
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== _observer.empty) {
                context = Object.create(observerOrNext);
                if (_isFunction.isFunction(context.unsubscribe)) _this.add(context.unsubscribe.bind(context));
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function(value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) this.__tryOrUnsub(this._next, value);
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) this.unsubscribe();
        }
    };
    SafeSubscriber.prototype.error = function(err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = _config.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                } else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            } else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) throw err;
                _hostReportError.hostReportError(err);
            } else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                } else _hostReportError.hostReportError(err);
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function() {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function() {
                    return _this._complete.call(_this._context);
                };
                if (!_config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                } else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            } else this.unsubscribe();
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function(fn, value) {
        try {
            fn.call(this._context, value);
        } catch (err) {
            this.unsubscribe();
            if (_config.config.useDeprecatedSynchronousErrorHandling) throw err;
            else _hostReportError.hostReportError(err);
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function(parent, fn, value) {
        if (!_config.config.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
        try {
            fn.call(this._context, value);
        } catch (err) {
            if (_config.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            } else {
                _hostReportError.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function() {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber1);

},{"tslib":"j55WF","./util/isFunction":"hLVqF","./Observer":"51KWH","./Subscription":"ceYgr","../internal/symbol/rxSubscriber":"eLIHu","./config":"9X5lH","./util/hostReportError":"h4tUh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"j55WF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends
);
parcelHelpers.export(exports, "__assign", ()=>__assign
);
parcelHelpers.export(exports, "__rest", ()=>__rest
);
parcelHelpers.export(exports, "__decorate", ()=>__decorate
);
parcelHelpers.export(exports, "__param", ()=>__param
);
parcelHelpers.export(exports, "__metadata", ()=>__metadata
);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter
);
parcelHelpers.export(exports, "__generator", ()=>__generator
);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding
);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar
);
parcelHelpers.export(exports, "__values", ()=>__values
);
parcelHelpers.export(exports, "__read", ()=>__read
);
parcelHelpers.export(exports, "__spread", ()=>__spread
);
parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays
);
parcelHelpers.export(exports, "__await", ()=>__await
);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator
);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator
);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues
);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject
);
parcelHelpers.export(exports, "__importStar", ()=>__importStar
);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault
);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet
);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {
    };
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
    return i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
}
function __asyncDelegator(o) {
    var i, p;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
    return i = {
    }, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {
    };
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    privateMap.set(receiver, value);
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hLVqF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "isFunction", ()=>isFunction
);
function isFunction(x) {
    return typeof x === 'function';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"51KWH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "empty", ()=>empty
);
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */ var _config = require("./config");
var _hostReportError = require("./util/hostReportError");
var empty = {
    closed: true,
    next: function(value) {
    },
    error: function(err) {
        if (_config.config.useDeprecatedSynchronousErrorHandling) throw err;
        else _hostReportError.hostReportError(err);
    },
    complete: function() {
    }
};

},{"./config":"9X5lH","./util/hostReportError":"h4tUh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9X5lH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config
);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling (value){
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling () {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"h4tUh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "hostReportError", ()=>hostReportError
);
function hostReportError(err) {
    setTimeout(function() {
        throw err;
    }, 0);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ceYgr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Subscription", ()=>Subscription1
);
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */ var _isArray = require("./util/isArray");
var _isObject = require("./util/isObject");
var _isFunction = require("./util/isFunction");
var _unsubscriptionError = require("./util/UnsubscriptionError");
var Subscription1 = function() {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function() {
        var errors;
        if (this.closed) return;
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) _parentOrParents.remove(this);
        else if (_parentOrParents !== null) for(var index = 0; index < _parentOrParents.length; ++index){
            var parent_1 = _parentOrParents[index];
            parent_1.remove(this);
        }
        if (_isFunction.isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) this._unsubscribe = undefined;
            try {
                _unsubscribe.call(this);
            } catch (e) {
                errors = e instanceof _unsubscriptionError.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [
                    e
                ];
            }
        }
        if (_isArray.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while(++index < len){
                var sub = _subscriptions[index];
                if (_isObject.isObject(sub)) try {
                    sub.unsubscribe();
                } catch (e) {
                    errors = errors || [];
                    if (e instanceof _unsubscriptionError.UnsubscriptionError) errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                    else errors.push(e);
                }
            }
        }
        if (errors) throw new _unsubscriptionError.UnsubscriptionError(errors);
    };
    Subscription.prototype.add = function(teardown) {
        var subscription = teardown;
        if (!teardown) return Subscription.EMPTY;
        switch(typeof teardown){
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') return subscription;
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                } else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [
                        tmp
                    ];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) subscription._parentOrParents = this;
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) return subscription;
            subscription._parentOrParents = [
                _parentOrParents,
                this
            ];
        } else if (_parentOrParents.indexOf(this) === -1) _parentOrParents.push(this);
        else return subscription;
        var subscriptions = this._subscriptions;
        if (subscriptions === null) this._subscriptions = [
            subscription
        ];
        else subscriptions.push(subscription);
        return subscription;
    };
    Subscription.prototype.remove = function(subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) subscriptions.splice(subscriptionIndex, 1);
        }
    };
    Subscription.EMPTY = (function(empty) {
        empty.closed = true;
        return empty;
    })(new Subscription());
    return Subscription;
}();
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function(errs, err) {
        return errs.concat(err instanceof _unsubscriptionError.UnsubscriptionError ? err.errors : err);
    }, []);
}

},{"./util/isArray":"eQmW1","./util/isObject":"fYeVV","./util/isFunction":"hLVqF","./util/UnsubscriptionError":"5URES","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eQmW1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArray", ()=>isArray
);
var isArray = /*@__PURE__*/ function() {
    return Array.isArray || function(x) {
        return x && typeof x.length === 'number';
    };
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fYeVV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "isObject", ()=>isObject
);
function isObject(x) {
    return x !== null && typeof x === 'object';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5URES":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UnsubscriptionError", ()=>UnsubscriptionError
);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var UnsubscriptionErrorImpl1 = /*@__PURE__*/ function() {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
            return i + 1 + ") " + err.toString();
        }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
}();
var UnsubscriptionError = UnsubscriptionErrorImpl1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eLIHu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rxSubscriber", ()=>rxSubscriber
);
parcelHelpers.export(exports, "$$rxSubscriber", ()=>$$rxSubscriber
);
var rxSubscriber = /*@__PURE__*/ function() {
    return typeof Symbol === 'function' ? /*@__PURE__*/ Symbol('rxSubscriber') : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
}();
var $$rxSubscriber = rxSubscriber;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"h5Gsz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toSubscriber", ()=>toSubscriber
);
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */ var _subscriber = require("../Subscriber");
var _rxSubscriber = require("../symbol/rxSubscriber");
var _observer = require("../Observer");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof _subscriber.Subscriber) return nextOrObserver;
        if (nextOrObserver[_rxSubscriber.rxSubscriber]) return nextOrObserver[_rxSubscriber.rxSubscriber]();
    }
    if (!nextOrObserver && !error && !complete) return new _subscriber.Subscriber(_observer.empty);
    return new _subscriber.Subscriber(nextOrObserver, error, complete);
}

},{"../Subscriber":"k0EYi","../symbol/rxSubscriber":"eLIHu","../Observer":"51KWH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6KCwD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observable", ()=>observable
);
var observable = /*@__PURE__*/ function() {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ie2QB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pipe", ()=>pipe
);
parcelHelpers.export(exports, "pipeFromArray", ()=>pipeFromArray
);
/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */ var _identity = require("./identity");
function pipe() {
    var fns = [];
    for(var _i = 0; _i < arguments.length; _i++)fns[_i] = arguments[_i];
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) return _identity.identity;
    if (fns.length === 1) return fns[0];
    return function piped(input) {
        return fns.reduce(function(prev, fn) {
            return fn(prev);
        }, input);
    };
}

},{"./identity":"cqToy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cqToy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "identity", ()=>identity
);
function identity(x) {
    return x;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kGSix":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConnectableObservable", ()=>ConnectableObservable1
);
parcelHelpers.export(exports, "connectableObservableDescriptor", ()=>connectableObservableDescriptor
);
/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("../Subject");
var _observable = require("../Observable");
var _subscriber = require("../Subscriber");
var _subscription = require("../Subscription");
var _refCount = require("../operators/refCount");
var ConnectableObservable1 = function(_super) {
    _tslib.__extends(ConnectableObservable, _super);
    function ConnectableObservable(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
    }
    ConnectableObservable.prototype._subscribe = function(subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable.prototype.getSubject = function() {
        var subject = this._subject;
        if (!subject || subject.isStopped) this._subject = this.subjectFactory();
        return this._subject;
    };
    ConnectableObservable.prototype.connect = function() {
        var connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new _subscription.Subscription();
            connection.add(this.source.subscribe(new ConnectableSubscriber1(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = _subscription.Subscription.EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable.prototype.refCount = function() {
        return _refCount.refCount()(this);
    };
    return ConnectableObservable;
}(_observable.Observable);
var connectableObservableDescriptor = /*@__PURE__*/ function() {
    var connectableProto = ConnectableObservable1.prototype;
    return {
        operator: {
            value: null
        },
        _refCount: {
            value: 0,
            writable: true
        },
        _subject: {
            value: null,
            writable: true
        },
        _connection: {
            value: null,
            writable: true
        },
        _subscribe: {
            value: connectableProto._subscribe
        },
        _isComplete: {
            value: connectableProto._isComplete,
            writable: true
        },
        getSubject: {
            value: connectableProto.getSubject
        },
        connect: {
            value: connectableProto.connect
        },
        refCount: {
            value: connectableProto.refCount
        }
    };
}();
var ConnectableSubscriber1 = function(_super) {
    _tslib.__extends(ConnectableSubscriber, _super);
    function ConnectableSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    ConnectableSubscriber.prototype._error = function(err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber.prototype._complete = function() {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber.prototype._unsubscribe = function() {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) connection.unsubscribe();
        }
    };
    return ConnectableSubscriber;
}(_subject.SubjectSubscriber);
var RefCountOperator1 = function() {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function(subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber1(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) refCounter.connection = connectable.connect();
        return subscription;
    };
    return RefCountOperator;
}();
var RefCountSubscriber1 = function(_super) {
    _tslib.__extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function() {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) sharedConnection.unsubscribe();
    };
    return RefCountSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subject":"aLwqa","../Observable":"k7KRh","../Subscriber":"k0EYi","../Subscription":"ceYgr","../operators/refCount":"3Gftq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aLwqa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubjectSubscriber", ()=>SubjectSubscriber1
);
parcelHelpers.export(exports, "Subject", ()=>Subject1
);
parcelHelpers.export(exports, "AnonymousSubject", ()=>AnonymousSubject1
);
/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _observable = require("./Observable");
var _subscriber = require("./Subscriber");
var _subscription = require("./Subscription");
var _objectUnsubscribedError = require("./util/ObjectUnsubscribedError");
var _subjectSubscription = require("./SubjectSubscription");
var _rxSubscriber = require("../internal/symbol/rxSubscriber");
var SubjectSubscriber1 = function(_super) {
    _tslib.__extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(_subscriber.Subscriber);
var Subject1 = function(_super) {
    _tslib.__extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[_rxSubscriber.rxSubscriber] = function() {
        return new SubjectSubscriber1(this);
    };
    Subject.prototype.lift = function(operator) {
        var subject = new AnonymousSubject1(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function(value) {
        if (this.closed) throw new _objectUnsubscribedError.ObjectUnsubscribedError();
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for(var i = 0; i < len; i++)copy[i].next(value);
        }
    };
    Subject.prototype.error = function(err) {
        if (this.closed) throw new _objectUnsubscribedError.ObjectUnsubscribedError();
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for(var i = 0; i < len; i++)copy[i].error(err);
        this.observers.length = 0;
    };
    Subject.prototype.complete = function() {
        if (this.closed) throw new _objectUnsubscribedError.ObjectUnsubscribedError();
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for(var i = 0; i < len; i++)copy[i].complete();
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function() {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function(subscriber) {
        if (this.closed) throw new _objectUnsubscribedError.ObjectUnsubscribedError();
        else return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function(subscriber) {
        if (this.closed) throw new _objectUnsubscribedError.ObjectUnsubscribedError();
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return _subscription.Subscription.EMPTY;
        } else if (this.isStopped) {
            subscriber.complete();
            return _subscription.Subscription.EMPTY;
        } else {
            this.observers.push(subscriber);
            return new _subjectSubscription.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function() {
        var observable = new _observable.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function(destination, source) {
        return new AnonymousSubject1(destination, source);
    };
    return Subject;
}(_observable.Observable);
var AnonymousSubject1 = function(_super) {
    _tslib.__extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function(value) {
        var destination = this.destination;
        if (destination && destination.next) destination.next(value);
    };
    AnonymousSubject.prototype.error = function(err) {
        var destination = this.destination;
        if (destination && destination.error) this.destination.error(err);
    };
    AnonymousSubject.prototype.complete = function() {
        var destination = this.destination;
        if (destination && destination.complete) this.destination.complete();
    };
    AnonymousSubject.prototype._subscribe = function(subscriber) {
        var source = this.source;
        if (source) return this.source.subscribe(subscriber);
        else return _subscription.Subscription.EMPTY;
    };
    return AnonymousSubject;
}(Subject1);

},{"tslib":"j55WF","./Observable":"k7KRh","./Subscriber":"k0EYi","./Subscription":"ceYgr","./util/ObjectUnsubscribedError":"9ONy1","./SubjectSubscription":"7Olb6","../internal/symbol/rxSubscriber":"eLIHu","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9ONy1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ObjectUnsubscribedError", ()=>ObjectUnsubscribedError
);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var ObjectUnsubscribedErrorImpl1 = /*@__PURE__*/ function() {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
}();
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7Olb6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubjectSubscription", ()=>SubjectSubscription1
);
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscription = require("./Subscription");
var SubjectSubscription1 = function(_super) {
    _tslib.__extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function() {
        if (this.closed) return;
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) return;
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) observers.splice(subscriberIndex, 1);
    };
    return SubjectSubscription;
}(_subscription.Subscription);

},{"tslib":"j55WF","./Subscription":"ceYgr","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3Gftq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "refCount", ()=>refCount1
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function refCount1() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator1(source));
    };
}
var RefCountOperator1 = function() {
    function RefCountOperator(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator.prototype.call = function(subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber1(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) refCounter.connection = connectable.connect();
        return subscription;
    };
    return RefCountOperator;
}();
var RefCountSubscriber1 = function(_super) {
    _tslib.__extends(RefCountSubscriber, _super);
    function RefCountSubscriber(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber.prototype._unsubscribe = function() {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) sharedConnection.unsubscribe();
    };
    return RefCountSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"loOQU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "groupBy", ()=>groupBy
);
parcelHelpers.export(exports, "GroupedObservable", ()=>GroupedObservable1
);
/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _subscription = require("../Subscription");
var _observable = require("../Observable");
var _subject = require("../Subject");
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function(source) {
        return source.lift(new GroupByOperator1(keySelector, elementSelector, durationSelector, subjectSelector));
    };
}
var GroupByOperator1 = function() {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new GroupBySubscriber1(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}();
var GroupBySubscriber1 = function(_super) {
    _tslib.__extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.elementSelector = elementSelector;
        _this.durationSelector = durationSelector;
        _this.subjectSelector = subjectSelector;
        _this.groups = null;
        _this.attemptedToUnsubscribe = false;
        _this.count = 0;
        return _this;
    }
    GroupBySubscriber.prototype._next = function(value) {
        var key;
        try {
            key = this.keySelector(value);
        } catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function(value, key) {
        var groups = this.groups;
        if (!groups) groups = this.groups = new Map();
        var group = groups.get(key);
        var element;
        if (this.elementSelector) try {
            element = this.elementSelector(value);
        } catch (err) {
            this.error(err);
        }
        else element = value;
        if (!group) {
            group = this.subjectSelector ? this.subjectSelector() : new _subject.Subject();
            groups.set(key, group);
            var groupedObservable = new GroupedObservable1(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable1(key, group));
                } catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber1(key, group, this)));
            }
        }
        if (!group.closed) group.next(element);
    };
    GroupBySubscriber.prototype._error = function(err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function(group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function() {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function(group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function(key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) _super.prototype.unsubscribe.call(this);
        }
    };
    return GroupBySubscriber;
}(_subscriber.Subscriber);
var GroupDurationSubscriber1 = function(_super) {
    _tslib.__extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        var _this = _super.call(this, group) || this;
        _this.key = key;
        _this.group = group;
        _this.parent = parent;
        return _this;
    }
    GroupDurationSubscriber.prototype._next = function(value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function() {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) parent.removeGroup(key);
    };
    return GroupDurationSubscriber;
}(_subscriber.Subscriber);
var GroupedObservable1 = function(_super) {
    _tslib.__extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.groupSubject = groupSubject;
        _this.refCountSubscription = refCountSubscription;
        return _this;
    }
    GroupedObservable.prototype._subscribe = function(subscriber) {
        var subscription = new _subscription.Subscription();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) subscription.add(new InnerRefCountSubscription1(refCountSubscription));
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(_observable.Observable);
var InnerRefCountSubscription1 = function(_super) {
    _tslib.__extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        parent.count++;
        return _this;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function() {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) parent.unsubscribe();
        }
    };
    return InnerRefCountSubscription;
}(_subscription.Subscription);

},{"tslib":"j55WF","../Subscriber":"k0EYi","../Subscription":"ceYgr","../Observable":"k7KRh","../Subject":"aLwqa","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8kQOg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BehaviorSubject", ()=>BehaviorSubject1
);
/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("./Subject");
var _objectUnsubscribedError = require("./util/ObjectUnsubscribedError");
var BehaviorSubject1 = function(_super) {
    _tslib.__extends(BehaviorSubject, _super);
    function BehaviorSubject(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject.prototype, "value", {
        get: function() {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject.prototype._subscribe = function(subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject.prototype.getValue = function() {
        if (this.hasError) throw this.thrownError;
        else if (this.closed) throw new _objectUnsubscribedError.ObjectUnsubscribedError();
        else return this._value;
    };
    BehaviorSubject.prototype.next = function(value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject;
}(_subject.Subject);

},{"tslib":"j55WF","./Subject":"aLwqa","./util/ObjectUnsubscribedError":"9ONy1","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9y70s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ReplaySubject", ()=>ReplaySubject1
);
/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("./Subject");
var _queue = require("./scheduler/queue");
var _subscription = require("./Subscription");
var _observeOn = require("./operators/observeOn");
var _objectUnsubscribedError = require("./util/ObjectUnsubscribedError");
var _subjectSubscription = require("./SubjectSubscription");
var ReplaySubject1 = function(_super) {
    _tslib.__extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) bufferSize = Number.POSITIVE_INFINITY;
        if (windowTime === void 0) windowTime = Number.POSITIVE_INFINITY;
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        } else _this.next = _this.nextTimeWindow;
        return _this;
    }
    ReplaySubject.prototype.nextInfiniteTimeWindow = function(value) {
        if (!this.isStopped) {
            var _events = this._events;
            _events.push(value);
            if (_events.length > this._bufferSize) _events.shift();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype.nextTimeWindow = function(value) {
        if (!this.isStopped) {
            this._events.push(new ReplayEvent1(this._getNow(), value));
            this._trimBufferThenGetEvents();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function(subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) throw new _objectUnsubscribedError.ObjectUnsubscribedError();
        else if (this.isStopped || this.hasError) subscription = _subscription.Subscription.EMPTY;
        else {
            this.observers.push(subscriber);
            subscription = new _subjectSubscription.SubjectSubscription(this, subscriber);
        }
        if (scheduler) subscriber.add(subscriber = new _observeOn.ObserveOnSubscriber(subscriber, scheduler));
        if (_infiniteTimeWindow) for(var i = 0; i < len && !subscriber.closed; i++)subscriber.next(_events[i]);
        else for(var i = 0; i < len && !subscriber.closed; i++)subscriber.next(_events[i].value);
        if (this.hasError) subscriber.error(this.thrownError);
        else if (this.isStopped) subscriber.complete();
        return subscription;
    };
    ReplaySubject.prototype._getNow = function() {
        return (this.scheduler || _queue.queue).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function() {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while(spliceCount < eventsCount){
            if (now - _events[spliceCount].time < _windowTime) break;
            spliceCount++;
        }
        if (eventsCount > _bufferSize) spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        if (spliceCount > 0) _events.splice(0, spliceCount);
        return _events;
    };
    return ReplaySubject;
}(_subject.Subject);
var ReplayEvent1 = function() {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}();

},{"tslib":"j55WF","./Subject":"aLwqa","./scheduler/queue":"7vO4E","./Subscription":"ceYgr","./operators/observeOn":"lT8w7","./util/ObjectUnsubscribedError":"9ONy1","./SubjectSubscription":"7Olb6","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7vO4E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queueScheduler", ()=>queueScheduler
);
parcelHelpers.export(exports, "queue", ()=>queue
);
/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */ var _queueAction = require("./QueueAction");
var _queueScheduler = require("./QueueScheduler");
var queueScheduler = /*@__PURE__*/ new _queueScheduler.QueueScheduler(_queueAction.QueueAction);
var queue = queueScheduler;

},{"./QueueAction":"9jQVP","./QueueScheduler":"grIOK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9jQVP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QueueAction", ()=>QueueAction1
);
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */ var _tslib = require("tslib");
var _asyncAction = require("./AsyncAction");
var QueueAction1 = function(_super) {
    _tslib.__extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        if (delay > 0) return _super.prototype.schedule.call(this, state, delay);
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function(state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && delay > 0 || delay === null && this.delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        return scheduler.flush(this);
    };
    return QueueAction;
}(_asyncAction.AsyncAction);

},{"tslib":"j55WF","./AsyncAction":"dVa7W","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dVa7W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsyncAction", ()=>AsyncAction1
);
/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */ var _tslib = require("tslib");
var _action = require("./Action");
var AsyncAction1 = function(_super) {
    _tslib.__extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        if (this.closed) return this;
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) this.id = this.recycleAsyncId(scheduler, id, delay);
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && this.delay === delay && this.pending === false) return id;
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function(state, delay) {
        if (this.closed) return new Error('executing a cancelled action');
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) return error;
        else if (this.pending === false && this.id != null) this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    };
    AsyncAction.prototype._execute = function(state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        } catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function() {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) actions.splice(index, 1);
        if (id != null) this.id = this.recycleAsyncId(scheduler, id, null);
        this.delay = null;
    };
    return AsyncAction;
}(_action.Action);

},{"tslib":"j55WF","./Action":"2tFJc","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2tFJc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Action", ()=>Action1
);
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscription = require("../Subscription");
var Action1 = function(_super) {
    _tslib.__extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        return this;
    };
    return Action;
}(_subscription.Subscription);

},{"tslib":"j55WF","../Subscription":"ceYgr","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"grIOK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QueueScheduler", ()=>QueueScheduler1
);
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */ var _tslib = require("tslib");
var _asyncScheduler = require("./AsyncScheduler");
var QueueScheduler1 = function(_super) {
    _tslib.__extends(QueueScheduler, _super);
    function QueueScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler;
}(_asyncScheduler.AsyncScheduler);

},{"tslib":"j55WF","./AsyncScheduler":"711ty","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"711ty":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsyncScheduler", ()=>AsyncScheduler1
);
/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */ var _tslib = require("tslib");
var _scheduler = require("../Scheduler");
var AsyncScheduler1 = function(_super) {
    _tslib.__extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) now = _scheduler.Scheduler.now;
        var _this = _super.call(this, SchedulerAction, function() {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) return AsyncScheduler.delegate.now();
            else return now();
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) delay = 0;
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) return AsyncScheduler.delegate.schedule(work, delay, state);
        else return _super.prototype.schedule.call(this, work, delay, state);
    };
    AsyncScheduler.prototype.flush = function(action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) break;
        }while (action = actions.shift())
        this.active = false;
        if (error) {
            while(action = actions.shift())action.unsubscribe();
            throw error;
        }
    };
    return AsyncScheduler;
}(_scheduler.Scheduler);

},{"tslib":"j55WF","../Scheduler":"hhbAy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hhbAy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Scheduler", ()=>Scheduler1
);
var Scheduler1 = function() {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) now = Scheduler.now;
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) delay = 0;
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function() {
        return Date.now();
    };
    return Scheduler;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lT8w7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observeOn", ()=>observeOn
);
parcelHelpers.export(exports, "ObserveOnOperator", ()=>ObserveOnOperator1
);
parcelHelpers.export(exports, "ObserveOnSubscriber", ()=>ObserveOnSubscriber1
);
parcelHelpers.export(exports, "ObserveOnMessage", ()=>ObserveOnMessage1
);
/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _notification = require("../Notification");
function observeOn(scheduler, delay) {
    if (delay === void 0) delay = 0;
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator1(scheduler, delay));
    };
}
var ObserveOnOperator1 = function() {
    function ObserveOnOperator(scheduler, delay) {
        if (delay === void 0) delay = 0;
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber1(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator;
}();
var ObserveOnSubscriber1 = function(_super) {
    _tslib.__extends(ObserveOnSubscriber, _super);
    function ObserveOnSubscriber(destination, scheduler, delay) {
        if (delay === void 0) delay = 0;
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber.dispatch = function(arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype.scheduleMessage = function(notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage1(notification, this.destination)));
    };
    ObserveOnSubscriber.prototype._next = function(value) {
        this.scheduleMessage(_notification.Notification.createNext(value));
    };
    ObserveOnSubscriber.prototype._error = function(err) {
        this.scheduleMessage(_notification.Notification.createError(err));
        this.unsubscribe();
    };
    ObserveOnSubscriber.prototype._complete = function() {
        this.scheduleMessage(_notification.Notification.createComplete());
        this.unsubscribe();
    };
    return ObserveOnSubscriber;
}(_subscriber.Subscriber);
var ObserveOnMessage1 = function() {
    function ObserveOnMessage(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage;
}();

},{"tslib":"j55WF","../Subscriber":"k0EYi","../Notification":"jqexJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jqexJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NotificationKind", ()=>NotificationKind1
);
parcelHelpers.export(exports, "Notification", ()=>Notification1
);
/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */ var _empty = require("./observable/empty");
var _of = require("./observable/of");
var _throwError = require("./observable/throwError");
var NotificationKind1;
/*@__PURE__*/ (function(NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind1 || (NotificationKind1 = {
}));
var Notification1 = function() {
    function Notification(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification.prototype.observe = function(observer) {
        switch(this.kind){
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    Notification.prototype.do = function(next, error, complete) {
        var kind = this.kind;
        switch(kind){
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    Notification.prototype.accept = function(nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') return this.observe(nextOrObserver);
        else return this.do(nextOrObserver, error, complete);
    };
    Notification.prototype.toObservable = function() {
        var kind = this.kind;
        switch(kind){
            case 'N':
                return _of.of(this.value);
            case 'E':
                return _throwError.throwError(this.error);
            case 'C':
                return _empty.empty();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification.createNext = function(value) {
        if (typeof value !== 'undefined') return new Notification('N', value);
        return Notification.undefinedValueNotification;
    };
    Notification.createError = function(err) {
        return new Notification('E', undefined, err);
    };
    Notification.createComplete = function() {
        return Notification.completeNotification;
    };
    Notification.completeNotification = new Notification('C');
    Notification.undefinedValueNotification = new Notification('N', undefined);
    return Notification;
}();

},{"./observable/empty":"4kIBW","./observable/of":"eCgiH","./observable/throwError":"kMWjR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4kIBW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EMPTY", ()=>EMPTY
);
parcelHelpers.export(exports, "empty", ()=>empty
);
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */ var _observable = require("../Observable");
var EMPTY = /*@__PURE__*/ new _observable.Observable(function(subscriber) {
    return subscriber.complete();
});
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _observable.Observable(function(subscriber) {
        return scheduler.schedule(function() {
            return subscriber.complete();
        });
    });
}

},{"../Observable":"k7KRh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eCgiH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "of", ()=>of
);
/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */ var _isScheduler = require("../util/isScheduler");
var _fromArray = require("./fromArray");
var _scheduleArray = require("../scheduled/scheduleArray");
function of() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = args[args.length - 1];
    if (_isScheduler.isScheduler(scheduler)) {
        args.pop();
        return _scheduleArray.scheduleArray(args, scheduler);
    } else return _fromArray.fromArray(args);
}

},{"../util/isScheduler":"ga8ix","./fromArray":"7MwEj","../scheduled/scheduleArray":"aFb3D","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ga8ix":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "isScheduler", ()=>isScheduler
);
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7MwEj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromArray", ()=>fromArray
);
/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */ var _observable = require("../Observable");
var _subscribeToArray = require("../util/subscribeToArray");
var _scheduleArray = require("../scheduled/scheduleArray");
function fromArray(input, scheduler) {
    if (!scheduler) return new _observable.Observable(_subscribeToArray.subscribeToArray(input));
    else return _scheduleArray.scheduleArray(input, scheduler);
}

},{"../Observable":"k7KRh","../util/subscribeToArray":"ipAqF","../scheduled/scheduleArray":"aFb3D","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ipAqF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeToArray", ()=>subscribeToArray
);
var subscribeToArray = function(array) {
    return function(subscriber) {
        for(var i = 0, len = array.length; i < len && !subscriber.closed; i++)subscriber.next(array[i]);
        subscriber.complete();
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aFb3D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleArray", ()=>scheduleArray
);
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */ var _observable = require("../Observable");
var _subscription = require("../Subscription");
function scheduleArray(input, scheduler) {
    return new _observable.Observable(function(subscriber) {
        var sub = new _subscription.Subscription();
        var i = 0;
        sub.add(scheduler.schedule(function() {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) sub.add(this.schedule());
        }));
        return sub;
    });
}

},{"../Observable":"k7KRh","../Subscription":"ceYgr","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kMWjR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "throwError", ()=>throwError
);
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */ var _observable = require("../Observable");
function throwError(error, scheduler) {
    if (!scheduler) return new _observable.Observable(function(subscriber) {
        return subscriber.error(error);
    });
    else return new _observable.Observable(function(subscriber) {
        return scheduler.schedule(dispatch, 0, {
            error: error,
            subscriber: subscriber
        });
    });
}
function dispatch(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}

},{"../Observable":"k7KRh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a62Z9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsyncSubject", ()=>AsyncSubject1
);
/** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("./Subject");
var _subscription = require("./Subscription");
var AsyncSubject1 = function(_super) {
    _tslib.__extends(AsyncSubject, _super);
    function AsyncSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.hasNext = false;
        _this.hasCompleted = false;
        return _this;
    }
    AsyncSubject.prototype._subscribe = function(subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return _subscription.Subscription.EMPTY;
        } else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return _subscription.Subscription.EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function(value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function(error) {
        if (!this.hasCompleted) _super.prototype.error.call(this, error);
    };
    AsyncSubject.prototype.complete = function() {
        this.hasCompleted = true;
        if (this.hasNext) _super.prototype.next.call(this, this.value);
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(_subject.Subject);

},{"tslib":"j55WF","./Subject":"aLwqa","./Subscription":"ceYgr","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"huX4L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "asapScheduler", ()=>asapScheduler
);
parcelHelpers.export(exports, "asap", ()=>asap
);
/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */ var _asapAction = require("./AsapAction");
var _asapScheduler = require("./AsapScheduler");
var asapScheduler = /*@__PURE__*/ new _asapScheduler.AsapScheduler(_asapAction.AsapAction);
var asap = asapScheduler;

},{"./AsapAction":"ea5OL","./AsapScheduler":"8PATa","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ea5OL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsapAction", ()=>AsapAction1
);
/** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */ var _tslib = require("tslib");
var _immediate = require("../util/Immediate");
var _asyncAction = require("./AsyncAction");
var AsapAction1 = function(_super) {
    _tslib.__extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = _immediate.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && delay > 0 || delay === null && this.delay > 0) return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        if (scheduler.actions.length === 0) {
            _immediate.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction;
}(_asyncAction.AsyncAction);

},{"tslib":"j55WF","../util/Immediate":"iQorZ","./AsyncAction":"dVa7W","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iQorZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Immediate", ()=>Immediate
);
parcelHelpers.export(exports, "TestTools", ()=>TestTools
);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var nextHandle = 1;
var RESOLVED = /*@__PURE__*/ function() {
    return(/*@__PURE__*/ Promise.resolve());
}();
var activeHandles = {
};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
var Immediate = {
    setImmediate: function(cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(function() {
            return findAndClearHandle(handle) && cb();
        });
        return handle;
    },
    clearImmediate: function(handle) {
        findAndClearHandle(handle);
    }
};
var TestTools = {
    pending: function() {
        return Object.keys(activeHandles).length;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8PATa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsapScheduler", ()=>AsapScheduler1
);
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */ var _tslib = require("tslib");
var _asyncScheduler = require("./AsyncScheduler");
var AsapScheduler1 = function(_super) {
    _tslib.__extends(AsapScheduler, _super);
    function AsapScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler.prototype.flush = function(action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) break;
        }while (++index < count && (action = actions.shift()))
        this.active = false;
        if (error) {
            while(++index < count && (action = actions.shift()))action.unsubscribe();
            throw error;
        }
    };
    return AsapScheduler;
}(_asyncScheduler.AsyncScheduler);

},{"tslib":"j55WF","./AsyncScheduler":"711ty","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4Vd5T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "asyncScheduler", ()=>asyncScheduler
);
parcelHelpers.export(exports, "async", ()=>async
);
/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */ var _asyncAction = require("./AsyncAction");
var _asyncScheduler = require("./AsyncScheduler");
var asyncScheduler = /*@__PURE__*/ new _asyncScheduler.AsyncScheduler(_asyncAction.AsyncAction);
var async = asyncScheduler;

},{"./AsyncAction":"dVa7W","./AsyncScheduler":"711ty","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bDejt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animationFrameScheduler", ()=>animationFrameScheduler
);
parcelHelpers.export(exports, "animationFrame", ()=>animationFrame
);
/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */ var _animationFrameAction = require("./AnimationFrameAction");
var _animationFrameScheduler = require("./AnimationFrameScheduler");
var animationFrameScheduler = /*@__PURE__*/ new _animationFrameScheduler.AnimationFrameScheduler(_animationFrameAction.AnimationFrameAction);
var animationFrame = animationFrameScheduler;

},{"./AnimationFrameAction":"ikxt2","./AnimationFrameScheduler":"597jp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ikxt2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnimationFrameAction", ()=>AnimationFrameAction1
);
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */ var _tslib = require("tslib");
var _asyncAction = require("./AsyncAction");
var AnimationFrameAction1 = function(_super) {
    _tslib.__extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function() {
            return scheduler.flush(null);
        }));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && delay > 0 || delay === null && this.delay > 0) return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction;
}(_asyncAction.AsyncAction);

},{"tslib":"j55WF","./AsyncAction":"dVa7W","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"597jp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnimationFrameScheduler", ()=>AnimationFrameScheduler1
);
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */ var _tslib = require("tslib");
var _asyncScheduler = require("./AsyncScheduler");
var AnimationFrameScheduler1 = function(_super) {
    _tslib.__extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler.prototype.flush = function(action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) break;
        }while (++index < count && (action = actions.shift()))
        this.active = false;
        if (error) {
            while(++index < count && (action = actions.shift()))action.unsubscribe();
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(_asyncScheduler.AsyncScheduler);

},{"tslib":"j55WF","./AsyncScheduler":"711ty","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4vwna":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VirtualTimeScheduler", ()=>VirtualTimeScheduler1
);
parcelHelpers.export(exports, "VirtualAction", ()=>VirtualAction1
);
/** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */ var _tslib = require("tslib");
var _asyncAction = require("./AsyncAction");
var _asyncScheduler = require("./AsyncScheduler");
var VirtualTimeScheduler1 = function(_super) {
    _tslib.__extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) SchedulerAction = VirtualAction1;
        if (maxFrames === void 0) maxFrames = Number.POSITIVE_INFINITY;
        var _this = _super.call(this, SchedulerAction, function() {
            return _this.frame;
        }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler.prototype.flush = function() {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while((action = actions[0]) && action.delay <= maxFrames){
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) break;
        }
        if (error) {
            while(action = actions.shift())action.unsubscribe();
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(_asyncScheduler.AsyncScheduler);
var VirtualAction1 = function(_super) {
    _tslib.__extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) index = scheduler.index += 1;
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        if (!this.id) return _super.prototype.schedule.call(this, state, delay);
        this.active = false;
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        return undefined;
    };
    VirtualAction.prototype._execute = function(state, delay) {
        if (this.active === true) return _super.prototype._execute.call(this, state, delay);
    };
    VirtualAction.sortActions = function(a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) return 0;
            else if (a.index > b.index) return 1;
            else return -1;
        } else if (a.delay > b.delay) return 1;
        else return -1;
    };
    return VirtualAction;
}(_asyncAction.AsyncAction);

},{"tslib":"j55WF","./AsyncAction":"dVa7W","./AsyncScheduler":"711ty","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cZMY5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "noop", ()=>noop
);
function noop() {
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4dmUT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isObservable", ()=>isObservable
);
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */ var _observable = require("../Observable");
function isObservable(obj) {
    return !!obj && (obj instanceof _observable.Observable || typeof obj.lift === 'function' && typeof obj.subscribe === 'function');
}

},{"../Observable":"k7KRh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ay3gU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ArgumentOutOfRangeError", ()=>ArgumentOutOfRangeError
);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var ArgumentOutOfRangeErrorImpl1 = /*@__PURE__*/ function() {
    function ArgumentOutOfRangeErrorImpl() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
    }
    ArgumentOutOfRangeErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ArgumentOutOfRangeErrorImpl;
}();
var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2BhSf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmptyError", ()=>EmptyError
);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var EmptyErrorImpl1 = /*@__PURE__*/ function() {
    function EmptyErrorImpl() {
        Error.call(this);
        this.message = 'no elements in sequence';
        this.name = 'EmptyError';
        return this;
    }
    EmptyErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return EmptyErrorImpl;
}();
var EmptyError = EmptyErrorImpl1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5kKEt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TimeoutError", ()=>TimeoutError
);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var TimeoutErrorImpl1 = /*@__PURE__*/ function() {
    function TimeoutErrorImpl() {
        Error.call(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        return this;
    }
    TimeoutErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return TimeoutErrorImpl;
}();
var TimeoutError = TimeoutErrorImpl1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"i969r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bindCallback", ()=>bindCallback
);
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */ var _observable = require("../Observable");
var _asyncSubject = require("../AsyncSubject");
var _map = require("../operators/map");
var _canReportError = require("../util/canReportError");
var _isArray = require("../util/isArray");
var _isScheduler = require("../util/isScheduler");
function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (_isScheduler.isScheduler(resultSelector)) scheduler = resultSelector;
        else return function() {
            var args1 = [];
            for(var _i = 0; _i < arguments.length; _i++)args1[_i] = arguments[_i];
            return bindCallback(callbackFunc, scheduler).apply(void 0, args1).pipe(_map.map(function(args) {
                return _isArray.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
            }));
        };
    }
    return function() {
        var args = [];
        for(var _i1 = 0; _i1 < arguments.length; _i1++)args[_i1] = arguments[_i1];
        var context = this;
        var subject;
        var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler
        };
        return new _observable.Observable(function(subscriber) {
            if (!scheduler) {
                if (!subject) {
                    subject = new _asyncSubject.AsyncSubject();
                    var handler = function() {
                        var innerArgs = [];
                        for(var _i = 0; _i < arguments.length; _i++)innerArgs[_i] = arguments[_i];
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([
                            handler
                        ]));
                    } catch (err) {
                        if (_canReportError.canReportError(subject)) subject.error(err);
                        else console.warn(err);
                    }
                }
                return subject.subscribe(subscriber);
            } else {
                var state = {
                    args: args,
                    subscriber: subscriber,
                    params: params
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
function dispatch(state) {
    var _this = this;
    var self = this;
    var args = state.args, subscriber = state.subscriber, params = state.params;
    var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new _asyncSubject.AsyncSubject();
        var handler = function() {
            var innerArgs = [];
            for(var _i = 0; _i < arguments.length; _i++)innerArgs[_i] = arguments[_i];
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            _this.add(scheduler.schedule(dispatchNext, 0, {
                value: value,
                subject: subject
            }));
        };
        try {
            callbackFunc.apply(context, args.concat([
                handler
            ]));
        } catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    var value = state.value, subject = state.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    var err = state.err, subject = state.subject;
    subject.error(err);
}

},{"../Observable":"k7KRh","../AsyncSubject":"a62Z9","../operators/map":"6BlqD","../util/canReportError":"5ee0l","../util/isArray":"eQmW1","../util/isScheduler":"ga8ix","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6BlqD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "MapOperator", ()=>MapOperator1
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        return source.lift(new MapOperator1(project, thisArg));
    };
}
var MapOperator1 = function() {
    function MapOperator(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new MapSubscriber1(subscriber, this.project, this.thisArg));
    };
    return MapOperator;
}();
var MapSubscriber1 = function(_super) {
    _tslib.__extends(MapSubscriber, _super);
    function MapSubscriber(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber.prototype._next = function(value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1ZgEN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bindNodeCallback", ()=>bindNodeCallback
);
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */ var _observable = require("../Observable");
var _asyncSubject = require("../AsyncSubject");
var _map = require("../operators/map");
var _canReportError = require("../util/canReportError");
var _isScheduler = require("../util/isScheduler");
var _isArray = require("../util/isArray");
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (_isScheduler.isScheduler(resultSelector)) scheduler = resultSelector;
        else return function() {
            var args1 = [];
            for(var _i = 0; _i < arguments.length; _i++)args1[_i] = arguments[_i];
            return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args1).pipe(_map.map(function(args) {
                return _isArray.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
            }));
        };
    }
    return function() {
        var args = [];
        for(var _i1 = 0; _i1 < arguments.length; _i1++)args[_i1] = arguments[_i1];
        var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this
        };
        return new _observable.Observable(function(subscriber) {
            var context = params.context;
            var subject = params.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new _asyncSubject.AsyncSubject();
                    var handler = function() {
                        var innerArgs = [];
                        for(var _i = 0; _i < arguments.length; _i++)innerArgs[_i] = arguments[_i];
                        var err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([
                            handler
                        ]));
                    } catch (err) {
                        if (_canReportError.canReportError(subject)) subject.error(err);
                        else console.warn(err);
                    }
                }
                return subject.subscribe(subscriber);
            } else return scheduler.schedule(dispatch, 0, {
                params: params,
                subscriber: subscriber,
                context: context
            });
        });
    };
}
function dispatch(state) {
    var _this = this;
    var params = state.params, subscriber = state.subscriber, context = state.context;
    var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new _asyncSubject.AsyncSubject();
        var handler = function() {
            var innerArgs = [];
            for(var _i = 0; _i < arguments.length; _i++)innerArgs[_i] = arguments[_i];
            var err = innerArgs.shift();
            if (err) _this.add(scheduler.schedule(dispatchError, 0, {
                err: err,
                subject: subject
            }));
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, {
                    value: value,
                    subject: subject
                }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([
                handler
            ]));
        } catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, {
                err: err,
                subject: subject
            }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}

},{"../Observable":"k7KRh","../AsyncSubject":"a62Z9","../operators/map":"6BlqD","../util/canReportError":"5ee0l","../util/isScheduler":"ga8ix","../util/isArray":"eQmW1","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dYsYm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "combineLatest", ()=>combineLatest
);
parcelHelpers.export(exports, "CombineLatestOperator", ()=>CombineLatestOperator1
);
parcelHelpers.export(exports, "CombineLatestSubscriber", ()=>CombineLatestSubscriber1
);
/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */ var _tslib = require("tslib");
var _isScheduler = require("../util/isScheduler");
var _isArray = require("../util/isArray");
var _outerSubscriber = require("../OuterSubscriber");
var _subscribeToResult = require("../util/subscribeToResult");
var _fromArray = require("./fromArray");
var NONE = {
};
function combineLatest() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    var resultSelector = undefined;
    var scheduler = undefined;
    if (_isScheduler.isScheduler(observables[observables.length - 1])) scheduler = observables.pop();
    if (typeof observables[observables.length - 1] === 'function') resultSelector = observables.pop();
    if (observables.length === 1 && _isArray.isArray(observables[0])) observables = observables[0];
    return _fromArray.fromArray(observables, scheduler).lift(new CombineLatestOperator1(resultSelector));
}
var CombineLatestOperator1 = function() {
    function CombineLatestOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber1(subscriber, this.resultSelector));
    };
    return CombineLatestOperator;
}();
var CombineLatestSubscriber1 = function(_super) {
    _tslib.__extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber.prototype._next = function(observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function() {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) this.destination.complete();
        else {
            this.active = len;
            this.toRespond = len;
            for(var i = 0; i < len; i++){
                var observable = observables[i];
                this.add(_subscribeToResult.subscribeToResult(this, observable, undefined, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function(unused) {
        if ((this.active -= 1) === 0) this.destination.complete();
    };
    CombineLatestSubscriber.prototype.notifyNext = function(_outerValue, innerValue, outerIndex) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) this._tryResultSelector(values);
            else this.destination.next(values.slice());
        }
    };
    CombineLatestSubscriber.prototype._tryResultSelector = function(values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(_outerSubscriber.OuterSubscriber);

},{"tslib":"j55WF","../util/isScheduler":"ga8ix","../util/isArray":"eQmW1","../OuterSubscriber":"76kEv","../util/subscribeToResult":"8oD0J","./fromArray":"7MwEj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"76kEv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OuterSubscriber", ()=>OuterSubscriber1
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("./Subscriber");
var OuterSubscriber1 = function(_super) {
    _tslib.__extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function(error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function(innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","./Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8oD0J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeToResult", ()=>subscribeToResult
);
/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */ var _innerSubscriber = require("../InnerSubscriber");
var _subscribeTo = require("./subscribeTo");
var _observable = require("../Observable");
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
    if (innerSubscriber === void 0) innerSubscriber = new _innerSubscriber.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    if (innerSubscriber.closed) return undefined;
    if (result instanceof _observable.Observable) return result.subscribe(innerSubscriber);
    return _subscribeTo.subscribeTo(result)(innerSubscriber);
}

},{"../InnerSubscriber":"hYzGd","./subscribeTo":"i7pcz","../Observable":"k7KRh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hYzGd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InnerSubscriber", ()=>InnerSubscriber1
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("./Subscriber");
var InnerSubscriber1 = function(_super) {
    _tslib.__extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function(error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","./Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"i7pcz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeTo", ()=>subscribeTo
);
/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */ var _subscribeToArray = require("./subscribeToArray");
var _subscribeToPromise = require("./subscribeToPromise");
var _subscribeToIterable = require("./subscribeToIterable");
var _subscribeToObservable = require("./subscribeToObservable");
var _isArrayLike = require("./isArrayLike");
var _isPromise = require("./isPromise");
var _isObject = require("./isObject");
var _iterator = require("../symbol/iterator");
var _observable = require("../symbol/observable");
var subscribeTo = function(result) {
    if (!!result && typeof result[_observable.observable] === 'function') return _subscribeToObservable.subscribeToObservable(result);
    else if (_isArrayLike.isArrayLike(result)) return _subscribeToArray.subscribeToArray(result);
    else if (_isPromise.isPromise(result)) return _subscribeToPromise.subscribeToPromise(result);
    else if (!!result && typeof result[_iterator.iterator] === 'function') return _subscribeToIterable.subscribeToIterable(result);
    else {
        var value = _isObject.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};

},{"./subscribeToArray":"ipAqF","./subscribeToPromise":"2ml5q","./subscribeToIterable":"10CRj","./subscribeToObservable":"7PT3k","./isArrayLike":"4Xccv","./isPromise":"9MQnl","./isObject":"fYeVV","../symbol/iterator":"bbxpY","../symbol/observable":"6KCwD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2ml5q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeToPromise", ()=>subscribeToPromise
);
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */ var _hostReportError = require("./hostReportError");
var subscribeToPromise = function(promise) {
    return function(subscriber) {
        promise.then(function(value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function(err) {
            return subscriber.error(err);
        }).then(null, _hostReportError.hostReportError);
        return subscriber;
    };
};

},{"./hostReportError":"h4tUh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"10CRj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeToIterable", ()=>subscribeToIterable
);
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */ var _iterator = require("../symbol/iterator");
var subscribeToIterable = function(iterable) {
    return function(subscriber) {
        var iterator = iterable[_iterator.iterator]();
        do {
            var item = void 0;
            try {
                item = iterator.next();
            } catch (err) {
                subscriber.error(err);
                return subscriber;
            }
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) break;
        }while (true)
        if (typeof iterator.return === 'function') subscriber.add(function() {
            if (iterator.return) iterator.return();
        });
        return subscriber;
    };
};

},{"../symbol/iterator":"bbxpY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bbxpY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "getSymbolIterator", ()=>getSymbolIterator
);
parcelHelpers.export(exports, "iterator", ()=>iterator
);
parcelHelpers.export(exports, "$$iterator", ()=>$$iterator
);
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) return '@@iterator';
    return Symbol.iterator;
}
var iterator = /*@__PURE__*/ getSymbolIterator();
var $$iterator = iterator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7PT3k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeToObservable", ()=>subscribeToObservable
);
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */ var _observable = require("../symbol/observable");
var subscribeToObservable = function(obj) {
    return function(subscriber) {
        var obs = obj[_observable.observable]();
        if (typeof obs.subscribe !== 'function') throw new TypeError('Provided object does not correctly implement Symbol.observable');
        else return obs.subscribe(subscriber);
    };
};

},{"../symbol/observable":"6KCwD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4Xccv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArrayLike", ()=>isArrayLike
);
var isArrayLike = function(x) {
    return x && typeof x.length === 'number' && typeof x !== 'function';
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9MQnl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "isPromise", ()=>isPromise
);
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cR4Mp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concat", ()=>concat
);
/** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */ var _of = require("./of");
var _concatAll = require("../operators/concatAll");
function concat() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    return _concatAll.concatAll()(_of.of.apply(void 0, observables));
}

},{"./of":"eCgiH","../operators/concatAll":"8X97a","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8X97a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concatAll", ()=>concatAll
);
/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */ var _mergeAll = require("./mergeAll");
function concatAll() {
    return _mergeAll.mergeAll(1);
}

},{"./mergeAll":"4mEdq","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4mEdq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeAll", ()=>mergeAll
);
/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */ var _mergeMap = require("./mergeMap");
var _identity = require("../util/identity");
function mergeAll(concurrent) {
    if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
    return _mergeMap.mergeMap(_identity.identity, concurrent);
}

},{"./mergeMap":"g6oOz","../util/identity":"cqToy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g6oOz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeMap", ()=>mergeMap
);
parcelHelpers.export(exports, "MergeMapOperator", ()=>MergeMapOperator1
);
parcelHelpers.export(exports, "MergeMapSubscriber", ()=>MergeMapSubscriber1
);
parcelHelpers.export(exports, "flatMap", ()=>flatMap
);
/** PURE_IMPORTS_START tslib,_map,_observable_from,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _map = require("./map");
var _from = require("../observable/from");
var _innerSubscribe = require("../innerSubscribe");
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
    if (typeof resultSelector === 'function') return function(source) {
        return source.pipe(mergeMap(function(a, i) {
            return _from.from(project(a, i)).pipe(_map.map(function(b, ii) {
                return resultSelector(a, b, i, ii);
            }));
        }, concurrent));
    };
    else if (typeof resultSelector === 'number') concurrent = resultSelector;
    return function(source) {
        return source.lift(new MergeMapOperator1(project, concurrent));
    };
}
var MergeMapOperator1 = function() {
    function MergeMapOperator(project, concurrent) {
        if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator.prototype.call = function(observer, source) {
        return source.subscribe(new MergeMapSubscriber1(observer, this.project, this.concurrent));
    };
    return MergeMapOperator;
}();
var MergeMapSubscriber1 = function(_super) {
    _tslib.__extends(MergeMapSubscriber, _super);
    function MergeMapSubscriber(destination, project, concurrent) {
        if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber.prototype._next = function(value) {
        if (this.active < this.concurrent) this._tryNext(value);
        else this.buffer.push(value);
    };
    MergeMapSubscriber.prototype._tryNext = function(value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result);
    };
    MergeMapSubscriber.prototype._innerSub = function(ish) {
        var innerSubscriber = new _innerSubscribe.SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = _innerSubscribe.innerSubscribe(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) destination.add(innerSubscription);
    };
    MergeMapSubscriber.prototype._complete = function() {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) this.destination.complete();
        this.unsubscribe();
    };
    MergeMapSubscriber.prototype.notifyNext = function(innerValue) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber.prototype.notifyComplete = function() {
        var buffer = this.buffer;
        this.active--;
        if (buffer.length > 0) this._next(buffer.shift());
        else if (this.active === 0 && this.hasCompleted) this.destination.complete();
    };
    return MergeMapSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);
var flatMap = mergeMap;

},{"tslib":"j55WF","./map":"6BlqD","../observable/from":"l9OnS","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"l9OnS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "from", ()=>from
);
/** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */ var _observable = require("../Observable");
var _subscribeTo = require("../util/subscribeTo");
var _scheduled = require("../scheduled/scheduled");
function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof _observable.Observable) return input;
        return new _observable.Observable(_subscribeTo.subscribeTo(input));
    } else return _scheduled.scheduled(input, scheduler);
}

},{"../Observable":"k7KRh","../util/subscribeTo":"i7pcz","../scheduled/scheduled":"5qUcI","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5qUcI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduled", ()=>scheduled
);
/** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */ var _scheduleObservable = require("./scheduleObservable");
var _schedulePromise = require("./schedulePromise");
var _scheduleArray = require("./scheduleArray");
var _scheduleIterable = require("./scheduleIterable");
var _isInteropObservable = require("../util/isInteropObservable");
var _isPromise = require("../util/isPromise");
var _isArrayLike = require("../util/isArrayLike");
var _isIterable = require("../util/isIterable");
function scheduled(input, scheduler) {
    if (input != null) {
        if (_isInteropObservable.isInteropObservable(input)) return _scheduleObservable.scheduleObservable(input, scheduler);
        else if (_isPromise.isPromise(input)) return _schedulePromise.schedulePromise(input, scheduler);
        else if (_isArrayLike.isArrayLike(input)) return _scheduleArray.scheduleArray(input, scheduler);
        else if (_isIterable.isIterable(input) || typeof input === 'string') return _scheduleIterable.scheduleIterable(input, scheduler);
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}

},{"./scheduleObservable":"fgt8x","./schedulePromise":"gqqlW","./scheduleArray":"aFb3D","./scheduleIterable":"cKAIt","../util/isInteropObservable":"lEwFo","../util/isPromise":"9MQnl","../util/isArrayLike":"4Xccv","../util/isIterable":"kPgUK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fgt8x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleObservable", ()=>scheduleObservable
);
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */ var _observable = require("../Observable");
var _subscription = require("../Subscription");
var _observable1 = require("../symbol/observable");
function scheduleObservable(input, scheduler) {
    return new _observable.Observable(function(subscriber) {
        var sub = new _subscription.Subscription();
        sub.add(scheduler.schedule(function() {
            var observable = input[_observable1.observable]();
            sub.add(observable.subscribe({
                next: function(value) {
                    sub.add(scheduler.schedule(function() {
                        return subscriber.next(value);
                    }));
                },
                error: function(err) {
                    sub.add(scheduler.schedule(function() {
                        return subscriber.error(err);
                    }));
                },
                complete: function() {
                    sub.add(scheduler.schedule(function() {
                        return subscriber.complete();
                    }));
                }
            }));
        }));
        return sub;
    });
}

},{"../Observable":"k7KRh","../Subscription":"ceYgr","../symbol/observable":"6KCwD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gqqlW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "schedulePromise", ()=>schedulePromise
);
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */ var _observable = require("../Observable");
var _subscription = require("../Subscription");
function schedulePromise(input, scheduler) {
    return new _observable.Observable(function(subscriber) {
        var sub = new _subscription.Subscription();
        sub.add(scheduler.schedule(function() {
            return input.then(function(value) {
                sub.add(scheduler.schedule(function() {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(function() {
                        return subscriber.complete();
                    }));
                }));
            }, function(err) {
                sub.add(scheduler.schedule(function() {
                    return subscriber.error(err);
                }));
            });
        }));
        return sub;
    });
}

},{"../Observable":"k7KRh","../Subscription":"ceYgr","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cKAIt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleIterable", ()=>scheduleIterable
);
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */ var _observable = require("../Observable");
var _subscription = require("../Subscription");
var _iterator = require("../symbol/iterator");
function scheduleIterable(input, scheduler) {
    if (!input) throw new Error('Iterable cannot be null');
    return new _observable.Observable(function(subscriber) {
        var sub = new _subscription.Subscription();
        var iterator;
        sub.add(function() {
            if (iterator && typeof iterator.return === 'function') iterator.return();
        });
        sub.add(scheduler.schedule(function() {
            iterator = input[_iterator.iterator]();
            sub.add(scheduler.schedule(function() {
                if (subscriber.closed) return;
                var value;
                var done;
                try {
                    var result = iterator.next();
                    value = result.value;
                    done = result.done;
                } catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) subscriber.complete();
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            }));
        }));
        return sub;
    });
}

},{"../Observable":"k7KRh","../Subscription":"ceYgr","../symbol/iterator":"bbxpY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lEwFo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isInteropObservable", ()=>isInteropObservable
);
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */ var _observable = require("../symbol/observable");
function isInteropObservable(input) {
    return input && typeof input[_observable.observable] === 'function';
}

},{"../symbol/observable":"6KCwD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kPgUK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isIterable", ()=>isIterable
);
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */ var _iterator = require("../symbol/iterator");
function isIterable(input) {
    return input && typeof input[_iterator.iterator] === 'function';
}

},{"../symbol/iterator":"bbxpY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gI2Fn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SimpleInnerSubscriber", ()=>SimpleInnerSubscriber1
);
parcelHelpers.export(exports, "ComplexInnerSubscriber", ()=>ComplexInnerSubscriber1
);
parcelHelpers.export(exports, "SimpleOuterSubscriber", ()=>SimpleOuterSubscriber1
);
parcelHelpers.export(exports, "ComplexOuterSubscriber", ()=>ComplexOuterSubscriber1
);
parcelHelpers.export(exports, "innerSubscribe", ()=>innerSubscribe
);
/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_util_subscribeTo PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("./Subscriber");
var _observable = require("./Observable");
var _subscribeTo = require("./util/subscribeTo");
var SimpleInnerSubscriber1 = function(_super) {
    _tslib.__extends(SimpleInnerSubscriber, _super);
    function SimpleInnerSubscriber(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        return _this;
    }
    SimpleInnerSubscriber.prototype._next = function(value) {
        this.parent.notifyNext(value);
    };
    SimpleInnerSubscriber.prototype._error = function(error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    SimpleInnerSubscriber.prototype._complete = function() {
        this.parent.notifyComplete();
        this.unsubscribe();
    };
    return SimpleInnerSubscriber;
}(_subscriber.Subscriber);
var ComplexInnerSubscriber1 = function(_super) {
    _tslib.__extends(ComplexInnerSubscriber, _super);
    function ComplexInnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        return _this;
    }
    ComplexInnerSubscriber.prototype._next = function(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
    };
    ComplexInnerSubscriber.prototype._error = function(error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    ComplexInnerSubscriber.prototype._complete = function() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return ComplexInnerSubscriber;
}(_subscriber.Subscriber);
var SimpleOuterSubscriber1 = function(_super) {
    _tslib.__extends(SimpleOuterSubscriber, _super);
    function SimpleOuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleOuterSubscriber.prototype.notifyNext = function(innerValue) {
        this.destination.next(innerValue);
    };
    SimpleOuterSubscriber.prototype.notifyError = function(err) {
        this.destination.error(err);
    };
    SimpleOuterSubscriber.prototype.notifyComplete = function() {
        this.destination.complete();
    };
    return SimpleOuterSubscriber;
}(_subscriber.Subscriber);
var ComplexOuterSubscriber1 = function(_super) {
    _tslib.__extends(ComplexOuterSubscriber, _super);
    function ComplexOuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComplexOuterSubscriber.prototype.notifyNext = function(_outerValue, innerValue, _outerIndex, _innerSub) {
        this.destination.next(innerValue);
    };
    ComplexOuterSubscriber.prototype.notifyError = function(error) {
        this.destination.error(error);
    };
    ComplexOuterSubscriber.prototype.notifyComplete = function(_innerSub) {
        this.destination.complete();
    };
    return ComplexOuterSubscriber;
}(_subscriber.Subscriber);
function innerSubscribe(result, innerSubscriber) {
    if (innerSubscriber.closed) return undefined;
    if (result instanceof _observable.Observable) return result.subscribe(innerSubscriber);
    var subscription;
    try {
        subscription = _subscribeTo.subscribeTo(result)(innerSubscriber);
    } catch (error) {
        innerSubscriber.error(error);
    }
    return subscription;
}

},{"tslib":"j55WF","./Subscriber":"k0EYi","./Observable":"k7KRh","./util/subscribeTo":"i7pcz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cYAxq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defer", ()=>defer
);
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */ var _observable = require("../Observable");
var _from = require("./from");
var _empty = require("./empty");
function defer(observableFactory) {
    return new _observable.Observable(function(subscriber) {
        var input;
        try {
            input = observableFactory();
        } catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = input ? _from.from(input) : _empty.empty();
        return source.subscribe(subscriber);
    });
}

},{"../Observable":"k7KRh","./from":"l9OnS","./empty":"4kIBW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1fgh2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "forkJoin", ()=>forkJoin
);
/** PURE_IMPORTS_START _Observable,_util_isArray,_operators_map,_util_isObject,_from PURE_IMPORTS_END */ var _observable = require("../Observable");
var _isArray = require("../util/isArray");
var _map = require("../operators/map");
var _isObject = require("../util/isObject");
var _from = require("./from");
function forkJoin() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    if (sources.length === 1) {
        var first_1 = sources[0];
        if (_isArray.isArray(first_1)) return forkJoinInternal(first_1, null);
        if (_isObject.isObject(first_1) && Object.getPrototypeOf(first_1) === Object.prototype) {
            var keys = Object.keys(first_1);
            return forkJoinInternal(keys.map(function(key) {
                return first_1[key];
            }), keys);
        }
    }
    if (typeof sources[sources.length - 1] === 'function') {
        var resultSelector_1 = sources.pop();
        sources = sources.length === 1 && _isArray.isArray(sources[0]) ? sources[0] : sources;
        return forkJoinInternal(sources, null).pipe(_map.map(function(args) {
            return resultSelector_1.apply(void 0, args);
        }));
    }
    return forkJoinInternal(sources, null);
}
function forkJoinInternal(sources, keys) {
    return new _observable.Observable(function(subscriber) {
        var len = sources.length;
        if (len === 0) {
            subscriber.complete();
            return;
        }
        var values = new Array(len);
        var completed = 0;
        var emitted = 0;
        var _loop_1 = function(i) {
            var source = _from.from(sources[i]);
            var hasValue = false;
            subscriber.add(source.subscribe({
                next: function(value) {
                    if (!hasValue) {
                        hasValue = true;
                        emitted++;
                    }
                    values[i] = value;
                },
                error: function(err) {
                    return subscriber.error(err);
                },
                complete: function() {
                    completed++;
                    if (completed === len || !hasValue) {
                        if (emitted === len) subscriber.next(keys ? keys.reduce(function(result, key, i) {
                            return result[key] = values[i], result;
                        }, {
                        }) : values);
                        subscriber.complete();
                    }
                }
            }));
        };
        for(var i = 0; i < len; i++)_loop_1(i);
    });
}

},{"../Observable":"k7KRh","../util/isArray":"eQmW1","../operators/map":"6BlqD","../util/isObject":"fYeVV","./from":"l9OnS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6U357":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromEvent", ()=>fromEvent
);
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */ var _observable = require("../Observable");
var _isArray = require("../util/isArray");
var _isFunction = require("../util/isFunction");
var _map = require("../operators/map");
var toString = /*@__PURE__*/ function() {
    return Object.prototype.toString;
}();
function fromEvent(target, eventName, options, resultSelector) {
    if (_isFunction.isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) return fromEvent(target, eventName, options).pipe(_map.map(function(args) {
        return _isArray.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
    return new _observable.Observable(function(subscriber) {
        function handler(e) {
            if (arguments.length > 1) subscriber.next(Array.prototype.slice.call(arguments));
            else subscriber.next(e);
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function() {
            return source_1.removeEventListener(eventName, handler, options);
        };
    } else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function() {
            return source_2.off(eventName, handler);
        };
    } else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function() {
            return source_3.removeListener(eventName, handler);
        };
    } else if (sourceObj && sourceObj.length) for(var i = 0, len = sourceObj.length; i < len; i++)setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
    else throw new TypeError('Invalid event target');
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}

},{"../Observable":"k7KRh","../util/isArray":"eQmW1","../util/isFunction":"hLVqF","../operators/map":"6BlqD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dlO9t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromEventPattern", ()=>fromEventPattern
);
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */ var _observable = require("../Observable");
var _isArray = require("../util/isArray");
var _isFunction = require("../util/isFunction");
var _map = require("../operators/map");
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) return fromEventPattern(addHandler, removeHandler).pipe(_map.map(function(args) {
        return _isArray.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
    return new _observable.Observable(function(subscriber) {
        var handler = function() {
            var e = [];
            for(var _i = 0; _i < arguments.length; _i++)e[_i] = arguments[_i];
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue;
        try {
            retValue = addHandler(handler);
        } catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!_isFunction.isFunction(removeHandler)) return undefined;
        return function() {
            return removeHandler(handler, retValue);
        };
    });
}

},{"../Observable":"k7KRh","../util/isArray":"eQmW1","../util/isFunction":"hLVqF","../operators/map":"6BlqD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5ztb4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generate", ()=>generate
);
/** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */ var _observable = require("../Observable");
var _identity = require("../util/identity");
var _isScheduler = require("../util/isScheduler");
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    var resultSelector;
    var initialState;
    if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || _identity.identity;
        scheduler = options.scheduler;
    } else if (resultSelectorOrObservable === undefined || _isScheduler.isScheduler(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = _identity.identity;
        scheduler = resultSelectorOrObservable;
    } else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new _observable.Observable(function(subscriber) {
        var state = initialState;
        if (scheduler) return scheduler.schedule(dispatch, 0, {
            subscriber: subscriber,
            iterate: iterate,
            condition: condition,
            resultSelector: resultSelector,
            state: state
        });
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                } catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            } catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) break;
            try {
                state = iterate(state);
            } catch (err1) {
                subscriber.error(err1);
                return undefined;
            }
        }while (true)
        return undefined;
    });
}
function dispatch(state) {
    var subscriber = state.subscriber, condition = state.condition;
    if (subscriber.closed) return undefined;
    if (state.needIterate) try {
        state.state = state.iterate(state.state);
    } catch (err) {
        subscriber.error(err);
        return undefined;
    }
    else state.needIterate = true;
    if (condition) {
        var conditionResult = void 0;
        try {
            conditionResult = condition(state.state);
        } catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) return undefined;
    }
    var value;
    try {
        value = state.resultSelector(state.state);
    } catch (err2) {
        subscriber.error(err2);
        return undefined;
    }
    if (subscriber.closed) return undefined;
    subscriber.next(value);
    if (subscriber.closed) return undefined;
    return this.schedule(state);
}

},{"../Observable":"k7KRh","../util/identity":"cqToy","../util/isScheduler":"ga8ix","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jVWR8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "iif", ()=>iif
);
/** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */ var _defer = require("./defer");
var _empty = require("./empty");
function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) trueResult = _empty.EMPTY;
    if (falseResult === void 0) falseResult = _empty.EMPTY;
    return _defer.defer(function() {
        return condition() ? trueResult : falseResult;
    });
}

},{"./defer":"cYAxq","./empty":"4kIBW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cnQoB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interval", ()=>interval
);
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */ var _observable = require("../Observable");
var _async = require("../scheduler/async");
var _isNumeric = require("../util/isNumeric");
function interval(period, scheduler) {
    if (period === void 0) period = 0;
    if (scheduler === void 0) scheduler = _async.async;
    if (!_isNumeric.isNumeric(period) || period < 0) period = 0;
    if (!scheduler || typeof scheduler.schedule !== 'function') scheduler = _async.async;
    return new _observable.Observable(function(subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, {
            subscriber: subscriber,
            counter: 0,
            period: period
        }));
        return subscriber;
    });
}
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({
        subscriber: subscriber,
        counter: counter + 1,
        period: period
    }, period);
}

},{"../Observable":"k7KRh","../scheduler/async":"4Vd5T","../util/isNumeric":"1K54H","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1K54H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumeric", ()=>isNumeric
);
/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */ var _isArray = require("./isArray");
function isNumeric(val) {
    return !_isArray.isArray(val) && val - parseFloat(val) + 1 >= 0;
}

},{"./isArray":"eQmW1","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3cUnK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "merge", ()=>merge
);
/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */ var _observable = require("../Observable");
var _isScheduler = require("../util/isScheduler");
var _mergeAll = require("../operators/mergeAll");
var _fromArray = require("./fromArray");
function merge() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (_isScheduler.isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') concurrent = observables.pop();
    } else if (typeof last === 'number') concurrent = observables.pop();
    if (scheduler === null && observables.length === 1 && observables[0] instanceof _observable.Observable) return observables[0];
    return _mergeAll.mergeAll(concurrent)(_fromArray.fromArray(observables, scheduler));
}

},{"../Observable":"k7KRh","../util/isScheduler":"ga8ix","../operators/mergeAll":"4mEdq","./fromArray":"7MwEj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8Kc7X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NEVER", ()=>NEVER
);
parcelHelpers.export(exports, "never", ()=>never
);
/** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */ var _observable = require("../Observable");
var _noop = require("../util/noop");
var NEVER = /*@__PURE__*/ new _observable.Observable(_noop.noop);
function never() {
    return NEVER;
}

},{"../Observable":"k7KRh","../util/noop":"cZMY5","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"78lPU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onErrorResumeNext", ()=>onErrorResumeNext
);
/** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */ var _observable = require("../Observable");
var _from = require("./from");
var _isArray = require("../util/isArray");
var _empty = require("./empty");
function onErrorResumeNext() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    if (sources.length === 0) return _empty.EMPTY;
    var first = sources[0], remainder = sources.slice(1);
    if (sources.length === 1 && _isArray.isArray(first)) return onErrorResumeNext.apply(void 0, first);
    return new _observable.Observable(function(subscriber) {
        var subNext = function() {
            return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber));
        };
        return _from.from(first).subscribe({
            next: function(value) {
                subscriber.next(value);
            },
            error: subNext,
            complete: subNext
        });
    });
}

},{"../Observable":"k7KRh","./from":"l9OnS","../util/isArray":"eQmW1","./empty":"4kIBW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3iviU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pairs", ()=>pairs
);
parcelHelpers.export(exports, "dispatch", ()=>dispatch
);
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */ var _observable = require("../Observable");
var _subscription = require("../Subscription");
function pairs(obj, scheduler) {
    if (!scheduler) return new _observable.Observable(function(subscriber) {
        var keys = Object.keys(obj);
        for(var i = 0; i < keys.length && !subscriber.closed; i++){
            var key = keys[i];
            if (obj.hasOwnProperty(key)) subscriber.next([
                key,
                obj[key]
            ]);
        }
        subscriber.complete();
    });
    else return new _observable.Observable(function(subscriber) {
        var keys = Object.keys(obj);
        var subscription = new _subscription.Subscription();
        subscription.add(scheduler.schedule(dispatch, 0, {
            keys: keys,
            index: 0,
            subscriber: subscriber,
            subscription: subscription,
            obj: obj
        }));
        return subscription;
    });
}
function dispatch(state) {
    var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
    if (!subscriber.closed) {
        if (index < keys.length) {
            var key = keys[index];
            subscriber.next([
                key,
                obj[key]
            ]);
            subscription.add(this.schedule({
                keys: keys,
                index: index + 1,
                subscriber: subscriber,
                subscription: subscription,
                obj: obj
            }));
        } else subscriber.complete();
    }
}

},{"../Observable":"k7KRh","../Subscription":"ceYgr","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"f7LOY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "partition", ()=>partition
);
/** PURE_IMPORTS_START _util_not,_util_subscribeTo,_operators_filter,_Observable PURE_IMPORTS_END */ var _not = require("../util/not");
var _subscribeTo = require("../util/subscribeTo");
var _filter = require("../operators/filter");
var _observable = require("../Observable");
function partition(source, predicate, thisArg) {
    return [
        _filter.filter(predicate, thisArg)(new _observable.Observable(_subscribeTo.subscribeTo(source))),
        _filter.filter(_not.not(predicate, thisArg))(new _observable.Observable(_subscribeTo.subscribeTo(source)))
    ];
}

},{"../util/not":"6awAc","../util/subscribeTo":"i7pcz","../operators/filter":"kO0wo","../Observable":"k7KRh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6awAc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "not", ()=>not
);
function not(pred, thisArg) {
    function notPred() {
        return !notPred.pred.apply(notPred.thisArg, arguments);
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kO0wo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filter", ()=>filter
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator1(predicate, thisArg));
    };
}
var FilterOperator1 = function() {
    function FilterOperator(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new FilterSubscriber1(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator;
}();
var FilterSubscriber1 = function(_super) {
    _tslib.__extends(FilterSubscriber, _super);
    function FilterSubscriber(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber.prototype._next = function(value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) this.destination.next(value);
    };
    return FilterSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"db7J8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "race", ()=>race
);
parcelHelpers.export(exports, "RaceOperator", ()=>RaceOperator1
);
parcelHelpers.export(exports, "RaceSubscriber", ()=>RaceSubscriber1
);
/** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */ var _tslib = require("tslib");
var _isArray = require("../util/isArray");
var _fromArray = require("./fromArray");
var _outerSubscriber = require("../OuterSubscriber");
var _subscribeToResult = require("../util/subscribeToResult");
function race() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    if (observables.length === 1) {
        if (_isArray.isArray(observables[0])) observables = observables[0];
        else return observables[0];
    }
    return _fromArray.fromArray(observables, undefined).lift(new RaceOperator1());
}
var RaceOperator1 = function() {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new RaceSubscriber1(subscriber));
    };
    return RaceOperator;
}();
var RaceSubscriber1 = function(_super) {
    _tslib.__extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasFirst = false;
        _this.observables = [];
        _this.subscriptions = [];
        return _this;
    }
    RaceSubscriber.prototype._next = function(observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function() {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) this.destination.complete();
        else {
            for(var i = 0; i < len && !this.hasFirst; i++){
                var observable = observables[i];
                var subscription = _subscribeToResult.subscribeToResult(this, observable, undefined, i);
                if (this.subscriptions) this.subscriptions.push(subscription);
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function(_outerValue, innerValue, outerIndex) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for(var i = 0; i < this.subscriptions.length; i++)if (i !== outerIndex) {
                var subscription = this.subscriptions[i];
                subscription.unsubscribe();
                this.remove(subscription);
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(_outerSubscriber.OuterSubscriber);

},{"tslib":"j55WF","../util/isArray":"eQmW1","./fromArray":"7MwEj","../OuterSubscriber":"76kEv","../util/subscribeToResult":"8oD0J","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hnLcA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "range", ()=>range
);
parcelHelpers.export(exports, "dispatch", ()=>dispatch
);
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */ var _observable = require("../Observable");
function range(start, count, scheduler) {
    if (start === void 0) start = 0;
    return new _observable.Observable(function(subscriber) {
        if (count === undefined) {
            count = start;
            start = 0;
        }
        var index = 0;
        var current = start;
        if (scheduler) return scheduler.schedule(dispatch, 0, {
            index: index,
            count: count,
            start: start,
            subscriber: subscriber
        });
        else do {
            if ((index++) >= count) {
                subscriber.complete();
                break;
            }
            subscriber.next(current++);
            if (subscriber.closed) break;
        }while (true)
        return undefined;
    });
}
function dispatch(state) {
    var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) return;
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}

},{"../Observable":"k7KRh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dsAuh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timer", ()=>timer
);
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */ var _observable = require("../Observable");
var _async = require("../scheduler/async");
var _isNumeric = require("../util/isNumeric");
var _isScheduler = require("../util/isScheduler");
function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) dueTime = 0;
    var period = -1;
    if (_isNumeric.isNumeric(periodOrScheduler)) period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    else if (_isScheduler.isScheduler(periodOrScheduler)) scheduler = periodOrScheduler;
    if (!_isScheduler.isScheduler(scheduler)) scheduler = _async.async;
    return new _observable.Observable(function(subscriber) {
        var due = _isNumeric.isNumeric(dueTime) ? dueTime : +dueTime - scheduler.now();
        return scheduler.schedule(dispatch, due, {
            index: 0,
            period: period,
            subscriber: subscriber
        });
    });
}
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) return;
    else if (period === -1) return subscriber.complete();
    state.index = index + 1;
    this.schedule(state, period);
}

},{"../Observable":"k7KRh","../scheduler/async":"4Vd5T","../util/isNumeric":"1K54H","../util/isScheduler":"ga8ix","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2Dvaf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "using", ()=>using
);
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */ var _observable = require("../Observable");
var _from = require("./from");
var _empty = require("./empty");
function using(resourceFactory, observableFactory) {
    return new _observable.Observable(function(subscriber) {
        var resource;
        try {
            resource = resourceFactory();
        } catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var result;
        try {
            result = observableFactory(resource);
        } catch (err1) {
            subscriber.error(err1);
            return undefined;
        }
        var source = result ? _from.from(result) : _empty.EMPTY;
        var subscription = source.subscribe(subscriber);
        return function() {
            subscription.unsubscribe();
            if (resource) resource.unsubscribe();
        };
    });
}

},{"../Observable":"k7KRh","./from":"l9OnS","./empty":"4kIBW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1e52j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zip", ()=>zip
);
parcelHelpers.export(exports, "ZipOperator", ()=>ZipOperator1
);
parcelHelpers.export(exports, "ZipSubscriber", ()=>ZipSubscriber1
);
/** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_.._internal_symbol_iterator,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _fromArray = require("./fromArray");
var _isArray = require("../util/isArray");
var _subscriber = require("../Subscriber");
var _iterator = require("../../internal/symbol/iterator");
var _innerSubscribe = require("../innerSubscribe");
function zip() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    var resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') observables.pop();
    return _fromArray.fromArray(observables, undefined).lift(new ZipOperator1(resultSelector));
}
var ZipOperator1 = function() {
    function ZipOperator(resultSelector) {
        this.resultSelector = resultSelector;
    }
    ZipOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new ZipSubscriber1(subscriber, this.resultSelector));
    };
    return ZipOperator;
}();
var ZipSubscriber1 = function(_super) {
    _tslib.__extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, resultSelector, values) {
        if (values === void 0) values = Object.create(null);
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.iterators = [];
        _this.active = 0;
        _this.resultSelector = typeof resultSelector === 'function' ? resultSelector : undefined;
        return _this;
    }
    ZipSubscriber.prototype._next = function(value) {
        var iterators = this.iterators;
        if (_isArray.isArray(value)) iterators.push(new StaticArrayIterator1(value));
        else if (typeof value[_iterator.iterator] === 'function') iterators.push(new StaticIterator1(value[_iterator.iterator]()));
        else iterators.push(new ZipBufferIterator1(this.destination, this, value));
    };
    ZipSubscriber.prototype._complete = function() {
        var iterators = this.iterators;
        var len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for(var i = 0; i < len; i++){
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                var destination = this.destination;
                destination.add(iterator.subscribe());
            } else this.active--;
        }
    };
    ZipSubscriber.prototype.notifyInactive = function() {
        this.active--;
        if (this.active === 0) this.destination.complete();
    };
    ZipSubscriber.prototype.checkIterators = function() {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        for(var i = 0; i < len; i++){
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) return;
        }
        var shouldComplete = false;
        var args = [];
        for(var i = 0; i < len; i++){
            var iterator = iterators[i];
            var result = iterator.next();
            if (iterator.hasCompleted()) shouldComplete = true;
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.resultSelector) this._tryresultSelector(args);
        else destination.next(args);
        if (shouldComplete) destination.complete();
    };
    ZipSubscriber.prototype._tryresultSelector = function(args) {
        var result;
        try {
            result = this.resultSelector.apply(this, args);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(_subscriber.Subscriber);
var StaticIterator1 = function() {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function() {
        return true;
    };
    StaticIterator.prototype.next = function() {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function() {
        var nextResult = this.nextResult;
        return Boolean(nextResult && nextResult.done);
    };
    return StaticIterator;
}();
var StaticArrayIterator1 = function() {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[_iterator.iterator] = function() {
        return this;
    };
    StaticArrayIterator.prototype.next = function(value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? {
            value: array[i],
            done: false
        } : {
            value: null,
            done: true
        };
    };
    StaticArrayIterator.prototype.hasValue = function() {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function() {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}();
var ZipBufferIterator1 = function(_super) {
    _tslib.__extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        _this.observable = observable;
        _this.stillUnsubscribed = true;
        _this.buffer = [];
        _this.isComplete = false;
        return _this;
    }
    ZipBufferIterator.prototype[_iterator.iterator] = function() {
        return this;
    };
    ZipBufferIterator.prototype.next = function() {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) return {
            value: null,
            done: true
        };
        else return {
            value: buffer.shift(),
            done: false
        };
    };
    ZipBufferIterator.prototype.hasValue = function() {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function() {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function() {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        } else this.destination.complete();
    };
    ZipBufferIterator.prototype.notifyNext = function(innerValue) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function() {
        return _innerSubscribe.innerSubscribe(this.observable, new _innerSubscribe.SimpleInnerSubscriber(this));
    };
    return ZipBufferIterator;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","./fromArray":"7MwEj","../util/isArray":"eQmW1","../Subscriber":"k0EYi","../../internal/symbol/iterator":"bbxpY","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5mD9t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "audit", ()=>_audit.audit
);
parcelHelpers.export(exports, "auditTime", ()=>_auditTime.auditTime
);
parcelHelpers.export(exports, "buffer", ()=>_buffer.buffer
);
parcelHelpers.export(exports, "bufferCount", ()=>_bufferCount.bufferCount
);
parcelHelpers.export(exports, "bufferTime", ()=>_bufferTime.bufferTime
);
parcelHelpers.export(exports, "bufferToggle", ()=>_bufferToggle.bufferToggle
);
parcelHelpers.export(exports, "bufferWhen", ()=>_bufferWhen.bufferWhen
);
parcelHelpers.export(exports, "catchError", ()=>_catchError.catchError
);
parcelHelpers.export(exports, "combineAll", ()=>_combineAll.combineAll
);
parcelHelpers.export(exports, "combineLatest", ()=>_combineLatest.combineLatest
);
parcelHelpers.export(exports, "concat", ()=>_concat.concat
);
parcelHelpers.export(exports, "concatAll", ()=>_concatAll.concatAll
);
parcelHelpers.export(exports, "concatMap", ()=>_concatMap.concatMap
);
parcelHelpers.export(exports, "concatMapTo", ()=>_concatMapTo.concatMapTo
);
parcelHelpers.export(exports, "count", ()=>_count.count
);
parcelHelpers.export(exports, "debounce", ()=>_debounce.debounce
);
parcelHelpers.export(exports, "debounceTime", ()=>_debounceTime.debounceTime
);
parcelHelpers.export(exports, "defaultIfEmpty", ()=>_defaultIfEmpty.defaultIfEmpty
);
parcelHelpers.export(exports, "delay", ()=>_delay.delay
);
parcelHelpers.export(exports, "delayWhen", ()=>_delayWhen.delayWhen
);
parcelHelpers.export(exports, "dematerialize", ()=>_dematerialize.dematerialize
);
parcelHelpers.export(exports, "distinct", ()=>_distinct.distinct
);
parcelHelpers.export(exports, "distinctUntilChanged", ()=>_distinctUntilChanged.distinctUntilChanged
);
parcelHelpers.export(exports, "distinctUntilKeyChanged", ()=>_distinctUntilKeyChanged.distinctUntilKeyChanged
);
parcelHelpers.export(exports, "elementAt", ()=>_elementAt.elementAt
);
parcelHelpers.export(exports, "endWith", ()=>_endWith.endWith
);
parcelHelpers.export(exports, "every", ()=>_every.every
);
parcelHelpers.export(exports, "exhaust", ()=>_exhaust.exhaust
);
parcelHelpers.export(exports, "exhaustMap", ()=>_exhaustMap.exhaustMap
);
parcelHelpers.export(exports, "expand", ()=>_expand.expand
);
parcelHelpers.export(exports, "filter", ()=>_filter.filter
);
parcelHelpers.export(exports, "finalize", ()=>_finalize.finalize
);
parcelHelpers.export(exports, "find", ()=>_find.find
);
parcelHelpers.export(exports, "findIndex", ()=>_findIndex.findIndex
);
parcelHelpers.export(exports, "first", ()=>_first.first
);
parcelHelpers.export(exports, "groupBy", ()=>_groupBy.groupBy
);
parcelHelpers.export(exports, "ignoreElements", ()=>_ignoreElements.ignoreElements
);
parcelHelpers.export(exports, "isEmpty", ()=>_isEmpty.isEmpty
);
parcelHelpers.export(exports, "last", ()=>_last.last
);
parcelHelpers.export(exports, "map", ()=>_map.map
);
parcelHelpers.export(exports, "mapTo", ()=>_mapTo.mapTo
);
parcelHelpers.export(exports, "materialize", ()=>_materialize.materialize
);
parcelHelpers.export(exports, "max", ()=>_max.max
);
parcelHelpers.export(exports, "merge", ()=>_merge.merge
);
parcelHelpers.export(exports, "mergeAll", ()=>_mergeAll.mergeAll
);
parcelHelpers.export(exports, "mergeMap", ()=>_mergeMap.mergeMap
);
parcelHelpers.export(exports, "flatMap", ()=>_mergeMap.flatMap
);
parcelHelpers.export(exports, "mergeMapTo", ()=>_mergeMapTo.mergeMapTo
);
parcelHelpers.export(exports, "mergeScan", ()=>_mergeScan.mergeScan
);
parcelHelpers.export(exports, "min", ()=>_min.min
);
parcelHelpers.export(exports, "multicast", ()=>_multicast.multicast
);
parcelHelpers.export(exports, "observeOn", ()=>_observeOn.observeOn
);
parcelHelpers.export(exports, "onErrorResumeNext", ()=>_onErrorResumeNext.onErrorResumeNext
);
parcelHelpers.export(exports, "pairwise", ()=>_pairwise.pairwise
);
parcelHelpers.export(exports, "partition", ()=>_partition.partition
);
parcelHelpers.export(exports, "pluck", ()=>_pluck.pluck
);
parcelHelpers.export(exports, "publish", ()=>_publish.publish
);
parcelHelpers.export(exports, "publishBehavior", ()=>_publishBehavior.publishBehavior
);
parcelHelpers.export(exports, "publishLast", ()=>_publishLast.publishLast
);
parcelHelpers.export(exports, "publishReplay", ()=>_publishReplay.publishReplay
);
parcelHelpers.export(exports, "race", ()=>_race.race
);
parcelHelpers.export(exports, "reduce", ()=>_reduce.reduce
);
parcelHelpers.export(exports, "repeat", ()=>_repeat.repeat
);
parcelHelpers.export(exports, "repeatWhen", ()=>_repeatWhen.repeatWhen
);
parcelHelpers.export(exports, "retry", ()=>_retry.retry
);
parcelHelpers.export(exports, "retryWhen", ()=>_retryWhen.retryWhen
);
parcelHelpers.export(exports, "refCount", ()=>_refCount.refCount
);
parcelHelpers.export(exports, "sample", ()=>_sample.sample
);
parcelHelpers.export(exports, "sampleTime", ()=>_sampleTime.sampleTime
);
parcelHelpers.export(exports, "scan", ()=>_scan.scan
);
parcelHelpers.export(exports, "sequenceEqual", ()=>_sequenceEqual.sequenceEqual
);
parcelHelpers.export(exports, "share", ()=>_share.share
);
parcelHelpers.export(exports, "shareReplay", ()=>_shareReplay.shareReplay
);
parcelHelpers.export(exports, "single", ()=>_single.single
);
parcelHelpers.export(exports, "skip", ()=>_skip.skip
);
parcelHelpers.export(exports, "skipLast", ()=>_skipLast.skipLast
);
parcelHelpers.export(exports, "skipUntil", ()=>_skipUntil.skipUntil
);
parcelHelpers.export(exports, "skipWhile", ()=>_skipWhile.skipWhile
);
parcelHelpers.export(exports, "startWith", ()=>_startWith.startWith
);
parcelHelpers.export(exports, "subscribeOn", ()=>_subscribeOn.subscribeOn
);
parcelHelpers.export(exports, "switchAll", ()=>_switchAll.switchAll
);
parcelHelpers.export(exports, "switchMap", ()=>_switchMap.switchMap
);
parcelHelpers.export(exports, "switchMapTo", ()=>_switchMapTo.switchMapTo
);
parcelHelpers.export(exports, "take", ()=>_take.take
);
parcelHelpers.export(exports, "takeLast", ()=>_takeLast.takeLast
);
parcelHelpers.export(exports, "takeUntil", ()=>_takeUntil.takeUntil
);
parcelHelpers.export(exports, "takeWhile", ()=>_takeWhile.takeWhile
);
parcelHelpers.export(exports, "tap", ()=>_tap.tap
);
parcelHelpers.export(exports, "throttle", ()=>_throttle.throttle
);
parcelHelpers.export(exports, "throttleTime", ()=>_throttleTime.throttleTime
);
parcelHelpers.export(exports, "throwIfEmpty", ()=>_throwIfEmpty.throwIfEmpty
);
parcelHelpers.export(exports, "timeInterval", ()=>_timeInterval.timeInterval
);
parcelHelpers.export(exports, "timeout", ()=>_timeout.timeout
);
parcelHelpers.export(exports, "timeoutWith", ()=>_timeoutWith.timeoutWith
);
parcelHelpers.export(exports, "timestamp", ()=>_timestamp.timestamp
);
parcelHelpers.export(exports, "toArray", ()=>_toArray.toArray
);
parcelHelpers.export(exports, "window", ()=>_window.window
);
parcelHelpers.export(exports, "windowCount", ()=>_windowCount.windowCount
);
parcelHelpers.export(exports, "windowTime", ()=>_windowTime.windowTime
);
parcelHelpers.export(exports, "windowToggle", ()=>_windowToggle.windowToggle
);
parcelHelpers.export(exports, "windowWhen", ()=>_windowWhen.windowWhen
);
parcelHelpers.export(exports, "withLatestFrom", ()=>_withLatestFrom.withLatestFrom
);
parcelHelpers.export(exports, "zip", ()=>_zip.zip
);
parcelHelpers.export(exports, "zipAll", ()=>_zipAll.zipAll
);
var _audit = require("../internal/operators/audit");
var _auditTime = require("../internal/operators/auditTime");
var _buffer = require("../internal/operators/buffer");
var _bufferCount = require("../internal/operators/bufferCount");
var _bufferTime = require("../internal/operators/bufferTime");
var _bufferToggle = require("../internal/operators/bufferToggle");
var _bufferWhen = require("../internal/operators/bufferWhen");
var _catchError = require("../internal/operators/catchError");
var _combineAll = require("../internal/operators/combineAll");
var _combineLatest = require("../internal/operators/combineLatest");
var _concat = require("../internal/operators/concat");
var _concatAll = require("../internal/operators/concatAll");
var _concatMap = require("../internal/operators/concatMap");
var _concatMapTo = require("../internal/operators/concatMapTo");
var _count = require("../internal/operators/count");
var _debounce = require("../internal/operators/debounce");
var _debounceTime = require("../internal/operators/debounceTime");
var _defaultIfEmpty = require("../internal/operators/defaultIfEmpty");
var _delay = require("../internal/operators/delay");
var _delayWhen = require("../internal/operators/delayWhen");
var _dematerialize = require("../internal/operators/dematerialize");
var _distinct = require("../internal/operators/distinct");
var _distinctUntilChanged = require("../internal/operators/distinctUntilChanged");
var _distinctUntilKeyChanged = require("../internal/operators/distinctUntilKeyChanged");
var _elementAt = require("../internal/operators/elementAt");
var _endWith = require("../internal/operators/endWith");
var _every = require("../internal/operators/every");
var _exhaust = require("../internal/operators/exhaust");
var _exhaustMap = require("../internal/operators/exhaustMap");
var _expand = require("../internal/operators/expand");
var _filter = require("../internal/operators/filter");
var _finalize = require("../internal/operators/finalize");
var _find = require("../internal/operators/find");
var _findIndex = require("../internal/operators/findIndex");
var _first = require("../internal/operators/first");
var _groupBy = require("../internal/operators/groupBy");
var _ignoreElements = require("../internal/operators/ignoreElements");
var _isEmpty = require("../internal/operators/isEmpty");
var _last = require("../internal/operators/last");
var _map = require("../internal/operators/map");
var _mapTo = require("../internal/operators/mapTo");
var _materialize = require("../internal/operators/materialize");
var _max = require("../internal/operators/max");
var _merge = require("../internal/operators/merge");
var _mergeAll = require("../internal/operators/mergeAll");
var _mergeMap = require("../internal/operators/mergeMap");
var _mergeMapTo = require("../internal/operators/mergeMapTo");
var _mergeScan = require("../internal/operators/mergeScan");
var _min = require("../internal/operators/min");
var _multicast = require("../internal/operators/multicast");
var _observeOn = require("../internal/operators/observeOn");
var _onErrorResumeNext = require("../internal/operators/onErrorResumeNext");
var _pairwise = require("../internal/operators/pairwise");
var _partition = require("../internal/operators/partition");
var _pluck = require("../internal/operators/pluck");
var _publish = require("../internal/operators/publish");
var _publishBehavior = require("../internal/operators/publishBehavior");
var _publishLast = require("../internal/operators/publishLast");
var _publishReplay = require("../internal/operators/publishReplay");
var _race = require("../internal/operators/race");
var _reduce = require("../internal/operators/reduce");
var _repeat = require("../internal/operators/repeat");
var _repeatWhen = require("../internal/operators/repeatWhen");
var _retry = require("../internal/operators/retry");
var _retryWhen = require("../internal/operators/retryWhen");
var _refCount = require("../internal/operators/refCount");
var _sample = require("../internal/operators/sample");
var _sampleTime = require("../internal/operators/sampleTime");
var _scan = require("../internal/operators/scan");
var _sequenceEqual = require("../internal/operators/sequenceEqual");
var _share = require("../internal/operators/share");
var _shareReplay = require("../internal/operators/shareReplay");
var _single = require("../internal/operators/single");
var _skip = require("../internal/operators/skip");
var _skipLast = require("../internal/operators/skipLast");
var _skipUntil = require("../internal/operators/skipUntil");
var _skipWhile = require("../internal/operators/skipWhile");
var _startWith = require("../internal/operators/startWith");
var _subscribeOn = require("../internal/operators/subscribeOn");
var _switchAll = require("../internal/operators/switchAll");
var _switchMap = require("../internal/operators/switchMap");
var _switchMapTo = require("../internal/operators/switchMapTo");
var _take = require("../internal/operators/take");
var _takeLast = require("../internal/operators/takeLast");
var _takeUntil = require("../internal/operators/takeUntil");
var _takeWhile = require("../internal/operators/takeWhile");
var _tap = require("../internal/operators/tap");
var _throttle = require("../internal/operators/throttle");
var _throttleTime = require("../internal/operators/throttleTime");
var _throwIfEmpty = require("../internal/operators/throwIfEmpty");
var _timeInterval = require("../internal/operators/timeInterval");
var _timeout = require("../internal/operators/timeout");
var _timeoutWith = require("../internal/operators/timeoutWith");
var _timestamp = require("../internal/operators/timestamp");
var _toArray = require("../internal/operators/toArray");
var _window = require("../internal/operators/window");
var _windowCount = require("../internal/operators/windowCount");
var _windowTime = require("../internal/operators/windowTime");
var _windowToggle = require("../internal/operators/windowToggle");
var _windowWhen = require("../internal/operators/windowWhen");
var _withLatestFrom = require("../internal/operators/withLatestFrom");
var _zip = require("../internal/operators/zip");
var _zipAll = require("../internal/operators/zipAll");

},{"../internal/operators/audit":"g5gwp","../internal/operators/auditTime":"juEeI","../internal/operators/buffer":"ewbdt","../internal/operators/bufferCount":"jQacN","../internal/operators/bufferTime":"d6dmL","../internal/operators/bufferToggle":"lnpxj","../internal/operators/bufferWhen":"YMtOy","../internal/operators/catchError":"4el06","../internal/operators/combineAll":"e1ea0","../internal/operators/combineLatest":"l68Bc","../internal/operators/concat":"2Njls","../internal/operators/concatAll":"8X97a","../internal/operators/concatMap":"kioJe","../internal/operators/concatMapTo":"1GUmt","../internal/operators/count":"kwjhl","../internal/operators/debounce":"if72B","../internal/operators/debounceTime":"fxo1w","../internal/operators/defaultIfEmpty":"eWnkX","../internal/operators/delay":"93Q8f","../internal/operators/delayWhen":"fEAdf","../internal/operators/dematerialize":"6NKYX","../internal/operators/distinct":"etTWd","../internal/operators/distinctUntilChanged":"dz6Cj","../internal/operators/distinctUntilKeyChanged":"cpLHd","../internal/operators/elementAt":"aU46J","../internal/operators/endWith":"fcOwk","../internal/operators/every":"14ZS9","../internal/operators/exhaust":"3ZKNA","../internal/operators/exhaustMap":"5B8f5","../internal/operators/expand":"35l5O","../internal/operators/filter":"kO0wo","../internal/operators/finalize":"e4AZO","../internal/operators/find":"eBmUy","../internal/operators/findIndex":"a80e7","../internal/operators/first":"6rVDO","../internal/operators/groupBy":"loOQU","../internal/operators/ignoreElements":"9aGC1","../internal/operators/isEmpty":"bR4Y1","../internal/operators/last":"ikFoO","../internal/operators/map":"6BlqD","../internal/operators/mapTo":"566Uk","../internal/operators/materialize":"1wODh","../internal/operators/max":"brmkk","../internal/operators/merge":"eTGEe","../internal/operators/mergeAll":"4mEdq","../internal/operators/mergeMap":"g6oOz","../internal/operators/mergeMapTo":"4b9mC","../internal/operators/mergeScan":"kE0V1","../internal/operators/min":"cb4V6","../internal/operators/multicast":"bCXHb","../internal/operators/observeOn":"lT8w7","../internal/operators/onErrorResumeNext":"e3zg8","../internal/operators/pairwise":"fKZ4p","../internal/operators/partition":"dTuig","../internal/operators/pluck":"lMfzY","../internal/operators/publish":"1QG5C","../internal/operators/publishBehavior":"dZybw","../internal/operators/publishLast":"hUWNv","../internal/operators/publishReplay":"63UlU","../internal/operators/race":"jUUex","../internal/operators/reduce":"unAFh","../internal/operators/repeat":"9B5i7","../internal/operators/repeatWhen":"dbbVx","../internal/operators/retry":"giCDz","../internal/operators/retryWhen":"eX6Vf","../internal/operators/refCount":"3Gftq","../internal/operators/sample":"kgTLc","../internal/operators/sampleTime":"aQhjm","../internal/operators/scan":"iA7Aw","../internal/operators/sequenceEqual":"gZfaI","../internal/operators/share":"6ljfT","../internal/operators/shareReplay":"5PTNr","../internal/operators/single":"h1n1Q","../internal/operators/skip":"6sAHz","../internal/operators/skipLast":"hhavZ","../internal/operators/skipUntil":"5Qw3Z","../internal/operators/skipWhile":"adzYy","../internal/operators/startWith":"gY6ot","../internal/operators/subscribeOn":"l7gRk","../internal/operators/switchAll":"aDegn","../internal/operators/switchMap":"ioz5N","../internal/operators/switchMapTo":"5tscY","../internal/operators/take":"aDbY2","../internal/operators/takeLast":"aEkYZ","../internal/operators/takeUntil":"iD2pG","../internal/operators/takeWhile":"jI2mK","../internal/operators/tap":"emorw","../internal/operators/throttle":"9o3QF","../internal/operators/throttleTime":"lIFCi","../internal/operators/throwIfEmpty":"bXGSU","../internal/operators/timeInterval":"fZb4B","../internal/operators/timeout":"89Llk","../internal/operators/timeoutWith":"6SGwL","../internal/operators/timestamp":"bRQsd","../internal/operators/toArray":"gqziW","../internal/operators/window":"dIhZF","../internal/operators/windowCount":"kCyem","../internal/operators/windowTime":"dlq58","../internal/operators/windowToggle":"lKyWI","../internal/operators/windowWhen":"4rKcS","../internal/operators/withLatestFrom":"2RiEP","../internal/operators/zip":"dhKYw","../internal/operators/zipAll":"6L8UY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"g5gwp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "audit", ()=>audit
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function audit(durationSelector) {
    return function auditOperatorFunction(source) {
        return source.lift(new AuditOperator1(durationSelector));
    };
}
var AuditOperator1 = function() {
    function AuditOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    AuditOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new AuditSubscriber1(subscriber, this.durationSelector));
    };
    return AuditOperator;
}();
var AuditSubscriber1 = function(_super) {
    _tslib.__extends(AuditSubscriber, _super);
    function AuditSubscriber(destination, durationSelector) {
        var _this = _super.call(this, destination) || this;
        _this.durationSelector = durationSelector;
        _this.hasValue = false;
        return _this;
    }
    AuditSubscriber.prototype._next = function(value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            var duration = void 0;
            try {
                var durationSelector = this.durationSelector;
                duration = durationSelector(value);
            } catch (err) {
                return this.destination.error(err);
            }
            var innerSubscription = _innerSubscribe.innerSubscribe(duration, new _innerSubscribe.SimpleInnerSubscriber(this));
            if (!innerSubscription || innerSubscription.closed) this.clearThrottle();
            else this.add(this.throttled = innerSubscription);
        }
    };
    AuditSubscriber.prototype.clearThrottle = function() {
        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
        if (throttled) {
            this.remove(throttled);
            this.throttled = undefined;
            throttled.unsubscribe();
        }
        if (hasValue) {
            this.value = undefined;
            this.hasValue = false;
            this.destination.next(value);
        }
    };
    AuditSubscriber.prototype.notifyNext = function() {
        this.clearThrottle();
    };
    AuditSubscriber.prototype.notifyComplete = function() {
        this.clearThrottle();
    };
    return AuditSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"juEeI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "auditTime", ()=>auditTime
);
/** PURE_IMPORTS_START _scheduler_async,_audit,_observable_timer PURE_IMPORTS_END */ var _async = require("../scheduler/async");
var _audit = require("./audit");
var _timer = require("../observable/timer");
function auditTime(duration, scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    return _audit.audit(function() {
        return _timer.timer(duration, scheduler);
    });
}

},{"../scheduler/async":"4Vd5T","./audit":"g5gwp","../observable/timer":"dsAuh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ewbdt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buffer", ()=>buffer1
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function buffer1(closingNotifier) {
    return function bufferOperatorFunction(source) {
        return source.lift(new BufferOperator1(closingNotifier));
    };
}
var BufferOperator1 = function() {
    function BufferOperator(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    BufferOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new BufferSubscriber1(subscriber, this.closingNotifier));
    };
    return BufferOperator;
}();
var BufferSubscriber1 = function(_super) {
    _tslib.__extends(BufferSubscriber, _super);
    function BufferSubscriber(destination, closingNotifier) {
        var _this = _super.call(this, destination) || this;
        _this.buffer = [];
        _this.add(_innerSubscribe.innerSubscribe(closingNotifier, new _innerSubscribe.SimpleInnerSubscriber(_this)));
        return _this;
    }
    BufferSubscriber.prototype._next = function(value) {
        this.buffer.push(value);
    };
    BufferSubscriber.prototype.notifyNext = function() {
        var buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
    };
    return BufferSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jQacN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bufferCount", ()=>bufferCount
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) startBufferEvery = null;
    return function bufferCountOperatorFunction(source) {
        return source.lift(new BufferCountOperator1(bufferSize, startBufferEvery));
    };
}
var BufferCountOperator1 = function() {
    function BufferCountOperator(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        if (!startBufferEvery || bufferSize === startBufferEvery) this.subscriberClass = BufferCountSubscriber1;
        else this.subscriberClass = BufferSkipCountSubscriber1;
    }
    BufferCountOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
    };
    return BufferCountOperator;
}();
var BufferCountSubscriber1 = function(_super) {
    _tslib.__extends(BufferCountSubscriber, _super);
    function BufferCountSubscriber(destination, bufferSize) {
        var _this = _super.call(this, destination) || this;
        _this.bufferSize = bufferSize;
        _this.buffer = [];
        return _this;
    }
    BufferCountSubscriber.prototype._next = function(value) {
        var buffer = this.buffer;
        buffer.push(value);
        if (buffer.length == this.bufferSize) {
            this.destination.next(buffer);
            this.buffer = [];
        }
    };
    BufferCountSubscriber.prototype._complete = function() {
        var buffer = this.buffer;
        if (buffer.length > 0) this.destination.next(buffer);
        _super.prototype._complete.call(this);
    };
    return BufferCountSubscriber;
}(_subscriber.Subscriber);
var BufferSkipCountSubscriber1 = function(_super) {
    _tslib.__extends(BufferSkipCountSubscriber, _super);
    function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
        var _this = _super.call(this, destination) || this;
        _this.bufferSize = bufferSize;
        _this.startBufferEvery = startBufferEvery;
        _this.buffers = [];
        _this.count = 0;
        return _this;
    }
    BufferSkipCountSubscriber.prototype._next = function(value) {
        var _a = this, bufferSize = _a.bufferSize, startBufferEvery = _a.startBufferEvery, buffers = _a.buffers, count = _a.count;
        this.count++;
        if (count % startBufferEvery === 0) buffers.push([]);
        for(var i = buffers.length; i--;){
            var buffer = buffers[i];
            buffer.push(value);
            if (buffer.length === bufferSize) {
                buffers.splice(i, 1);
                this.destination.next(buffer);
            }
        }
    };
    BufferSkipCountSubscriber.prototype._complete = function() {
        var _a = this, buffers = _a.buffers, destination = _a.destination;
        while(buffers.length > 0){
            var buffer = buffers.shift();
            if (buffer.length > 0) destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    return BufferSkipCountSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"d6dmL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bufferTime", ()=>bufferTime
);
/** PURE_IMPORTS_START tslib,_scheduler_async,_Subscriber,_util_isScheduler PURE_IMPORTS_END */ var _tslib = require("tslib");
var _async = require("../scheduler/async");
var _subscriber = require("../Subscriber");
var _isScheduler = require("../util/isScheduler");
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = _async.async;
    if (_isScheduler.isScheduler(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) bufferCreationInterval = arguments[1];
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) maxBufferSize = arguments[2];
    return function bufferTimeOperatorFunction(source) {
        return source.lift(new BufferTimeOperator1(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
    };
}
var BufferTimeOperator1 = function() {
    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
    }
    BufferTimeOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new BufferTimeSubscriber1(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
    };
    return BufferTimeOperator;
}();
var Context1 = function() {
    function Context() {
        this.buffer = [];
    }
    return Context;
}();
var BufferTimeSubscriber1 = function(_super) {
    _tslib.__extends(BufferTimeSubscriber, _super);
    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.bufferTimeSpan = bufferTimeSpan;
        _this.bufferCreationInterval = bufferCreationInterval;
        _this.maxBufferSize = maxBufferSize;
        _this.scheduler = scheduler;
        _this.contexts = [];
        var context = _this.openContext();
        _this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
        if (_this.timespanOnly) {
            var timeSpanOnlyState = {
                subscriber: _this,
                context: context,
                bufferTimeSpan: bufferTimeSpan
            };
            _this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        } else {
            var closeState = {
                subscriber: _this,
                context: context
            };
            var creationState = {
                bufferTimeSpan: bufferTimeSpan,
                bufferCreationInterval: bufferCreationInterval,
                subscriber: _this,
                scheduler: scheduler
            };
            _this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
            _this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        }
        return _this;
    }
    BufferTimeSubscriber.prototype._next = function(value) {
        var contexts = this.contexts;
        var len = contexts.length;
        var filledBufferContext;
        for(var i = 0; i < len; i++){
            var context_1 = contexts[i];
            var buffer = context_1.buffer;
            buffer.push(value);
            if (buffer.length == this.maxBufferSize) filledBufferContext = context_1;
        }
        if (filledBufferContext) this.onBufferFull(filledBufferContext);
    };
    BufferTimeSubscriber.prototype._error = function(err) {
        this.contexts.length = 0;
        _super.prototype._error.call(this, err);
    };
    BufferTimeSubscriber.prototype._complete = function() {
        var _a = this, contexts = _a.contexts, destination = _a.destination;
        while(contexts.length > 0){
            var context_2 = contexts.shift();
            destination.next(context_2.buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferTimeSubscriber.prototype._unsubscribe = function() {
        this.contexts = null;
    };
    BufferTimeSubscriber.prototype.onBufferFull = function(context) {
        this.closeContext(context);
        var closeAction = context.closeAction;
        closeAction.unsubscribe();
        this.remove(closeAction);
        if (!this.closed && this.timespanOnly) {
            context = this.openContext();
            var bufferTimeSpan = this.bufferTimeSpan;
            var timeSpanOnlyState = {
                subscriber: this,
                context: context,
                bufferTimeSpan: bufferTimeSpan
            };
            this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
    };
    BufferTimeSubscriber.prototype.openContext = function() {
        var context = new Context1();
        this.contexts.push(context);
        return context;
    };
    BufferTimeSubscriber.prototype.closeContext = function(context) {
        this.destination.next(context.buffer);
        var contexts = this.contexts;
        var spliceIndex = contexts ? contexts.indexOf(context) : -1;
        if (spliceIndex >= 0) contexts.splice(contexts.indexOf(context), 1);
    };
    return BufferTimeSubscriber;
}(_subscriber.Subscriber);
function dispatchBufferTimeSpanOnly(state) {
    var subscriber = state.subscriber;
    var prevContext = state.context;
    if (prevContext) subscriber.closeContext(prevContext);
    if (!subscriber.closed) {
        state.context = subscriber.openContext();
        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
    }
}
function dispatchBufferCreation(state) {
    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
    var context = subscriber.openContext();
    var action = this;
    if (!subscriber.closed) {
        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, {
            subscriber: subscriber,
            context: context
        }));
        action.schedule(state, bufferCreationInterval);
    }
}
function dispatchBufferClose(arg) {
    var subscriber = arg.subscriber, context = arg.context;
    subscriber.closeContext(context);
}

},{"tslib":"j55WF","../scheduler/async":"4Vd5T","../Subscriber":"k0EYi","../util/isScheduler":"ga8ix","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lnpxj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bufferToggle", ()=>bufferToggle
);
/** PURE_IMPORTS_START tslib,_Subscription,_util_subscribeToResult,_OuterSubscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscription = require("../Subscription");
var _subscribeToResult = require("../util/subscribeToResult");
var _outerSubscriber = require("../OuterSubscriber");
function bufferToggle(openings, closingSelector) {
    return function bufferToggleOperatorFunction(source) {
        return source.lift(new BufferToggleOperator1(openings, closingSelector));
    };
}
var BufferToggleOperator1 = function() {
    function BufferToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    BufferToggleOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new BufferToggleSubscriber1(subscriber, this.openings, this.closingSelector));
    };
    return BufferToggleOperator;
}();
var BufferToggleSubscriber1 = function(_super) {
    _tslib.__extends(BufferToggleSubscriber, _super);
    function BufferToggleSubscriber(destination, openings, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.closingSelector = closingSelector;
        _this.contexts = [];
        _this.add(_subscribeToResult.subscribeToResult(_this, openings));
        return _this;
    }
    BufferToggleSubscriber.prototype._next = function(value) {
        var contexts = this.contexts;
        var len = contexts.length;
        for(var i = 0; i < len; i++)contexts[i].buffer.push(value);
    };
    BufferToggleSubscriber.prototype._error = function(err) {
        var contexts = this.contexts;
        while(contexts.length > 0){
            var context_1 = contexts.shift();
            context_1.subscription.unsubscribe();
            context_1.buffer = null;
            context_1.subscription = null;
        }
        this.contexts = null;
        _super.prototype._error.call(this, err);
    };
    BufferToggleSubscriber.prototype._complete = function() {
        var contexts = this.contexts;
        while(contexts.length > 0){
            var context_2 = contexts.shift();
            this.destination.next(context_2.buffer);
            context_2.subscription.unsubscribe();
            context_2.buffer = null;
            context_2.subscription = null;
        }
        this.contexts = null;
        _super.prototype._complete.call(this);
    };
    BufferToggleSubscriber.prototype.notifyNext = function(outerValue, innerValue) {
        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
    };
    BufferToggleSubscriber.prototype.notifyComplete = function(innerSub) {
        this.closeBuffer(innerSub.context);
    };
    BufferToggleSubscriber.prototype.openBuffer = function(value) {
        try {
            var closingSelector = this.closingSelector;
            var closingNotifier = closingSelector.call(this, value);
            if (closingNotifier) this.trySubscribe(closingNotifier);
        } catch (err) {
            this._error(err);
        }
    };
    BufferToggleSubscriber.prototype.closeBuffer = function(context) {
        var contexts = this.contexts;
        if (contexts && context) {
            var buffer = context.buffer, subscription = context.subscription;
            this.destination.next(buffer);
            contexts.splice(contexts.indexOf(context), 1);
            this.remove(subscription);
            subscription.unsubscribe();
        }
    };
    BufferToggleSubscriber.prototype.trySubscribe = function(closingNotifier) {
        var contexts = this.contexts;
        var buffer = [];
        var subscription = new _subscription.Subscription();
        var context = {
            buffer: buffer,
            subscription: subscription
        };
        contexts.push(context);
        var innerSubscription = _subscribeToResult.subscribeToResult(this, closingNotifier, context);
        if (!innerSubscription || innerSubscription.closed) this.closeBuffer(context);
        else {
            innerSubscription.context = context;
            this.add(innerSubscription);
            subscription.add(innerSubscription);
        }
    };
    return BufferToggleSubscriber;
}(_outerSubscriber.OuterSubscriber);

},{"tslib":"j55WF","../Subscription":"ceYgr","../util/subscribeToResult":"8oD0J","../OuterSubscriber":"76kEv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"YMtOy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bufferWhen", ()=>bufferWhen
);
/** PURE_IMPORTS_START tslib,_Subscription,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscription = require("../Subscription");
var _innerSubscribe = require("../innerSubscribe");
function bufferWhen(closingSelector) {
    return function(source) {
        return source.lift(new BufferWhenOperator1(closingSelector));
    };
}
var BufferWhenOperator1 = function() {
    function BufferWhenOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    BufferWhenOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new BufferWhenSubscriber1(subscriber, this.closingSelector));
    };
    return BufferWhenOperator;
}();
var BufferWhenSubscriber1 = function(_super) {
    _tslib.__extends(BufferWhenSubscriber, _super);
    function BufferWhenSubscriber(destination, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.closingSelector = closingSelector;
        _this.subscribing = false;
        _this.openBuffer();
        return _this;
    }
    BufferWhenSubscriber.prototype._next = function(value) {
        this.buffer.push(value);
    };
    BufferWhenSubscriber.prototype._complete = function() {
        var buffer = this.buffer;
        if (buffer) this.destination.next(buffer);
        _super.prototype._complete.call(this);
    };
    BufferWhenSubscriber.prototype._unsubscribe = function() {
        this.buffer = undefined;
        this.subscribing = false;
    };
    BufferWhenSubscriber.prototype.notifyNext = function() {
        this.openBuffer();
    };
    BufferWhenSubscriber.prototype.notifyComplete = function() {
        if (this.subscribing) this.complete();
        else this.openBuffer();
    };
    BufferWhenSubscriber.prototype.openBuffer = function() {
        var closingSubscription = this.closingSubscription;
        if (closingSubscription) {
            this.remove(closingSubscription);
            closingSubscription.unsubscribe();
        }
        var buffer = this.buffer;
        if (this.buffer) this.destination.next(buffer);
        this.buffer = [];
        var closingNotifier;
        try {
            var closingSelector = this.closingSelector;
            closingNotifier = closingSelector();
        } catch (err) {
            return this.error(err);
        }
        closingSubscription = new _subscription.Subscription();
        this.closingSubscription = closingSubscription;
        this.add(closingSubscription);
        this.subscribing = true;
        closingSubscription.add(_innerSubscribe.innerSubscribe(closingNotifier, new _innerSubscribe.SimpleInnerSubscriber(this)));
        this.subscribing = false;
    };
    return BufferWhenSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../Subscription":"ceYgr","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4el06":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "catchError", ()=>catchError
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function catchError(selector) {
    return function catchErrorOperatorFunction(source) {
        var operator = new CatchOperator1(selector);
        var caught = source.lift(operator);
        return operator.caught = caught;
    };
}
var CatchOperator1 = function() {
    function CatchOperator(selector) {
        this.selector = selector;
    }
    CatchOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new CatchSubscriber1(subscriber, this.selector, this.caught));
    };
    return CatchOperator;
}();
var CatchSubscriber1 = function(_super) {
    _tslib.__extends(CatchSubscriber, _super);
    function CatchSubscriber(destination, selector, caught) {
        var _this = _super.call(this, destination) || this;
        _this.selector = selector;
        _this.caught = caught;
        return _this;
    }
    CatchSubscriber.prototype.error = function(err) {
        if (!this.isStopped) {
            var result = void 0;
            try {
                result = this.selector(err, this.caught);
            } catch (err2) {
                _super.prototype.error.call(this, err2);
                return;
            }
            this._unsubscribeAndRecycle();
            var innerSubscriber = new _innerSubscribe.SimpleInnerSubscriber(this);
            this.add(innerSubscriber);
            var innerSubscription = _innerSubscribe.innerSubscribe(result, innerSubscriber);
            if (innerSubscription !== innerSubscriber) this.add(innerSubscription);
        }
    };
    return CatchSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e1ea0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "combineAll", ()=>combineAll
);
/** PURE_IMPORTS_START _observable_combineLatest PURE_IMPORTS_END */ var _combineLatest = require("../observable/combineLatest");
function combineAll(project) {
    return function(source) {
        return source.lift(new _combineLatest.CombineLatestOperator(project));
    };
}

},{"../observable/combineLatest":"dYsYm","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"l68Bc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "combineLatest", ()=>combineLatest
);
/** PURE_IMPORTS_START _util_isArray,_observable_combineLatest,_observable_from PURE_IMPORTS_END */ var _isArray = require("../util/isArray");
var _combineLatest = require("../observable/combineLatest");
var _from = require("../observable/from");
var none = {
};
function combineLatest() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') project = observables.pop();
    if (observables.length === 1 && _isArray.isArray(observables[0])) observables = observables[0].slice();
    return function(source) {
        return source.lift.call(_from.from([
            source
        ].concat(observables)), new _combineLatest.CombineLatestOperator(project));
    };
}

},{"../util/isArray":"eQmW1","../observable/combineLatest":"dYsYm","../observable/from":"l9OnS","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2Njls":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concat", ()=>concat
);
/** PURE_IMPORTS_START _observable_concat PURE_IMPORTS_END */ var _concat = require("../observable/concat");
function concat() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    return function(source) {
        return source.lift.call(_concat.concat.apply(void 0, [
            source
        ].concat(observables)));
    };
}

},{"../observable/concat":"cR4Mp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kioJe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concatMap", ()=>concatMap
);
/** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */ var _mergeMap = require("./mergeMap");
function concatMap(project, resultSelector) {
    return _mergeMap.mergeMap(project, resultSelector, 1);
}

},{"./mergeMap":"g6oOz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1GUmt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concatMapTo", ()=>concatMapTo
);
/** PURE_IMPORTS_START _concatMap PURE_IMPORTS_END */ var _concatMap = require("./concatMap");
function concatMapTo(innerObservable, resultSelector) {
    return _concatMap.concatMap(function() {
        return innerObservable;
    }, resultSelector);
}

},{"./concatMap":"kioJe","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kwjhl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "count", ()=>count
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function count(predicate) {
    return function(source) {
        return source.lift(new CountOperator1(predicate, source));
    };
}
var CountOperator1 = function() {
    function CountOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    CountOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new CountSubscriber1(subscriber, this.predicate, this.source));
    };
    return CountOperator;
}();
var CountSubscriber1 = function(_super) {
    _tslib.__extends(CountSubscriber, _super);
    function CountSubscriber(destination, predicate, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.source = source;
        _this.count = 0;
        _this.index = 0;
        return _this;
    }
    CountSubscriber.prototype._next = function(value) {
        if (this.predicate) this._tryPredicate(value);
        else this.count++;
    };
    CountSubscriber.prototype._tryPredicate = function(value) {
        var result;
        try {
            result = this.predicate(value, this.index++, this.source);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) this.count++;
    };
    CountSubscriber.prototype._complete = function() {
        this.destination.next(this.count);
        this.destination.complete();
    };
    return CountSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"if72B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function debounce(durationSelector) {
    return function(source) {
        return source.lift(new DebounceOperator1(durationSelector));
    };
}
var DebounceOperator1 = function() {
    function DebounceOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    DebounceOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new DebounceSubscriber1(subscriber, this.durationSelector));
    };
    return DebounceOperator;
}();
var DebounceSubscriber1 = function(_super) {
    _tslib.__extends(DebounceSubscriber, _super);
    function DebounceSubscriber(destination, durationSelector) {
        var _this = _super.call(this, destination) || this;
        _this.durationSelector = durationSelector;
        _this.hasValue = false;
        return _this;
    }
    DebounceSubscriber.prototype._next = function(value) {
        try {
            var result = this.durationSelector.call(this, value);
            if (result) this._tryNext(value, result);
        } catch (err) {
            this.destination.error(err);
        }
    };
    DebounceSubscriber.prototype._complete = function() {
        this.emitValue();
        this.destination.complete();
    };
    DebounceSubscriber.prototype._tryNext = function(value, duration) {
        var subscription = this.durationSubscription;
        this.value = value;
        this.hasValue = true;
        if (subscription) {
            subscription.unsubscribe();
            this.remove(subscription);
        }
        subscription = _innerSubscribe.innerSubscribe(duration, new _innerSubscribe.SimpleInnerSubscriber(this));
        if (subscription && !subscription.closed) this.add(this.durationSubscription = subscription);
    };
    DebounceSubscriber.prototype.notifyNext = function() {
        this.emitValue();
    };
    DebounceSubscriber.prototype.notifyComplete = function() {
        this.emitValue();
    };
    DebounceSubscriber.prototype.emitValue = function() {
        if (this.hasValue) {
            var value = this.value;
            var subscription = this.durationSubscription;
            if (subscription) {
                this.durationSubscription = undefined;
                subscription.unsubscribe();
                this.remove(subscription);
            }
            this.value = undefined;
            this.hasValue = false;
            _super.prototype._next.call(this, value);
        }
    };
    return DebounceSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fxo1w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounceTime", ()=>debounceTime
);
/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _async = require("../scheduler/async");
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    return function(source) {
        return source.lift(new DebounceTimeOperator1(dueTime, scheduler));
    };
}
var DebounceTimeOperator1 = function() {
    function DebounceTimeOperator(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber1(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator;
}();
var DebounceTimeSubscriber1 = function(_super) {
    _tslib.__extends(DebounceTimeSubscriber, _super);
    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.dueTime = dueTime;
        _this.scheduler = scheduler;
        _this.debouncedSubscription = null;
        _this.lastValue = null;
        _this.hasValue = false;
        return _this;
    }
    DebounceTimeSubscriber.prototype._next = function(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber.prototype._complete = function() {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber.prototype.debouncedNext = function() {
        this.clearDebounce();
        if (this.hasValue) {
            var lastValue = this.lastValue;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    };
    DebounceTimeSubscriber.prototype.clearDebounce = function() {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber;
}(_subscriber.Subscriber);
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}

},{"tslib":"j55WF","../Subscriber":"k0EYi","../scheduler/async":"4Vd5T","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eWnkX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultIfEmpty", ()=>defaultIfEmpty
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) defaultValue = null;
    return function(source) {
        return source.lift(new DefaultIfEmptyOperator1(defaultValue));
    };
}
var DefaultIfEmptyOperator1 = function() {
    function DefaultIfEmptyOperator(defaultValue) {
        this.defaultValue = defaultValue;
    }
    DefaultIfEmptyOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new DefaultIfEmptySubscriber1(subscriber, this.defaultValue));
    };
    return DefaultIfEmptyOperator;
}();
var DefaultIfEmptySubscriber1 = function(_super) {
    _tslib.__extends(DefaultIfEmptySubscriber, _super);
    function DefaultIfEmptySubscriber(destination, defaultValue) {
        var _this = _super.call(this, destination) || this;
        _this.defaultValue = defaultValue;
        _this.isEmpty = true;
        return _this;
    }
    DefaultIfEmptySubscriber.prototype._next = function(value) {
        this.isEmpty = false;
        this.destination.next(value);
    };
    DefaultIfEmptySubscriber.prototype._complete = function() {
        if (this.isEmpty) this.destination.next(this.defaultValue);
        this.destination.complete();
    };
    return DefaultIfEmptySubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"93Q8f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "delay", ()=>delay1
);
/** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_Subscriber,_Notification PURE_IMPORTS_END */ var _tslib = require("tslib");
var _async = require("../scheduler/async");
var _isDate = require("../util/isDate");
var _subscriber = require("../Subscriber");
var _notification = require("../Notification");
function delay1(delay, scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    var absoluteDelay = _isDate.isDate(delay);
    var delayFor = absoluteDelay ? +delay - scheduler.now() : Math.abs(delay);
    return function(source) {
        return source.lift(new DelayOperator1(delayFor, scheduler));
    };
}
var DelayOperator1 = function() {
    function DelayOperator(delay, scheduler) {
        this.delay = delay;
        this.scheduler = scheduler;
    }
    DelayOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new DelaySubscriber1(subscriber, this.delay, this.scheduler));
    };
    return DelayOperator;
}();
var DelaySubscriber1 = function(_super) {
    _tslib.__extends(DelaySubscriber, _super);
    function DelaySubscriber(destination, delay, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.delay = delay;
        _this.scheduler = scheduler;
        _this.queue = [];
        _this.active = false;
        _this.errored = false;
        return _this;
    }
    DelaySubscriber.dispatch = function(state) {
        var source = state.source;
        var queue = source.queue;
        var scheduler = state.scheduler;
        var destination = state.destination;
        while(queue.length > 0 && queue[0].time - scheduler.now() <= 0)queue.shift().notification.observe(destination);
        if (queue.length > 0) {
            var delay_1 = Math.max(0, queue[0].time - scheduler.now());
            this.schedule(state, delay_1);
        } else {
            this.unsubscribe();
            source.active = false;
        }
    };
    DelaySubscriber.prototype._schedule = function(scheduler) {
        this.active = true;
        var destination = this.destination;
        destination.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
            source: this,
            destination: this.destination,
            scheduler: scheduler
        }));
    };
    DelaySubscriber.prototype.scheduleNotification = function(notification) {
        if (this.errored === true) return;
        var scheduler = this.scheduler;
        var message = new DelayMessage1(scheduler.now() + this.delay, notification);
        this.queue.push(message);
        if (this.active === false) this._schedule(scheduler);
    };
    DelaySubscriber.prototype._next = function(value) {
        this.scheduleNotification(_notification.Notification.createNext(value));
    };
    DelaySubscriber.prototype._error = function(err) {
        this.errored = true;
        this.queue = [];
        this.destination.error(err);
        this.unsubscribe();
    };
    DelaySubscriber.prototype._complete = function() {
        this.scheduleNotification(_notification.Notification.createComplete());
        this.unsubscribe();
    };
    return DelaySubscriber;
}(_subscriber.Subscriber);
var DelayMessage1 = function() {
    function DelayMessage(time, notification) {
        this.time = time;
        this.notification = notification;
    }
    return DelayMessage;
}();

},{"tslib":"j55WF","../scheduler/async":"4Vd5T","../util/isDate":"fThFG","../Subscriber":"k0EYi","../Notification":"jqexJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fThFG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "isDate", ()=>isDate
);
function isDate(value) {
    return value instanceof Date && !isNaN(+value);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fEAdf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "delayWhen", ()=>delayWhen
);
/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _observable = require("../Observable");
var _outerSubscriber = require("../OuterSubscriber");
var _subscribeToResult = require("../util/subscribeToResult");
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) return function(source) {
        return new SubscriptionDelayObservable1(source, subscriptionDelay).lift(new DelayWhenOperator1(delayDurationSelector));
    };
    return function(source) {
        return source.lift(new DelayWhenOperator1(delayDurationSelector));
    };
}
var DelayWhenOperator1 = function() {
    function DelayWhenOperator(delayDurationSelector) {
        this.delayDurationSelector = delayDurationSelector;
    }
    DelayWhenOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new DelayWhenSubscriber1(subscriber, this.delayDurationSelector));
    };
    return DelayWhenOperator;
}();
var DelayWhenSubscriber1 = function(_super) {
    _tslib.__extends(DelayWhenSubscriber, _super);
    function DelayWhenSubscriber(destination, delayDurationSelector) {
        var _this = _super.call(this, destination) || this;
        _this.delayDurationSelector = delayDurationSelector;
        _this.completed = false;
        _this.delayNotifierSubscriptions = [];
        _this.index = 0;
        return _this;
    }
    DelayWhenSubscriber.prototype.notifyNext = function(outerValue, _innerValue, _outerIndex, _innerIndex, innerSub) {
        this.destination.next(outerValue);
        this.removeSubscription(innerSub);
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype.notifyError = function(error, innerSub) {
        this._error(error);
    };
    DelayWhenSubscriber.prototype.notifyComplete = function(innerSub) {
        var value = this.removeSubscription(innerSub);
        if (value) this.destination.next(value);
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype._next = function(value) {
        var index = this.index++;
        try {
            var delayNotifier = this.delayDurationSelector(value, index);
            if (delayNotifier) this.tryDelay(delayNotifier, value);
        } catch (err) {
            this.destination.error(err);
        }
    };
    DelayWhenSubscriber.prototype._complete = function() {
        this.completed = true;
        this.tryComplete();
        this.unsubscribe();
    };
    DelayWhenSubscriber.prototype.removeSubscription = function(subscription) {
        subscription.unsubscribe();
        var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
        if (subscriptionIdx !== -1) this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
        return subscription.outerValue;
    };
    DelayWhenSubscriber.prototype.tryDelay = function(delayNotifier, value) {
        var notifierSubscription = _subscribeToResult.subscribeToResult(this, delayNotifier, value);
        if (notifierSubscription && !notifierSubscription.closed) {
            var destination = this.destination;
            destination.add(notifierSubscription);
            this.delayNotifierSubscriptions.push(notifierSubscription);
        }
    };
    DelayWhenSubscriber.prototype.tryComplete = function() {
        if (this.completed && this.delayNotifierSubscriptions.length === 0) this.destination.complete();
    };
    return DelayWhenSubscriber;
}(_outerSubscriber.OuterSubscriber);
var SubscriptionDelayObservable1 = function(_super) {
    _tslib.__extends(SubscriptionDelayObservable, _super);
    function SubscriptionDelayObservable(source, subscriptionDelay) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subscriptionDelay = subscriptionDelay;
        return _this;
    }
    SubscriptionDelayObservable.prototype._subscribe = function(subscriber) {
        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber1(subscriber, this.source));
    };
    return SubscriptionDelayObservable;
}(_observable.Observable);
var SubscriptionDelaySubscriber1 = function(_super) {
    _tslib.__extends(SubscriptionDelaySubscriber, _super);
    function SubscriptionDelaySubscriber(parent, source) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.source = source;
        _this.sourceSubscribed = false;
        return _this;
    }
    SubscriptionDelaySubscriber.prototype._next = function(unused) {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype._error = function(err) {
        this.unsubscribe();
        this.parent.error(err);
    };
    SubscriptionDelaySubscriber.prototype._complete = function() {
        this.unsubscribe();
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype.subscribeToSource = function() {
        if (!this.sourceSubscribed) {
            this.sourceSubscribed = true;
            this.unsubscribe();
            this.source.subscribe(this.parent);
        }
    };
    return SubscriptionDelaySubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","../Observable":"k7KRh","../OuterSubscriber":"76kEv","../util/subscribeToResult":"8oD0J","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6NKYX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dematerialize", ()=>dematerialize
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function dematerialize() {
    return function dematerializeOperatorFunction(source) {
        return source.lift(new DeMaterializeOperator1());
    };
}
var DeMaterializeOperator1 = function() {
    function DeMaterializeOperator() {
    }
    DeMaterializeOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new DeMaterializeSubscriber1(subscriber));
    };
    return DeMaterializeOperator;
}();
var DeMaterializeSubscriber1 = function(_super) {
    _tslib.__extends(DeMaterializeSubscriber, _super);
    function DeMaterializeSubscriber(destination) {
        return _super.call(this, destination) || this;
    }
    DeMaterializeSubscriber.prototype._next = function(value) {
        value.observe(this.destination);
    };
    return DeMaterializeSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"etTWd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distinct", ()=>distinct
);
parcelHelpers.export(exports, "DistinctSubscriber", ()=>DistinctSubscriber1
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function distinct(keySelector, flushes) {
    return function(source) {
        return source.lift(new DistinctOperator1(keySelector, flushes));
    };
}
var DistinctOperator1 = function() {
    function DistinctOperator(keySelector, flushes) {
        this.keySelector = keySelector;
        this.flushes = flushes;
    }
    DistinctOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new DistinctSubscriber1(subscriber, this.keySelector, this.flushes));
    };
    return DistinctOperator;
}();
var DistinctSubscriber1 = function(_super) {
    _tslib.__extends(DistinctSubscriber, _super);
    function DistinctSubscriber(destination, keySelector, flushes) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.values = new Set();
        if (flushes) _this.add(_innerSubscribe.innerSubscribe(flushes, new _innerSubscribe.SimpleInnerSubscriber(_this)));
        return _this;
    }
    DistinctSubscriber.prototype.notifyNext = function() {
        this.values.clear();
    };
    DistinctSubscriber.prototype.notifyError = function(error) {
        this._error(error);
    };
    DistinctSubscriber.prototype._next = function(value) {
        if (this.keySelector) this._useKeySelector(value);
        else this._finalizeNext(value, value);
    };
    DistinctSubscriber.prototype._useKeySelector = function(value) {
        var key;
        var destination = this.destination;
        try {
            key = this.keySelector(value);
        } catch (err) {
            destination.error(err);
            return;
        }
        this._finalizeNext(key, value);
    };
    DistinctSubscriber.prototype._finalizeNext = function(key, value) {
        var values = this.values;
        if (!values.has(key)) {
            values.add(key);
            this.destination.next(value);
        }
    };
    return DistinctSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dz6Cj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distinctUntilChanged", ()=>distinctUntilChanged
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function distinctUntilChanged(compare, keySelector) {
    return function(source) {
        return source.lift(new DistinctUntilChangedOperator1(compare, keySelector));
    };
}
var DistinctUntilChangedOperator1 = function() {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber1(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}();
var DistinctUntilChangedSubscriber1 = function(_super) {
    _tslib.__extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.hasKey = false;
        if (typeof compare === 'function') _this.compare = compare;
        return _this;
    }
    DistinctUntilChangedSubscriber.prototype.compare = function(x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function(value) {
        var key;
        try {
            var keySelector = this.keySelector;
            key = keySelector ? keySelector(value) : value;
        } catch (err) {
            return this.destination.error(err);
        }
        var result = false;
        if (this.hasKey) try {
            var compare = this.compare;
            result = compare(this.key, key);
        } catch (err1) {
            return this.destination.error(err1);
        }
        else this.hasKey = true;
        if (!result) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cpLHd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distinctUntilKeyChanged", ()=>distinctUntilKeyChanged
);
/** PURE_IMPORTS_START _distinctUntilChanged PURE_IMPORTS_END */ var _distinctUntilChanged = require("./distinctUntilChanged");
function distinctUntilKeyChanged(key, compare) {
    return _distinctUntilChanged.distinctUntilChanged(function(x, y) {
        return compare ? compare(x[key], y[key]) : x[key] === y[key];
    });
}

},{"./distinctUntilChanged":"dz6Cj","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aU46J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "elementAt", ()=>elementAt
);
/** PURE_IMPORTS_START _util_ArgumentOutOfRangeError,_filter,_throwIfEmpty,_defaultIfEmpty,_take PURE_IMPORTS_END */ var _argumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");
var _filter = require("./filter");
var _throwIfEmpty = require("./throwIfEmpty");
var _defaultIfEmpty = require("./defaultIfEmpty");
var _take = require("./take");
function elementAt(index, defaultValue) {
    if (index < 0) throw new _argumentOutOfRangeError.ArgumentOutOfRangeError();
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(_filter.filter(function(v, i) {
            return i === index;
        }), _take.take(1), hasDefaultValue ? _defaultIfEmpty.defaultIfEmpty(defaultValue) : _throwIfEmpty.throwIfEmpty(function() {
            return new _argumentOutOfRangeError.ArgumentOutOfRangeError();
        }));
    };
}

},{"../util/ArgumentOutOfRangeError":"ay3gU","./filter":"kO0wo","./throwIfEmpty":"bXGSU","./defaultIfEmpty":"eWnkX","./take":"aDbY2","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bXGSU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "throwIfEmpty", ()=>throwIfEmpty
);
/** PURE_IMPORTS_START tslib,_util_EmptyError,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _emptyError = require("../util/EmptyError");
var _subscriber = require("../Subscriber");
function throwIfEmpty(errorFactory) {
    if (errorFactory === void 0) errorFactory = defaultErrorFactory;
    return function(source) {
        return source.lift(new ThrowIfEmptyOperator1(errorFactory));
    };
}
var ThrowIfEmptyOperator1 = function() {
    function ThrowIfEmptyOperator(errorFactory) {
        this.errorFactory = errorFactory;
    }
    ThrowIfEmptyOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new ThrowIfEmptySubscriber1(subscriber, this.errorFactory));
    };
    return ThrowIfEmptyOperator;
}();
var ThrowIfEmptySubscriber1 = function(_super) {
    _tslib.__extends(ThrowIfEmptySubscriber, _super);
    function ThrowIfEmptySubscriber(destination, errorFactory) {
        var _this = _super.call(this, destination) || this;
        _this.errorFactory = errorFactory;
        _this.hasValue = false;
        return _this;
    }
    ThrowIfEmptySubscriber.prototype._next = function(value) {
        this.hasValue = true;
        this.destination.next(value);
    };
    ThrowIfEmptySubscriber.prototype._complete = function() {
        if (!this.hasValue) {
            var err = void 0;
            try {
                err = this.errorFactory();
            } catch (e) {
                err = e;
            }
            this.destination.error(err);
        } else return this.destination.complete();
    };
    return ThrowIfEmptySubscriber;
}(_subscriber.Subscriber);
function defaultErrorFactory() {
    return new _emptyError.EmptyError();
}

},{"tslib":"j55WF","../util/EmptyError":"2BhSf","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aDbY2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "take", ()=>take
);
/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _argumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");
var _empty = require("../observable/empty");
function take(count) {
    return function(source) {
        if (count === 0) return _empty.empty();
        else return source.lift(new TakeOperator1(count));
    };
}
var TakeOperator1 = function() {
    function TakeOperator(total) {
        this.total = total;
        if (this.total < 0) throw new _argumentOutOfRangeError.ArgumentOutOfRangeError;
    }
    TakeOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new TakeSubscriber1(subscriber, this.total));
    };
    return TakeOperator;
}();
var TakeSubscriber1 = function(_super) {
    _tslib.__extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.count = 0;
        return _this;
    }
    TakeSubscriber.prototype._next = function(value) {
        var total = this.total;
        var count = ++this.count;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","../util/ArgumentOutOfRangeError":"ay3gU","../observable/empty":"4kIBW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fcOwk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "endWith", ()=>endWith
);
/** PURE_IMPORTS_START _observable_concat,_observable_of PURE_IMPORTS_END */ var _concat = require("../observable/concat");
var _of = require("../observable/of");
function endWith() {
    var array = [];
    for(var _i = 0; _i < arguments.length; _i++)array[_i] = arguments[_i];
    return function(source) {
        return _concat.concat(source, _of.of.apply(void 0, array));
    };
}

},{"../observable/concat":"cR4Mp","../observable/of":"eCgiH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"14ZS9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "every", ()=>every
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function every(predicate, thisArg) {
    return function(source) {
        return source.lift(new EveryOperator1(predicate, thisArg, source));
    };
}
var EveryOperator1 = function() {
    function EveryOperator(predicate, thisArg, source) {
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.source = source;
    }
    EveryOperator.prototype.call = function(observer, source) {
        return source.subscribe(new EverySubscriber1(observer, this.predicate, this.thisArg, this.source));
    };
    return EveryOperator;
}();
var EverySubscriber1 = function(_super) {
    _tslib.__extends(EverySubscriber, _super);
    function EverySubscriber(destination, predicate, thisArg, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.source = source;
        _this.index = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    EverySubscriber.prototype.notifyComplete = function(everyValueMatch) {
        this.destination.next(everyValueMatch);
        this.destination.complete();
    };
    EverySubscriber.prototype._next = function(value) {
        var result = false;
        try {
            result = this.predicate.call(this.thisArg, value, this.index++, this.source);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        if (!result) this.notifyComplete(false);
    };
    EverySubscriber.prototype._complete = function() {
        this.notifyComplete(true);
    };
    return EverySubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3ZKNA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "exhaust", ()=>exhaust
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function exhaust() {
    return function(source) {
        return source.lift(new SwitchFirstOperator1());
    };
}
var SwitchFirstOperator1 = function() {
    function SwitchFirstOperator() {
    }
    SwitchFirstOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new SwitchFirstSubscriber1(subscriber));
    };
    return SwitchFirstOperator;
}();
var SwitchFirstSubscriber1 = function(_super) {
    _tslib.__extends(SwitchFirstSubscriber, _super);
    function SwitchFirstSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasCompleted = false;
        _this.hasSubscription = false;
        return _this;
    }
    SwitchFirstSubscriber.prototype._next = function(value) {
        if (!this.hasSubscription) {
            this.hasSubscription = true;
            this.add(_innerSubscribe.innerSubscribe(value, new _innerSubscribe.SimpleInnerSubscriber(this)));
        }
    };
    SwitchFirstSubscriber.prototype._complete = function() {
        this.hasCompleted = true;
        if (!this.hasSubscription) this.destination.complete();
    };
    SwitchFirstSubscriber.prototype.notifyComplete = function() {
        this.hasSubscription = false;
        if (this.hasCompleted) this.destination.complete();
    };
    return SwitchFirstSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5B8f5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "exhaustMap", ()=>exhaustMap
);
/** PURE_IMPORTS_START tslib,_map,_observable_from,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _map = require("./map");
var _from = require("../observable/from");
var _innerSubscribe = require("../innerSubscribe");
function exhaustMap(project, resultSelector) {
    if (resultSelector) return function(source) {
        return source.pipe(exhaustMap(function(a, i) {
            return _from.from(project(a, i)).pipe(_map.map(function(b, ii) {
                return resultSelector(a, b, i, ii);
            }));
        }));
    };
    return function(source) {
        return source.lift(new ExhaustMapOperator1(project));
    };
}
var ExhaustMapOperator1 = function() {
    function ExhaustMapOperator(project) {
        this.project = project;
    }
    ExhaustMapOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new ExhaustMapSubscriber1(subscriber, this.project));
    };
    return ExhaustMapOperator;
}();
var ExhaustMapSubscriber1 = function(_super) {
    _tslib.__extends(ExhaustMapSubscriber, _super);
    function ExhaustMapSubscriber(destination, project) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.hasSubscription = false;
        _this.hasCompleted = false;
        _this.index = 0;
        return _this;
    }
    ExhaustMapSubscriber.prototype._next = function(value) {
        if (!this.hasSubscription) this.tryNext(value);
    };
    ExhaustMapSubscriber.prototype.tryNext = function(value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.hasSubscription = true;
        this._innerSub(result);
    };
    ExhaustMapSubscriber.prototype._innerSub = function(result) {
        var innerSubscriber = new _innerSubscribe.SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = _innerSubscribe.innerSubscribe(result, innerSubscriber);
        if (innerSubscription !== innerSubscriber) destination.add(innerSubscription);
    };
    ExhaustMapSubscriber.prototype._complete = function() {
        this.hasCompleted = true;
        if (!this.hasSubscription) this.destination.complete();
        this.unsubscribe();
    };
    ExhaustMapSubscriber.prototype.notifyNext = function(innerValue) {
        this.destination.next(innerValue);
    };
    ExhaustMapSubscriber.prototype.notifyError = function(err) {
        this.destination.error(err);
    };
    ExhaustMapSubscriber.prototype.notifyComplete = function() {
        this.hasSubscription = false;
        if (this.hasCompleted) this.destination.complete();
    };
    return ExhaustMapSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","./map":"6BlqD","../observable/from":"l9OnS","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"35l5O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "expand", ()=>expand
);
parcelHelpers.export(exports, "ExpandOperator", ()=>ExpandOperator1
);
parcelHelpers.export(exports, "ExpandSubscriber", ()=>ExpandSubscriber1
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return function(source) {
        return source.lift(new ExpandOperator1(project, concurrent, scheduler));
    };
}
var ExpandOperator1 = function() {
    function ExpandOperator(project, concurrent, scheduler) {
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
    }
    ExpandOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new ExpandSubscriber1(subscriber, this.project, this.concurrent, this.scheduler));
    };
    return ExpandOperator;
}();
var ExpandSubscriber1 = function(_super) {
    _tslib.__extends(ExpandSubscriber, _super);
    function ExpandSubscriber(destination, project, concurrent, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.scheduler = scheduler;
        _this.index = 0;
        _this.active = 0;
        _this.hasCompleted = false;
        if (concurrent < Number.POSITIVE_INFINITY) _this.buffer = [];
        return _this;
    }
    ExpandSubscriber.dispatch = function(arg) {
        var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
        subscriber.subscribeToProjection(result, value, index);
    };
    ExpandSubscriber.prototype._next = function(value) {
        var destination = this.destination;
        if (destination.closed) {
            this._complete();
            return;
        }
        var index = this.index++;
        if (this.active < this.concurrent) {
            destination.next(value);
            try {
                var project = this.project;
                var result = project(value, index);
                if (!this.scheduler) this.subscribeToProjection(result, value, index);
                else {
                    var state = {
                        subscriber: this,
                        result: result,
                        value: value,
                        index: index
                    };
                    var destination_1 = this.destination;
                    destination_1.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
                }
            } catch (e) {
                destination.error(e);
            }
        } else this.buffer.push(value);
    };
    ExpandSubscriber.prototype.subscribeToProjection = function(result, value, index) {
        this.active++;
        var destination = this.destination;
        destination.add(_innerSubscribe.innerSubscribe(result, new _innerSubscribe.SimpleInnerSubscriber(this)));
    };
    ExpandSubscriber.prototype._complete = function() {
        this.hasCompleted = true;
        if (this.hasCompleted && this.active === 0) this.destination.complete();
        this.unsubscribe();
    };
    ExpandSubscriber.prototype.notifyNext = function(innerValue) {
        this._next(innerValue);
    };
    ExpandSubscriber.prototype.notifyComplete = function() {
        var buffer = this.buffer;
        this.active--;
        if (buffer && buffer.length > 0) this._next(buffer.shift());
        if (this.hasCompleted && this.active === 0) this.destination.complete();
    };
    return ExpandSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e4AZO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "finalize", ()=>finalize
);
/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _subscription = require("../Subscription");
function finalize(callback) {
    return function(source) {
        return source.lift(new FinallyOperator1(callback));
    };
}
var FinallyOperator1 = function() {
    function FinallyOperator(callback) {
        this.callback = callback;
    }
    FinallyOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new FinallySubscriber1(subscriber, this.callback));
    };
    return FinallyOperator;
}();
var FinallySubscriber1 = function(_super) {
    _tslib.__extends(FinallySubscriber, _super);
    function FinallySubscriber(destination, callback) {
        var _this = _super.call(this, destination) || this;
        _this.add(new _subscription.Subscription(callback));
        return _this;
    }
    return FinallySubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","../Subscription":"ceYgr","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eBmUy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "find", ()=>find
);
parcelHelpers.export(exports, "FindValueOperator", ()=>FindValueOperator1
);
parcelHelpers.export(exports, "FindValueSubscriber", ()=>FindValueSubscriber1
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function find(predicate, thisArg) {
    if (typeof predicate !== 'function') throw new TypeError('predicate is not a function');
    return function(source) {
        return source.lift(new FindValueOperator1(predicate, source, false, thisArg));
    };
}
var FindValueOperator1 = function() {
    function FindValueOperator(predicate, source, yieldIndex, thisArg) {
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
    }
    FindValueOperator.prototype.call = function(observer, source) {
        return source.subscribe(new FindValueSubscriber1(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
    };
    return FindValueOperator;
}();
var FindValueSubscriber1 = function(_super) {
    _tslib.__extends(FindValueSubscriber, _super);
    function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.source = source;
        _this.yieldIndex = yieldIndex;
        _this.thisArg = thisArg;
        _this.index = 0;
        return _this;
    }
    FindValueSubscriber.prototype.notifyComplete = function(value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
        this.unsubscribe();
    };
    FindValueSubscriber.prototype._next = function(value) {
        var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
        var index = this.index++;
        try {
            var result = predicate.call(thisArg || this, value, index, this.source);
            if (result) this.notifyComplete(this.yieldIndex ? index : value);
        } catch (err) {
            this.destination.error(err);
        }
    };
    FindValueSubscriber.prototype._complete = function() {
        this.notifyComplete(this.yieldIndex ? -1 : undefined);
    };
    return FindValueSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a80e7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "findIndex", ()=>findIndex
);
/** PURE_IMPORTS_START _operators_find PURE_IMPORTS_END */ var _find = require("../operators/find");
function findIndex(predicate, thisArg) {
    return function(source) {
        return source.lift(new _find.FindValueOperator(predicate, source, true, thisArg));
    };
}

},{"../operators/find":"eBmUy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6rVDO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "first", ()=>first
);
/** PURE_IMPORTS_START _util_EmptyError,_filter,_take,_defaultIfEmpty,_throwIfEmpty,_util_identity PURE_IMPORTS_END */ var _emptyError = require("../util/EmptyError");
var _filter = require("./filter");
var _take = require("./take");
var _defaultIfEmpty = require("./defaultIfEmpty");
var _throwIfEmpty = require("./throwIfEmpty");
var _identity = require("../util/identity");
function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(predicate ? _filter.filter(function(v, i) {
            return predicate(v, i, source);
        }) : _identity.identity, _take.take(1), hasDefaultValue ? _defaultIfEmpty.defaultIfEmpty(defaultValue) : _throwIfEmpty.throwIfEmpty(function() {
            return new _emptyError.EmptyError();
        }));
    };
}

},{"../util/EmptyError":"2BhSf","./filter":"kO0wo","./take":"aDbY2","./defaultIfEmpty":"eWnkX","./throwIfEmpty":"bXGSU","../util/identity":"cqToy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9aGC1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ignoreElements", ()=>ignoreElements
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function ignoreElements() {
    return function ignoreElementsOperatorFunction(source) {
        return source.lift(new IgnoreElementsOperator1());
    };
}
var IgnoreElementsOperator1 = function() {
    function IgnoreElementsOperator() {
    }
    IgnoreElementsOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new IgnoreElementsSubscriber1(subscriber));
    };
    return IgnoreElementsOperator;
}();
var IgnoreElementsSubscriber1 = function(_super) {
    _tslib.__extends(IgnoreElementsSubscriber, _super);
    function IgnoreElementsSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IgnoreElementsSubscriber.prototype._next = function(unused) {
    };
    return IgnoreElementsSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bR4Y1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEmpty", ()=>isEmpty1
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function isEmpty1() {
    return function(source) {
        return source.lift(new IsEmptyOperator1());
    };
}
var IsEmptyOperator1 = function() {
    function IsEmptyOperator() {
    }
    IsEmptyOperator.prototype.call = function(observer, source) {
        return source.subscribe(new IsEmptySubscriber1(observer));
    };
    return IsEmptyOperator;
}();
var IsEmptySubscriber1 = function(_super) {
    _tslib.__extends(IsEmptySubscriber, _super);
    function IsEmptySubscriber(destination) {
        return _super.call(this, destination) || this;
    }
    IsEmptySubscriber.prototype.notifyComplete = function(isEmpty) {
        var destination = this.destination;
        destination.next(isEmpty);
        destination.complete();
    };
    IsEmptySubscriber.prototype._next = function(value) {
        this.notifyComplete(false);
    };
    IsEmptySubscriber.prototype._complete = function() {
        this.notifyComplete(true);
    };
    return IsEmptySubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ikFoO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "last", ()=>last
);
/** PURE_IMPORTS_START _util_EmptyError,_filter,_takeLast,_throwIfEmpty,_defaultIfEmpty,_util_identity PURE_IMPORTS_END */ var _emptyError = require("../util/EmptyError");
var _filter = require("./filter");
var _takeLast = require("./takeLast");
var _throwIfEmpty = require("./throwIfEmpty");
var _defaultIfEmpty = require("./defaultIfEmpty");
var _identity = require("../util/identity");
function last(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(predicate ? _filter.filter(function(v, i) {
            return predicate(v, i, source);
        }) : _identity.identity, _takeLast.takeLast(1), hasDefaultValue ? _defaultIfEmpty.defaultIfEmpty(defaultValue) : _throwIfEmpty.throwIfEmpty(function() {
            return new _emptyError.EmptyError();
        }));
    };
}

},{"../util/EmptyError":"2BhSf","./filter":"kO0wo","./takeLast":"aEkYZ","./throwIfEmpty":"bXGSU","./defaultIfEmpty":"eWnkX","../util/identity":"cqToy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aEkYZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "takeLast", ()=>takeLast
);
/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _argumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");
var _empty = require("../observable/empty");
function takeLast(count) {
    return function takeLastOperatorFunction(source) {
        if (count === 0) return _empty.empty();
        else return source.lift(new TakeLastOperator1(count));
    };
}
var TakeLastOperator1 = function() {
    function TakeLastOperator(total) {
        this.total = total;
        if (this.total < 0) throw new _argumentOutOfRangeError.ArgumentOutOfRangeError;
    }
    TakeLastOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new TakeLastSubscriber1(subscriber, this.total));
    };
    return TakeLastOperator;
}();
var TakeLastSubscriber1 = function(_super) {
    _tslib.__extends(TakeLastSubscriber, _super);
    function TakeLastSubscriber(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.ring = new Array();
        _this.count = 0;
        return _this;
    }
    TakeLastSubscriber.prototype._next = function(value) {
        var ring = this.ring;
        var total = this.total;
        var count = this.count++;
        if (ring.length < total) ring.push(value);
        else {
            var index = count % total;
            ring[index] = value;
        }
    };
    TakeLastSubscriber.prototype._complete = function() {
        var destination = this.destination;
        var count = this.count;
        if (count > 0) {
            var total = this.count >= this.total ? this.total : this.count;
            var ring = this.ring;
            for(var i = 0; i < total; i++){
                var idx = (count++) % total;
                destination.next(ring[idx]);
            }
        }
        destination.complete();
    };
    return TakeLastSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","../util/ArgumentOutOfRangeError":"ay3gU","../observable/empty":"4kIBW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"566Uk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapTo", ()=>mapTo
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function mapTo(value) {
    return function(source) {
        return source.lift(new MapToOperator1(value));
    };
}
var MapToOperator1 = function() {
    function MapToOperator(value) {
        this.value = value;
    }
    MapToOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new MapToSubscriber1(subscriber, this.value));
    };
    return MapToOperator;
}();
var MapToSubscriber1 = function(_super) {
    _tslib.__extends(MapToSubscriber, _super);
    function MapToSubscriber(destination, value) {
        var _this = _super.call(this, destination) || this;
        _this.value = value;
        return _this;
    }
    MapToSubscriber.prototype._next = function(x) {
        this.destination.next(this.value);
    };
    return MapToSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1wODh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "materialize", ()=>materialize
);
/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _notification = require("../Notification");
function materialize() {
    return function materializeOperatorFunction(source) {
        return source.lift(new MaterializeOperator1());
    };
}
var MaterializeOperator1 = function() {
    function MaterializeOperator() {
    }
    MaterializeOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new MaterializeSubscriber1(subscriber));
    };
    return MaterializeOperator;
}();
var MaterializeSubscriber1 = function(_super) {
    _tslib.__extends(MaterializeSubscriber, _super);
    function MaterializeSubscriber(destination) {
        return _super.call(this, destination) || this;
    }
    MaterializeSubscriber.prototype._next = function(value) {
        this.destination.next(_notification.Notification.createNext(value));
    };
    MaterializeSubscriber.prototype._error = function(err) {
        var destination = this.destination;
        destination.next(_notification.Notification.createError(err));
        destination.complete();
    };
    MaterializeSubscriber.prototype._complete = function() {
        var destination = this.destination;
        destination.next(_notification.Notification.createComplete());
        destination.complete();
    };
    return MaterializeSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","../Notification":"jqexJ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"brmkk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max1
);
/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */ var _reduce = require("./reduce");
function max1(comparer) {
    var max = typeof comparer === 'function' ? function(x, y) {
        return comparer(x, y) > 0 ? x : y;
    } : function(x, y) {
        return x > y ? x : y;
    };
    return _reduce.reduce(max);
}

},{"./reduce":"unAFh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"unAFh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reduce", ()=>reduce
);
/** PURE_IMPORTS_START _scan,_takeLast,_defaultIfEmpty,_util_pipe PURE_IMPORTS_END */ var _scan = require("./scan");
var _takeLast = require("./takeLast");
var _defaultIfEmpty = require("./defaultIfEmpty");
var _pipe = require("../util/pipe");
function reduce(accumulator, seed) {
    if (arguments.length >= 2) return function reduceOperatorFunctionWithSeed(source) {
        return _pipe.pipe(_scan.scan(accumulator, seed), _takeLast.takeLast(1), _defaultIfEmpty.defaultIfEmpty(seed))(source);
    };
    return function reduceOperatorFunction(source) {
        return _pipe.pipe(_scan.scan(function(acc, value, index) {
            return accumulator(acc, value, index + 1);
        }), _takeLast.takeLast(1))(source);
    };
}

},{"./scan":"iA7Aw","./takeLast":"aEkYZ","./defaultIfEmpty":"eWnkX","../util/pipe":"ie2QB","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iA7Aw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scan", ()=>scan
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function scan(accumulator, seed) {
    var hasSeed = false;
    if (arguments.length >= 2) hasSeed = true;
    return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator1(accumulator, seed, hasSeed));
    };
}
var ScanOperator1 = function() {
    function ScanOperator(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) hasSeed = false;
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    ScanOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new ScanSubscriber1(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ScanOperator;
}();
var ScanSubscriber1 = function(_super) {
    _tslib.__extends(ScanSubscriber, _super);
    function ScanSubscriber(destination, accumulator, _seed, hasSeed) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this._seed = _seed;
        _this.hasSeed = hasSeed;
        _this.index = 0;
        return _this;
    }
    Object.defineProperty(ScanSubscriber.prototype, "seed", {
        get: function() {
            return this._seed;
        },
        set: function(value) {
            this.hasSeed = true;
            this._seed = value;
        },
        enumerable: true,
        configurable: true
    });
    ScanSubscriber.prototype._next = function(value) {
        if (!this.hasSeed) {
            this.seed = value;
            this.destination.next(value);
        } else return this._tryNext(value);
    };
    ScanSubscriber.prototype._tryNext = function(value) {
        var index = this.index++;
        var result;
        try {
            result = this.accumulator(this.seed, value, index);
        } catch (err) {
            this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
    };
    return ScanSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eTGEe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "merge", ()=>merge
);
/** PURE_IMPORTS_START _observable_merge PURE_IMPORTS_END */ var _merge = require("../observable/merge");
function merge() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    return function(source) {
        return source.lift.call(_merge.merge.apply(void 0, [
            source
        ].concat(observables)));
    };
}

},{"../observable/merge":"3cUnK","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4b9mC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeMapTo", ()=>mergeMapTo
);
/** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */ var _mergeMap = require("./mergeMap");
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
    if (typeof resultSelector === 'function') return _mergeMap.mergeMap(function() {
        return innerObservable;
    }, resultSelector, concurrent);
    if (typeof resultSelector === 'number') concurrent = resultSelector;
    return _mergeMap.mergeMap(function() {
        return innerObservable;
    }, concurrent);
}

},{"./mergeMap":"g6oOz","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kE0V1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeScan", ()=>mergeScan
);
parcelHelpers.export(exports, "MergeScanOperator", ()=>MergeScanOperator1
);
parcelHelpers.export(exports, "MergeScanSubscriber", ()=>MergeScanSubscriber1
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
    return function(source) {
        return source.lift(new MergeScanOperator1(accumulator, seed, concurrent));
    };
}
var MergeScanOperator1 = function() {
    function MergeScanOperator(accumulator, seed, concurrent) {
        this.accumulator = accumulator;
        this.seed = seed;
        this.concurrent = concurrent;
    }
    MergeScanOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new MergeScanSubscriber1(subscriber, this.accumulator, this.seed, this.concurrent));
    };
    return MergeScanOperator;
}();
var MergeScanSubscriber1 = function(_super) {
    _tslib.__extends(MergeScanSubscriber, _super);
    function MergeScanSubscriber(destination, accumulator, acc, concurrent) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this.acc = acc;
        _this.concurrent = concurrent;
        _this.hasValue = false;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeScanSubscriber.prototype._next = function(value) {
        if (this.active < this.concurrent) {
            var index = this.index++;
            var destination = this.destination;
            var ish = void 0;
            try {
                var accumulator = this.accumulator;
                ish = accumulator(this.acc, value, index);
            } catch (e) {
                return destination.error(e);
            }
            this.active++;
            this._innerSub(ish);
        } else this.buffer.push(value);
    };
    MergeScanSubscriber.prototype._innerSub = function(ish) {
        var innerSubscriber = new _innerSubscribe.SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = _innerSubscribe.innerSubscribe(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) destination.add(innerSubscription);
    };
    MergeScanSubscriber.prototype._complete = function() {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            if (this.hasValue === false) this.destination.next(this.acc);
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeScanSubscriber.prototype.notifyNext = function(innerValue) {
        var destination = this.destination;
        this.acc = innerValue;
        this.hasValue = true;
        destination.next(innerValue);
    };
    MergeScanSubscriber.prototype.notifyComplete = function() {
        var buffer = this.buffer;
        this.active--;
        if (buffer.length > 0) this._next(buffer.shift());
        else if (this.active === 0 && this.hasCompleted) {
            if (this.hasValue === false) this.destination.next(this.acc);
            this.destination.complete();
        }
    };
    return MergeScanSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cb4V6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "min", ()=>min1
);
/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */ var _reduce = require("./reduce");
function min1(comparer) {
    var min = typeof comparer === 'function' ? function(x, y) {
        return comparer(x, y) < 0 ? x : y;
    } : function(x, y) {
        return x < y ? x : y;
    };
    return _reduce.reduce(min);
}

},{"./reduce":"unAFh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bCXHb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "multicast", ()=>multicast
);
parcelHelpers.export(exports, "MulticastOperator", ()=>MulticastOperator1
);
/** PURE_IMPORTS_START _observable_ConnectableObservable PURE_IMPORTS_END */ var _connectableObservable = require("../observable/ConnectableObservable");
function multicast(subjectOrSubjectFactory, selector) {
    return function multicastOperatorFunction(source) {
        var subjectFactory;
        if (typeof subjectOrSubjectFactory === 'function') subjectFactory = subjectOrSubjectFactory;
        else subjectFactory = function subjectFactory() {
            return subjectOrSubjectFactory;
        };
        if (typeof selector === 'function') return source.lift(new MulticastOperator1(subjectFactory, selector));
        var connectable = Object.create(source, _connectableObservable.connectableObservableDescriptor);
        connectable.source = source;
        connectable.subjectFactory = subjectFactory;
        return connectable;
    };
}
var MulticastOperator1 = function() {
    function MulticastOperator(subjectFactory, selector) {
        this.subjectFactory = subjectFactory;
        this.selector = selector;
    }
    MulticastOperator.prototype.call = function(subscriber, source) {
        var selector = this.selector;
        var subject = this.subjectFactory();
        var subscription = selector(subject).subscribe(subscriber);
        subscription.add(source.subscribe(subject));
        return subscription;
    };
    return MulticastOperator;
}();

},{"../observable/ConnectableObservable":"kGSix","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e3zg8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onErrorResumeNext", ()=>onErrorResumeNext
);
parcelHelpers.export(exports, "onErrorResumeNextStatic", ()=>onErrorResumeNextStatic
);
/** PURE_IMPORTS_START tslib,_observable_from,_util_isArray,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _from = require("../observable/from");
var _isArray = require("../util/isArray");
var _innerSubscribe = require("../innerSubscribe");
function onErrorResumeNext() {
    var nextSources = [];
    for(var _i = 0; _i < arguments.length; _i++)nextSources[_i] = arguments[_i];
    if (nextSources.length === 1 && _isArray.isArray(nextSources[0])) nextSources = nextSources[0];
    return function(source) {
        return source.lift(new OnErrorResumeNextOperator1(nextSources));
    };
}
function onErrorResumeNextStatic() {
    var nextSources = [];
    for(var _i = 0; _i < arguments.length; _i++)nextSources[_i] = arguments[_i];
    var source = undefined;
    if (nextSources.length === 1 && _isArray.isArray(nextSources[0])) nextSources = nextSources[0];
    source = nextSources.shift();
    return _from.from(source).lift(new OnErrorResumeNextOperator1(nextSources));
}
var OnErrorResumeNextOperator1 = function() {
    function OnErrorResumeNextOperator(nextSources) {
        this.nextSources = nextSources;
    }
    OnErrorResumeNextOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new OnErrorResumeNextSubscriber1(subscriber, this.nextSources));
    };
    return OnErrorResumeNextOperator;
}();
var OnErrorResumeNextSubscriber1 = function(_super) {
    _tslib.__extends(OnErrorResumeNextSubscriber, _super);
    function OnErrorResumeNextSubscriber(destination, nextSources) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.nextSources = nextSources;
        return _this;
    }
    OnErrorResumeNextSubscriber.prototype.notifyError = function() {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.notifyComplete = function() {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._error = function(err) {
        this.subscribeToNextSource();
        this.unsubscribe();
    };
    OnErrorResumeNextSubscriber.prototype._complete = function() {
        this.subscribeToNextSource();
        this.unsubscribe();
    };
    OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function() {
        var next = this.nextSources.shift();
        if (!!next) {
            var innerSubscriber = new _innerSubscribe.SimpleInnerSubscriber(this);
            var destination = this.destination;
            destination.add(innerSubscriber);
            var innerSubscription = _innerSubscribe.innerSubscribe(next, innerSubscriber);
            if (innerSubscription !== innerSubscriber) destination.add(innerSubscription);
        } else this.destination.complete();
    };
    return OnErrorResumeNextSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../observable/from":"l9OnS","../util/isArray":"eQmW1","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fKZ4p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pairwise", ()=>pairwise
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function pairwise() {
    return function(source) {
        return source.lift(new PairwiseOperator1());
    };
}
var PairwiseOperator1 = function() {
    function PairwiseOperator() {
    }
    PairwiseOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new PairwiseSubscriber1(subscriber));
    };
    return PairwiseOperator;
}();
var PairwiseSubscriber1 = function(_super) {
    _tslib.__extends(PairwiseSubscriber, _super);
    function PairwiseSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasPrev = false;
        return _this;
    }
    PairwiseSubscriber.prototype._next = function(value) {
        var pair;
        if (this.hasPrev) pair = [
            this.prev,
            value
        ];
        else this.hasPrev = true;
        this.prev = value;
        if (pair) this.destination.next(pair);
    };
    return PairwiseSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dTuig":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "partition", ()=>partition
);
/** PURE_IMPORTS_START _util_not,_filter PURE_IMPORTS_END */ var _not = require("../util/not");
var _filter = require("./filter");
function partition(predicate, thisArg) {
    return function(source) {
        return [
            _filter.filter(predicate, thisArg)(source),
            _filter.filter(_not.not(predicate, thisArg))(source)
        ];
    };
}

},{"../util/not":"6awAc","./filter":"kO0wo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lMfzY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pluck", ()=>pluck
);
/** PURE_IMPORTS_START _map PURE_IMPORTS_END */ var _map = require("./map");
function pluck() {
    var properties = [];
    for(var _i = 0; _i < arguments.length; _i++)properties[_i] = arguments[_i];
    var length = properties.length;
    if (length === 0) throw new Error('list of properties cannot be empty.');
    return function(source) {
        return _map.map(plucker(properties, length))(source);
    };
}
function plucker(props, length) {
    var mapper = function(x) {
        var currentProp = x;
        for(var i = 0; i < length; i++){
            var p = currentProp != null ? currentProp[props[i]] : undefined;
            if (p !== void 0) currentProp = p;
            else return undefined;
        }
        return currentProp;
    };
    return mapper;
}

},{"./map":"6BlqD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1QG5C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "publish", ()=>publish
);
/** PURE_IMPORTS_START _Subject,_multicast PURE_IMPORTS_END */ var _subject = require("../Subject");
var _multicast = require("./multicast");
function publish(selector) {
    return selector ? _multicast.multicast(function() {
        return new _subject.Subject();
    }, selector) : _multicast.multicast(new _subject.Subject());
}

},{"../Subject":"aLwqa","./multicast":"bCXHb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dZybw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "publishBehavior", ()=>publishBehavior
);
/** PURE_IMPORTS_START _BehaviorSubject,_multicast PURE_IMPORTS_END */ var _behaviorSubject = require("../BehaviorSubject");
var _multicast = require("./multicast");
function publishBehavior(value) {
    return function(source) {
        return _multicast.multicast(new _behaviorSubject.BehaviorSubject(value))(source);
    };
}

},{"../BehaviorSubject":"8kQOg","./multicast":"bCXHb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hUWNv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "publishLast", ()=>publishLast
);
/** PURE_IMPORTS_START _AsyncSubject,_multicast PURE_IMPORTS_END */ var _asyncSubject = require("../AsyncSubject");
var _multicast = require("./multicast");
function publishLast() {
    return function(source) {
        return _multicast.multicast(new _asyncSubject.AsyncSubject())(source);
    };
}

},{"../AsyncSubject":"a62Z9","./multicast":"bCXHb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"63UlU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "publishReplay", ()=>publishReplay
);
/** PURE_IMPORTS_START _ReplaySubject,_multicast PURE_IMPORTS_END */ var _replaySubject = require("../ReplaySubject");
var _multicast = require("./multicast");
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') scheduler = selectorOrScheduler;
    var selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
    var subject = new _replaySubject.ReplaySubject(bufferSize, windowTime, scheduler);
    return function(source) {
        return _multicast.multicast(function() {
            return subject;
        }, selector)(source);
    };
}

},{"../ReplaySubject":"9y70s","./multicast":"bCXHb","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jUUex":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "race", ()=>race
);
/** PURE_IMPORTS_START _util_isArray,_observable_race PURE_IMPORTS_END */ var _isArray = require("../util/isArray");
var _race = require("../observable/race");
function race() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    return function raceOperatorFunction(source) {
        if (observables.length === 1 && _isArray.isArray(observables[0])) observables = observables[0];
        return source.lift.call(_race.race.apply(void 0, [
            source
        ].concat(observables)));
    };
}

},{"../util/isArray":"eQmW1","../observable/race":"db7J8","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9B5i7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "repeat", ()=>repeat
);
/** PURE_IMPORTS_START tslib,_Subscriber,_observable_empty PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _empty = require("../observable/empty");
function repeat(count) {
    if (count === void 0) count = -1;
    return function(source) {
        if (count === 0) return _empty.empty();
        else if (count < 0) return source.lift(new RepeatOperator1(-1, source));
        else return source.lift(new RepeatOperator1(count - 1, source));
    };
}
var RepeatOperator1 = function() {
    function RepeatOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RepeatOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new RepeatSubscriber1(subscriber, this.count, this.source));
    };
    return RepeatOperator;
}();
var RepeatSubscriber1 = function(_super) {
    _tslib.__extends(RepeatSubscriber, _super);
    function RepeatSubscriber(destination, count, source) {
        var _this = _super.call(this, destination) || this;
        _this.count = count;
        _this.source = source;
        return _this;
    }
    RepeatSubscriber.prototype.complete = function() {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) return _super.prototype.complete.call(this);
            else if (count > -1) this.count = count - 1;
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RepeatSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","../observable/empty":"4kIBW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dbbVx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "repeatWhen", ()=>repeatWhen
);
/** PURE_IMPORTS_START tslib,_Subject,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("../Subject");
var _innerSubscribe = require("../innerSubscribe");
function repeatWhen(notifier) {
    return function(source) {
        return source.lift(new RepeatWhenOperator1(notifier));
    };
}
var RepeatWhenOperator1 = function() {
    function RepeatWhenOperator(notifier) {
        this.notifier = notifier;
    }
    RepeatWhenOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new RepeatWhenSubscriber1(subscriber, this.notifier, source));
    };
    return RepeatWhenOperator;
}();
var RepeatWhenSubscriber1 = function(_super) {
    _tslib.__extends(RepeatWhenSubscriber, _super);
    function RepeatWhenSubscriber(destination, notifier, source) {
        var _this = _super.call(this, destination) || this;
        _this.notifier = notifier;
        _this.source = source;
        _this.sourceIsBeingSubscribedTo = true;
        return _this;
    }
    RepeatWhenSubscriber.prototype.notifyNext = function() {
        this.sourceIsBeingSubscribedTo = true;
        this.source.subscribe(this);
    };
    RepeatWhenSubscriber.prototype.notifyComplete = function() {
        if (this.sourceIsBeingSubscribedTo === false) return _super.prototype.complete.call(this);
    };
    RepeatWhenSubscriber.prototype.complete = function() {
        this.sourceIsBeingSubscribedTo = false;
        if (!this.isStopped) {
            if (!this.retries) this.subscribeToRetries();
            if (!this.retriesSubscription || this.retriesSubscription.closed) return _super.prototype.complete.call(this);
            this._unsubscribeAndRecycle();
            this.notifications.next(undefined);
        }
    };
    RepeatWhenSubscriber.prototype._unsubscribe = function() {
        var _a = this, notifications = _a.notifications, retriesSubscription = _a.retriesSubscription;
        if (notifications) {
            notifications.unsubscribe();
            this.notifications = undefined;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = undefined;
        }
        this.retries = undefined;
    };
    RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function() {
        var _unsubscribe = this._unsubscribe;
        this._unsubscribe = null;
        _super.prototype._unsubscribeAndRecycle.call(this);
        this._unsubscribe = _unsubscribe;
        return this;
    };
    RepeatWhenSubscriber.prototype.subscribeToRetries = function() {
        this.notifications = new _subject.Subject();
        var retries;
        try {
            var notifier = this.notifier;
            retries = notifier(this.notifications);
        } catch (e) {
            return _super.prototype.complete.call(this);
        }
        this.retries = retries;
        this.retriesSubscription = _innerSubscribe.innerSubscribe(retries, new _innerSubscribe.SimpleInnerSubscriber(this));
    };
    return RepeatWhenSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../Subject":"aLwqa","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"giCDz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "retry", ()=>retry
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function retry(count) {
    if (count === void 0) count = -1;
    return function(source) {
        return source.lift(new RetryOperator1(count, source));
    };
}
var RetryOperator1 = function() {
    function RetryOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RetryOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new RetrySubscriber1(subscriber, this.count, this.source));
    };
    return RetryOperator;
}();
var RetrySubscriber1 = function(_super) {
    _tslib.__extends(RetrySubscriber, _super);
    function RetrySubscriber(destination, count, source) {
        var _this = _super.call(this, destination) || this;
        _this.count = count;
        _this.source = source;
        return _this;
    }
    RetrySubscriber.prototype.error = function(err) {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) return _super.prototype.error.call(this, err);
            else if (count > -1) this.count = count - 1;
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RetrySubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eX6Vf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "retryWhen", ()=>retryWhen
);
/** PURE_IMPORTS_START tslib,_Subject,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("../Subject");
var _innerSubscribe = require("../innerSubscribe");
function retryWhen(notifier) {
    return function(source) {
        return source.lift(new RetryWhenOperator1(notifier, source));
    };
}
var RetryWhenOperator1 = function() {
    function RetryWhenOperator(notifier, source) {
        this.notifier = notifier;
        this.source = source;
    }
    RetryWhenOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new RetryWhenSubscriber1(subscriber, this.notifier, this.source));
    };
    return RetryWhenOperator;
}();
var RetryWhenSubscriber1 = function(_super) {
    _tslib.__extends(RetryWhenSubscriber, _super);
    function RetryWhenSubscriber(destination, notifier, source) {
        var _this = _super.call(this, destination) || this;
        _this.notifier = notifier;
        _this.source = source;
        return _this;
    }
    RetryWhenSubscriber.prototype.error = function(err) {
        if (!this.isStopped) {
            var errors = this.errors;
            var retries = this.retries;
            var retriesSubscription = this.retriesSubscription;
            if (!retries) {
                errors = new _subject.Subject();
                try {
                    var notifier = this.notifier;
                    retries = notifier(errors);
                } catch (e) {
                    return _super.prototype.error.call(this, e);
                }
                retriesSubscription = _innerSubscribe.innerSubscribe(retries, new _innerSubscribe.SimpleInnerSubscriber(this));
            } else {
                this.errors = undefined;
                this.retriesSubscription = undefined;
            }
            this._unsubscribeAndRecycle();
            this.errors = errors;
            this.retries = retries;
            this.retriesSubscription = retriesSubscription;
            errors.next(err);
        }
    };
    RetryWhenSubscriber.prototype._unsubscribe = function() {
        var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
        if (errors) {
            errors.unsubscribe();
            this.errors = undefined;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = undefined;
        }
        this.retries = undefined;
    };
    RetryWhenSubscriber.prototype.notifyNext = function() {
        var _unsubscribe = this._unsubscribe;
        this._unsubscribe = null;
        this._unsubscribeAndRecycle();
        this._unsubscribe = _unsubscribe;
        this.source.subscribe(this);
    };
    return RetryWhenSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../Subject":"aLwqa","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kgTLc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sample", ()=>sample
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function sample(notifier) {
    return function(source) {
        return source.lift(new SampleOperator1(notifier));
    };
}
var SampleOperator1 = function() {
    function SampleOperator(notifier) {
        this.notifier = notifier;
    }
    SampleOperator.prototype.call = function(subscriber, source) {
        var sampleSubscriber = new SampleSubscriber1(subscriber);
        var subscription = source.subscribe(sampleSubscriber);
        subscription.add(_innerSubscribe.innerSubscribe(this.notifier, new _innerSubscribe.SimpleInnerSubscriber(sampleSubscriber)));
        return subscription;
    };
    return SampleOperator;
}();
var SampleSubscriber1 = function(_super) {
    _tslib.__extends(SampleSubscriber, _super);
    function SampleSubscriber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasValue = false;
        return _this;
    }
    SampleSubscriber.prototype._next = function(value) {
        this.value = value;
        this.hasValue = true;
    };
    SampleSubscriber.prototype.notifyNext = function() {
        this.emitValue();
    };
    SampleSubscriber.prototype.notifyComplete = function() {
        this.emitValue();
    };
    SampleSubscriber.prototype.emitValue = function() {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.value);
        }
    };
    return SampleSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aQhjm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sampleTime", ()=>sampleTime
);
/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _async = require("../scheduler/async");
function sampleTime(period, scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    return function(source) {
        return source.lift(new SampleTimeOperator1(period, scheduler));
    };
}
var SampleTimeOperator1 = function() {
    function SampleTimeOperator(period, scheduler) {
        this.period = period;
        this.scheduler = scheduler;
    }
    SampleTimeOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new SampleTimeSubscriber1(subscriber, this.period, this.scheduler));
    };
    return SampleTimeOperator;
}();
var SampleTimeSubscriber1 = function(_super) {
    _tslib.__extends(SampleTimeSubscriber, _super);
    function SampleTimeSubscriber(destination, period, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.period = period;
        _this.scheduler = scheduler;
        _this.hasValue = false;
        _this.add(scheduler.schedule(dispatchNotification, period, {
            subscriber: _this,
            period: period
        }));
        return _this;
    }
    SampleTimeSubscriber.prototype._next = function(value) {
        this.lastValue = value;
        this.hasValue = true;
    };
    SampleTimeSubscriber.prototype.notifyNext = function() {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.lastValue);
        }
    };
    return SampleTimeSubscriber;
}(_subscriber.Subscriber);
function dispatchNotification(state) {
    var subscriber = state.subscriber, period = state.period;
    subscriber.notifyNext();
    this.schedule(state, period);
}

},{"tslib":"j55WF","../Subscriber":"k0EYi","../scheduler/async":"4Vd5T","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gZfaI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sequenceEqual", ()=>sequenceEqual
);
parcelHelpers.export(exports, "SequenceEqualOperator", ()=>SequenceEqualOperator1
);
parcelHelpers.export(exports, "SequenceEqualSubscriber", ()=>SequenceEqualSubscriber1
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function sequenceEqual(compareTo, comparator) {
    return function(source) {
        return source.lift(new SequenceEqualOperator1(compareTo, comparator));
    };
}
var SequenceEqualOperator1 = function() {
    function SequenceEqualOperator(compareTo, comparator) {
        this.compareTo = compareTo;
        this.comparator = comparator;
    }
    SequenceEqualOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new SequenceEqualSubscriber1(subscriber, this.compareTo, this.comparator));
    };
    return SequenceEqualOperator;
}();
var SequenceEqualSubscriber1 = function(_super) {
    _tslib.__extends(SequenceEqualSubscriber, _super);
    function SequenceEqualSubscriber(destination, compareTo, comparator) {
        var _this = _super.call(this, destination) || this;
        _this.compareTo = compareTo;
        _this.comparator = comparator;
        _this._a = [];
        _this._b = [];
        _this._oneComplete = false;
        _this.destination.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber1(destination, _this)));
        return _this;
    }
    SequenceEqualSubscriber.prototype._next = function(value) {
        if (this._oneComplete && this._b.length === 0) this.emit(false);
        else {
            this._a.push(value);
            this.checkValues();
        }
    };
    SequenceEqualSubscriber.prototype._complete = function() {
        if (this._oneComplete) this.emit(this._a.length === 0 && this._b.length === 0);
        else this._oneComplete = true;
        this.unsubscribe();
    };
    SequenceEqualSubscriber.prototype.checkValues = function() {
        var _c = this, _a = _c._a, _b = _c._b, comparator = _c.comparator;
        while(_a.length > 0 && _b.length > 0){
            var a = _a.shift();
            var b = _b.shift();
            var areEqual = false;
            try {
                areEqual = comparator ? comparator(a, b) : a === b;
            } catch (e) {
                this.destination.error(e);
            }
            if (!areEqual) this.emit(false);
        }
    };
    SequenceEqualSubscriber.prototype.emit = function(value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
    };
    SequenceEqualSubscriber.prototype.nextB = function(value) {
        if (this._oneComplete && this._a.length === 0) this.emit(false);
        else {
            this._b.push(value);
            this.checkValues();
        }
    };
    SequenceEqualSubscriber.prototype.completeB = function() {
        if (this._oneComplete) this.emit(this._a.length === 0 && this._b.length === 0);
        else this._oneComplete = true;
    };
    return SequenceEqualSubscriber;
}(_subscriber.Subscriber);
var SequenceEqualCompareToSubscriber1 = function(_super) {
    _tslib.__extends(SequenceEqualCompareToSubscriber, _super);
    function SequenceEqualCompareToSubscriber(destination, parent) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        return _this;
    }
    SequenceEqualCompareToSubscriber.prototype._next = function(value) {
        this.parent.nextB(value);
    };
    SequenceEqualCompareToSubscriber.prototype._error = function(err) {
        this.parent.error(err);
        this.unsubscribe();
    };
    SequenceEqualCompareToSubscriber.prototype._complete = function() {
        this.parent.completeB();
        this.unsubscribe();
    };
    return SequenceEqualCompareToSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6ljfT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "share", ()=>share
);
/** PURE_IMPORTS_START _multicast,_refCount,_Subject PURE_IMPORTS_END */ var _multicast = require("./multicast");
var _refCount = require("./refCount");
var _subject = require("../Subject");
function shareSubjectFactory() {
    return new _subject.Subject();
}
function share() {
    return function(source) {
        return _refCount.refCount()(_multicast.multicast(shareSubjectFactory)(source));
    };
}

},{"./multicast":"bCXHb","./refCount":"3Gftq","../Subject":"aLwqa","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5PTNr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shareReplay", ()=>shareReplay
);
/** PURE_IMPORTS_START _ReplaySubject PURE_IMPORTS_END */ var _replaySubject = require("../ReplaySubject");
function shareReplay(configOrBufferSize, windowTime, scheduler) {
    var config;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') config = configOrBufferSize;
    else config = {
        bufferSize: configOrBufferSize,
        windowTime: windowTime,
        refCount: false,
        scheduler: scheduler
    };
    return function(source) {
        return source.lift(shareReplayOperator(config));
    };
}
function shareReplayOperator(_a) {
    var _b = _a.bufferSize, bufferSize = _b === void 0 ? Number.POSITIVE_INFINITY : _b, _c = _a.windowTime, windowTime = _c === void 0 ? Number.POSITIVE_INFINITY : _c, useRefCount = _a.refCount, scheduler = _a.scheduler;
    var subject;
    var refCount = 0;
    var subscription;
    var hasError = false;
    var isComplete = false;
    return function shareReplayOperation(source) {
        refCount++;
        var innerSub;
        if (!subject || hasError) {
            hasError = false;
            subject = new _replaySubject.ReplaySubject(bufferSize, windowTime, scheduler);
            innerSub = subject.subscribe(this);
            subscription = source.subscribe({
                next: function(value) {
                    subject.next(value);
                },
                error: function(err) {
                    hasError = true;
                    subject.error(err);
                },
                complete: function() {
                    isComplete = true;
                    subscription = undefined;
                    subject.complete();
                }
            });
            if (isComplete) subscription = undefined;
        } else innerSub = subject.subscribe(this);
        this.add(function() {
            refCount--;
            innerSub.unsubscribe();
            innerSub = undefined;
            if (subscription && !isComplete && useRefCount && refCount === 0) {
                subscription.unsubscribe();
                subscription = undefined;
                subject = undefined;
            }
        });
    };
}

},{"../ReplaySubject":"9y70s","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"h1n1Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "single", ()=>single
);
/** PURE_IMPORTS_START tslib,_Subscriber,_util_EmptyError PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _emptyError = require("../util/EmptyError");
function single(predicate) {
    return function(source) {
        return source.lift(new SingleOperator1(predicate, source));
    };
}
var SingleOperator1 = function() {
    function SingleOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    SingleOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new SingleSubscriber1(subscriber, this.predicate, this.source));
    };
    return SingleOperator;
}();
var SingleSubscriber1 = function(_super) {
    _tslib.__extends(SingleSubscriber, _super);
    function SingleSubscriber(destination, predicate, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.source = source;
        _this.seenValue = false;
        _this.index = 0;
        return _this;
    }
    SingleSubscriber.prototype.applySingleValue = function(value) {
        if (this.seenValue) this.destination.error('Sequence contains more than one element');
        else {
            this.seenValue = true;
            this.singleValue = value;
        }
    };
    SingleSubscriber.prototype._next = function(value) {
        var index = this.index++;
        if (this.predicate) this.tryNext(value, index);
        else this.applySingleValue(value);
    };
    SingleSubscriber.prototype.tryNext = function(value, index) {
        try {
            if (this.predicate(value, index, this.source)) this.applySingleValue(value);
        } catch (err) {
            this.destination.error(err);
        }
    };
    SingleSubscriber.prototype._complete = function() {
        var destination = this.destination;
        if (this.index > 0) {
            destination.next(this.seenValue ? this.singleValue : undefined);
            destination.complete();
        } else destination.error(new _emptyError.EmptyError);
    };
    return SingleSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","../util/EmptyError":"2BhSf","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6sAHz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "skip", ()=>skip
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function skip(count) {
    return function(source) {
        return source.lift(new SkipOperator1(count));
    };
}
var SkipOperator1 = function() {
    function SkipOperator(total) {
        this.total = total;
    }
    SkipOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new SkipSubscriber1(subscriber, this.total));
    };
    return SkipOperator;
}();
var SkipSubscriber1 = function(_super) {
    _tslib.__extends(SkipSubscriber, _super);
    function SkipSubscriber(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.count = 0;
        return _this;
    }
    SkipSubscriber.prototype._next = function(x) {
        if (++this.count > this.total) this.destination.next(x);
    };
    return SkipSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hhavZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "skipLast", ()=>skipLast
);
/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _argumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");
function skipLast(count) {
    return function(source) {
        return source.lift(new SkipLastOperator1(count));
    };
}
var SkipLastOperator1 = function() {
    function SkipLastOperator(_skipCount) {
        this._skipCount = _skipCount;
        if (this._skipCount < 0) throw new _argumentOutOfRangeError.ArgumentOutOfRangeError;
    }
    SkipLastOperator.prototype.call = function(subscriber, source) {
        if (this._skipCount === 0) return source.subscribe(new _subscriber.Subscriber(subscriber));
        else return source.subscribe(new SkipLastSubscriber1(subscriber, this._skipCount));
    };
    return SkipLastOperator;
}();
var SkipLastSubscriber1 = function(_super) {
    _tslib.__extends(SkipLastSubscriber, _super);
    function SkipLastSubscriber(destination, _skipCount) {
        var _this = _super.call(this, destination) || this;
        _this._skipCount = _skipCount;
        _this._count = 0;
        _this._ring = new Array(_skipCount);
        return _this;
    }
    SkipLastSubscriber.prototype._next = function(value) {
        var skipCount = this._skipCount;
        var count = this._count++;
        if (count < skipCount) this._ring[count] = value;
        else {
            var currentIndex = count % skipCount;
            var ring = this._ring;
            var oldValue = ring[currentIndex];
            ring[currentIndex] = value;
            this.destination.next(oldValue);
        }
    };
    return SkipLastSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","../util/ArgumentOutOfRangeError":"ay3gU","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5Qw3Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "skipUntil", ()=>skipUntil
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function skipUntil(notifier) {
    return function(source) {
        return source.lift(new SkipUntilOperator1(notifier));
    };
}
var SkipUntilOperator1 = function() {
    function SkipUntilOperator(notifier) {
        this.notifier = notifier;
    }
    SkipUntilOperator.prototype.call = function(destination, source) {
        return source.subscribe(new SkipUntilSubscriber1(destination, this.notifier));
    };
    return SkipUntilOperator;
}();
var SkipUntilSubscriber1 = function(_super) {
    _tslib.__extends(SkipUntilSubscriber, _super);
    function SkipUntilSubscriber(destination, notifier) {
        var _this = _super.call(this, destination) || this;
        _this.hasValue = false;
        var innerSubscriber = new _innerSubscribe.SimpleInnerSubscriber(_this);
        _this.add(innerSubscriber);
        _this.innerSubscription = innerSubscriber;
        var innerSubscription = _innerSubscribe.innerSubscribe(notifier, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            _this.add(innerSubscription);
            _this.innerSubscription = innerSubscription;
        }
        return _this;
    }
    SkipUntilSubscriber.prototype._next = function(value) {
        if (this.hasValue) _super.prototype._next.call(this, value);
    };
    SkipUntilSubscriber.prototype.notifyNext = function() {
        this.hasValue = true;
        if (this.innerSubscription) this.innerSubscription.unsubscribe();
    };
    SkipUntilSubscriber.prototype.notifyComplete = function() {
    };
    return SkipUntilSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"adzYy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "skipWhile", ()=>skipWhile
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function skipWhile(predicate) {
    return function(source) {
        return source.lift(new SkipWhileOperator1(predicate));
    };
}
var SkipWhileOperator1 = function() {
    function SkipWhileOperator(predicate) {
        this.predicate = predicate;
    }
    SkipWhileOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new SkipWhileSubscriber1(subscriber, this.predicate));
    };
    return SkipWhileOperator;
}();
var SkipWhileSubscriber1 = function(_super) {
    _tslib.__extends(SkipWhileSubscriber, _super);
    function SkipWhileSubscriber(destination, predicate) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.skipping = true;
        _this.index = 0;
        return _this;
    }
    SkipWhileSubscriber.prototype._next = function(value) {
        var destination = this.destination;
        if (this.skipping) this.tryCallPredicate(value);
        if (!this.skipping) destination.next(value);
    };
    SkipWhileSubscriber.prototype.tryCallPredicate = function(value) {
        try {
            var result = this.predicate(value, this.index++);
            this.skipping = Boolean(result);
        } catch (err) {
            this.destination.error(err);
        }
    };
    return SkipWhileSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gY6ot":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startWith", ()=>startWith
);
/** PURE_IMPORTS_START _observable_concat,_util_isScheduler PURE_IMPORTS_END */ var _concat = require("../observable/concat");
var _isScheduler = require("../util/isScheduler");
function startWith() {
    var array = [];
    for(var _i = 0; _i < arguments.length; _i++)array[_i] = arguments[_i];
    var scheduler = array[array.length - 1];
    if (_isScheduler.isScheduler(scheduler)) {
        array.pop();
        return function(source) {
            return _concat.concat(array, source, scheduler);
        };
    } else return function(source) {
        return _concat.concat(array, source);
    };
}

},{"../observable/concat":"cR4Mp","../util/isScheduler":"ga8ix","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"l7gRk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeOn", ()=>subscribeOn
);
/** PURE_IMPORTS_START _observable_SubscribeOnObservable PURE_IMPORTS_END */ var _subscribeOnObservable = require("../observable/SubscribeOnObservable");
function subscribeOn(scheduler, delay) {
    if (delay === void 0) delay = 0;
    return function subscribeOnOperatorFunction(source) {
        return source.lift(new SubscribeOnOperator1(scheduler, delay));
    };
}
var SubscribeOnOperator1 = function() {
    function SubscribeOnOperator(scheduler, delay) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    SubscribeOnOperator.prototype.call = function(subscriber, source) {
        return new _subscribeOnObservable.SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
    };
    return SubscribeOnOperator;
}();

},{"../observable/SubscribeOnObservable":"hyDMg","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hyDMg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubscribeOnObservable", ()=>SubscribeOnObservable1
);
/** PURE_IMPORTS_START tslib,_Observable,_scheduler_asap,_util_isNumeric PURE_IMPORTS_END */ var _tslib = require("tslib");
var _observable = require("../Observable");
var _asap = require("../scheduler/asap");
var _isNumeric = require("../util/isNumeric");
var SubscribeOnObservable1 = function(_super) {
    _tslib.__extends(SubscribeOnObservable, _super);
    function SubscribeOnObservable(source, delayTime, scheduler) {
        if (delayTime === void 0) delayTime = 0;
        if (scheduler === void 0) scheduler = _asap.asap;
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.delayTime = delayTime;
        _this.scheduler = scheduler;
        if (!_isNumeric.isNumeric(delayTime) || delayTime < 0) _this.delayTime = 0;
        if (!scheduler || typeof scheduler.schedule !== 'function') _this.scheduler = _asap.asap;
        return _this;
    }
    SubscribeOnObservable.create = function(source, delay, scheduler) {
        if (delay === void 0) delay = 0;
        if (scheduler === void 0) scheduler = _asap.asap;
        return new SubscribeOnObservable(source, delay, scheduler);
    };
    SubscribeOnObservable.dispatch = function(arg) {
        var source = arg.source, subscriber = arg.subscriber;
        return this.add(source.subscribe(subscriber));
    };
    SubscribeOnObservable.prototype._subscribe = function(subscriber) {
        var delay = this.delayTime;
        var source = this.source;
        var scheduler = this.scheduler;
        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
            source: source,
            subscriber: subscriber
        });
    };
    return SubscribeOnObservable;
}(_observable.Observable);

},{"tslib":"j55WF","../Observable":"k7KRh","../scheduler/asap":"huX4L","../util/isNumeric":"1K54H","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aDegn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "switchAll", ()=>switchAll
);
/** PURE_IMPORTS_START _switchMap,_util_identity PURE_IMPORTS_END */ var _switchMap = require("./switchMap");
var _identity = require("../util/identity");
function switchAll() {
    return _switchMap.switchMap(_identity.identity);
}

},{"./switchMap":"ioz5N","../util/identity":"cqToy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ioz5N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "switchMap", ()=>switchMap
);
/** PURE_IMPORTS_START tslib,_map,_observable_from,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _map = require("./map");
var _from = require("../observable/from");
var _innerSubscribe = require("../innerSubscribe");
function switchMap(project, resultSelector) {
    if (typeof resultSelector === 'function') return function(source) {
        return source.pipe(switchMap(function(a, i) {
            return _from.from(project(a, i)).pipe(_map.map(function(b, ii) {
                return resultSelector(a, b, i, ii);
            }));
        }));
    };
    return function(source) {
        return source.lift(new SwitchMapOperator1(project));
    };
}
var SwitchMapOperator1 = function() {
    function SwitchMapOperator(project) {
        this.project = project;
    }
    SwitchMapOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber1(subscriber, this.project));
    };
    return SwitchMapOperator;
}();
var SwitchMapSubscriber1 = function(_super) {
    _tslib.__extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.index = 0;
        return _this;
    }
    SwitchMapSubscriber.prototype._next = function(value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        } catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result);
    };
    SwitchMapSubscriber.prototype._innerSub = function(result) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) innerSubscription.unsubscribe();
        var innerSubscriber = new _innerSubscribe.SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        this.innerSubscription = _innerSubscribe.innerSubscribe(result, innerSubscriber);
        if (this.innerSubscription !== innerSubscriber) destination.add(this.innerSubscription);
    };
    SwitchMapSubscriber.prototype._complete = function() {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) _super.prototype._complete.call(this);
        this.unsubscribe();
    };
    SwitchMapSubscriber.prototype._unsubscribe = function() {
        this.innerSubscription = undefined;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function() {
        this.innerSubscription = undefined;
        if (this.isStopped) _super.prototype._complete.call(this);
    };
    SwitchMapSubscriber.prototype.notifyNext = function(innerValue) {
        this.destination.next(innerValue);
    };
    return SwitchMapSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","./map":"6BlqD","../observable/from":"l9OnS","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5tscY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "switchMapTo", ()=>switchMapTo
);
/** PURE_IMPORTS_START _switchMap PURE_IMPORTS_END */ var _switchMap = require("./switchMap");
function switchMapTo(innerObservable, resultSelector) {
    return resultSelector ? _switchMap.switchMap(function() {
        return innerObservable;
    }, resultSelector) : _switchMap.switchMap(function() {
        return innerObservable;
    });
}

},{"./switchMap":"ioz5N","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iD2pG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "takeUntil", ()=>takeUntil
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function takeUntil(notifier) {
    return function(source) {
        return source.lift(new TakeUntilOperator1(notifier));
    };
}
var TakeUntilOperator1 = function() {
    function TakeUntilOperator(notifier) {
        this.notifier = notifier;
    }
    TakeUntilOperator.prototype.call = function(subscriber, source) {
        var takeUntilSubscriber = new TakeUntilSubscriber1(subscriber);
        var notifierSubscription = _innerSubscribe.innerSubscribe(this.notifier, new _innerSubscribe.SimpleInnerSubscriber(takeUntilSubscriber));
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    };
    return TakeUntilOperator;
}();
var TakeUntilSubscriber1 = function(_super) {
    _tslib.__extends(TakeUntilSubscriber, _super);
    function TakeUntilSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.seenValue = false;
        return _this;
    }
    TakeUntilSubscriber.prototype.notifyNext = function() {
        this.seenValue = true;
        this.complete();
    };
    TakeUntilSubscriber.prototype.notifyComplete = function() {
    };
    return TakeUntilSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jI2mK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "takeWhile", ()=>takeWhile
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function takeWhile(predicate, inclusive) {
    if (inclusive === void 0) inclusive = false;
    return function(source) {
        return source.lift(new TakeWhileOperator1(predicate, inclusive));
    };
}
var TakeWhileOperator1 = function() {
    function TakeWhileOperator(predicate, inclusive) {
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
    TakeWhileOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new TakeWhileSubscriber1(subscriber, this.predicate, this.inclusive));
    };
    return TakeWhileOperator;
}();
var TakeWhileSubscriber1 = function(_super) {
    _tslib.__extends(TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate, inclusive) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.inclusive = inclusive;
        _this.index = 0;
        return _this;
    }
    TakeWhileSubscriber.prototype._next = function(value) {
        var destination = this.destination;
        var result;
        try {
            result = this.predicate(value, this.index++);
        } catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function(value, predicateResult) {
        var destination = this.destination;
        if (Boolean(predicateResult)) destination.next(value);
        else {
            if (this.inclusive) destination.next(value);
            destination.complete();
        }
    };
    return TakeWhileSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"emorw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tap", ()=>tap
);
/** PURE_IMPORTS_START tslib,_Subscriber,_util_noop,_util_isFunction PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _noop = require("../util/noop");
var _isFunction = require("../util/isFunction");
function tap(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
        return source.lift(new DoOperator1(nextOrObserver, error, complete));
    };
}
var DoOperator1 = function() {
    function DoOperator(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new TapSubscriber1(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator;
}();
var TapSubscriber1 = function(_super) {
    _tslib.__extends(TapSubscriber, _super);
    function TapSubscriber(destination, observerOrNext, error, complete) {
        var _this = _super.call(this, destination) || this;
        _this._tapNext = _noop.noop;
        _this._tapError = _noop.noop;
        _this._tapComplete = _noop.noop;
        _this._tapError = error || _noop.noop;
        _this._tapComplete = complete || _noop.noop;
        if (_isFunction.isFunction(observerOrNext)) {
            _this._context = _this;
            _this._tapNext = observerOrNext;
        } else if (observerOrNext) {
            _this._context = observerOrNext;
            _this._tapNext = observerOrNext.next || _noop.noop;
            _this._tapError = observerOrNext.error || _noop.noop;
            _this._tapComplete = observerOrNext.complete || _noop.noop;
        }
        return _this;
    }
    TapSubscriber.prototype._next = function(value) {
        try {
            this._tapNext.call(this._context, value);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(value);
    };
    TapSubscriber.prototype._error = function(err) {
        try {
            this._tapError.call(this._context, err);
        } catch (err1) {
            this.destination.error(err1);
            return;
        }
        this.destination.error(err);
    };
    TapSubscriber.prototype._complete = function() {
        try {
            this._tapComplete.call(this._context);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        return this.destination.complete();
    };
    return TapSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","../util/noop":"cZMY5","../util/isFunction":"hLVqF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9o3QF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultThrottleConfig", ()=>defaultThrottleConfig
);
parcelHelpers.export(exports, "throttle", ()=>throttle
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
var defaultThrottleConfig = {
    leading: true,
    trailing: false
};
function throttle(durationSelector, config) {
    if (config === void 0) config = defaultThrottleConfig;
    return function(source) {
        return source.lift(new ThrottleOperator1(durationSelector, !!config.leading, !!config.trailing));
    };
}
var ThrottleOperator1 = function() {
    function ThrottleOperator(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new ThrottleSubscriber1(subscriber, this.durationSelector, this.leading, this.trailing));
    };
    return ThrottleOperator;
}();
var ThrottleSubscriber1 = function(_super) {
    _tslib.__extends(ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.durationSelector = durationSelector;
        _this._leading = _leading;
        _this._trailing = _trailing;
        _this._hasValue = false;
        return _this;
    }
    ThrottleSubscriber.prototype._next = function(value) {
        this._hasValue = true;
        this._sendValue = value;
        if (!this._throttled) {
            if (this._leading) this.send();
            else this.throttle(value);
        }
    };
    ThrottleSubscriber.prototype.send = function() {
        var _a = this, _hasValue = _a._hasValue, _sendValue = _a._sendValue;
        if (_hasValue) {
            this.destination.next(_sendValue);
            this.throttle(_sendValue);
        }
        this._hasValue = false;
        this._sendValue = undefined;
    };
    ThrottleSubscriber.prototype.throttle = function(value) {
        var duration = this.tryDurationSelector(value);
        if (!!duration) this.add(this._throttled = _innerSubscribe.innerSubscribe(duration, new _innerSubscribe.SimpleInnerSubscriber(this)));
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function(value) {
        try {
            return this.durationSelector(value);
        } catch (err) {
            this.destination.error(err);
            return null;
        }
    };
    ThrottleSubscriber.prototype.throttlingDone = function() {
        var _a = this, _throttled = _a._throttled, _trailing = _a._trailing;
        if (_throttled) _throttled.unsubscribe();
        this._throttled = undefined;
        if (_trailing) this.send();
    };
    ThrottleSubscriber.prototype.notifyNext = function() {
        this.throttlingDone();
    };
    ThrottleSubscriber.prototype.notifyComplete = function() {
        this.throttlingDone();
    };
    return ThrottleSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lIFCi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "throttleTime", ()=>throttleTime
);
/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async,_throttle PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _async = require("../scheduler/async");
var _throttle = require("./throttle");
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) scheduler = _async.async;
    if (config === void 0) config = _throttle.defaultThrottleConfig;
    return function(source) {
        return source.lift(new ThrottleTimeOperator1(duration, scheduler, config.leading, config.trailing));
    };
}
var ThrottleTimeOperator1 = function() {
    function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleTimeOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new ThrottleTimeSubscriber1(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
    };
    return ThrottleTimeOperator;
}();
var ThrottleTimeSubscriber1 = function(_super) {
    _tslib.__extends(ThrottleTimeSubscriber, _super);
    function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
        var _this = _super.call(this, destination) || this;
        _this.duration = duration;
        _this.scheduler = scheduler;
        _this.leading = leading;
        _this.trailing = trailing;
        _this._hasTrailingValue = false;
        _this._trailingValue = null;
        return _this;
    }
    ThrottleTimeSubscriber.prototype._next = function(value) {
        if (this.throttled) {
            if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        } else {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, {
                subscriber: this
            }));
            if (this.leading) this.destination.next(value);
            else if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
    };
    ThrottleTimeSubscriber.prototype._complete = function() {
        if (this._hasTrailingValue) {
            this.destination.next(this._trailingValue);
            this.destination.complete();
        } else this.destination.complete();
    };
    ThrottleTimeSubscriber.prototype.clearThrottle = function() {
        var throttled = this.throttled;
        if (throttled) {
            if (this.trailing && this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this._trailingValue = null;
                this._hasTrailingValue = false;
            }
            throttled.unsubscribe();
            this.remove(throttled);
            this.throttled = null;
        }
    };
    return ThrottleTimeSubscriber;
}(_subscriber.Subscriber);
function dispatchNext(arg) {
    var subscriber = arg.subscriber;
    subscriber.clearThrottle();
}

},{"tslib":"j55WF","../Subscriber":"k0EYi","../scheduler/async":"4Vd5T","./throttle":"9o3QF","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fZb4B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeInterval", ()=>timeInterval
);
parcelHelpers.export(exports, "TimeInterval", ()=>TimeInterval1
);
/** PURE_IMPORTS_START _scheduler_async,_scan,_observable_defer,_map PURE_IMPORTS_END */ var _async = require("../scheduler/async");
var _scan = require("./scan");
var _defer = require("../observable/defer");
var _map = require("./map");
function timeInterval(scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    return function(source) {
        return _defer.defer(function() {
            return source.pipe(_scan.scan(function(_a, value) {
                var current = _a.current;
                return {
                    value: value,
                    current: scheduler.now(),
                    last: current
                };
            }, {
                current: scheduler.now(),
                value: undefined,
                last: undefined
            }), _map.map(function(_a) {
                var current = _a.current, last = _a.last, value = _a.value;
                return new TimeInterval1(value, current - last);
            }));
        });
    };
}
var TimeInterval1 = function() {
    function TimeInterval(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval;
}();

},{"../scheduler/async":"4Vd5T","./scan":"iA7Aw","../observable/defer":"cYAxq","./map":"6BlqD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"89Llk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeout", ()=>timeout
);
/** PURE_IMPORTS_START _scheduler_async,_util_TimeoutError,_timeoutWith,_observable_throwError PURE_IMPORTS_END */ var _async = require("../scheduler/async");
var _timeoutError = require("../util/TimeoutError");
var _timeoutWith = require("./timeoutWith");
var _throwError = require("../observable/throwError");
function timeout(due, scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    return _timeoutWith.timeoutWith(due, _throwError.throwError(new _timeoutError.TimeoutError()), scheduler);
}

},{"../scheduler/async":"4Vd5T","../util/TimeoutError":"5kKEt","./timeoutWith":"6SGwL","../observable/throwError":"kMWjR","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6SGwL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeoutWith", ()=>timeoutWith
);
/** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _async = require("../scheduler/async");
var _isDate = require("../util/isDate");
var _innerSubscribe = require("../innerSubscribe");
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    return function(source) {
        var absoluteTimeout = _isDate.isDate(due);
        var waitFor = absoluteTimeout ? +due - scheduler.now() : Math.abs(due);
        return source.lift(new TimeoutWithOperator1(waitFor, absoluteTimeout, withObservable, scheduler));
    };
}
var TimeoutWithOperator1 = function() {
    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
    }
    TimeoutWithOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new TimeoutWithSubscriber1(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
    };
    return TimeoutWithOperator;
}();
var TimeoutWithSubscriber1 = function(_super) {
    _tslib.__extends(TimeoutWithSubscriber, _super);
    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.absoluteTimeout = absoluteTimeout;
        _this.waitFor = waitFor;
        _this.withObservable = withObservable;
        _this.scheduler = scheduler;
        _this.scheduleTimeout();
        return _this;
    }
    TimeoutWithSubscriber.dispatchTimeout = function(subscriber) {
        var withObservable = subscriber.withObservable;
        subscriber._unsubscribeAndRecycle();
        subscriber.add(_innerSubscribe.innerSubscribe(withObservable, new _innerSubscribe.SimpleInnerSubscriber(subscriber)));
    };
    TimeoutWithSubscriber.prototype.scheduleTimeout = function() {
        var action = this.action;
        if (action) this.action = action.schedule(this, this.waitFor);
        else this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
    };
    TimeoutWithSubscriber.prototype._next = function(value) {
        if (!this.absoluteTimeout) this.scheduleTimeout();
        _super.prototype._next.call(this, value);
    };
    TimeoutWithSubscriber.prototype._unsubscribe = function() {
        this.action = undefined;
        this.scheduler = null;
        this.withObservable = null;
    };
    return TimeoutWithSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../scheduler/async":"4Vd5T","../util/isDate":"fThFG","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bRQsd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timestamp", ()=>timestamp1
);
parcelHelpers.export(exports, "Timestamp", ()=>Timestamp1
);
/** PURE_IMPORTS_START _scheduler_async,_map PURE_IMPORTS_END */ var _async = require("../scheduler/async");
var _map = require("./map");
function timestamp1(scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    return _map.map(function(value) {
        return new Timestamp1(value, scheduler.now());
    });
}
var Timestamp1 = function() {
    function Timestamp(value, timestamp) {
        this.value = value;
        this.timestamp = timestamp;
    }
    return Timestamp;
}();

},{"../scheduler/async":"4Vd5T","./map":"6BlqD","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gqziW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toArray", ()=>toArray
);
/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */ var _reduce = require("./reduce");
function toArrayReducer(arr, item, index) {
    if (index === 0) return [
        item
    ];
    arr.push(item);
    return arr;
}
function toArray() {
    return _reduce.reduce(toArrayReducer, []);
}

},{"./reduce":"unAFh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dIhZF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "window", ()=>window
);
/** PURE_IMPORTS_START tslib,_Subject,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("../Subject");
var _innerSubscribe = require("../innerSubscribe");
function window(windowBoundaries) {
    return function windowOperatorFunction(source) {
        return source.lift(new WindowOperator1(windowBoundaries));
    };
}
var WindowOperator1 = function() {
    function WindowOperator(windowBoundaries) {
        this.windowBoundaries = windowBoundaries;
    }
    WindowOperator.prototype.call = function(subscriber, source) {
        var windowSubscriber = new WindowSubscriber1(subscriber);
        var sourceSubscription = source.subscribe(windowSubscriber);
        if (!sourceSubscription.closed) windowSubscriber.add(_innerSubscribe.innerSubscribe(this.windowBoundaries, new _innerSubscribe.SimpleInnerSubscriber(windowSubscriber)));
        return sourceSubscription;
    };
    return WindowOperator;
}();
var WindowSubscriber1 = function(_super) {
    _tslib.__extends(WindowSubscriber, _super);
    function WindowSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.window = new _subject.Subject();
        destination.next(_this.window);
        return _this;
    }
    WindowSubscriber.prototype.notifyNext = function() {
        this.openWindow();
    };
    WindowSubscriber.prototype.notifyError = function(error) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function() {
        this._complete();
    };
    WindowSubscriber.prototype._next = function(value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function(err) {
        this.window.error(err);
        this.destination.error(err);
    };
    WindowSubscriber.prototype._complete = function() {
        this.window.complete();
        this.destination.complete();
    };
    WindowSubscriber.prototype._unsubscribe = function() {
        this.window = null;
    };
    WindowSubscriber.prototype.openWindow = function() {
        var prevWindow = this.window;
        if (prevWindow) prevWindow.complete();
        var destination = this.destination;
        var newWindow = this.window = new _subject.Subject();
        destination.next(newWindow);
    };
    return WindowSubscriber;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"j55WF","../Subject":"aLwqa","../innerSubscribe":"gI2Fn","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kCyem":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "windowCount", ()=>windowCount
);
/** PURE_IMPORTS_START tslib,_Subscriber,_Subject PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _subject = require("../Subject");
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) startWindowEvery = 0;
    return function windowCountOperatorFunction(source) {
        return source.lift(new WindowCountOperator1(windowSize, startWindowEvery));
    };
}
var WindowCountOperator1 = function() {
    function WindowCountOperator(windowSize, startWindowEvery) {
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
    }
    WindowCountOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new WindowCountSubscriber1(subscriber, this.windowSize, this.startWindowEvery));
    };
    return WindowCountOperator;
}();
var WindowCountSubscriber1 = function(_super) {
    _tslib.__extends(WindowCountSubscriber, _super);
    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.windowSize = windowSize;
        _this.startWindowEvery = startWindowEvery;
        _this.windows = [
            new _subject.Subject()
        ];
        _this.count = 0;
        destination.next(_this.windows[0]);
        return _this;
    }
    WindowCountSubscriber.prototype._next = function(value) {
        var startWindowEvery = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize;
        var destination = this.destination;
        var windowSize = this.windowSize;
        var windows = this.windows;
        var len = windows.length;
        for(var i = 0; i < len && !this.closed; i++)windows[i].next(value);
        var c = this.count - windowSize + 1;
        if (c >= 0 && c % startWindowEvery === 0 && !this.closed) windows.shift().complete();
        if (++this.count % startWindowEvery === 0 && !this.closed) {
            var window_1 = new _subject.Subject();
            windows.push(window_1);
            destination.next(window_1);
        }
    };
    WindowCountSubscriber.prototype._error = function(err) {
        var windows = this.windows;
        if (windows) while(windows.length > 0 && !this.closed)windows.shift().error(err);
        this.destination.error(err);
    };
    WindowCountSubscriber.prototype._complete = function() {
        var windows = this.windows;
        if (windows) while(windows.length > 0 && !this.closed)windows.shift().complete();
        this.destination.complete();
    };
    WindowCountSubscriber.prototype._unsubscribe = function() {
        this.count = 0;
        this.windows = null;
    };
    return WindowCountSubscriber;
}(_subscriber.Subscriber);

},{"tslib":"j55WF","../Subscriber":"k0EYi","../Subject":"aLwqa","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dlq58":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "windowTime", ()=>windowTime
);
/** PURE_IMPORTS_START tslib,_Subject,_scheduler_async,_Subscriber,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("../Subject");
var _async = require("../scheduler/async");
var _subscriber = require("../Subscriber");
var _isNumeric = require("../util/isNumeric");
var _isScheduler = require("../util/isScheduler");
function windowTime(windowTimeSpan) {
    var scheduler = _async.async;
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (_isScheduler.isScheduler(arguments[3])) scheduler = arguments[3];
    if (_isScheduler.isScheduler(arguments[2])) scheduler = arguments[2];
    else if (_isNumeric.isNumeric(arguments[2])) maxWindowSize = Number(arguments[2]);
    if (_isScheduler.isScheduler(arguments[1])) scheduler = arguments[1];
    else if (_isNumeric.isNumeric(arguments[1])) windowCreationInterval = Number(arguments[1]);
    return function windowTimeOperatorFunction(source) {
        return source.lift(new WindowTimeOperator1(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
    };
}
var WindowTimeOperator1 = function() {
    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
    }
    WindowTimeOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new WindowTimeSubscriber1(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
    };
    return WindowTimeOperator;
}();
var CountedSubject1 = function(_super) {
    _tslib.__extends(CountedSubject, _super);
    function CountedSubject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._numberOfNextedValues = 0;
        return _this;
    }
    CountedSubject.prototype.next = function(value) {
        this._numberOfNextedValues++;
        _super.prototype.next.call(this, value);
    };
    Object.defineProperty(CountedSubject.prototype, "numberOfNextedValues", {
        get: function() {
            return this._numberOfNextedValues;
        },
        enumerable: true,
        configurable: true
    });
    return CountedSubject;
}(_subject.Subject);
var WindowTimeSubscriber1 = function(_super) {
    _tslib.__extends(WindowTimeSubscriber, _super);
    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.windowTimeSpan = windowTimeSpan;
        _this.windowCreationInterval = windowCreationInterval;
        _this.maxWindowSize = maxWindowSize;
        _this.scheduler = scheduler;
        _this.windows = [];
        var window = _this.openWindow();
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            var closeState = {
                subscriber: _this,
                window: window,
                context: null
            };
            var creationState = {
                windowTimeSpan: windowTimeSpan,
                windowCreationInterval: windowCreationInterval,
                subscriber: _this,
                scheduler: scheduler
            };
            _this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
            _this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
        } else {
            var timeSpanOnlyState = {
                subscriber: _this,
                window: window,
                windowTimeSpan: windowTimeSpan
            };
            _this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
        }
        return _this;
    }
    WindowTimeSubscriber.prototype._next = function(value) {
        var windows = this.windows;
        var len = windows.length;
        for(var i = 0; i < len; i++){
            var window_1 = windows[i];
            if (!window_1.closed) {
                window_1.next(value);
                if (window_1.numberOfNextedValues >= this.maxWindowSize) this.closeWindow(window_1);
            }
        }
    };
    WindowTimeSubscriber.prototype._error = function(err) {
        var windows = this.windows;
        while(windows.length > 0)windows.shift().error(err);
        this.destination.error(err);
    };
    WindowTimeSubscriber.prototype._complete = function() {
        var windows = this.windows;
        while(windows.length > 0){
            var window_2 = windows.shift();
            if (!window_2.closed) window_2.complete();
        }
        this.destination.complete();
    };
    WindowTimeSubscriber.prototype.openWindow = function() {
        var window = new CountedSubject1();
        this.windows.push(window);
        var destination = this.destination;
        destination.next(window);
        return window;
    };
    WindowTimeSubscriber.prototype.closeWindow = function(window) {
        window.complete();
        var windows = this.windows;
        windows.splice(windows.indexOf(window), 1);
    };
    return WindowTimeSubscriber;
}(_subscriber.Subscriber);
function dispatchWindowTimeSpanOnly(state) {
    var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
    if (window) subscriber.closeWindow(window);
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
}
function dispatchWindowCreation(state) {
    var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
    var window = subscriber.openWindow();
    var action = this;
    var context = {
        action: action,
        subscription: null
    };
    var timeSpanState = {
        subscriber: subscriber,
        window: window,
        context: context
    };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
}
function dispatchWindowClose(state) {
    var subscriber = state.subscriber, window = state.window, context = state.context;
    if (context && context.action && context.subscription) context.action.remove(context.subscription);
    subscriber.closeWindow(window);
}

},{"tslib":"j55WF","../Subject":"aLwqa","../scheduler/async":"4Vd5T","../Subscriber":"k0EYi","../util/isNumeric":"1K54H","../util/isScheduler":"ga8ix","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lKyWI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "windowToggle", ()=>windowToggle
);
/** PURE_IMPORTS_START tslib,_Subject,_Subscription,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("../Subject");
var _subscription = require("../Subscription");
var _outerSubscriber = require("../OuterSubscriber");
var _subscribeToResult = require("../util/subscribeToResult");
function windowToggle(openings, closingSelector) {
    return function(source) {
        return source.lift(new WindowToggleOperator1(openings, closingSelector));
    };
}
var WindowToggleOperator1 = function() {
    function WindowToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    WindowToggleOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new WindowToggleSubscriber1(subscriber, this.openings, this.closingSelector));
    };
    return WindowToggleOperator;
}();
var WindowToggleSubscriber1 = function(_super) {
    _tslib.__extends(WindowToggleSubscriber, _super);
    function WindowToggleSubscriber(destination, openings, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.openings = openings;
        _this.closingSelector = closingSelector;
        _this.contexts = [];
        _this.add(_this.openSubscription = _subscribeToResult.subscribeToResult(_this, openings, openings));
        return _this;
    }
    WindowToggleSubscriber.prototype._next = function(value) {
        var contexts = this.contexts;
        if (contexts) {
            var len = contexts.length;
            for(var i = 0; i < len; i++)contexts[i].window.next(value);
        }
    };
    WindowToggleSubscriber.prototype._error = function(err) {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while(++index < len){
                var context_1 = contexts[index];
                context_1.window.error(err);
                context_1.subscription.unsubscribe();
            }
        }
        _super.prototype._error.call(this, err);
    };
    WindowToggleSubscriber.prototype._complete = function() {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while(++index < len){
                var context_2 = contexts[index];
                context_2.window.complete();
                context_2.subscription.unsubscribe();
            }
        }
        _super.prototype._complete.call(this);
    };
    WindowToggleSubscriber.prototype._unsubscribe = function() {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while(++index < len){
                var context_3 = contexts[index];
                context_3.window.unsubscribe();
                context_3.subscription.unsubscribe();
            }
        }
    };
    WindowToggleSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (outerValue === this.openings) {
            var closingNotifier = void 0;
            try {
                var closingSelector = this.closingSelector;
                closingNotifier = closingSelector(innerValue);
            } catch (e) {
                return this.error(e);
            }
            var window_1 = new _subject.Subject();
            var subscription = new _subscription.Subscription();
            var context_4 = {
                window: window_1,
                subscription: subscription
            };
            this.contexts.push(context_4);
            var innerSubscription = _subscribeToResult.subscribeToResult(this, closingNotifier, context_4);
            if (innerSubscription.closed) this.closeWindow(this.contexts.length - 1);
            else {
                innerSubscription.context = context_4;
                subscription.add(innerSubscription);
            }
            this.destination.next(window_1);
        } else this.closeWindow(this.contexts.indexOf(outerValue));
    };
    WindowToggleSubscriber.prototype.notifyError = function(err) {
        this.error(err);
    };
    WindowToggleSubscriber.prototype.notifyComplete = function(inner) {
        if (inner !== this.openSubscription) this.closeWindow(this.contexts.indexOf(inner.context));
    };
    WindowToggleSubscriber.prototype.closeWindow = function(index) {
        if (index === -1) return;
        var contexts = this.contexts;
        var context = contexts[index];
        var window = context.window, subscription = context.subscription;
        contexts.splice(index, 1);
        window.complete();
        subscription.unsubscribe();
    };
    return WindowToggleSubscriber;
}(_outerSubscriber.OuterSubscriber);

},{"tslib":"j55WF","../Subject":"aLwqa","../Subscription":"ceYgr","../OuterSubscriber":"76kEv","../util/subscribeToResult":"8oD0J","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4rKcS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "windowWhen", ()=>windowWhen
);
/** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("../Subject");
var _outerSubscriber = require("../OuterSubscriber");
var _subscribeToResult = require("../util/subscribeToResult");
function windowWhen(closingSelector) {
    return function windowWhenOperatorFunction(source) {
        return source.lift(new WindowOperator1(closingSelector));
    };
}
var WindowOperator1 = function() {
    function WindowOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    WindowOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new WindowSubscriber1(subscriber, this.closingSelector));
    };
    return WindowOperator;
}();
var WindowSubscriber1 = function(_super) {
    _tslib.__extends(WindowSubscriber, _super);
    function WindowSubscriber(destination, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.closingSelector = closingSelector;
        _this.openWindow();
        return _this;
    }
    WindowSubscriber.prototype.notifyNext = function(_outerValue, _innerValue, _outerIndex, _innerIndex, innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype.notifyError = function(error) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function(innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype._next = function(value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function(err) {
        this.window.error(err);
        this.destination.error(err);
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype._complete = function() {
        this.window.complete();
        this.destination.complete();
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype.unsubscribeClosingNotification = function() {
        if (this.closingNotification) this.closingNotification.unsubscribe();
    };
    WindowSubscriber.prototype.openWindow = function(innerSub) {
        if (innerSub === void 0) innerSub = null;
        if (innerSub) {
            this.remove(innerSub);
            innerSub.unsubscribe();
        }
        var prevWindow = this.window;
        if (prevWindow) prevWindow.complete();
        var window = this.window = new _subject.Subject();
        this.destination.next(window);
        var closingNotifier;
        try {
            var closingSelector = this.closingSelector;
            closingNotifier = closingSelector();
        } catch (e) {
            this.destination.error(e);
            this.window.error(e);
            return;
        }
        this.add(this.closingNotification = _subscribeToResult.subscribeToResult(this, closingNotifier));
    };
    return WindowSubscriber;
}(_outerSubscriber.OuterSubscriber);

},{"tslib":"j55WF","../Subject":"aLwqa","../OuterSubscriber":"76kEv","../util/subscribeToResult":"8oD0J","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2RiEP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withLatestFrom", ()=>withLatestFrom
);
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */ var _tslib = require("tslib");
var _outerSubscriber = require("../OuterSubscriber");
var _subscribeToResult = require("../util/subscribeToResult");
function withLatestFrom() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    return function(source) {
        var project;
        if (typeof args[args.length - 1] === 'function') project = args.pop();
        var observables = args;
        return source.lift(new WithLatestFromOperator1(observables, project));
    };
}
var WithLatestFromOperator1 = function() {
    function WithLatestFromOperator(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    WithLatestFromOperator.prototype.call = function(subscriber, source) {
        return source.subscribe(new WithLatestFromSubscriber1(subscriber, this.observables, this.project));
    };
    return WithLatestFromOperator;
}();
var WithLatestFromSubscriber1 = function(_super) {
    _tslib.__extends(WithLatestFromSubscriber, _super);
    function WithLatestFromSubscriber(destination, observables, project) {
        var _this = _super.call(this, destination) || this;
        _this.observables = observables;
        _this.project = project;
        _this.toRespond = [];
        var len = observables.length;
        _this.values = new Array(len);
        for(var i = 0; i < len; i++)_this.toRespond.push(i);
        for(var i = 0; i < len; i++){
            var observable = observables[i];
            _this.add(_subscribeToResult.subscribeToResult(_this, observable, undefined, i));
        }
        return _this;
    }
    WithLatestFromSubscriber.prototype.notifyNext = function(_outerValue, innerValue, outerIndex) {
        this.values[outerIndex] = innerValue;
        var toRespond = this.toRespond;
        if (toRespond.length > 0) {
            var found = toRespond.indexOf(outerIndex);
            if (found !== -1) toRespond.splice(found, 1);
        }
    };
    WithLatestFromSubscriber.prototype.notifyComplete = function() {
    };
    WithLatestFromSubscriber.prototype._next = function(value) {
        if (this.toRespond.length === 0) {
            var args = [
                value
            ].concat(this.values);
            if (this.project) this._tryProject(args);
            else this.destination.next(args);
        }
    };
    WithLatestFromSubscriber.prototype._tryProject = function(args) {
        var result;
        try {
            result = this.project.apply(this, args);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return WithLatestFromSubscriber;
}(_outerSubscriber.OuterSubscriber);

},{"tslib":"j55WF","../OuterSubscriber":"76kEv","../util/subscribeToResult":"8oD0J","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dhKYw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zip", ()=>zip
);
/** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */ var _zip = require("../observable/zip");
function zip() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    return function zipOperatorFunction(source) {
        return source.lift.call(_zip.zip.apply(void 0, [
            source
        ].concat(observables)));
    };
}

},{"../observable/zip":"1e52j","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6L8UY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zipAll", ()=>zipAll
);
/** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */ var _zip = require("../observable/zip");
function zipAll(project) {
    return function(source) {
        return source.lift(new _zip.ZipOperator(project));
    };
}

},{"../observable/zip":"1e52j","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fqzkf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "paint", ()=>paint
);
const createElem = (col)=>{
    const elem = document.createElement("div");
    elem.classList.add("board");
    elem.style.display = "inline-block";
    elem.style.marginLeft = "10px";
    elem.style.height = "6px";
    elem.style.width = "6px";
    elem.style["background-color"] = col === 0 ? "white" : col === 1 ? "cornflowerblue" : col === 2 ? "gray" : "silver";
    elem.style["border-radius"] = "90%";
    return elem;
};
const paint = (game, lives, score)=>{
    document.body.innerHTML = `Lives: ${lives}, Score: ${score}`;
    game.forEach((row)=>{
        const rowContainer = document.createElement("div");
        row.forEach((col)=>rowContainer.appendChild(createElem(col))
        );
        document.body.appendChild(rowContainer);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["2HtCd","7PGg5"], "7PGg5", "parcelRequire8bd5")

//# sourceMappingURL=index.bdea7d65.js.map
