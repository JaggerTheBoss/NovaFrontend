var Wc = Object.defineProperty;
var Qc = (e, t, n) => t in e ? Wc(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var Qe = (e, t, n) => Qc(e, typeof t != "symbol" ? t + "" : t, n);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity),
        l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
}
)();
function vl(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var wa = {
    exports: {}
}
  , gl = {}
  , ka = {
    exports: {}
}
  , O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr = Symbol.for("react.element")
  , Kc = Symbol.for("react.portal")
  , Xc = Symbol.for("react.fragment")
  , Yc = Symbol.for("react.strict_mode")
  , Gc = Symbol.for("react.profiler")
  , Zc = Symbol.for("react.provider")
  , Jc = Symbol.for("react.context")
  , qc = Symbol.for("react.forward_ref")
  , bc = Symbol.for("react.suspense")
  , ed = Symbol.for("react.memo")
  , td = Symbol.for("react.lazy")
  , is = Symbol.iterator;
function nd(e) {
    return e === null || typeof e != "object" ? null : (e = is && e[is] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Sa = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Ea = Object.assign
  , Na = {};
function vn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Na,
    this.updater = n || Sa
}
vn.prototype.isReactComponent = {};
vn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
vn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Ca() {}
Ca.prototype = vn.prototype;
function ao(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Na,
    this.updater = n || Sa
}
var uo = ao.prototype = new Ca;
uo.constructor = ao;
Ea(uo, vn.prototype);
uo.isPureReactComponent = !0;
var os = Array.isArray
  , ja = Object.prototype.hasOwnProperty
  , co = {
    current: null
}
  , Ta = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function _a(e, t, n) {
    var r, l = {}, i = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            ja.call(t, r) && !Ta.hasOwnProperty(r) && (l[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1)
        l.children = n;
    else if (1 < s) {
        for (var a = Array(s), c = 0; c < s; c++)
            a[c] = arguments[c + 2];
        l.children = a
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps,
        s)
            l[r] === void 0 && (l[r] = s[r]);
    return {
        $$typeof: sr,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: co.current
    }
}
function rd(e, t) {
    return {
        $$typeof: sr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function fo(e) {
    return typeof e == "object" && e !== null && e.$$typeof === sr
}
function ld(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var ss = /\/+/g;
function Al(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ld("" + e.key) : t.toString(36)
}
function Lr(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case sr:
            case Kc:
                o = !0
            }
        }
    if (o)
        return o = e,
        l = l(o),
        e = r === "" ? "." + Al(o, 0) : r,
        os(l) ? (n = "",
        e != null && (n = e.replace(ss, "$&/") + "/"),
        Lr(l, t, n, "", function(c) {
            return c
        })) : l != null && (fo(l) && (l = rd(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(ss, "$&/") + "/") + e)),
        t.push(l)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    os(e))
        for (var s = 0; s < e.length; s++) {
            i = e[s];
            var a = r + Al(i, s);
            o += Lr(i, t, n, a, l)
        }
    else if (a = nd(e),
    typeof a == "function")
        for (e = a.call(e),
        s = 0; !(i = e.next()).done; )
            i = i.value,
            a = r + Al(i, s++),
            o += Lr(i, t, n, a, l);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function mr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , l = 0;
    return Lr(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }),
    r
}
function id(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ue = {
    current: null
}
  , Mr = {
    transition: null
}
  , od = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: Mr,
    ReactCurrentOwner: co
};
function Pa() {
    throw Error("act(...) is not supported in production builds of React.")
}
O.Children = {
    map: mr,
    forEach: function(e, t, n) {
        mr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return mr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return mr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!fo(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
O.Component = vn;
O.Fragment = Xc;
O.Profiler = Gc;
O.PureComponent = ao;
O.StrictMode = Yc;
O.Suspense = bc;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = od;
O.act = Pa;
O.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ea({}, e.props)
      , l = e.key
      , i = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        o = co.current),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
            var s = e.type.defaultProps;
        for (a in t)
            ja.call(t, a) && !Ta.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        s = Array(a);
        for (var c = 0; c < a; c++)
            s[c] = arguments[c + 2];
        r.children = s
    }
    return {
        $$typeof: sr,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
}
;
O.createContext = function(e) {
    return e = {
        $$typeof: Jc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Zc,
        _context: e
    },
    e.Consumer = e
}
;
O.createElement = _a;
O.createFactory = function(e) {
    var t = _a.bind(null, e);
    return t.type = e,
    t
}
;
O.createRef = function() {
    return {
        current: null
    }
}
;
O.forwardRef = function(e) {
    return {
        $$typeof: qc,
        render: e
    }
}
;
O.isValidElement = fo;
O.lazy = function(e) {
    return {
        $$typeof: td,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: id
    }
}
;
O.memo = function(e, t) {
    return {
        $$typeof: ed,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
O.startTransition = function(e) {
    var t = Mr.transition;
    Mr.transition = {};
    try {
        e()
    } finally {
        Mr.transition = t
    }
}
;
O.unstable_act = Pa;
O.useCallback = function(e, t) {
    return ue.current.useCallback(e, t)
}
;
O.useContext = function(e) {
    return ue.current.useContext(e)
}
;
O.useDebugValue = function() {}
;
O.useDeferredValue = function(e) {
    return ue.current.useDeferredValue(e)
}
;
O.useEffect = function(e, t) {
    return ue.current.useEffect(e, t)
}
;
O.useId = function() {
    return ue.current.useId()
}
;
O.useImperativeHandle = function(e, t, n) {
    return ue.current.useImperativeHandle(e, t, n)
}
;
O.useInsertionEffect = function(e, t) {
    return ue.current.useInsertionEffect(e, t)
}
;
O.useLayoutEffect = function(e, t) {
    return ue.current.useLayoutEffect(e, t)
}
;
O.useMemo = function(e, t) {
    return ue.current.useMemo(e, t)
}
;
O.useReducer = function(e, t, n) {
    return ue.current.useReducer(e, t, n)
}
;
O.useRef = function(e) {
    return ue.current.useRef(e)
}
;
O.useState = function(e) {
    return ue.current.useState(e)
}
;
O.useSyncExternalStore = function(e, t, n) {
    return ue.current.useSyncExternalStore(e, t, n)
}
;
O.useTransition = function() {
    return ue.current.useTransition()
}
;
O.version = "18.3.1";
ka.exports = O;
var se = ka.exports;
const ge = vl(se);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sd = se
  , ad = Symbol.for("react.element")
  , ud = Symbol.for("react.fragment")
  , cd = Object.prototype.hasOwnProperty
  , dd = sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , fd = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Oa(e, t, n) {
    var r, l = {}, i = null, o = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        cd.call(t, r) && !fd.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: ad,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: dd.current
    }
}
gl.Fragment = ud;
gl.jsx = Oa;
gl.jsxs = Oa;
wa.exports = gl;
var u = wa.exports
  , za = {
    exports: {}
}
  , ke = {}
  , La = {
    exports: {}
}
  , Ma = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, _) {
        var P = N.length;
        N.push(_);
        e: for (; 0 < P; ) {
            var W = P - 1 >>> 1
              , G = N[W];
            if (0 < l(G, _))
                N[W] = _,
                N[P] = G,
                P = W;
            else
                break e
        }
    }
    function n(N) {
        return N.length === 0 ? null : N[0]
    }
    function r(N) {
        if (N.length === 0)
            return null;
        var _ = N[0]
          , P = N.pop();
        if (P !== _) {
            N[0] = P;
            e: for (var W = 0, G = N.length, fr = G >>> 1; W < fr; ) {
                var St = 2 * (W + 1) - 1
                  , Dl = N[St]
                  , Et = St + 1
                  , pr = N[Et];
                if (0 > l(Dl, P))
                    Et < G && 0 > l(pr, Dl) ? (N[W] = pr,
                    N[Et] = P,
                    W = Et) : (N[W] = Dl,
                    N[St] = P,
                    W = St);
                else if (Et < G && 0 > l(pr, P))
                    N[W] = pr,
                    N[Et] = P,
                    W = Et;
                else
                    break e
            }
        }
        return _
    }
    function l(N, _) {
        var P = N.sortIndex - _.sortIndex;
        return P !== 0 ? P : N.id - _.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date
          , s = o.now();
        e.unstable_now = function() {
            return o.now() - s
        }
    }
    var a = []
      , c = []
      , m = 1
      , v = null
      , h = 3
      , x = !1
      , w = !1
      , k = !1
      , M = typeof setTimeout == "function" ? setTimeout : null
      , f = typeof clearTimeout == "function" ? clearTimeout : null
      , d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(N) {
        for (var _ = n(c); _ !== null; ) {
            if (_.callback === null)
                r(c);
            else if (_.startTime <= N)
                r(c),
                _.sortIndex = _.expirationTime,
                t(a, _);
            else
                break;
            _ = n(c)
        }
    }
    function g(N) {
        if (k = !1,
        p(N),
        !w)
            if (n(a) !== null)
                w = !0,
                Ml(E);
            else {
                var _ = n(c);
                _ !== null && Rl(g, _.startTime - N)
            }
    }
    function E(N, _) {
        w = !1,
        k && (k = !1,
        f(T),
        T = -1),
        x = !0;
        var P = h;
        try {
            for (p(_),
            v = n(a); v !== null && (!(v.expirationTime > _) || N && !Oe()); ) {
                var W = v.callback;
                if (typeof W == "function") {
                    v.callback = null,
                    h = v.priorityLevel;
                    var G = W(v.expirationTime <= _);
                    _ = e.unstable_now(),
                    typeof G == "function" ? v.callback = G : v === n(a) && r(a),
                    p(_)
                } else
                    r(a);
                v = n(a)
            }
            if (v !== null)
                var fr = !0;
            else {
                var St = n(c);
                St !== null && Rl(g, St.startTime - _),
                fr = !1
            }
            return fr
        } finally {
            v = null,
            h = P,
            x = !1
        }
    }
    var C = !1
      , j = null
      , T = -1
      , V = 5
      , z = -1;
    function Oe() {
        return !(e.unstable_now() - z < V)
    }
    function xn() {
        if (j !== null) {
            var N = e.unstable_now();
            z = N;
            var _ = !0;
            try {
                _ = j(!0, N)
            } finally {
                _ ? wn() : (C = !1,
                j = null)
            }
        } else
            C = !1
    }
    var wn;
    if (typeof d == "function")
        wn = function() {
            d(xn)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var ls = new MessageChannel
          , Vc = ls.port2;
        ls.port1.onmessage = xn,
        wn = function() {
            Vc.postMessage(null)
        }
    } else
        wn = function() {
            M(xn, 0)
        }
        ;
    function Ml(N) {
        j = N,
        C || (C = !0,
        wn())
    }
    function Rl(N, _) {
        T = M(function() {
            N(e.unstable_now())
        }, _)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(N) {
        N.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || x || (w = !0,
        Ml(E))
    }
    ,
    e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < N ? Math.floor(1e3 / N) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(N) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var _ = 3;
            break;
        default:
            _ = h
        }
        var P = h;
        h = _;
        try {
            return N()
        } finally {
            h = P
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(N, _) {
        switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            N = 3
        }
        var P = h;
        h = N;
        try {
            return _()
        } finally {
            h = P
        }
    }
    ,
    e.unstable_scheduleCallback = function(N, _, P) {
        var W = e.unstable_now();
        switch (typeof P == "object" && P !== null ? (P = P.delay,
        P = typeof P == "number" && 0 < P ? W + P : W) : P = W,
        N) {
        case 1:
            var G = -1;
            break;
        case 2:
            G = 250;
            break;
        case 5:
            G = 1073741823;
            break;
        case 4:
            G = 1e4;
            break;
        default:
            G = 5e3
        }
        return G = P + G,
        N = {
            id: m++,
            callback: _,
            priorityLevel: N,
            startTime: P,
            expirationTime: G,
            sortIndex: -1
        },
        P > W ? (N.sortIndex = P,
        t(c, N),
        n(a) === null && N === n(c) && (k ? (f(T),
        T = -1) : k = !0,
        Rl(g, P - W))) : (N.sortIndex = G,
        t(a, N),
        w || x || (w = !0,
        Ml(E))),
        N
    }
    ,
    e.unstable_shouldYield = Oe,
    e.unstable_wrapCallback = function(N) {
        var _ = h;
        return function() {
            var P = h;
            h = _;
            try {
                return N.apply(this, arguments)
            } finally {
                h = P
            }
        }
    }
}
)(Ma);
La.exports = Ma;
var pd = La.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var md = se
  , we = pd;
function y(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Ra = new Set
  , Wn = {};
function It(e, t) {
    un(e, t),
    un(e + "Capture", t)
}
function un(e, t) {
    for (Wn[e] = t,
    e = 0; e < t.length; e++)
        Ra.add(t[e])
}
var Je = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , fi = Object.prototype.hasOwnProperty
  , hd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , as = {}
  , us = {};
function vd(e) {
    return fi.call(us, e) ? !0 : fi.call(as, e) ? !1 : hd.test(e) ? us[e] = !0 : (as[e] = !0,
    !1)
}
function gd(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function yd(e, t, n, r) {
    if (t === null || typeof t > "u" || gd(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ce(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = l,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = o
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ee[e] = new ce(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ee[t] = new ce(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ee[e] = new ce(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ee[e] = new ce(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ee[e] = new ce(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ee[e] = new ce(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ee[e] = new ce(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ee[e] = new ce(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ee[e] = new ce(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var po = /[\-:]([a-z])/g;
function mo(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(po, mo);
    ee[t] = new ce(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(po, mo);
    ee[t] = new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(po, mo);
    ee[t] = new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ee[e] = new ce(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ee.xlinkHref = new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ee[e] = new ce(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ho(e, t, n, r) {
    var l = ee.hasOwnProperty(t) ? ee[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (yd(t, n, l, r) && (n = null),
    r || l === null ? vd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
    r = l.attributeNamespace,
    n === null ? e.removeAttribute(t) : (l = l.type,
    n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var tt = md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , hr = Symbol.for("react.element")
  , Bt = Symbol.for("react.portal")
  , Ht = Symbol.for("react.fragment")
  , vo = Symbol.for("react.strict_mode")
  , pi = Symbol.for("react.profiler")
  , Da = Symbol.for("react.provider")
  , Aa = Symbol.for("react.context")
  , go = Symbol.for("react.forward_ref")
  , mi = Symbol.for("react.suspense")
  , hi = Symbol.for("react.suspense_list")
  , yo = Symbol.for("react.memo")
  , rt = Symbol.for("react.lazy")
  , Ia = Symbol.for("react.offscreen")
  , cs = Symbol.iterator;
function kn(e) {
    return e === null || typeof e != "object" ? null : (e = cs && e[cs] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var B = Object.assign, Il;
function zn(e) {
    if (Il === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Il = t && t[1] || ""
        }
    return `
` + Il + e
}
var Fl = !1;
function $l(e, t) {
    if (!e || Fl)
        return "";
    Fl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var l = c.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, s = i.length - 1; 1 <= o && 0 <= s && l[o] !== i[s]; )
                s--;
            for (; 1 <= o && 0 <= s; o--,
            s--)
                if (l[o] !== i[s]) {
                    if (o !== 1 || s !== 1)
                        do
                            if (o--,
                            s--,
                            0 > s || l[o] !== i[s]) {
                                var a = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= o && 0 <= s);
                    break
                }
        }
    } finally {
        Fl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? zn(e) : ""
}
function xd(e) {
    switch (e.tag) {
    case 5:
        return zn(e.type);
    case 16:
        return zn("Lazy");
    case 13:
        return zn("Suspense");
    case 19:
        return zn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = $l(e.type, !1),
        e;
    case 11:
        return e = $l(e.type.render, !1),
        e;
    case 1:
        return e = $l(e.type, !0),
        e;
    default:
        return ""
    }
}
function vi(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Ht:
        return "Fragment";
    case Bt:
        return "Portal";
    case pi:
        return "Profiler";
    case vo:
        return "StrictMode";
    case mi:
        return "Suspense";
    case hi:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Aa:
            return (e.displayName || "Context") + ".Consumer";
        case Da:
            return (e._context.displayName || "Context") + ".Provider";
        case go:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case yo:
            return t = e.displayName || null,
            t !== null ? t : vi(e.type) || "Memo";
        case rt:
            t = e._payload,
            e = e._init;
            try {
                return vi(e(t))
            } catch {}
        }
    return null
}
function wd(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return vi(t);
    case 8:
        return t === vo ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function gt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Fa(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function kd(e) {
    var t = Fa(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o,
                i.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function vr(e) {
    e._valueTracker || (e._valueTracker = kd(e))
}
function $a(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Fa(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Kr(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function gi(e, t) {
    var n = t.checked;
    return B({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function ds(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = gt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Ua(e, t) {
    t = t.checked,
    t != null && ho(e, "checked", t, !1)
}
function yi(e, t) {
    Ua(e, t);
    var n = gt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? xi(e, t.type, n) : t.hasOwnProperty("defaultValue") && xi(e, t.type, gt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function fs(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function xi(e, t, n) {
    (t !== "number" || Kr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Ln = Array.isArray;
function bt(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + gt(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function wi(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(y(91));
    return B({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function ps(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(y(92));
            if (Ln(n)) {
                if (1 < n.length)
                    throw Error(y(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: gt(n)
    }
}
function Ba(e, t) {
    var n = gt(t.value)
      , r = gt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function ms(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Ha(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ki(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Ha(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var gr, Va = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (gr = gr || document.createElement("div"),
        gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = gr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Qn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Dn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Sd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dn).forEach(function(e) {
    Sd.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Dn[t] = Dn[e]
    })
});
function Wa(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Dn.hasOwnProperty(e) && Dn[e] ? ("" + t).trim() : t + "px"
}
function Qa(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = Wa(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var Ed = B({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Si(e, t) {
    if (t) {
        if (Ed[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(y(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(y(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(y(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(y(62))
    }
}
function Ei(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Ni = null;
function xo(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Ci = null
  , en = null
  , tn = null;
function hs(e) {
    if (e = cr(e)) {
        if (typeof Ci != "function")
            throw Error(y(280));
        var t = e.stateNode;
        t && (t = Sl(t),
        Ci(e.stateNode, e.type, t))
    }
}
function Ka(e) {
    en ? tn ? tn.push(e) : tn = [e] : en = e
}
function Xa() {
    if (en) {
        var e = en
          , t = tn;
        if (tn = en = null,
        hs(e),
        t)
            for (e = 0; e < t.length; e++)
                hs(t[e])
    }
}
function Ya(e, t) {
    return e(t)
}
function Ga() {}
var Ul = !1;
function Za(e, t, n) {
    if (Ul)
        return e(t, n);
    Ul = !0;
    try {
        return Ya(e, t, n)
    } finally {
        Ul = !1,
        (en !== null || tn !== null) && (Ga(),
        Xa())
    }
}
function Kn(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Sl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(y(231, t, typeof n));
    return n
}
var ji = !1;
if (Je)
    try {
        var Sn = {};
        Object.defineProperty(Sn, "passive", {
            get: function() {
                ji = !0
            }
        }),
        window.addEventListener("test", Sn, Sn),
        window.removeEventListener("test", Sn, Sn)
    } catch {
        ji = !1
    }
function Nd(e, t, n, r, l, i, o, s, a) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (m) {
        this.onError(m)
    }
}
var An = !1
  , Xr = null
  , Yr = !1
  , Ti = null
  , Cd = {
    onError: function(e) {
        An = !0,
        Xr = e
    }
};
function jd(e, t, n, r, l, i, o, s, a) {
    An = !1,
    Xr = null,
    Nd.apply(Cd, arguments)
}
function Td(e, t, n, r, l, i, o, s, a) {
    if (jd.apply(this, arguments),
    An) {
        if (An) {
            var c = Xr;
            An = !1,
            Xr = null
        } else
            throw Error(y(198));
        Yr || (Yr = !0,
        Ti = c)
    }
}
function Ft(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Ja(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function vs(e) {
    if (Ft(e) !== e)
        throw Error(y(188))
}
function _d(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Ft(e),
        t === null)
            throw Error(y(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i; ) {
                if (i === n)
                    return vs(l),
                    e;
                if (i === r)
                    return vs(l),
                    t;
                i = i.sibling
            }
            throw Error(y(188))
        }
        if (n.return !== r.return)
            n = l,
            r = i;
        else {
            for (var o = !1, s = l.child; s; ) {
                if (s === n) {
                    o = !0,
                    n = l,
                    r = i;
                    break
                }
                if (s === r) {
                    o = !0,
                    r = l,
                    n = i;
                    break
                }
                s = s.sibling
            }
            if (!o) {
                for (s = i.child; s; ) {
                    if (s === n) {
                        o = !0,
                        n = i,
                        r = l;
                        break
                    }
                    if (s === r) {
                        o = !0,
                        r = i,
                        n = l;
                        break
                    }
                    s = s.sibling
                }
                if (!o)
                    throw Error(y(189))
            }
        }
        if (n.alternate !== r)
            throw Error(y(190))
    }
    if (n.tag !== 3)
        throw Error(y(188));
    return n.stateNode.current === n ? e : t
}
function qa(e) {
    return e = _d(e),
    e !== null ? ba(e) : null
}
function ba(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = ba(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var eu = we.unstable_scheduleCallback
  , gs = we.unstable_cancelCallback
  , Pd = we.unstable_shouldYield
  , Od = we.unstable_requestPaint
  , Q = we.unstable_now
  , zd = we.unstable_getCurrentPriorityLevel
  , wo = we.unstable_ImmediatePriority
  , tu = we.unstable_UserBlockingPriority
  , Gr = we.unstable_NormalPriority
  , Ld = we.unstable_LowPriority
  , nu = we.unstable_IdlePriority
  , yl = null
  , Ve = null;
function Md(e) {
    if (Ve && typeof Ve.onCommitFiberRoot == "function")
        try {
            Ve.onCommitFiberRoot(yl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Ae = Math.clz32 ? Math.clz32 : Ad
  , Rd = Math.log
  , Dd = Math.LN2;
function Ad(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Rd(e) / Dd | 0) | 0
}
var yr = 64
  , xr = 4194304;
function Mn(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Zr(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , i = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var s = o & ~l;
        s !== 0 ? r = Mn(s) : (i &= o,
        i !== 0 && (r = Mn(i)))
    } else
        o = n & ~l,
        o !== 0 ? r = Mn(o) : i !== 0 && (r = Mn(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    i = t & -t,
    l >= i || l === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Ae(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function Id(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Fd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - Ae(i)
          , s = 1 << o
          , a = l[o];
        a === -1 ? (!(s & n) || s & r) && (l[o] = Id(s, t)) : a <= t && (e.expiredLanes |= s),
        i &= ~s
    }
}
function _i(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function ru() {
    var e = yr;
    return yr <<= 1,
    !(yr & 4194240) && (yr = 64),
    e
}
function Bl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ar(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Ae(t),
    e[t] = n
}
function $d(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Ae(n)
          , i = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~i
    }
}
function ko(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Ae(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var R = 0;
function lu(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var iu, So, ou, su, au, Pi = !1, wr = [], ut = null, ct = null, dt = null, Xn = new Map, Yn = new Map, it = [], Ud = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ys(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        ut = null;
        break;
    case "dragenter":
    case "dragleave":
        ct = null;
        break;
    case "mouseover":
    case "mouseout":
        dt = null;
        break;
    case "pointerover":
    case "pointerout":
        Xn.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Yn.delete(t.pointerId)
    }
}
function En(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    },
    t !== null && (t = cr(t),
    t !== null && So(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function Bd(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return ut = En(ut, e, t, n, r, l),
        !0;
    case "dragenter":
        return ct = En(ct, e, t, n, r, l),
        !0;
    case "mouseover":
        return dt = En(dt, e, t, n, r, l),
        !0;
    case "pointerover":
        var i = l.pointerId;
        return Xn.set(i, En(Xn.get(i) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return i = l.pointerId,
        Yn.set(i, En(Yn.get(i) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function uu(e) {
    var t = jt(e.target);
    if (t !== null) {
        var n = Ft(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Ja(n),
                t !== null) {
                    e.blockedOn = t,
                    au(e.priority, function() {
                        ou(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Rr(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Ni = r,
            n.target.dispatchEvent(r),
            Ni = null
        } else
            return t = cr(n),
            t !== null && So(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function xs(e, t, n) {
    Rr(e) && n.delete(t)
}
function Hd() {
    Pi = !1,
    ut !== null && Rr(ut) && (ut = null),
    ct !== null && Rr(ct) && (ct = null),
    dt !== null && Rr(dt) && (dt = null),
    Xn.forEach(xs),
    Yn.forEach(xs)
}
function Nn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Pi || (Pi = !0,
    we.unstable_scheduleCallback(we.unstable_NormalPriority, Hd)))
}
function Gn(e) {
    function t(l) {
        return Nn(l, e)
    }
    if (0 < wr.length) {
        Nn(wr[0], e);
        for (var n = 1; n < wr.length; n++) {
            var r = wr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (ut !== null && Nn(ut, e),
    ct !== null && Nn(ct, e),
    dt !== null && Nn(dt, e),
    Xn.forEach(t),
    Yn.forEach(t),
    n = 0; n < it.length; n++)
        r = it[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < it.length && (n = it[0],
    n.blockedOn === null); )
        uu(n),
        n.blockedOn === null && it.shift()
}
var nn = tt.ReactCurrentBatchConfig
  , Jr = !0;
function Vd(e, t, n, r) {
    var l = R
      , i = nn.transition;
    nn.transition = null;
    try {
        R = 1,
        Eo(e, t, n, r)
    } finally {
        R = l,
        nn.transition = i
    }
}
function Wd(e, t, n, r) {
    var l = R
      , i = nn.transition;
    nn.transition = null;
    try {
        R = 4,
        Eo(e, t, n, r)
    } finally {
        R = l,
        nn.transition = i
    }
}
function Eo(e, t, n, r) {
    if (Jr) {
        var l = Oi(e, t, n, r);
        if (l === null)
            Jl(e, t, r, qr, n),
            ys(e, r);
        else if (Bd(l, e, t, n, r))
            r.stopPropagation();
        else if (ys(e, r),
        t & 4 && -1 < Ud.indexOf(e)) {
            for (; l !== null; ) {
                var i = cr(l);
                if (i !== null && iu(i),
                i = Oi(e, t, n, r),
                i === null && Jl(e, t, r, qr, n),
                i === l)
                    break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else
            Jl(e, t, r, null, n)
    }
}
var qr = null;
function Oi(e, t, n, r) {
    if (qr = null,
    e = xo(r),
    e = jt(e),
    e !== null)
        if (t = Ft(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Ja(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return qr = e,
    null
}
function cu(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (zd()) {
        case wo:
            return 1;
        case tu:
            return 4;
        case Gr:
        case Ld:
            return 16;
        case nu:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var st = null
  , No = null
  , Dr = null;
function du() {
    if (Dr)
        return Dr;
    var e, t = No, n = t.length, r, l = "value"in st ? st.value : st.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++)
        ;
    return Dr = l.slice(e, 1 < r ? 1 - r : void 0)
}
function Ar(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function kr() {
    return !0
}
function ws() {
    return !1
}
function Se(e) {
    function t(n, r, l, i, o) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = i,
        this.target = o,
        this.currentTarget = null;
        for (var s in e)
            e.hasOwnProperty(s) && (n = e[s],
            this[s] = n ? n(i) : i[s]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? kr : ws,
        this.isPropagationStopped = ws,
        this
    }
    return B(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = kr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = kr)
        },
        persist: function() {},
        isPersistent: kr
    }),
    t
}
var gn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Co = Se(gn), ur = B({}, gn, {
    view: 0,
    detail: 0
}), Qd = Se(ur), Hl, Vl, Cn, xl = B({}, ur, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: jo,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Cn && (Cn && e.type === "mousemove" ? (Hl = e.screenX - Cn.screenX,
        Vl = e.screenY - Cn.screenY) : Vl = Hl = 0,
        Cn = e),
        Hl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Vl
    }
}), ks = Se(xl), Kd = B({}, xl, {
    dataTransfer: 0
}), Xd = Se(Kd), Yd = B({}, ur, {
    relatedTarget: 0
}), Wl = Se(Yd), Gd = B({}, gn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Zd = Se(Gd), Jd = B({}, gn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), qd = Se(Jd), bd = B({}, gn, {
    data: 0
}), Ss = Se(bd), ef = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, tf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, nf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function rf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = nf[e]) ? !!t[e] : !1
}
function jo() {
    return rf
}
var lf = B({}, ur, {
    key: function(e) {
        if (e.key) {
            var t = ef[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ar(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? tf[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jo,
    charCode: function(e) {
        return e.type === "keypress" ? Ar(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ar(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , of = Se(lf)
  , sf = B({}, xl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Es = Se(sf)
  , af = B({}, ur, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jo
})
  , uf = Se(af)
  , cf = B({}, gn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , df = Se(cf)
  , ff = B({}, xl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , pf = Se(ff)
  , mf = [9, 13, 27, 32]
  , To = Je && "CompositionEvent"in window
  , In = null;
Je && "documentMode"in document && (In = document.documentMode);
var hf = Je && "TextEvent"in window && !In
  , fu = Je && (!To || In && 8 < In && 11 >= In)
  , Ns = " "
  , Cs = !1;
function pu(e, t) {
    switch (e) {
    case "keyup":
        return mf.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function mu(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Vt = !1;
function vf(e, t) {
    switch (e) {
    case "compositionend":
        return mu(t);
    case "keypress":
        return t.which !== 32 ? null : (Cs = !0,
        Ns);
    case "textInput":
        return e = t.data,
        e === Ns && Cs ? null : e;
    default:
        return null
    }
}
function gf(e, t) {
    if (Vt)
        return e === "compositionend" || !To && pu(e, t) ? (e = du(),
        Dr = No = st = null,
        Vt = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return fu && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var yf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function js(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!yf[e.type] : t === "textarea"
}
function hu(e, t, n, r) {
    Ka(r),
    t = br(t, "onChange"),
    0 < t.length && (n = new Co("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Fn = null
  , Zn = null;
function xf(e) {
    ju(e, 0)
}
function wl(e) {
    var t = Kt(e);
    if ($a(t))
        return e
}
function wf(e, t) {
    if (e === "change")
        return t
}
var vu = !1;
if (Je) {
    var Ql;
    if (Je) {
        var Kl = "oninput"in document;
        if (!Kl) {
            var Ts = document.createElement("div");
            Ts.setAttribute("oninput", "return;"),
            Kl = typeof Ts.oninput == "function"
        }
        Ql = Kl
    } else
        Ql = !1;
    vu = Ql && (!document.documentMode || 9 < document.documentMode)
}
function _s() {
    Fn && (Fn.detachEvent("onpropertychange", gu),
    Zn = Fn = null)
}
function gu(e) {
    if (e.propertyName === "value" && wl(Zn)) {
        var t = [];
        hu(t, Zn, e, xo(e)),
        Za(xf, t)
    }
}
function kf(e, t, n) {
    e === "focusin" ? (_s(),
    Fn = t,
    Zn = n,
    Fn.attachEvent("onpropertychange", gu)) : e === "focusout" && _s()
}
function Sf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return wl(Zn)
}
function Ef(e, t) {
    if (e === "click")
        return wl(t)
}
function Nf(e, t) {
    if (e === "input" || e === "change")
        return wl(t)
}
function Cf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Fe = typeof Object.is == "function" ? Object.is : Cf;
function Jn(e, t) {
    if (Fe(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!fi.call(t, l) || !Fe(e[l], t[l]))
            return !1
    }
    return !0
}
function Ps(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Os(e, t) {
    var n = Ps(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ps(n)
    }
}
function yu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yu(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function xu() {
    for (var e = window, t = Kr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Kr(e.document)
    }
    return t
}
function _o(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function jf(e) {
    var t = xu()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && yu(n.ownerDocument.documentElement, n)) {
        if (r !== null && _o(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l),
                !e.extend && i > r && (l = r,
                r = i,
                i = l),
                l = Os(n, i);
                var o = Os(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Tf = Je && "documentMode"in document && 11 >= document.documentMode
  , Wt = null
  , zi = null
  , $n = null
  , Li = !1;
function zs(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Li || Wt == null || Wt !== Kr(r) || (r = Wt,
    "selectionStart"in r && _o(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    $n && Jn($n, r) || ($n = r,
    r = br(zi, "onSelect"),
    0 < r.length && (t = new Co("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Wt)))
}
function Sr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Qt = {
    animationend: Sr("Animation", "AnimationEnd"),
    animationiteration: Sr("Animation", "AnimationIteration"),
    animationstart: Sr("Animation", "AnimationStart"),
    transitionend: Sr("Transition", "TransitionEnd")
}
  , Xl = {}
  , wu = {};
Je && (wu = document.createElement("div").style,
"AnimationEvent"in window || (delete Qt.animationend.animation,
delete Qt.animationiteration.animation,
delete Qt.animationstart.animation),
"TransitionEvent"in window || delete Qt.transitionend.transition);
function kl(e) {
    if (Xl[e])
        return Xl[e];
    if (!Qt[e])
        return e;
    var t = Qt[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in wu)
            return Xl[e] = t[n];
    return e
}
var ku = kl("animationend")
  , Su = kl("animationiteration")
  , Eu = kl("animationstart")
  , Nu = kl("transitionend")
  , Cu = new Map
  , Ls = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function xt(e, t) {
    Cu.set(e, t),
    It(t, [e])
}
for (var Yl = 0; Yl < Ls.length; Yl++) {
    var Gl = Ls[Yl]
      , _f = Gl.toLowerCase()
      , Pf = Gl[0].toUpperCase() + Gl.slice(1);
    xt(_f, "on" + Pf)
}
xt(ku, "onAnimationEnd");
xt(Su, "onAnimationIteration");
xt(Eu, "onAnimationStart");
xt("dblclick", "onDoubleClick");
xt("focusin", "onFocus");
xt("focusout", "onBlur");
xt(Nu, "onTransitionEnd");
un("onMouseEnter", ["mouseout", "mouseover"]);
un("onMouseLeave", ["mouseout", "mouseover"]);
un("onPointerEnter", ["pointerout", "pointerover"]);
un("onPointerLeave", ["pointerout", "pointerover"]);
It("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
It("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
It("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
It("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Rn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Of = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));
function Ms(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Td(r, t, void 0, e),
    e.currentTarget = null
}
function ju(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var s = r[o]
                      , a = s.instance
                      , c = s.currentTarget;
                    if (s = s.listener,
                    a !== i && l.isPropagationStopped())
                        break e;
                    Ms(l, s, c),
                    i = a
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (s = r[o],
                    a = s.instance,
                    c = s.currentTarget,
                    s = s.listener,
                    a !== i && l.isPropagationStopped())
                        break e;
                    Ms(l, s, c),
                    i = a
                }
        }
    }
    if (Yr)
        throw e = Ti,
        Yr = !1,
        Ti = null,
        e
}
function A(e, t) {
    var n = t[Ii];
    n === void 0 && (n = t[Ii] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Tu(t, e, 2, !1),
    n.add(r))
}
function Zl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Tu(n, e, r, t)
}
var Er = "_reactListening" + Math.random().toString(36).slice(2);
function qn(e) {
    if (!e[Er]) {
        e[Er] = !0,
        Ra.forEach(function(n) {
            n !== "selectionchange" && (Of.has(n) || Zl(n, !1, e),
            Zl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Er] || (t[Er] = !0,
        Zl("selectionchange", !1, t))
    }
}
function Tu(e, t, n, r) {
    switch (cu(t)) {
    case 1:
        var l = Vd;
        break;
    case 4:
        l = Wd;
        break;
    default:
        l = Eo
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !ji || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function Jl(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var s = r.stateNode.containerInfo;
                if (s === l || s.nodeType === 8 && s.parentNode === l)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var a = o.tag;
                        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo,
                        a === l || a.nodeType === 8 && a.parentNode === l))
                            return;
                        o = o.return
                    }
                for (; s !== null; ) {
                    if (o = jt(s),
                    o === null)
                        return;
                    if (a = o.tag,
                    a === 5 || a === 6) {
                        r = i = o;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            r = r.return
        }
    Za(function() {
        var c = i
          , m = xo(n)
          , v = [];
        e: {
            var h = Cu.get(e);
            if (h !== void 0) {
                var x = Co
                  , w = e;
                switch (e) {
                case "keypress":
                    if (Ar(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    x = of;
                    break;
                case "focusin":
                    w = "focus",
                    x = Wl;
                    break;
                case "focusout":
                    w = "blur",
                    x = Wl;
                    break;
                case "beforeblur":
                case "afterblur":
                    x = Wl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    x = ks;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    x = Xd;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    x = uf;
                    break;
                case ku:
                case Su:
                case Eu:
                    x = Zd;
                    break;
                case Nu:
                    x = df;
                    break;
                case "scroll":
                    x = Qd;
                    break;
                case "wheel":
                    x = pf;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    x = qd;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    x = Es
                }
                var k = (t & 4) !== 0
                  , M = !k && e === "scroll"
                  , f = k ? h !== null ? h + "Capture" : null : h;
                k = [];
                for (var d = c, p; d !== null; ) {
                    p = d;
                    var g = p.stateNode;
                    if (p.tag === 5 && g !== null && (p = g,
                    f !== null && (g = Kn(d, f),
                    g != null && k.push(bn(d, g, p)))),
                    M)
                        break;
                    d = d.return
                }
                0 < k.length && (h = new x(h,w,null,n,m),
                v.push({
                    event: h,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                x = e === "mouseout" || e === "pointerout",
                h && n !== Ni && (w = n.relatedTarget || n.fromElement) && (jt(w) || w[qe]))
                    break e;
                if ((x || h) && (h = m.window === m ? m : (h = m.ownerDocument) ? h.defaultView || h.parentWindow : window,
                x ? (w = n.relatedTarget || n.toElement,
                x = c,
                w = w ? jt(w) : null,
                w !== null && (M = Ft(w),
                w !== M || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null,
                w = c),
                x !== w)) {
                    if (k = ks,
                    g = "onMouseLeave",
                    f = "onMouseEnter",
                    d = "mouse",
                    (e === "pointerout" || e === "pointerover") && (k = Es,
                    g = "onPointerLeave",
                    f = "onPointerEnter",
                    d = "pointer"),
                    M = x == null ? h : Kt(x),
                    p = w == null ? h : Kt(w),
                    h = new k(g,d + "leave",x,n,m),
                    h.target = M,
                    h.relatedTarget = p,
                    g = null,
                    jt(m) === c && (k = new k(f,d + "enter",w,n,m),
                    k.target = p,
                    k.relatedTarget = M,
                    g = k),
                    M = g,
                    x && w)
                        t: {
                            for (k = x,
                            f = w,
                            d = 0,
                            p = k; p; p = $t(p))
                                d++;
                            for (p = 0,
                            g = f; g; g = $t(g))
                                p++;
                            for (; 0 < d - p; )
                                k = $t(k),
                                d--;
                            for (; 0 < p - d; )
                                f = $t(f),
                                p--;
                            for (; d--; ) {
                                if (k === f || f !== null && k === f.alternate)
                                    break t;
                                k = $t(k),
                                f = $t(f)
                            }
                            k = null
                        }
                    else
                        k = null;
                    x !== null && Rs(v, h, x, k, !1),
                    w !== null && M !== null && Rs(v, M, w, k, !0)
                }
            }
            e: {
                if (h = c ? Kt(c) : window,
                x = h.nodeName && h.nodeName.toLowerCase(),
                x === "select" || x === "input" && h.type === "file")
                    var E = wf;
                else if (js(h))
                    if (vu)
                        E = Nf;
                    else {
                        E = Sf;
                        var C = kf
                    }
                else
                    (x = h.nodeName) && x.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (E = Ef);
                if (E && (E = E(e, c))) {
                    hu(v, E, n, m);
                    break e
                }
                C && C(e, h, c),
                e === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && xi(h, "number", h.value)
            }
            switch (C = c ? Kt(c) : window,
            e) {
            case "focusin":
                (js(C) || C.contentEditable === "true") && (Wt = C,
                zi = c,
                $n = null);
                break;
            case "focusout":
                $n = zi = Wt = null;
                break;
            case "mousedown":
                Li = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Li = !1,
                zs(v, n, m);
                break;
            case "selectionchange":
                if (Tf)
                    break;
            case "keydown":
            case "keyup":
                zs(v, n, m)
            }
            var j;
            if (To)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                    }
                    T = void 0
                }
            else
                Vt ? pu(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T && (fu && n.locale !== "ko" && (Vt || T !== "onCompositionStart" ? T === "onCompositionEnd" && Vt && (j = du()) : (st = m,
            No = "value"in st ? st.value : st.textContent,
            Vt = !0)),
            C = br(c, T),
            0 < C.length && (T = new Ss(T,e,null,n,m),
            v.push({
                event: T,
                listeners: C
            }),
            j ? T.data = j : (j = mu(n),
            j !== null && (T.data = j)))),
            (j = hf ? vf(e, n) : gf(e, n)) && (c = br(c, "onBeforeInput"),
            0 < c.length && (m = new Ss("onBeforeInput","beforeinput",null,n,m),
            v.push({
                event: m,
                listeners: c
            }),
            m.data = j))
        }
        ju(v, t)
    })
}
function bn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function br(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , i = l.stateNode;
        l.tag === 5 && i !== null && (l = i,
        i = Kn(e, n),
        i != null && r.unshift(bn(e, i, l)),
        i = Kn(e, t),
        i != null && r.push(bn(e, i, l))),
        e = e.return
    }
    return r
}
function $t(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Rs(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n
          , a = s.alternate
          , c = s.stateNode;
        if (a !== null && a === r)
            break;
        s.tag === 5 && c !== null && (s = c,
        l ? (a = Kn(n, i),
        a != null && o.unshift(bn(n, a, s))) : l || (a = Kn(n, i),
        a != null && o.push(bn(n, a, s)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var zf = /\r\n?/g
  , Lf = /\u0000|\uFFFD/g;
function Ds(e) {
    return (typeof e == "string" ? e : "" + e).replace(zf, `
`).replace(Lf, "")
}
function Nr(e, t, n) {
    if (t = Ds(t),
    Ds(e) !== t && n)
        throw Error(y(425))
}
function el() {}
var Mi = null
  , Ri = null;
function Di(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ai = typeof setTimeout == "function" ? setTimeout : void 0
  , Mf = typeof clearTimeout == "function" ? clearTimeout : void 0
  , As = typeof Promise == "function" ? Promise : void 0
  , Rf = typeof queueMicrotask == "function" ? queueMicrotask : typeof As < "u" ? function(e) {
    return As.resolve(null).then(e).catch(Df)
}
: Ai;
function Df(e) {
    setTimeout(function() {
        throw e
    })
}
function ql(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    Gn(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Gn(t)
}
function ft(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Is(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var yn = Math.random().toString(36).slice(2)
  , He = "__reactFiber$" + yn
  , er = "__reactProps$" + yn
  , qe = "__reactContainer$" + yn
  , Ii = "__reactEvents$" + yn
  , Af = "__reactListeners$" + yn
  , If = "__reactHandles$" + yn;
function jt(e) {
    var t = e[He];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[qe] || n[He]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Is(e); e !== null; ) {
                    if (n = e[He])
                        return n;
                    e = Is(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function cr(e) {
    return e = e[He] || e[qe],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Kt(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(y(33))
}
function Sl(e) {
    return e[er] || null
}
var Fi = []
  , Xt = -1;
function wt(e) {
    return {
        current: e
    }
}
function I(e) {
    0 > Xt || (e.current = Fi[Xt],
    Fi[Xt] = null,
    Xt--)
}
function D(e, t) {
    Xt++,
    Fi[Xt] = e.current,
    e.current = t
}
var yt = {}
  , ie = wt(yt)
  , pe = wt(!1)
  , Lt = yt;
function cn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return yt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n)
        l[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function me(e) {
    return e = e.childContextTypes,
    e != null
}
function tl() {
    I(pe),
    I(ie)
}
function Fs(e, t, n) {
    if (ie.current !== yt)
        throw Error(y(168));
    D(ie, t),
    D(pe, n)
}
function _u(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(y(108, wd(e) || "Unknown", l));
    return B({}, n, r)
}
function nl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || yt,
    Lt = ie.current,
    D(ie, e),
    D(pe, pe.current),
    !0
}
function $s(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(y(169));
    n ? (e = _u(e, t, Lt),
    r.__reactInternalMemoizedMergedChildContext = e,
    I(pe),
    I(ie),
    D(ie, e)) : I(pe),
    D(pe, n)
}
var Xe = null
  , El = !1
  , bl = !1;
function Pu(e) {
    Xe === null ? Xe = [e] : Xe.push(e)
}
function Ff(e) {
    El = !0,
    Pu(e)
}
function kt() {
    if (!bl && Xe !== null) {
        bl = !0;
        var e = 0
          , t = R;
        try {
            var n = Xe;
            for (R = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Xe = null,
            El = !1
        } catch (l) {
            throw Xe !== null && (Xe = Xe.slice(e + 1)),
            eu(wo, kt),
            l
        } finally {
            R = t,
            bl = !1
        }
    }
    return null
}
var Yt = []
  , Gt = 0
  , rl = null
  , ll = 0
  , Ne = []
  , Ce = 0
  , Mt = null
  , Ye = 1
  , Ge = "";
function Nt(e, t) {
    Yt[Gt++] = ll,
    Yt[Gt++] = rl,
    rl = e,
    ll = t
}
function Ou(e, t, n) {
    Ne[Ce++] = Ye,
    Ne[Ce++] = Ge,
    Ne[Ce++] = Mt,
    Mt = e;
    var r = Ye;
    e = Ge;
    var l = 32 - Ae(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var i = 32 - Ae(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32),
        r >>= o,
        l -= o,
        Ye = 1 << 32 - Ae(t) + l | n << l | r,
        Ge = i + e
    } else
        Ye = 1 << i | n << l | r,
        Ge = e
}
function Po(e) {
    e.return !== null && (Nt(e, 1),
    Ou(e, 1, 0))
}
function Oo(e) {
    for (; e === rl; )
        rl = Yt[--Gt],
        Yt[Gt] = null,
        ll = Yt[--Gt],
        Yt[Gt] = null;
    for (; e === Mt; )
        Mt = Ne[--Ce],
        Ne[Ce] = null,
        Ge = Ne[--Ce],
        Ne[Ce] = null,
        Ye = Ne[--Ce],
        Ne[Ce] = null
}
var xe = null
  , ye = null
  , F = !1
  , Re = null;
function zu(e, t) {
    var n = je(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Us(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        xe = e,
        ye = ft(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        xe = e,
        ye = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Mt !== null ? {
            id: Ye,
            overflow: Ge
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = je(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        xe = e,
        ye = null,
        !0) : !1;
    default:
        return !1
    }
}
function $i(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ui(e) {
    if (F) {
        var t = ye;
        if (t) {
            var n = t;
            if (!Us(e, t)) {
                if ($i(e))
                    throw Error(y(418));
                t = ft(n.nextSibling);
                var r = xe;
                t && Us(e, t) ? zu(r, n) : (e.flags = e.flags & -4097 | 2,
                F = !1,
                xe = e)
            }
        } else {
            if ($i(e))
                throw Error(y(418));
            e.flags = e.flags & -4097 | 2,
            F = !1,
            xe = e
        }
    }
}
function Bs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    xe = e
}
function Cr(e) {
    if (e !== xe)
        return !1;
    if (!F)
        return Bs(e),
        F = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Di(e.type, e.memoizedProps)),
    t && (t = ye)) {
        if ($i(e))
            throw Lu(),
            Error(y(418));
        for (; t; )
            zu(e, t),
            t = ft(t.nextSibling)
    }
    if (Bs(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(y(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ye = ft(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ye = null
        }
    } else
        ye = xe ? ft(e.stateNode.nextSibling) : null;
    return !0
}
function Lu() {
    for (var e = ye; e; )
        e = ft(e.nextSibling)
}
function dn() {
    ye = xe = null,
    F = !1
}
function zo(e) {
    Re === null ? Re = [e] : Re.push(e)
}
var $f = tt.ReactCurrentBatchConfig;
function jn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(y(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(y(147, e));
            var l = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var s = l.refs;
                o === null ? delete s[i] : s[i] = o
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(y(284));
        if (!n._owner)
            throw Error(y(290, e))
    }
    return e
}
function jr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Hs(e) {
    var t = e._init;
    return t(e._payload)
}
function Mu(e) {
    function t(f, d) {
        if (e) {
            var p = f.deletions;
            p === null ? (f.deletions = [d],
            f.flags |= 16) : p.push(d)
        }
    }
    function n(f, d) {
        if (!e)
            return null;
        for (; d !== null; )
            t(f, d),
            d = d.sibling;
        return null
    }
    function r(f, d) {
        for (f = new Map; d !== null; )
            d.key !== null ? f.set(d.key, d) : f.set(d.index, d),
            d = d.sibling;
        return f
    }
    function l(f, d) {
        return f = vt(f, d),
        f.index = 0,
        f.sibling = null,
        f
    }
    function i(f, d, p) {
        return f.index = p,
        e ? (p = f.alternate,
        p !== null ? (p = p.index,
        p < d ? (f.flags |= 2,
        d) : p) : (f.flags |= 2,
        d)) : (f.flags |= 1048576,
        d)
    }
    function o(f) {
        return e && f.alternate === null && (f.flags |= 2),
        f
    }
    function s(f, d, p, g) {
        return d === null || d.tag !== 6 ? (d = oi(p, f.mode, g),
        d.return = f,
        d) : (d = l(d, p),
        d.return = f,
        d)
    }
    function a(f, d, p, g) {
        var E = p.type;
        return E === Ht ? m(f, d, p.props.children, g, p.key) : d !== null && (d.elementType === E || typeof E == "object" && E !== null && E.$$typeof === rt && Hs(E) === d.type) ? (g = l(d, p.props),
        g.ref = jn(f, d, p),
        g.return = f,
        g) : (g = Vr(p.type, p.key, p.props, null, f.mode, g),
        g.ref = jn(f, d, p),
        g.return = f,
        g)
    }
    function c(f, d, p, g) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = si(p, f.mode, g),
        d.return = f,
        d) : (d = l(d, p.children || []),
        d.return = f,
        d)
    }
    function m(f, d, p, g, E) {
        return d === null || d.tag !== 7 ? (d = zt(p, f.mode, g, E),
        d.return = f,
        d) : (d = l(d, p),
        d.return = f,
        d)
    }
    function v(f, d, p) {
        if (typeof d == "string" && d !== "" || typeof d == "number")
            return d = oi("" + d, f.mode, p),
            d.return = f,
            d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case hr:
                return p = Vr(d.type, d.key, d.props, null, f.mode, p),
                p.ref = jn(f, null, d),
                p.return = f,
                p;
            case Bt:
                return d = si(d, f.mode, p),
                d.return = f,
                d;
            case rt:
                var g = d._init;
                return v(f, g(d._payload), p)
            }
            if (Ln(d) || kn(d))
                return d = zt(d, f.mode, p, null),
                d.return = f,
                d;
            jr(f, d)
        }
        return null
    }
    function h(f, d, p, g) {
        var E = d !== null ? d.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return E !== null ? null : s(f, d, "" + p, g);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case hr:
                return p.key === E ? a(f, d, p, g) : null;
            case Bt:
                return p.key === E ? c(f, d, p, g) : null;
            case rt:
                return E = p._init,
                h(f, d, E(p._payload), g)
            }
            if (Ln(p) || kn(p))
                return E !== null ? null : m(f, d, p, g, null);
            jr(f, p)
        }
        return null
    }
    function x(f, d, p, g, E) {
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return f = f.get(p) || null,
            s(d, f, "" + g, E);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case hr:
                return f = f.get(g.key === null ? p : g.key) || null,
                a(d, f, g, E);
            case Bt:
                return f = f.get(g.key === null ? p : g.key) || null,
                c(d, f, g, E);
            case rt:
                var C = g._init;
                return x(f, d, p, C(g._payload), E)
            }
            if (Ln(g) || kn(g))
                return f = f.get(p) || null,
                m(d, f, g, E, null);
            jr(d, g)
        }
        return null
    }
    function w(f, d, p, g) {
        for (var E = null, C = null, j = d, T = d = 0, V = null; j !== null && T < p.length; T++) {
            j.index > T ? (V = j,
            j = null) : V = j.sibling;
            var z = h(f, j, p[T], g);
            if (z === null) {
                j === null && (j = V);
                break
            }
            e && j && z.alternate === null && t(f, j),
            d = i(z, d, T),
            C === null ? E = z : C.sibling = z,
            C = z,
            j = V
        }
        if (T === p.length)
            return n(f, j),
            F && Nt(f, T),
            E;
        if (j === null) {
            for (; T < p.length; T++)
                j = v(f, p[T], g),
                j !== null && (d = i(j, d, T),
                C === null ? E = j : C.sibling = j,
                C = j);
            return F && Nt(f, T),
            E
        }
        for (j = r(f, j); T < p.length; T++)
            V = x(j, f, T, p[T], g),
            V !== null && (e && V.alternate !== null && j.delete(V.key === null ? T : V.key),
            d = i(V, d, T),
            C === null ? E = V : C.sibling = V,
            C = V);
        return e && j.forEach(function(Oe) {
            return t(f, Oe)
        }),
        F && Nt(f, T),
        E
    }
    function k(f, d, p, g) {
        var E = kn(p);
        if (typeof E != "function")
            throw Error(y(150));
        if (p = E.call(p),
        p == null)
            throw Error(y(151));
        for (var C = E = null, j = d, T = d = 0, V = null, z = p.next(); j !== null && !z.done; T++,
        z = p.next()) {
            j.index > T ? (V = j,
            j = null) : V = j.sibling;
            var Oe = h(f, j, z.value, g);
            if (Oe === null) {
                j === null && (j = V);
                break
            }
            e && j && Oe.alternate === null && t(f, j),
            d = i(Oe, d, T),
            C === null ? E = Oe : C.sibling = Oe,
            C = Oe,
            j = V
        }
        if (z.done)
            return n(f, j),
            F && Nt(f, T),
            E;
        if (j === null) {
            for (; !z.done; T++,
            z = p.next())
                z = v(f, z.value, g),
                z !== null && (d = i(z, d, T),
                C === null ? E = z : C.sibling = z,
                C = z);
            return F && Nt(f, T),
            E
        }
        for (j = r(f, j); !z.done; T++,
        z = p.next())
            z = x(j, f, T, z.value, g),
            z !== null && (e && z.alternate !== null && j.delete(z.key === null ? T : z.key),
            d = i(z, d, T),
            C === null ? E = z : C.sibling = z,
            C = z);
        return e && j.forEach(function(xn) {
            return t(f, xn)
        }),
        F && Nt(f, T),
        E
    }
    function M(f, d, p, g) {
        if (typeof p == "object" && p !== null && p.type === Ht && p.key === null && (p = p.props.children),
        typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case hr:
                e: {
                    for (var E = p.key, C = d; C !== null; ) {
                        if (C.key === E) {
                            if (E = p.type,
                            E === Ht) {
                                if (C.tag === 7) {
                                    n(f, C.sibling),
                                    d = l(C, p.props.children),
                                    d.return = f,
                                    f = d;
                                    break e
                                }
                            } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === rt && Hs(E) === C.type) {
                                n(f, C.sibling),
                                d = l(C, p.props),
                                d.ref = jn(f, C, p),
                                d.return = f,
                                f = d;
                                break e
                            }
                            n(f, C);
                            break
                        } else
                            t(f, C);
                        C = C.sibling
                    }
                    p.type === Ht ? (d = zt(p.props.children, f.mode, g, p.key),
                    d.return = f,
                    f = d) : (g = Vr(p.type, p.key, p.props, null, f.mode, g),
                    g.ref = jn(f, d, p),
                    g.return = f,
                    f = g)
                }
                return o(f);
            case Bt:
                e: {
                    for (C = p.key; d !== null; ) {
                        if (d.key === C)
                            if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                                n(f, d.sibling),
                                d = l(d, p.children || []),
                                d.return = f,
                                f = d;
                                break e
                            } else {
                                n(f, d);
                                break
                            }
                        else
                            t(f, d);
                        d = d.sibling
                    }
                    d = si(p, f.mode, g),
                    d.return = f,
                    f = d
                }
                return o(f);
            case rt:
                return C = p._init,
                M(f, d, C(p._payload), g)
            }
            if (Ln(p))
                return w(f, d, p, g);
            if (kn(p))
                return k(f, d, p, g);
            jr(f, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
        d !== null && d.tag === 6 ? (n(f, d.sibling),
        d = l(d, p),
        d.return = f,
        f = d) : (n(f, d),
        d = oi(p, f.mode, g),
        d.return = f,
        f = d),
        o(f)) : n(f, d)
    }
    return M
}
var fn = Mu(!0)
  , Ru = Mu(!1)
  , il = wt(null)
  , ol = null
  , Zt = null
  , Lo = null;
function Mo() {
    Lo = Zt = ol = null
}
function Ro(e) {
    var t = il.current;
    I(il),
    e._currentValue = t
}
function Bi(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function rn(e, t) {
    ol = e,
    Lo = Zt = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0),
    e.firstContext = null)
}
function _e(e) {
    var t = e._currentValue;
    if (Lo !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Zt === null) {
            if (ol === null)
                throw Error(y(308));
            Zt = e,
            ol.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Zt = Zt.next = e;
    return t
}
var Tt = null;
function Do(e) {
    Tt === null ? Tt = [e] : Tt.push(e)
}
function Du(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    Do(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    be(e, r)
}
function be(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var lt = !1;
function Ao(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Au(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Ze(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function pt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    L & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        be(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    Do(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    be(e, n)
}
function Ir(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        ko(e, n)
    }
}
function Vs(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o,
                n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else
            l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function sl(e, t, n, r) {
    var l = e.updateQueue;
    lt = !1;
    var i = l.firstBaseUpdate
      , o = l.lastBaseUpdate
      , s = l.shared.pending;
    if (s !== null) {
        l.shared.pending = null;
        var a = s
          , c = a.next;
        a.next = null,
        o === null ? i = c : o.next = c,
        o = a;
        var m = e.alternate;
        m !== null && (m = m.updateQueue,
        s = m.lastBaseUpdate,
        s !== o && (s === null ? m.firstBaseUpdate = c : s.next = c,
        m.lastBaseUpdate = a))
    }
    if (i !== null) {
        var v = l.baseState;
        o = 0,
        m = c = a = null,
        s = i;
        do {
            var h = s.lane
              , x = s.eventTime;
            if ((r & h) === h) {
                m !== null && (m = m.next = {
                    eventTime: x,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var w = e
                      , k = s;
                    switch (h = t,
                    x = n,
                    k.tag) {
                    case 1:
                        if (w = k.payload,
                        typeof w == "function") {
                            v = w.call(x, v, h);
                            break e
                        }
                        v = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = k.payload,
                        h = typeof w == "function" ? w.call(x, v, h) : w,
                        h == null)
                            break e;
                        v = B({}, v, h);
                        break e;
                    case 2:
                        lt = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64,
                h = l.effects,
                h === null ? l.effects = [s] : h.push(s))
            } else
                x = {
                    eventTime: x,
                    lane: h,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                m === null ? (c = m = x,
                a = v) : m = m.next = x,
                o |= h;
            if (s = s.next,
            s === null) {
                if (s = l.shared.pending,
                s === null)
                    break;
                h = s,
                s = h.next,
                h.next = null,
                l.lastBaseUpdate = h,
                l.shared.pending = null
            }
        } while (!0);
        if (m === null && (a = v),
        l.baseState = a,
        l.firstBaseUpdate = c,
        l.lastBaseUpdate = m,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                o |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            i === null && (l.shared.lanes = 0);
        Dt |= o,
        e.lanes = o,
        e.memoizedState = v
    }
}
function Ws(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(y(191, l));
                l.call(r)
            }
        }
}
var dr = {}
  , We = wt(dr)
  , tr = wt(dr)
  , nr = wt(dr);
function _t(e) {
    if (e === dr)
        throw Error(y(174));
    return e
}
function Io(e, t) {
    switch (D(nr, t),
    D(tr, e),
    D(We, dr),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ki(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = ki(t, e)
    }
    I(We),
    D(We, t)
}
function pn() {
    I(We),
    I(tr),
    I(nr)
}
function Iu(e) {
    _t(nr.current);
    var t = _t(We.current)
      , n = ki(t, e.type);
    t !== n && (D(tr, e),
    D(We, n))
}
function Fo(e) {
    tr.current === e && (I(We),
    I(tr))
}
var $ = wt(0);
function al(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var ei = [];
function $o() {
    for (var e = 0; e < ei.length; e++)
        ei[e]._workInProgressVersionPrimary = null;
    ei.length = 0
}
var Fr = tt.ReactCurrentDispatcher
  , ti = tt.ReactCurrentBatchConfig
  , Rt = 0
  , U = null
  , X = null
  , Z = null
  , ul = !1
  , Un = !1
  , rr = 0
  , Uf = 0;
function ne() {
    throw Error(y(321))
}
function Uo(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Fe(e[n], t[n]))
            return !1;
    return !0
}
function Bo(e, t, n, r, l, i) {
    if (Rt = i,
    U = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Fr.current = e === null || e.memoizedState === null ? Wf : Qf,
    e = n(r, l),
    Un) {
        i = 0;
        do {
            if (Un = !1,
            rr = 0,
            25 <= i)
                throw Error(y(301));
            i += 1,
            Z = X = null,
            t.updateQueue = null,
            Fr.current = Kf,
            e = n(r, l)
        } while (Un)
    }
    if (Fr.current = cl,
    t = X !== null && X.next !== null,
    Rt = 0,
    Z = X = U = null,
    ul = !1,
    t)
        throw Error(y(300));
    return e
}
function Ho() {
    var e = rr !== 0;
    return rr = 0,
    e
}
function Be() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Z === null ? U.memoizedState = Z = e : Z = Z.next = e,
    Z
}
function Pe() {
    if (X === null) {
        var e = U.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = X.next;
    var t = Z === null ? U.memoizedState : Z.next;
    if (t !== null)
        Z = t,
        X = e;
    else {
        if (e === null)
            throw Error(y(310));
        X = e,
        e = {
            memoizedState: X.memoizedState,
            baseState: X.baseState,
            baseQueue: X.baseQueue,
            queue: X.queue,
            next: null
        },
        Z === null ? U.memoizedState = Z = e : Z = Z.next = e
    }
    return Z
}
function lr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function ni(e) {
    var t = Pe()
      , n = t.queue;
    if (n === null)
        throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = X
      , l = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next,
            i.next = o
        }
        r.baseQueue = l = i,
        n.pending = null
    }
    if (l !== null) {
        i = l.next,
        r = r.baseState;
        var s = o = null
          , a = null
          , c = i;
        do {
            var m = c.lane;
            if ((Rt & m) === m)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var v = {
                    lane: m,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                a === null ? (s = a = v,
                o = r) : a = a.next = v,
                U.lanes |= m,
                Dt |= m
            }
            c = c.next
        } while (c !== null && c !== i);
        a === null ? o = r : a.next = s,
        Fe(r, t.memoizedState) || (fe = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            i = l.lane,
            U.lanes |= i,
            Dt |= i,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function ri(e) {
    var t = Pe()
      , n = t.queue;
    if (n === null)
        throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do
            i = e(i, o.action),
            o = o.next;
        while (o !== l);
        Fe(i, t.memoizedState) || (fe = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Fu() {}
function $u(e, t) {
    var n = U
      , r = Pe()
      , l = t()
      , i = !Fe(r.memoizedState, l);
    if (i && (r.memoizedState = l,
    fe = !0),
    r = r.queue,
    Vo(Hu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || Z !== null && Z.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        ir(9, Bu.bind(null, n, r, l, t), void 0, null),
        J === null)
            throw Error(y(349));
        Rt & 30 || Uu(n, t, l)
    }
    return l
}
function Uu(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = U.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    U.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Bu(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Vu(t) && Wu(e)
}
function Hu(e, t, n) {
    return n(function() {
        Vu(t) && Wu(e)
    })
}
function Vu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Fe(e, n)
    } catch {
        return !0
    }
}
function Wu(e) {
    var t = be(e, 1);
    t !== null && Ie(t, e, 1, -1)
}
function Qs(e) {
    var t = Be();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: lr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Vf.bind(null, U, e),
    [t.memoizedState, e]
}
function ir(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = U.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    U.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Qu() {
    return Pe().memoizedState
}
function $r(e, t, n, r) {
    var l = Be();
    U.flags |= e,
    l.memoizedState = ir(1 | t, n, void 0, r === void 0 ? null : r)
}
function Nl(e, t, n, r) {
    var l = Pe();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (X !== null) {
        var o = X.memoizedState;
        if (i = o.destroy,
        r !== null && Uo(r, o.deps)) {
            l.memoizedState = ir(t, n, i, r);
            return
        }
    }
    U.flags |= e,
    l.memoizedState = ir(1 | t, n, i, r)
}
function Ks(e, t) {
    return $r(8390656, 8, e, t)
}
function Vo(e, t) {
    return Nl(2048, 8, e, t)
}
function Ku(e, t) {
    return Nl(4, 2, e, t)
}
function Xu(e, t) {
    return Nl(4, 4, e, t)
}
function Yu(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Gu(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Nl(4, 4, Yu.bind(null, t, e), n)
}
function Wo() {}
function Zu(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Uo(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Ju(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Uo(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function qu(e, t, n) {
    return Rt & 21 ? (Fe(n, t) || (n = ru(),
    U.lanes |= n,
    Dt |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    fe = !0),
    e.memoizedState = n)
}
function Bf(e, t) {
    var n = R;
    R = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = ti.transition;
    ti.transition = {};
    try {
        e(!1),
        t()
    } finally {
        R = n,
        ti.transition = r
    }
}
function bu() {
    return Pe().memoizedState
}
function Hf(e, t, n) {
    var r = ht(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    ec(e))
        tc(t, n);
    else if (n = Du(e, t, n, r),
    n !== null) {
        var l = ae();
        Ie(n, e, r, l),
        nc(n, t, r)
    }
}
function Vf(e, t, n) {
    var r = ht(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (ec(e))
        tc(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var o = t.lastRenderedState
                  , s = i(o, n);
                if (l.hasEagerState = !0,
                l.eagerState = s,
                Fe(s, o)) {
                    var a = t.interleaved;
                    a === null ? (l.next = l,
                    Do(t)) : (l.next = a.next,
                    a.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = Du(e, t, l, r),
        n !== null && (l = ae(),
        Ie(n, e, r, l),
        nc(n, t, r))
    }
}
function ec(e) {
    var t = e.alternate;
    return e === U || t !== null && t === U
}
function tc(e, t) {
    Un = ul = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function nc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        ko(e, n)
    }
}
var cl = {
    readContext: _e,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1
}
  , Wf = {
    readContext: _e,
    useCallback: function(e, t) {
        return Be().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: _e,
    useEffect: Ks,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        $r(4194308, 4, Yu.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return $r(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return $r(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Be();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Be();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Hf.bind(null, U, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Be();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Qs,
    useDebugValue: Wo,
    useDeferredValue: function(e) {
        return Be().memoizedState = e
    },
    useTransition: function() {
        var e = Qs(!1)
          , t = e[0];
        return e = Bf.bind(null, e[1]),
        Be().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = U
          , l = Be();
        if (F) {
            if (n === void 0)
                throw Error(y(407));
            n = n()
        } else {
            if (n = t(),
            J === null)
                throw Error(y(349));
            Rt & 30 || Uu(r, t, n)
        }
        l.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return l.queue = i,
        Ks(Hu.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        ir(9, Bu.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Be()
          , t = J.identifierPrefix;
        if (F) {
            var n = Ge
              , r = Ye;
            n = (r & ~(1 << 32 - Ae(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = rr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = Uf++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Qf = {
    readContext: _e,
    useCallback: Zu,
    useContext: _e,
    useEffect: Vo,
    useImperativeHandle: Gu,
    useInsertionEffect: Ku,
    useLayoutEffect: Xu,
    useMemo: Ju,
    useReducer: ni,
    useRef: Qu,
    useState: function() {
        return ni(lr)
    },
    useDebugValue: Wo,
    useDeferredValue: function(e) {
        var t = Pe();
        return qu(t, X.memoizedState, e)
    },
    useTransition: function() {
        var e = ni(lr)[0]
          , t = Pe().memoizedState;
        return [e, t]
    },
    useMutableSource: Fu,
    useSyncExternalStore: $u,
    useId: bu,
    unstable_isNewReconciler: !1
}
  , Kf = {
    readContext: _e,
    useCallback: Zu,
    useContext: _e,
    useEffect: Vo,
    useImperativeHandle: Gu,
    useInsertionEffect: Ku,
    useLayoutEffect: Xu,
    useMemo: Ju,
    useReducer: ri,
    useRef: Qu,
    useState: function() {
        return ri(lr)
    },
    useDebugValue: Wo,
    useDeferredValue: function(e) {
        var t = Pe();
        return X === null ? t.memoizedState = e : qu(t, X.memoizedState, e)
    },
    useTransition: function() {
        var e = ri(lr)[0]
          , t = Pe().memoizedState;
        return [e, t]
    },
    useMutableSource: Fu,
    useSyncExternalStore: $u,
    useId: bu,
    unstable_isNewReconciler: !1
};
function Le(e, t) {
    if (e && e.defaultProps) {
        t = B({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Hi(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : B({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Cl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Ft(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ae()
          , l = ht(e)
          , i = Ze(r, l);
        i.payload = t,
        n != null && (i.callback = n),
        t = pt(e, i, l),
        t !== null && (Ie(t, e, l, r),
        Ir(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ae()
          , l = ht(e)
          , i = Ze(r, l);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = pt(e, i, l),
        t !== null && (Ie(t, e, l, r),
        Ir(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ae()
          , r = ht(e)
          , l = Ze(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = pt(e, l, r),
        t !== null && (Ie(t, e, r, n),
        Ir(t, e, r))
    }
};
function Xs(e, t, n, r, l, i, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Jn(n, r) || !Jn(l, i) : !0
}
function rc(e, t, n) {
    var r = !1
      , l = yt
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = _e(i) : (l = me(t) ? Lt : ie.current,
    r = t.contextTypes,
    i = (r = r != null) ? cn(e, l) : yt),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Cl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Ys(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Cl.enqueueReplaceState(t, t.state, null)
}
function Vi(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = {},
    Ao(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = _e(i) : (i = me(t) ? Lt : ie.current,
    l.context = cn(e, i)),
    l.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Hi(e, t, i, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && Cl.enqueueReplaceState(l, l.state, null),
    sl(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function mn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += xd(r),
            r = r.return;
        while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function li(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Wi(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Xf = typeof WeakMap == "function" ? WeakMap : Map;
function lc(e, t, n) {
    n = Ze(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        fl || (fl = !0,
        eo = r),
        Wi(e, t)
    }
    ,
    n
}
function ic(e, t, n) {
    n = Ze(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            Wi(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Wi(e, t),
        typeof r != "function" && (mt === null ? mt = new Set([this]) : mt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Gs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Xf;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = sp.bind(null, e, t, n),
    t.then(e, e))
}
function Zs(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Js(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ze(-1, 1),
    t.tag = 2,
    pt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Yf = tt.ReactCurrentOwner
  , fe = !1;
function oe(e, t, n, r) {
    t.child = e === null ? Ru(t, null, n, r) : fn(t, e.child, n, r)
}
function qs(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return rn(t, l),
    r = Bo(e, t, n, r, i, l),
    n = Ho(),
    e !== null && !fe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    et(e, t, l)) : (F && n && Po(t),
    t.flags |= 1,
    oe(e, t, r, l),
    t.child)
}
function bs(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !qo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        oc(e, t, i, r, l)) : (e = Vr(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Jn,
        n(o, r) && e.ref === t.ref)
            return et(e, t, l)
    }
    return t.flags |= 1,
    e = vt(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function oc(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Jn(i, r) && e.ref === t.ref)
            if (fe = !1,
            t.pendingProps = r = i,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (fe = !0);
            else
                return t.lanes = e.lanes,
                et(e, t, l)
    }
    return Qi(e, t, n, r, l)
}
function sc(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            D(qt, ve),
            ve |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                D(qt, ve),
                ve |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            D(qt, ve),
            ve |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        D(qt, ve),
        ve |= r;
    return oe(e, t, l, n),
    t.child
}
function ac(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Qi(e, t, n, r, l) {
    var i = me(n) ? Lt : ie.current;
    return i = cn(t, i),
    rn(t, l),
    n = Bo(e, t, n, r, i, l),
    r = Ho(),
    e !== null && !fe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    et(e, t, l)) : (F && r && Po(t),
    t.flags |= 1,
    oe(e, t, n, l),
    t.child)
}
function ea(e, t, n, r, l) {
    if (me(n)) {
        var i = !0;
        nl(t)
    } else
        i = !1;
    if (rn(t, l),
    t.stateNode === null)
        Ur(e, t),
        rc(t, n, r),
        Vi(t, n, r, l),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , s = t.memoizedProps;
        o.props = s;
        var a = o.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = _e(c) : (c = me(n) ? Lt : ie.current,
        c = cn(t, c));
        var m = n.getDerivedStateFromProps
          , v = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        v || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || a !== c) && Ys(t, o, r, c),
        lt = !1;
        var h = t.memoizedState;
        o.state = h,
        sl(t, r, o, l),
        a = t.memoizedState,
        s !== r || h !== a || pe.current || lt ? (typeof m == "function" && (Hi(t, n, m, r),
        a = t.memoizedState),
        (s = lt || Xs(t, n, s, r, h, a, c)) ? (v || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        o.props = r,
        o.state = a,
        o.context = c,
        r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        Au(e, t),
        s = t.memoizedProps,
        c = t.type === t.elementType ? s : Le(t.type, s),
        o.props = c,
        v = t.pendingProps,
        h = o.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = _e(a) : (a = me(n) ? Lt : ie.current,
        a = cn(t, a));
        var x = n.getDerivedStateFromProps;
        (m = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== v || h !== a) && Ys(t, o, r, a),
        lt = !1,
        h = t.memoizedState,
        o.state = h,
        sl(t, r, o, l);
        var w = t.memoizedState;
        s !== v || h !== w || pe.current || lt ? (typeof x == "function" && (Hi(t, n, x, r),
        w = t.memoizedState),
        (c = lt || Xs(t, n, c, r, h, w, a) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, a),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, a)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        o.props = r,
        o.state = w,
        o.context = a,
        r = c) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Ki(e, t, n, r, i, l)
}
function Ki(e, t, n, r, l, i) {
    ac(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return l && $s(t, n, !1),
        et(e, t, i);
    r = t.stateNode,
    Yf.current = t;
    var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = fn(t, e.child, null, i),
    t.child = fn(t, null, s, i)) : oe(e, t, s, i),
    t.memoizedState = r.state,
    l && $s(t, n, !0),
    t.child
}
function uc(e) {
    var t = e.stateNode;
    t.pendingContext ? Fs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fs(e, t.context, !1),
    Io(e, t.containerInfo)
}
function ta(e, t, n, r, l) {
    return dn(),
    zo(l),
    t.flags |= 256,
    oe(e, t, n, r),
    t.child
}
var Xi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Yi(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function cc(e, t, n) {
    var r = t.pendingProps, l = $.current, i = !1, o = (t.flags & 128) !== 0, s;
    if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    D($, l & 1),
    e === null)
        return Ui(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = o) : i = _l(o, r, 0, null),
        e = zt(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = Yi(n),
        t.memoizedState = Xi,
        e) : Qo(t, o));
    if (l = e.memoizedState,
    l !== null && (s = l.dehydrated,
    s !== null))
        return Gf(e, t, o, r, s, l, n);
    if (i) {
        i = r.fallback,
        o = t.mode,
        l = e.child,
        s = l.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = vt(l, a),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        s !== null ? i = vt(s, i) : (i = zt(i, o, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        o = e.child.memoizedState,
        o = o === null ? Yi(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        i.memoizedState = o,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Xi,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = vt(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Qo(e, t) {
    return t = _l({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Tr(e, t, n, r) {
    return r !== null && zo(r),
    fn(t, e.child, null, n),
    e = Qo(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Gf(e, t, n, r, l, i, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = li(Error(y(422))),
        Tr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        l = t.mode,
        r = _l({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        i = zt(i, l, o, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && fn(t, e.child, null, o),
        t.child.memoizedState = Yi(o),
        t.memoizedState = Xi,
        i);
    if (!(t.mode & 1))
        return Tr(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var s = r.dgst;
        return r = s,
        i = Error(y(419)),
        r = li(i, r, void 0),
        Tr(e, t, o, r)
    }
    if (s = (o & e.childLanes) !== 0,
    fe || s) {
        if (r = J,
        r !== null) {
            switch (o & -o) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default:
                l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l,
            l !== 0 && l !== i.retryLane && (i.retryLane = l,
            be(e, l),
            Ie(r, e, l, -1))
        }
        return Jo(),
        r = li(Error(y(421))),
        Tr(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = ap.bind(null, e),
    l._reactRetry = t,
    null) : (e = i.treeContext,
    ye = ft(l.nextSibling),
    xe = t,
    F = !0,
    Re = null,
    e !== null && (Ne[Ce++] = Ye,
    Ne[Ce++] = Ge,
    Ne[Ce++] = Mt,
    Ye = e.id,
    Ge = e.overflow,
    Mt = t),
    t = Qo(t, r.children),
    t.flags |= 4096,
    t)
}
function na(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Bi(e.return, t, n)
}
function ii(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = l)
}
function dc(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , i = r.tail;
    if (oe(e, t, r.children, n),
    r = $.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && na(e, n, t);
                else if (e.tag === 19)
                    na(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (D($, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && al(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            ii(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && al(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            ii(t, !0, n, null, i);
            break;
        case "together":
            ii(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ur(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function et(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Dt |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(y(153));
    if (t.child !== null) {
        for (e = t.child,
        n = vt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = vt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Zf(e, t, n) {
    switch (t.tag) {
    case 3:
        uc(t),
        dn();
        break;
    case 5:
        Iu(t);
        break;
    case 1:
        me(t.type) && nl(t);
        break;
    case 4:
        Io(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        D(il, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (D($, $.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? cc(e, t, n) : (D($, $.current & 1),
            e = et(e, t, n),
            e !== null ? e.sibling : null);
        D($, $.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return dc(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        D($, $.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        sc(e, t, n)
    }
    return et(e, t, n)
}
var fc, Gi, pc, mc;
fc = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Gi = function() {}
;
pc = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        _t(We.current);
        var i = null;
        switch (n) {
        case "input":
            l = gi(e, l),
            r = gi(e, r),
            i = [];
            break;
        case "select":
            l = B({}, l, {
                value: void 0
            }),
            r = B({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            l = wi(e, l),
            r = wi(e, r),
            i = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = el)
        }
        Si(n, r);
        var o;
        n = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var s = l[c];
                    for (o in s)
                        s.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Wn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var a = r[c];
            if (s = l != null ? l[c] : void 0,
            r.hasOwnProperty(c) && a !== s && (a != null || s != null))
                if (c === "style")
                    if (s) {
                        for (o in s)
                            !s.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in a)
                            a.hasOwnProperty(o) && s[o] !== a[o] && (n || (n = {}),
                            n[o] = a[o])
                    } else
                        n || (i || (i = []),
                        i.push(c, n)),
                        n = a;
                else
                    c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    s = s ? s.__html : void 0,
                    a != null && s !== a && (i = i || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Wn.hasOwnProperty(c) ? (a != null && c === "onScroll" && A("scroll", e),
                    i || s === a || (i = [])) : (i = i || []).push(c, a))
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
mc = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Tn(e, t) {
    if (!F)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Jf(e, t, n) {
    var r = t.pendingProps;
    switch (Oo(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return re(t),
        null;
    case 1:
        return me(t.type) && tl(),
        re(t),
        null;
    case 3:
        return r = t.stateNode,
        pn(),
        I(pe),
        I(ie),
        $o(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Cr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Re !== null && (ro(Re),
        Re = null))),
        Gi(e, t),
        re(t),
        null;
    case 5:
        Fo(t);
        var l = _t(nr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            pc(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(y(166));
                return re(t),
                null
            }
            if (e = _t(We.current),
            Cr(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[He] = t,
                r[er] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    A("cancel", r),
                    A("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    A("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < Rn.length; l++)
                        A(Rn[l], r);
                    break;
                case "source":
                    A("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    A("error", r),
                    A("load", r);
                    break;
                case "details":
                    A("toggle", r);
                    break;
                case "input":
                    ds(r, i),
                    A("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    A("invalid", r);
                    break;
                case "textarea":
                    ps(r, i),
                    A("invalid", r)
                }
                Si(n, i),
                l = null;
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var s = i[o];
                        o === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Nr(r.textContent, s, e),
                        l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Nr(r.textContent, s, e),
                        l = ["children", "" + s]) : Wn.hasOwnProperty(o) && s != null && o === "onScroll" && A("scroll", r)
                    }
                switch (n) {
                case "input":
                    vr(r),
                    fs(r, i, !0);
                    break;
                case "textarea":
                    vr(r),
                    ms(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = el)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Ha(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[He] = t,
                e[er] = r,
                fc(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = Ei(n, r),
                    n) {
                    case "dialog":
                        A("cancel", e),
                        A("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        A("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < Rn.length; l++)
                            A(Rn[l], e);
                        l = r;
                        break;
                    case "source":
                        A("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        A("error", e),
                        A("load", e),
                        l = r;
                        break;
                    case "details":
                        A("toggle", e),
                        l = r;
                        break;
                    case "input":
                        ds(e, r),
                        l = gi(e, r),
                        A("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = B({}, r, {
                            value: void 0
                        }),
                        A("invalid", e);
                        break;
                    case "textarea":
                        ps(e, r),
                        l = wi(e, r),
                        A("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    Si(n, l),
                    s = l;
                    for (i in s)
                        if (s.hasOwnProperty(i)) {
                            var a = s[i];
                            i === "style" ? Qa(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Va(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Qn(e, a) : typeof a == "number" && Qn(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Wn.hasOwnProperty(i) ? a != null && i === "onScroll" && A("scroll", e) : a != null && ho(e, i, a, o))
                        }
                    switch (n) {
                    case "input":
                        vr(e),
                        fs(e, r, !1);
                        break;
                    case "textarea":
                        vr(e),
                        ms(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + gt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? bt(e, !!r.multiple, i, !1) : r.defaultValue != null && bt(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = el)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return re(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            mc(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(y(166));
            if (n = _t(nr.current),
            _t(We.current),
            Cr(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[He] = t,
                (i = r.nodeValue !== n) && (e = xe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Nr(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Nr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[He] = t,
                t.stateNode = r
        }
        return re(t),
        null;
    case 13:
        if (I($),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (F && ye !== null && t.mode & 1 && !(t.flags & 128))
                Lu(),
                dn(),
                t.flags |= 98560,
                i = !1;
            else if (i = Cr(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(y(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(y(317));
                    i[He] = t
                } else
                    dn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                re(t),
                i = !1
            } else
                Re !== null && (ro(Re),
                Re = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || $.current & 1 ? Y === 0 && (Y = 3) : Jo())),
        t.updateQueue !== null && (t.flags |= 4),
        re(t),
        null);
    case 4:
        return pn(),
        Gi(e, t),
        e === null && qn(t.stateNode.containerInfo),
        re(t),
        null;
    case 10:
        return Ro(t.type._context),
        re(t),
        null;
    case 17:
        return me(t.type) && tl(),
        re(t),
        null;
    case 19:
        if (I($),
        i = t.memoizedState,
        i === null)
            return re(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = i.rendering,
        o === null)
            if (r)
                Tn(i, !1);
            else {
                if (Y !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = al(e),
                        o !== null) {
                            for (t.flags |= 128,
                            Tn(i, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                o = i.alternate,
                                o === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = o.childLanes,
                                i.lanes = o.lanes,
                                i.child = o.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = o.memoizedProps,
                                i.memoizedState = o.memoizedState,
                                i.updateQueue = o.updateQueue,
                                i.type = o.type,
                                e = o.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return D($, $.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && Q() > hn && (t.flags |= 128,
                r = !0,
                Tn(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = al(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Tn(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !o.alternate && !F)
                        return re(t),
                        null
                } else
                    2 * Q() - i.renderingStartTime > hn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Tn(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = i.last,
            n !== null ? n.sibling = o : t.child = o,
            i.last = o)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = Q(),
        t.sibling = null,
        n = $.current,
        D($, r ? n & 1 | 2 : n & 1),
        t) : (re(t),
        null);
    case 22:
    case 23:
        return Zo(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ve & 1073741824 && (re(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(y(156, t.tag))
}
function qf(e, t) {
    switch (Oo(t),
    t.tag) {
    case 1:
        return me(t.type) && tl(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return pn(),
        I(pe),
        I(ie),
        $o(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Fo(t),
        null;
    case 13:
        if (I($),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(y(340));
            dn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return I($),
        null;
    case 4:
        return pn(),
        null;
    case 10:
        return Ro(t.type._context),
        null;
    case 22:
    case 23:
        return Zo(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var _r = !1
  , le = !1
  , bf = typeof WeakSet == "function" ? WeakSet : Set
  , S = null;
function Jt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                H(e, t, r)
            }
        else
            n.current = null
}
function Zi(e, t, n) {
    try {
        n()
    } catch (r) {
        H(e, t, r)
    }
}
var ra = !1;
function ep(e, t) {
    if (Mi = Jr,
    e = xu(),
    _o(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , s = -1
                      , a = -1
                      , c = 0
                      , m = 0
                      , v = e
                      , h = null;
                    t: for (; ; ) {
                        for (var x; v !== n || l !== 0 && v.nodeType !== 3 || (s = o + l),
                        v !== i || r !== 0 && v.nodeType !== 3 || (a = o + r),
                        v.nodeType === 3 && (o += v.nodeValue.length),
                        (x = v.firstChild) !== null; )
                            h = v,
                            v = x;
                        for (; ; ) {
                            if (v === e)
                                break t;
                            if (h === n && ++c === l && (s = o),
                            h === i && ++m === r && (a = o),
                            (x = v.nextSibling) !== null)
                                break;
                            v = h,
                            h = v.parentNode
                        }
                        v = x
                    }
                    n = s === -1 || a === -1 ? null : {
                        start: s,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ri = {
        focusedElem: e,
        selectionRange: n
    },
    Jr = !1,
    S = t; S !== null; )
        if (t = S,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            S = e;
        else
            for (; S !== null; ) {
                t = S;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var k = w.memoizedProps
                                  , M = w.memoizedState
                                  , f = t.stateNode
                                  , d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Le(t.type, k), M);
                                f.__reactInternalSnapshotBeforeUpdate = d
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(y(163))
                        }
                } catch (g) {
                    H(t, t.return, g)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    S = e;
                    break
                }
                S = t.return
            }
    return w = ra,
    ra = !1,
    w
}
function Bn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0,
                i !== void 0 && Zi(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}
function jl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Ji(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function hc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    hc(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[He],
    delete t[er],
    delete t[Ii],
    delete t[Af],
    delete t[If])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function vc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function la(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || vc(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function qi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = el));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (qi(e, t, n),
        e = e.sibling; e !== null; )
            qi(e, t, n),
            e = e.sibling
}
function bi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (bi(e, t, n),
        e = e.sibling; e !== null; )
            bi(e, t, n),
            e = e.sibling
}
var q = null
  , Me = !1;
function nt(e, t, n) {
    for (n = n.child; n !== null; )
        gc(e, t, n),
        n = n.sibling
}
function gc(e, t, n) {
    if (Ve && typeof Ve.onCommitFiberUnmount == "function")
        try {
            Ve.onCommitFiberUnmount(yl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        le || Jt(n, t);
    case 6:
        var r = q
          , l = Me;
        q = null,
        nt(e, t, n),
        q = r,
        Me = l,
        q !== null && (Me ? (e = q,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : q.removeChild(n.stateNode));
        break;
    case 18:
        q !== null && (Me ? (e = q,
        n = n.stateNode,
        e.nodeType === 8 ? ql(e.parentNode, n) : e.nodeType === 1 && ql(e, n),
        Gn(e)) : ql(q, n.stateNode));
        break;
    case 4:
        r = q,
        l = Me,
        q = n.stateNode.containerInfo,
        Me = !0,
        nt(e, t, n),
        q = r,
        Me = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!le && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var i = l
                  , o = i.destroy;
                i = i.tag,
                o !== void 0 && (i & 2 || i & 4) && Zi(n, t, o),
                l = l.next
            } while (l !== r)
        }
        nt(e, t, n);
        break;
    case 1:
        if (!le && (Jt(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (s) {
                H(n, t, s)
            }
        nt(e, t, n);
        break;
    case 21:
        nt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (le = (r = le) || n.memoizedState !== null,
        nt(e, t, n),
        le = r) : nt(e, t, n);
        break;
    default:
        nt(e, t, n)
    }
}
function ia(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new bf),
        t.forEach(function(r) {
            var l = up.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function ze(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e
                  , o = t
                  , s = o;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 5:
                        q = s.stateNode,
                        Me = !1;
                        break e;
                    case 3:
                        q = s.stateNode.containerInfo,
                        Me = !0;
                        break e;
                    case 4:
                        q = s.stateNode.containerInfo,
                        Me = !0;
                        break e
                    }
                    s = s.return
                }
                if (q === null)
                    throw Error(y(160));
                gc(i, o, l),
                q = null,
                Me = !1;
                var a = l.alternate;
                a !== null && (a.return = null),
                l.return = null
            } catch (c) {
                H(l, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            yc(t, e),
            t = t.sibling
}
function yc(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ze(t, e),
        $e(e),
        r & 4) {
            try {
                Bn(3, e, e.return),
                jl(3, e)
            } catch (k) {
                H(e, e.return, k)
            }
            try {
                Bn(5, e, e.return)
            } catch (k) {
                H(e, e.return, k)
            }
        }
        break;
    case 1:
        ze(t, e),
        $e(e),
        r & 512 && n !== null && Jt(n, n.return);
        break;
    case 5:
        if (ze(t, e),
        $e(e),
        r & 512 && n !== null && Jt(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                Qn(l, "")
            } catch (k) {
                H(e, e.return, k)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var i = e.memoizedProps
              , o = n !== null ? n.memoizedProps : i
              , s = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    s === "input" && i.type === "radio" && i.name != null && Ua(l, i),
                    Ei(s, o);
                    var c = Ei(s, i);
                    for (o = 0; o < a.length; o += 2) {
                        var m = a[o]
                          , v = a[o + 1];
                        m === "style" ? Qa(l, v) : m === "dangerouslySetInnerHTML" ? Va(l, v) : m === "children" ? Qn(l, v) : ho(l, m, v, c)
                    }
                    switch (s) {
                    case "input":
                        yi(l, i);
                        break;
                    case "textarea":
                        Ba(l, i);
                        break;
                    case "select":
                        var h = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!i.multiple;
                        var x = i.value;
                        x != null ? bt(l, !!i.multiple, x, !1) : h !== !!i.multiple && (i.defaultValue != null ? bt(l, !!i.multiple, i.defaultValue, !0) : bt(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[er] = i
                } catch (k) {
                    H(e, e.return, k)
                }
        }
        break;
    case 6:
        if (ze(t, e),
        $e(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(y(162));
            l = e.stateNode,
            i = e.memoizedProps;
            try {
                l.nodeValue = i
            } catch (k) {
                H(e, e.return, k)
            }
        }
        break;
    case 3:
        if (ze(t, e),
        $e(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Gn(t.containerInfo)
            } catch (k) {
                H(e, e.return, k)
            }
        break;
    case 4:
        ze(t, e),
        $e(e);
        break;
    case 13:
        ze(t, e),
        $e(e),
        l = e.child,
        l.flags & 8192 && (i = l.memoizedState !== null,
        l.stateNode.isHidden = i,
        !i || l.alternate !== null && l.alternate.memoizedState !== null || (Yo = Q())),
        r & 4 && ia(e);
        break;
    case 22:
        if (m = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (le = (c = le) || m,
        ze(t, e),
        le = c) : ze(t, e),
        $e(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !m && e.mode & 1)
                for (S = e,
                m = e.child; m !== null; ) {
                    for (v = S = m; S !== null; ) {
                        switch (h = S,
                        x = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Bn(4, h, h.return);
                            break;
                        case 1:
                            Jt(h, h.return);
                            var w = h.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (k) {
                                    H(r, n, k)
                                }
                            }
                            break;
                        case 5:
                            Jt(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                sa(v);
                                continue
                            }
                        }
                        x !== null ? (x.return = h,
                        S = x) : sa(v)
                    }
                    m = m.sibling
                }
            e: for (m = null,
            v = e; ; ) {
                if (v.tag === 5) {
                    if (m === null) {
                        m = v;
                        try {
                            l = v.stateNode,
                            c ? (i = l.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = v.stateNode,
                            a = v.memoizedProps.style,
                            o = a != null && a.hasOwnProperty("display") ? a.display : null,
                            s.style.display = Wa("display", o))
                        } catch (k) {
                            H(e, e.return, k)
                        }
                    }
                } else if (v.tag === 6) {
                    if (m === null)
                        try {
                            v.stateNode.nodeValue = c ? "" : v.memoizedProps
                        } catch (k) {
                            H(e, e.return, k)
                        }
                } else if ((v.tag !== 22 && v.tag !== 23 || v.memoizedState === null || v === e) && v.child !== null) {
                    v.child.return = v,
                    v = v.child;
                    continue
                }
                if (v === e)
                    break e;
                for (; v.sibling === null; ) {
                    if (v.return === null || v.return === e)
                        break e;
                    m === v && (m = null),
                    v = v.return
                }
                m === v && (m = null),
                v.sibling.return = v.return,
                v = v.sibling
            }
        }
        break;
    case 19:
        ze(t, e),
        $e(e),
        r & 4 && ia(e);
        break;
    case 21:
        break;
    default:
        ze(t, e),
        $e(e)
    }
}
function $e(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (vc(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(y(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (Qn(l, ""),
                r.flags &= -33);
                var i = la(e);
                bi(e, i, l);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , s = la(e);
                qi(e, s, o);
                break;
            default:
                throw Error(y(161))
            }
        } catch (a) {
            H(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function tp(e, t, n) {
    S = e,
    xc(e)
}
function xc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; S !== null; ) {
        var l = S
          , i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || _r;
            if (!o) {
                var s = l.alternate
                  , a = s !== null && s.memoizedState !== null || le;
                s = _r;
                var c = le;
                if (_r = o,
                (le = a) && !c)
                    for (S = l; S !== null; )
                        o = S,
                        a = o.child,
                        o.tag === 22 && o.memoizedState !== null ? aa(l) : a !== null ? (a.return = o,
                        S = a) : aa(l);
                for (; i !== null; )
                    S = i,
                    xc(i),
                    i = i.sibling;
                S = l,
                _r = s,
                le = c
            }
            oa(e)
        } else
            l.subtreeFlags & 8772 && i !== null ? (i.return = l,
            S = i) : oa(e)
    }
}
function oa(e) {
    for (; S !== null; ) {
        var t = S;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        le || jl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !le)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Ws(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Ws(t, o, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var m = c.memoizedState;
                                if (m !== null) {
                                    var v = m.dehydrated;
                                    v !== null && Gn(v)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(y(163))
                    }
                le || t.flags & 512 && Ji(t)
            } catch (h) {
                H(t, t.return, h)
            }
        }
        if (t === e) {
            S = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            S = n;
            break
        }
        S = t.return
    }
}
function sa(e) {
    for (; S !== null; ) {
        var t = S;
        if (t === e) {
            S = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            S = n;
            break
        }
        S = t.return
    }
}
function aa(e) {
    for (; S !== null; ) {
        var t = S;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    jl(4, t)
                } catch (a) {
                    H(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        H(t, l, a)
                    }
                }
                var i = t.return;
                try {
                    Ji(t)
                } catch (a) {
                    H(t, i, a)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    Ji(t)
                } catch (a) {
                    H(t, o, a)
                }
            }
        } catch (a) {
            H(t, t.return, a)
        }
        if (t === e) {
            S = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return,
            S = s;
            break
        }
        S = t.return
    }
}
var np = Math.ceil
  , dl = tt.ReactCurrentDispatcher
  , Ko = tt.ReactCurrentOwner
  , Te = tt.ReactCurrentBatchConfig
  , L = 0
  , J = null
  , K = null
  , b = 0
  , ve = 0
  , qt = wt(0)
  , Y = 0
  , or = null
  , Dt = 0
  , Tl = 0
  , Xo = 0
  , Hn = null
  , de = null
  , Yo = 0
  , hn = 1 / 0
  , Ke = null
  , fl = !1
  , eo = null
  , mt = null
  , Pr = !1
  , at = null
  , pl = 0
  , Vn = 0
  , to = null
  , Br = -1
  , Hr = 0;
function ae() {
    return L & 6 ? Q() : Br !== -1 ? Br : Br = Q()
}
function ht(e) {
    return e.mode & 1 ? L & 2 && b !== 0 ? b & -b : $f.transition !== null ? (Hr === 0 && (Hr = ru()),
    Hr) : (e = R,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : cu(e.type)),
    e) : 1
}
function Ie(e, t, n, r) {
    if (50 < Vn)
        throw Vn = 0,
        to = null,
        Error(y(185));
    ar(e, n, r),
    (!(L & 2) || e !== J) && (e === J && (!(L & 2) && (Tl |= n),
    Y === 4 && ot(e, b)),
    he(e, r),
    n === 1 && L === 0 && !(t.mode & 1) && (hn = Q() + 500,
    El && kt()))
}
function he(e, t) {
    var n = e.callbackNode;
    Fd(e, t);
    var r = Zr(e, e === J ? b : 0);
    if (r === 0)
        n !== null && gs(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && gs(n),
        t === 1)
            e.tag === 0 ? Ff(ua.bind(null, e)) : Pu(ua.bind(null, e)),
            Rf(function() {
                !(L & 6) && kt()
            }),
            n = null;
        else {
            switch (lu(r)) {
            case 1:
                n = wo;
                break;
            case 4:
                n = tu;
                break;
            case 16:
                n = Gr;
                break;
            case 536870912:
                n = nu;
                break;
            default:
                n = Gr
            }
            n = Tc(n, wc.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function wc(e, t) {
    if (Br = -1,
    Hr = 0,
    L & 6)
        throw Error(y(327));
    var n = e.callbackNode;
    if (ln() && e.callbackNode !== n)
        return null;
    var r = Zr(e, e === J ? b : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = ml(e, r);
    else {
        t = r;
        var l = L;
        L |= 2;
        var i = Sc();
        (J !== e || b !== t) && (Ke = null,
        hn = Q() + 500,
        Ot(e, t));
        do
            try {
                ip();
                break
            } catch (s) {
                kc(e, s)
            }
        while (!0);
        Mo(),
        dl.current = i,
        L = l,
        K !== null ? t = 0 : (J = null,
        b = 0,
        t = Y)
    }
    if (t !== 0) {
        if (t === 2 && (l = _i(e),
        l !== 0 && (r = l,
        t = no(e, l))),
        t === 1)
            throw n = or,
            Ot(e, 0),
            ot(e, r),
            he(e, Q()),
            n;
        if (t === 6)
            ot(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !rp(l) && (t = ml(e, r),
            t === 2 && (i = _i(e),
            i !== 0 && (r = i,
            t = no(e, i))),
            t === 1))
                throw n = or,
                Ot(e, 0),
                ot(e, r),
                he(e, Q()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(y(345));
            case 2:
                Ct(e, de, Ke);
                break;
            case 3:
                if (ot(e, r),
                (r & 130023424) === r && (t = Yo + 500 - Q(),
                10 < t)) {
                    if (Zr(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        ae(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = Ai(Ct.bind(null, e, de, Ke), t);
                    break
                }
                Ct(e, de, Ke);
                break;
            case 4:
                if (ot(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var o = 31 - Ae(r);
                    i = 1 << o,
                    o = t[o],
                    o > l && (l = o),
                    r &= ~i
                }
                if (r = l,
                r = Q() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * np(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Ai(Ct.bind(null, e, de, Ke), r);
                    break
                }
                Ct(e, de, Ke);
                break;
            case 5:
                Ct(e, de, Ke);
                break;
            default:
                throw Error(y(329))
            }
        }
    }
    return he(e, Q()),
    e.callbackNode === n ? wc.bind(null, e) : null
}
function no(e, t) {
    var n = Hn;
    return e.current.memoizedState.isDehydrated && (Ot(e, t).flags |= 256),
    e = ml(e, t),
    e !== 2 && (t = de,
    de = n,
    t !== null && ro(t)),
    e
}
function ro(e) {
    de === null ? de = e : de.push.apply(de, e)
}
function rp(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Fe(i(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function ot(e, t) {
    for (t &= ~Xo,
    t &= ~Tl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ae(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function ua(e) {
    if (L & 6)
        throw Error(y(327));
    ln();
    var t = Zr(e, 0);
    if (!(t & 1))
        return he(e, Q()),
        null;
    var n = ml(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = _i(e);
        r !== 0 && (t = r,
        n = no(e, r))
    }
    if (n === 1)
        throw n = or,
        Ot(e, 0),
        ot(e, t),
        he(e, Q()),
        n;
    if (n === 6)
        throw Error(y(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Ct(e, de, Ke),
    he(e, Q()),
    null
}
function Go(e, t) {
    var n = L;
    L |= 1;
    try {
        return e(t)
    } finally {
        L = n,
        L === 0 && (hn = Q() + 500,
        El && kt())
    }
}
function At(e) {
    at !== null && at.tag === 0 && !(L & 6) && ln();
    var t = L;
    L |= 1;
    var n = Te.transition
      , r = R;
    try {
        if (Te.transition = null,
        R = 1,
        e)
            return e()
    } finally {
        R = r,
        Te.transition = n,
        L = t,
        !(L & 6) && kt()
    }
}
function Zo() {
    ve = qt.current,
    I(qt)
}
function Ot(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    Mf(n)),
    K !== null)
        for (n = K.return; n !== null; ) {
            var r = n;
            switch (Oo(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && tl();
                break;
            case 3:
                pn(),
                I(pe),
                I(ie),
                $o();
                break;
            case 5:
                Fo(r);
                break;
            case 4:
                pn();
                break;
            case 13:
                I($);
                break;
            case 19:
                I($);
                break;
            case 10:
                Ro(r.type._context);
                break;
            case 22:
            case 23:
                Zo()
            }
            n = n.return
        }
    if (J = e,
    K = e = vt(e.current, null),
    b = ve = t,
    Y = 0,
    or = null,
    Xo = Tl = Dt = 0,
    de = Hn = null,
    Tt !== null) {
        for (t = 0; t < Tt.length; t++)
            if (n = Tt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l,
                    r.next = o
                }
                n.pending = r
            }
        Tt = null
    }
    return e
}
function kc(e, t) {
    do {
        var n = K;
        try {
            if (Mo(),
            Fr.current = cl,
            ul) {
                for (var r = U.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                ul = !1
            }
            if (Rt = 0,
            Z = X = U = null,
            Un = !1,
            rr = 0,
            Ko.current = null,
            n === null || n.return === null) {
                Y = 1,
                or = t,
                K = null;
                break
            }
            e: {
                var i = e
                  , o = n.return
                  , s = n
                  , a = t;
                if (t = b,
                s.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var c = a
                      , m = s
                      , v = m.tag;
                    if (!(m.mode & 1) && (v === 0 || v === 11 || v === 15)) {
                        var h = m.alternate;
                        h ? (m.updateQueue = h.updateQueue,
                        m.memoizedState = h.memoizedState,
                        m.lanes = h.lanes) : (m.updateQueue = null,
                        m.memoizedState = null)
                    }
                    var x = Zs(o);
                    if (x !== null) {
                        x.flags &= -257,
                        Js(x, o, s, i, t),
                        x.mode & 1 && Gs(i, c, t),
                        t = x,
                        a = c;
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set;
                            k.add(a),
                            t.updateQueue = k
                        } else
                            w.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Gs(i, c, t),
                            Jo();
                            break e
                        }
                        a = Error(y(426))
                    }
                } else if (F && s.mode & 1) {
                    var M = Zs(o);
                    if (M !== null) {
                        !(M.flags & 65536) && (M.flags |= 256),
                        Js(M, o, s, i, t),
                        zo(mn(a, s));
                        break e
                    }
                }
                i = a = mn(a, s),
                Y !== 4 && (Y = 2),
                Hn === null ? Hn = [i] : Hn.push(i),
                i = o;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var f = lc(i, a, t);
                        Vs(i, f);
                        break e;
                    case 1:
                        s = a;
                        var d = i.type
                          , p = i.stateNode;
                        if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (mt === null || !mt.has(p)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var g = ic(i, s, t);
                            Vs(i, g);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            Nc(n)
        } catch (E) {
            t = E,
            K === n && n !== null && (K = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Sc() {
    var e = dl.current;
    return dl.current = cl,
    e === null ? cl : e
}
function Jo() {
    (Y === 0 || Y === 3 || Y === 2) && (Y = 4),
    J === null || !(Dt & 268435455) && !(Tl & 268435455) || ot(J, b)
}
function ml(e, t) {
    var n = L;
    L |= 2;
    var r = Sc();
    (J !== e || b !== t) && (Ke = null,
    Ot(e, t));
    do
        try {
            lp();
            break
        } catch (l) {
            kc(e, l)
        }
    while (!0);
    if (Mo(),
    L = n,
    dl.current = r,
    K !== null)
        throw Error(y(261));
    return J = null,
    b = 0,
    Y
}
function lp() {
    for (; K !== null; )
        Ec(K)
}
function ip() {
    for (; K !== null && !Pd(); )
        Ec(K)
}
function Ec(e) {
    var t = jc(e.alternate, e, ve);
    e.memoizedProps = e.pendingProps,
    t === null ? Nc(e) : K = t,
    Ko.current = null
}
function Nc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = qf(n, t),
            n !== null) {
                n.flags &= 32767,
                K = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Y = 6,
                K = null;
                return
            }
        } else if (n = Jf(n, t, ve),
        n !== null) {
            K = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            K = t;
            return
        }
        K = t = e
    } while (t !== null);
    Y === 0 && (Y = 5)
}
function Ct(e, t, n) {
    var r = R
      , l = Te.transition;
    try {
        Te.transition = null,
        R = 1,
        op(e, t, n, r)
    } finally {
        Te.transition = l,
        R = r
    }
    return null
}
function op(e, t, n, r) {
    do
        ln();
    while (at !== null);
    if (L & 6)
        throw Error(y(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(y(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if ($d(e, i),
    e === J && (K = J = null,
    b = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pr || (Pr = !0,
    Tc(Gr, function() {
        return ln(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = Te.transition,
        Te.transition = null;
        var o = R;
        R = 1;
        var s = L;
        L |= 4,
        Ko.current = null,
        ep(e, n),
        yc(n, e),
        jf(Ri),
        Jr = !!Mi,
        Ri = Mi = null,
        e.current = n,
        tp(n),
        Od(),
        L = s,
        R = o,
        Te.transition = i
    } else
        e.current = n;
    if (Pr && (Pr = !1,
    at = e,
    pl = l),
    i = e.pendingLanes,
    i === 0 && (mt = null),
    Md(n.stateNode),
    he(e, Q()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (fl)
        throw fl = !1,
        e = eo,
        eo = null,
        e;
    return pl & 1 && e.tag !== 0 && ln(),
    i = e.pendingLanes,
    i & 1 ? e === to ? Vn++ : (Vn = 0,
    to = e) : Vn = 0,
    kt(),
    null
}
function ln() {
    if (at !== null) {
        var e = lu(pl)
          , t = Te.transition
          , n = R;
        try {
            if (Te.transition = null,
            R = 16 > e ? 16 : e,
            at === null)
                var r = !1;
            else {
                if (e = at,
                at = null,
                pl = 0,
                L & 6)
                    throw Error(y(331));
                var l = L;
                for (L |= 4,
                S = e.current; S !== null; ) {
                    var i = S
                      , o = i.child;
                    if (S.flags & 16) {
                        var s = i.deletions;
                        if (s !== null) {
                            for (var a = 0; a < s.length; a++) {
                                var c = s[a];
                                for (S = c; S !== null; ) {
                                    var m = S;
                                    switch (m.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Bn(8, m, i)
                                    }
                                    var v = m.child;
                                    if (v !== null)
                                        v.return = m,
                                        S = v;
                                    else
                                        for (; S !== null; ) {
                                            m = S;
                                            var h = m.sibling
                                              , x = m.return;
                                            if (hc(m),
                                            m === c) {
                                                S = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = x,
                                                S = h;
                                                break
                                            }
                                            S = x
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var M = k.sibling;
                                        k.sibling = null,
                                        k = M
                                    } while (k !== null)
                                }
                            }
                            S = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null)
                        o.return = i,
                        S = o;
                    else
                        e: for (; S !== null; ) {
                            if (i = S,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Bn(9, i, i.return)
                                }
                            var f = i.sibling;
                            if (f !== null) {
                                f.return = i.return,
                                S = f;
                                break e
                            }
                            S = i.return
                        }
                }
                var d = e.current;
                for (S = d; S !== null; ) {
                    o = S;
                    var p = o.child;
                    if (o.subtreeFlags & 2064 && p !== null)
                        p.return = o,
                        S = p;
                    else
                        e: for (o = d; S !== null; ) {
                            if (s = S,
                            s.flags & 2048)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        jl(9, s)
                                    }
                                } catch (E) {
                                    H(s, s.return, E)
                                }
                            if (s === o) {
                                S = null;
                                break e
                            }
                            var g = s.sibling;
                            if (g !== null) {
                                g.return = s.return,
                                S = g;
                                break e
                            }
                            S = s.return
                        }
                }
                if (L = l,
                kt(),
                Ve && typeof Ve.onPostCommitFiberRoot == "function")
                    try {
                        Ve.onPostCommitFiberRoot(yl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            R = n,
            Te.transition = t
        }
    }
    return !1
}
function ca(e, t, n) {
    t = mn(n, t),
    t = lc(e, t, 1),
    e = pt(e, t, 1),
    t = ae(),
    e !== null && (ar(e, 1, t),
    he(e, t))
}
function H(e, t, n) {
    if (e.tag === 3)
        ca(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                ca(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (mt === null || !mt.has(r))) {
                    e = mn(n, e),
                    e = ic(t, e, 1),
                    t = pt(t, e, 1),
                    e = ae(),
                    t !== null && (ar(t, 1, e),
                    he(t, e));
                    break
                }
            }
            t = t.return
        }
}
function sp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = ae(),
    e.pingedLanes |= e.suspendedLanes & n,
    J === e && (b & n) === n && (Y === 4 || Y === 3 && (b & 130023424) === b && 500 > Q() - Yo ? Ot(e, 0) : Xo |= n),
    he(e, t)
}
function Cc(e, t) {
    t === 0 && (e.mode & 1 ? (t = xr,
    xr <<= 1,
    !(xr & 130023424) && (xr = 4194304)) : t = 1);
    var n = ae();
    e = be(e, t),
    e !== null && (ar(e, t, n),
    he(e, n))
}
function ap(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Cc(e, n)
}
function up(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(y(314))
    }
    r !== null && r.delete(t),
    Cc(e, n)
}
var jc;
jc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || pe.current)
            fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return fe = !1,
                Zf(e, t, n);
            fe = !!(e.flags & 131072)
        }
    else
        fe = !1,
        F && t.flags & 1048576 && Ou(t, ll, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ur(e, t),
        e = t.pendingProps;
        var l = cn(t, ie.current);
        rn(t, n),
        l = Bo(null, t, r, e, l, n);
        var i = Ho();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        me(r) ? (i = !0,
        nl(t)) : i = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        Ao(t),
        l.updater = Cl,
        t.stateNode = l,
        l._reactInternals = t,
        Vi(t, r, e, n),
        t = Ki(null, t, r, !0, i, n)) : (t.tag = 0,
        F && i && Po(t),
        oe(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ur(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = dp(r),
            e = Le(r, e),
            l) {
            case 0:
                t = Qi(null, t, r, e, n);
                break e;
            case 1:
                t = ea(null, t, r, e, n);
                break e;
            case 11:
                t = qs(null, t, r, e, n);
                break e;
            case 14:
                t = bs(null, t, r, Le(r.type, e), n);
                break e
            }
            throw Error(y(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Le(r, l),
        Qi(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Le(r, l),
        ea(e, t, r, l, n);
    case 3:
        e: {
            if (uc(t),
            e === null)
                throw Error(y(387));
            r = t.pendingProps,
            i = t.memoizedState,
            l = i.element,
            Au(e, t),
            sl(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    l = mn(Error(y(423)), t),
                    t = ta(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = mn(Error(y(424)), t),
                    t = ta(e, t, r, n, l);
                    break e
                } else
                    for (ye = ft(t.stateNode.containerInfo.firstChild),
                    xe = t,
                    F = !0,
                    Re = null,
                    n = Ru(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (dn(),
                r === l) {
                    t = et(e, t, n);
                    break e
                }
                oe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Iu(t),
        e === null && Ui(t),
        r = t.type,
        l = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        o = l.children,
        Di(r, l) ? o = null : i !== null && Di(r, i) && (t.flags |= 32),
        ac(e, t),
        oe(e, t, o, n),
        t.child;
    case 6:
        return e === null && Ui(t),
        null;
    case 13:
        return cc(e, t, n);
    case 4:
        return Io(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = fn(t, null, r, n) : oe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Le(r, l),
        qs(e, t, r, l, n);
    case 7:
        return oe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return oe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return oe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            i = t.memoizedProps,
            o = l.value,
            D(il, r._currentValue),
            r._currentValue = o,
            i !== null)
                if (Fe(i.value, o)) {
                    if (i.children === l.children && !pe.current) {
                        t = et(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var s = i.dependencies;
                        if (s !== null) {
                            o = i.child;
                            for (var a = s.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (i.tag === 1) {
                                        a = Ze(-1, n & -n),
                                        a.tag = 2;
                                        var c = i.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var m = c.pending;
                                            m === null ? a.next = a : (a.next = m.next,
                                            m.next = a),
                                            c.pending = a
                                        }
                                    }
                                    i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    Bi(i.return, n, t),
                                    s.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (i.tag === 10)
                            o = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (o = i.return,
                            o === null)
                                throw Error(y(341));
                            o.lanes |= n,
                            s = o.alternate,
                            s !== null && (s.lanes |= n),
                            Bi(o, n, t),
                            o = i.sibling
                        } else
                            o = i.child;
                        if (o !== null)
                            o.return = i;
                        else
                            for (o = i; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (i = o.sibling,
                                i !== null) {
                                    i.return = o.return,
                                    o = i;
                                    break
                                }
                                o = o.return
                            }
                        i = o
                    }
            oe(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        rn(t, n),
        l = _e(l),
        r = r(l),
        t.flags |= 1,
        oe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = Le(r, t.pendingProps),
        l = Le(r.type, l),
        bs(e, t, r, l, n);
    case 15:
        return oc(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Le(r, l),
        Ur(e, t),
        t.tag = 1,
        me(r) ? (e = !0,
        nl(t)) : e = !1,
        rn(t, n),
        rc(t, r, l),
        Vi(t, r, l, n),
        Ki(null, t, r, !0, e, n);
    case 19:
        return dc(e, t, n);
    case 22:
        return sc(e, t, n)
    }
    throw Error(y(156, t.tag))
}
;
function Tc(e, t) {
    return eu(e, t)
}
function cp(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function je(e, t, n, r) {
    return new cp(e,t,n,r)
}
function qo(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function dp(e) {
    if (typeof e == "function")
        return qo(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === go)
            return 11;
        if (e === yo)
            return 14
    }
    return 2
}
function vt(e, t) {
    var n = e.alternate;
    return n === null ? (n = je(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Vr(e, t, n, r, l, i) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        qo(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case Ht:
            return zt(n.children, l, i, t);
        case vo:
            o = 8,
            l |= 8;
            break;
        case pi:
            return e = je(12, n, t, l | 2),
            e.elementType = pi,
            e.lanes = i,
            e;
        case mi:
            return e = je(13, n, t, l),
            e.elementType = mi,
            e.lanes = i,
            e;
        case hi:
            return e = je(19, n, t, l),
            e.elementType = hi,
            e.lanes = i,
            e;
        case Ia:
            return _l(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Da:
                    o = 10;
                    break e;
                case Aa:
                    o = 9;
                    break e;
                case go:
                    o = 11;
                    break e;
                case yo:
                    o = 14;
                    break e;
                case rt:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(y(130, e == null ? e : typeof e, ""))
        }
    return t = je(o, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function zt(e, t, n, r) {
    return e = je(7, e, r, t),
    e.lanes = n,
    e
}
function _l(e, t, n, r) {
    return e = je(22, e, r, t),
    e.elementType = Ia,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function oi(e, t, n) {
    return e = je(6, e, null, t),
    e.lanes = n,
    e
}
function si(e, t, n) {
    return t = je(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function fp(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Bl(0),
    this.expirationTimes = Bl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Bl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function bo(e, t, n, r, l, i, o, s, a) {
    return e = new fp(e,t,n,s,a),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = je(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Ao(i),
    e
}
function pp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Bt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function _c(e) {
    if (!e)
        return yt;
    e = e._reactInternals;
    e: {
        if (Ft(e) !== e || e.tag !== 1)
            throw Error(y(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (me(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(y(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (me(n))
            return _u(e, n, t)
    }
    return t
}
function Pc(e, t, n, r, l, i, o, s, a) {
    return e = bo(n, r, !0, e, l, i, o, s, a),
    e.context = _c(null),
    n = e.current,
    r = ae(),
    l = ht(n),
    i = Ze(r, l),
    i.callback = t ?? null,
    pt(n, i, l),
    e.current.lanes = l,
    ar(e, l, r),
    he(e, r),
    e
}
function Pl(e, t, n, r) {
    var l = t.current
      , i = ae()
      , o = ht(l);
    return n = _c(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Ze(i, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = pt(l, t, o),
    e !== null && (Ie(e, l, o, i),
    Ir(e, l, o)),
    o
}
function hl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function da(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function es(e, t) {
    da(e, t),
    (e = e.alternate) && da(e, t)
}
function mp() {
    return null
}
var Oc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function ts(e) {
    this._internalRoot = e
}
Ol.prototype.render = ts.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(y(409));
    Pl(e, t, null, null)
}
;
Ol.prototype.unmount = ts.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        At(function() {
            Pl(null, e, null, null)
        }),
        t[qe] = null
    }
}
;
function Ol(e) {
    this._internalRoot = e
}
Ol.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = su();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < it.length && t !== 0 && t < it[n].priority; n++)
            ;
        it.splice(n, 0, e),
        n === 0 && uu(e)
    }
}
;
function ns(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function zl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function fa() {}
function hp(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var c = hl(o);
                i.call(c)
            }
        }
        var o = Pc(t, r, e, 0, null, !1, !1, "", fa);
        return e._reactRootContainer = o,
        e[qe] = o.current,
        qn(e.nodeType === 8 ? e.parentNode : e),
        At(),
        o
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var c = hl(a);
            s.call(c)
        }
    }
    var a = bo(e, 0, !1, null, null, !1, !1, "", fa);
    return e._reactRootContainer = a,
    e[qe] = a.current,
    qn(e.nodeType === 8 ? e.parentNode : e),
    At(function() {
        Pl(t, a, n, r)
    }),
    a
}
function Ll(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var s = l;
            l = function() {
                var a = hl(o);
                s.call(a)
            }
        }
        Pl(t, o, e, l)
    } else
        o = hp(n, t, e, l, r);
    return hl(o)
}
iu = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Mn(t.pendingLanes);
            n !== 0 && (ko(t, n | 1),
            he(t, Q()),
            !(L & 6) && (hn = Q() + 500,
            kt()))
        }
        break;
    case 13:
        At(function() {
            var r = be(e, 1);
            if (r !== null) {
                var l = ae();
                Ie(r, e, 1, l)
            }
        }),
        es(e, 1)
    }
}
;
So = function(e) {
    if (e.tag === 13) {
        var t = be(e, 134217728);
        if (t !== null) {
            var n = ae();
            Ie(t, e, 134217728, n)
        }
        es(e, 134217728)
    }
}
;
ou = function(e) {
    if (e.tag === 13) {
        var t = ht(e)
          , n = be(e, t);
        if (n !== null) {
            var r = ae();
            Ie(n, e, t, r)
        }
        es(e, t)
    }
}
;
su = function() {
    return R
}
;
au = function(e, t) {
    var n = R;
    try {
        return R = e,
        t()
    } finally {
        R = n
    }
}
;
Ci = function(e, t, n) {
    switch (t) {
    case "input":
        if (yi(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = Sl(r);
                    if (!l)
                        throw Error(y(90));
                    $a(r),
                    yi(r, l)
                }
            }
        }
        break;
    case "textarea":
        Ba(e, n);
        break;
    case "select":
        t = n.value,
        t != null && bt(e, !!n.multiple, t, !1)
    }
}
;
Ya = Go;
Ga = At;
var vp = {
    usingClientEntryPoint: !1,
    Events: [cr, Kt, Sl, Ka, Xa, Go]
}
  , _n = {
    findFiberByHostInstance: jt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , gp = {
    bundleType: _n.bundleType,
    version: _n.version,
    rendererPackageName: _n.rendererPackageName,
    rendererConfig: _n.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = qa(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: _n.findFiberByHostInstance || mp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Or = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Or.isDisabled && Or.supportsFiber)
        try {
            yl = Or.inject(gp),
            Ve = Or
        } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vp;
ke.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ns(t))
        throw Error(y(200));
    return pp(e, t, null, n)
}
;
ke.createRoot = function(e, t) {
    if (!ns(e))
        throw Error(y(299));
    var n = !1
      , r = ""
      , l = Oc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = bo(e, 1, !1, null, null, n, !1, r, l),
    e[qe] = t.current,
    qn(e.nodeType === 8 ? e.parentNode : e),
    new ts(t)
}
;
ke.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","),
        Error(y(268, e)));
    return e = qa(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ke.flushSync = function(e) {
    return At(e)
}
;
ke.hydrate = function(e, t, n) {
    if (!zl(t))
        throw Error(y(200));
    return Ll(null, e, t, !0, n)
}
;
ke.hydrateRoot = function(e, t, n) {
    if (!ns(e))
        throw Error(y(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , i = ""
      , o = Oc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = Pc(t, null, e, 1, n ?? null, l, !1, i, o),
    e[qe] = t.current,
    qn(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Ol(t)
}
;
ke.render = function(e, t, n) {
    if (!zl(t))
        throw Error(y(200));
    return Ll(null, e, t, !1, n)
}
;
ke.unmountComponentAtNode = function(e) {
    if (!zl(e))
        throw Error(y(40));
    return e._reactRootContainer ? (At(function() {
        Ll(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[qe] = null
        })
    }),
    !0) : !1
}
;
ke.unstable_batchedUpdates = Go;
ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!zl(n))
        throw Error(y(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(y(38));
    return Ll(e, t, n, !1, r)
}
;
ke.version = "18.3.1-next-f1338f8080-20240426";
function zc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zc)
        } catch (e) {
            console.error(e)
        }
}
zc(),
za.exports = ke;
var yp = za.exports, Lc, pa = yp;
Lc = pa.createRoot,
pa.hydrateRoot;
var xp = typeof Element < "u"
  , wp = typeof Map == "function"
  , kp = typeof Set == "function"
  , Sp = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Wr(e, t) {
    if (e === t)
        return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor)
            return !1;
        var n, r, l;
        if (Array.isArray(e)) {
            if (n = e.length,
            n != t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!Wr(e[r], t[r]))
                    return !1;
            return !0
        }
        var i;
        if (wp && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size)
                return !1;
            for (i = e.entries(); !(r = i.next()).done; )
                if (!t.has(r.value[0]))
                    return !1;
            for (i = e.entries(); !(r = i.next()).done; )
                if (!Wr(r.value[1], t.get(r.value[0])))
                    return !1;
            return !0
        }
        if (kp && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size)
                return !1;
            for (i = e.entries(); !(r = i.next()).done; )
                if (!t.has(r.value[0]))
                    return !1;
            return !0
        }
        if (Sp && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (n = e.length,
            n != t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
        if (e.constructor === RegExp)
            return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
            return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
            return e.toString() === t.toString();
        if (l = Object.keys(e),
        n = l.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!Object.prototype.hasOwnProperty.call(t, l[r]))
                return !1;
        if (xp && e instanceof Element)
            return !1;
        for (r = n; r-- !== 0; )
            if (!((l[r] === "_owner" || l[r] === "__v" || l[r] === "__o") && e.$$typeof) && !Wr(e[l[r]], t[l[r]]))
                return !1;
        return !0
    }
    return e !== e && t !== t
}
var Ep = function(t, n) {
    try {
        return Wr(t, n)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i))
            return console.warn("react-fast-compare cannot handle circular refs"),
            !1;
        throw r
    }
};
const Np = vl(Ep);
var Cp = function(e, t, n, r, l, i, o, s) {
    if (!e) {
        var a;
        if (t === void 0)
            a = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
            var c = [n, r, l, i, o, s]
              , m = 0;
            a = new Error(t.replace(/%s/g, function() {
                return c[m++]
            })),
            a.name = "Invariant Violation"
        }
        throw a.framesToPop = 1,
        a
    }
}
  , jp = Cp;
const ma = vl(jp);
var Tp = function(t, n, r, l) {
    var i = r ? r.call(l, t, n) : void 0;
    if (i !== void 0)
        return !!i;
    if (t === n)
        return !0;
    if (typeof t != "object" || !t || typeof n != "object" || !n)
        return !1;
    var o = Object.keys(t)
      , s = Object.keys(n);
    if (o.length !== s.length)
        return !1;
    for (var a = Object.prototype.hasOwnProperty.bind(n), c = 0; c < o.length; c++) {
        var m = o[c];
        if (!a(m))
            return !1;
        var v = t[m]
          , h = n[m];
        if (i = r ? r.call(l, v, h, m) : void 0,
        i === !1 || i === void 0 && v !== h)
            return !1
    }
    return !0
};
const _p = vl(Tp);
var Mc = (e => (e.BASE = "base",
e.BODY = "body",
e.HEAD = "head",
e.HTML = "html",
e.LINK = "link",
e.META = "meta",
e.NOSCRIPT = "noscript",
e.SCRIPT = "script",
e.STYLE = "style",
e.TITLE = "title",
e.FRAGMENT = "Symbol(react.fragment)",
e))(Mc || {}), ai = {
    link: {
        rel: ["amphtml", "canonical", "alternate"]
    },
    script: {
        type: ["application/ld+json"]
    },
    meta: {
        charset: "",
        name: ["generator", "robots", "description"],
        property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"]
    }
}, ha = Object.values(Mc), rs = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
}, Pp = Object.entries(rs).reduce( (e, [t,n]) => (e[n] = t,
e), {}), De = "data-rh", on = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
}, sn = (e, t) => {
    for (let n = e.length - 1; n >= 0; n -= 1) {
        const r = e[n];
        if (Object.prototype.hasOwnProperty.call(r, t))
            return r[t]
    }
    return null
}
, Op = e => {
    let t = sn(e, "title");
    const n = sn(e, on.TITLE_TEMPLATE);
    if (Array.isArray(t) && (t = t.join("")),
    n && t)
        return n.replace(/%s/g, () => t);
    const r = sn(e, on.DEFAULT_TITLE);
    return t || r || void 0
}
, zp = e => sn(e, on.ON_CHANGE_CLIENT_STATE) || ( () => {}
), ui = (e, t) => t.filter(n => typeof n[e] < "u").map(n => n[e]).reduce( (n, r) => ({
    ...n,
    ...r
}), {}), Lp = (e, t) => t.filter(n => typeof n.base < "u").map(n => n.base).reverse().reduce( (n, r) => {
    if (!n.length) {
        const l = Object.keys(r);
        for (let i = 0; i < l.length; i += 1) {
            const s = l[i].toLowerCase();
            if (e.indexOf(s) !== -1 && r[s])
                return n.concat(r)
        }
    }
    return n
}
, []), Mp = e => console && typeof console.warn == "function" && console.warn(e), Pn = (e, t, n) => {
    const r = {};
    return n.filter(l => Array.isArray(l[e]) ? !0 : (typeof l[e] < "u" && Mp(`Helmet: ${e} should be of type "Array". Instead found type "${typeof l[e]}"`),
    !1)).map(l => l[e]).reverse().reduce( (l, i) => {
        const o = {};
        i.filter(a => {
            let c;
            const m = Object.keys(a);
            for (let h = 0; h < m.length; h += 1) {
                const x = m[h]
                  , w = x.toLowerCase();
                t.indexOf(w) !== -1 && !(c === "rel" && a[c].toLowerCase() === "canonical") && !(w === "rel" && a[w].toLowerCase() === "stylesheet") && (c = w),
                t.indexOf(x) !== -1 && (x === "innerHTML" || x === "cssText" || x === "itemprop") && (c = x)
            }
            if (!c || !a[c])
                return !1;
            const v = a[c].toLowerCase();
            return r[c] || (r[c] = {}),
            o[c] || (o[c] = {}),
            r[c][v] ? !1 : (o[c][v] = !0,
            !0)
        }
        ).reverse().forEach(a => l.push(a));
        const s = Object.keys(o);
        for (let a = 0; a < s.length; a += 1) {
            const c = s[a]
              , m = {
                ...r[c],
                ...o[c]
            };
            r[c] = m
        }
        return l
    }
    , []).reverse()
}
, Rp = (e, t) => {
    if (Array.isArray(e) && e.length) {
        for (let n = 0; n < e.length; n += 1)
            if (e[n][t])
                return !0
    }
    return !1
}
, Dp = e => ({
    baseTag: Lp(["href"], e),
    bodyAttributes: ui("bodyAttributes", e),
    defer: sn(e, on.DEFER),
    encode: sn(e, on.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: ui("htmlAttributes", e),
    linkTags: Pn("link", ["rel", "href"], e),
    metaTags: Pn("meta", ["name", "charset", "http-equiv", "property", "itemprop"], e),
    noscriptTags: Pn("noscript", ["innerHTML"], e),
    onChangeClientState: zp(e),
    scriptTags: Pn("script", ["src", "innerHTML"], e),
    styleTags: Pn("style", ["cssText"], e),
    title: Op(e),
    titleAttributes: ui("titleAttributes", e),
    prioritizeSeoTags: Rp(e, on.PRIORITIZE_SEO_TAGS)
}), Rc = e => Array.isArray(e) ? e.join("") : e, Ap = (e, t) => {
    const n = Object.keys(e);
    for (let r = 0; r < n.length; r += 1)
        if (t[n[r]] && t[n[r]].includes(e[n[r]]))
            return !0;
    return !1
}
, ci = (e, t) => Array.isArray(e) ? e.reduce( (n, r) => (Ap(r, t) ? n.priority.push(r) : n.default.push(r),
n), {
    priority: [],
    default: []
}) : {
    default: e,
    priority: []
}, va = (e, t) => ({
    ...e,
    [t]: void 0
}), Ip = ["noscript", "script", "style"], lo = (e, t=!0) => t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"), Dc = e => Object.keys(e).reduce( (t, n) => {
    const r = typeof e[n] < "u" ? `${n}="${e[n]}"` : `${n}`;
    return t ? `${t} ${r}` : r
}
, ""), Fp = (e, t, n, r) => {
    const l = Dc(n)
      , i = Rc(t);
    return l ? `<${e} ${De}="true" ${l}>${lo(i, r)}</${e}>` : `<${e} ${De}="true">${lo(i, r)}</${e}>`
}
, $p = (e, t, n=!0) => t.reduce( (r, l) => {
    const i = l
      , o = Object.keys(i).filter(c => !(c === "innerHTML" || c === "cssText")).reduce( (c, m) => {
        const v = typeof i[m] > "u" ? m : `${m}="${lo(i[m], n)}"`;
        return c ? `${c} ${v}` : v
    }
    , "")
      , s = i.innerHTML || i.cssText || ""
      , a = Ip.indexOf(e) === -1;
    return `${r}<${e} ${De}="true" ${o}${a ? "/>" : `>${s}</${e}>`}`
}
, ""), Ac = (e, t={}) => Object.keys(e).reduce( (n, r) => {
    const l = rs[r];
    return n[l || r] = e[r],
    n
}
, t), Up = (e, t, n) => {
    const r = {
        key: t,
        [De]: !0
    }
      , l = Ac(n, r);
    return [ge.createElement("title", l, t)]
}
, Qr = (e, t) => t.map( (n, r) => {
    const l = {
        key: r,
        [De]: !0
    };
    return Object.keys(n).forEach(i => {
        const s = rs[i] || i;
        if (s === "innerHTML" || s === "cssText") {
            const a = n.innerHTML || n.cssText;
            l.dangerouslySetInnerHTML = {
                __html: a
            }
        } else
            l[s] = n[i]
    }
    ),
    ge.createElement(e, l)
}
), Ee = (e, t, n=!0) => {
    switch (e) {
    case "title":
        return {
            toComponent: () => Up(e, t.title, t.titleAttributes),
            toString: () => Fp(e, t.title, t.titleAttributes, n)
        };
    case "bodyAttributes":
    case "htmlAttributes":
        return {
            toComponent: () => Ac(t),
            toString: () => Dc(t)
        };
    default:
        return {
            toComponent: () => Qr(e, t),
            toString: () => $p(e, t, n)
        }
    }
}
, Bp = ({metaTags: e, linkTags: t, scriptTags: n, encode: r}) => {
    const l = ci(e, ai.meta)
      , i = ci(t, ai.link)
      , o = ci(n, ai.script);
    return {
        priorityMethods: {
            toComponent: () => [...Qr("meta", l.priority), ...Qr("link", i.priority), ...Qr("script", o.priority)],
            toString: () => `${Ee("meta", l.priority, r)} ${Ee("link", i.priority, r)} ${Ee("script", o.priority, r)}`
        },
        metaTags: l.default,
        linkTags: i.default,
        scriptTags: o.default
    }
}
, Hp = e => {
    const {baseTag: t, bodyAttributes: n, encode: r=!0, htmlAttributes: l, noscriptTags: i, styleTags: o, title: s="", titleAttributes: a, prioritizeSeoTags: c} = e;
    let {linkTags: m, metaTags: v, scriptTags: h} = e
      , x = {
        toComponent: () => {}
        ,
        toString: () => ""
    };
    return c && ({priorityMethods: x, linkTags: m, metaTags: v, scriptTags: h} = Bp(e)),
    {
        priority: x,
        base: Ee("base", t, r),
        bodyAttributes: Ee("bodyAttributes", n, r),
        htmlAttributes: Ee("htmlAttributes", l, r),
        link: Ee("link", m, r),
        meta: Ee("meta", v, r),
        noscript: Ee("noscript", i, r),
        script: Ee("script", h, r),
        style: Ee("style", o, r),
        title: Ee("title", {
            title: s,
            titleAttributes: a
        }, r)
    }
}
, io = Hp, zr = [], Ic = !!(typeof window < "u" && window.document && window.document.createElement), oo = class {
    constructor(e, t) {
        Qe(this, "instances", []);
        Qe(this, "canUseDOM", Ic);
        Qe(this, "context");
        Qe(this, "value", {
            setHelmet: e => {
                this.context.helmet = e
            }
            ,
            helmetInstances: {
                get: () => this.canUseDOM ? zr : this.instances,
                add: e => {
                    (this.canUseDOM ? zr : this.instances).push(e)
                }
                ,
                remove: e => {
                    const t = (this.canUseDOM ? zr : this.instances).indexOf(e);
                    (this.canUseDOM ? zr : this.instances).splice(t, 1)
                }
            }
        });
        this.context = e,
        this.canUseDOM = t || !1,
        t || (e.helmet = io({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {}
        }))
    }
}
, Vp = {}, Fc = ge.createContext(Vp), Pt, $c = (Pt = class extends se.Component {
    constructor(n) {
        super(n);
        Qe(this, "helmetData");
        this.helmetData = new oo(this.props.context || {},Pt.canUseDOM)
    }
    render() {
        return ge.createElement(Fc.Provider, {
            value: this.helmetData.value
        }, this.props.children)
    }
}
,
Qe(Pt, "canUseDOM", Ic),
Pt), Ut = (e, t) => {
    const n = document.head || document.querySelector("head")
      , r = n.querySelectorAll(`${e}[${De}]`)
      , l = [].slice.call(r)
      , i = [];
    let o;
    return t && t.length && t.forEach(s => {
        const a = document.createElement(e);
        for (const c in s)
            if (Object.prototype.hasOwnProperty.call(s, c))
                if (c === "innerHTML")
                    a.innerHTML = s.innerHTML;
                else if (c === "cssText")
                    a.styleSheet ? a.styleSheet.cssText = s.cssText : a.appendChild(document.createTextNode(s.cssText));
                else {
                    const m = c
                      , v = typeof s[m] > "u" ? "" : s[m];
                    a.setAttribute(c, v)
                }
        a.setAttribute(De, "true"),
        l.some( (c, m) => (o = m,
        a.isEqualNode(c))) ? l.splice(o, 1) : i.push(a)
    }
    ),
    l.forEach(s => {
        var a;
        return (a = s.parentNode) == null ? void 0 : a.removeChild(s)
    }
    ),
    i.forEach(s => n.appendChild(s)),
    {
        oldTags: l,
        newTags: i
    }
}
, so = (e, t) => {
    const n = document.getElementsByTagName(e)[0];
    if (!n)
        return;
    const r = n.getAttribute(De)
      , l = r ? r.split(",") : []
      , i = [...l]
      , o = Object.keys(t);
    for (const s of o) {
        const a = t[s] || "";
        n.getAttribute(s) !== a && n.setAttribute(s, a),
        l.indexOf(s) === -1 && l.push(s);
        const c = i.indexOf(s);
        c !== -1 && i.splice(c, 1)
    }
    for (let s = i.length - 1; s >= 0; s -= 1)
        n.removeAttribute(i[s]);
    l.length === i.length ? n.removeAttribute(De) : n.getAttribute(De) !== o.join(",") && n.setAttribute(De, o.join(","))
}
, Wp = (e, t) => {
    typeof e < "u" && document.title !== e && (document.title = Rc(e)),
    so("title", t)
}
, ga = (e, t) => {
    const {baseTag: n, bodyAttributes: r, htmlAttributes: l, linkTags: i, metaTags: o, noscriptTags: s, onChangeClientState: a, scriptTags: c, styleTags: m, title: v, titleAttributes: h} = e;
    so("body", r),
    so("html", l),
    Wp(v, h);
    const x = {
        baseTag: Ut("base", n),
        linkTags: Ut("link", i),
        metaTags: Ut("meta", o),
        noscriptTags: Ut("noscript", s),
        scriptTags: Ut("script", c),
        styleTags: Ut("style", m)
    }
      , w = {}
      , k = {};
    Object.keys(x).forEach(M => {
        const {newTags: f, oldTags: d} = x[M];
        f.length && (w[M] = f),
        d.length && (k[M] = x[M].oldTags)
    }
    ),
    t && t(),
    a(e, w, k)
}
, On = null, Qp = e => {
    On && cancelAnimationFrame(On),
    e.defer ? On = requestAnimationFrame( () => {
        ga(e, () => {
            On = null
        }
        )
    }
    ) : (ga(e),
    On = null)
}
, Kp = Qp, ya = class extends se.Component {
    constructor() {
        super(...arguments);
        Qe(this, "rendered", !1)
    }
    shouldComponentUpdate(t) {
        return !_p(t, this.props)
    }
    componentDidUpdate() {
        this.emitChange()
    }
    componentWillUnmount() {
        const {helmetInstances: t} = this.props.context;
        t.remove(this),
        this.emitChange()
    }
    emitChange() {
        const {helmetInstances: t, setHelmet: n} = this.props.context;
        let r = null;
        const l = Dp(t.get().map(i => {
            const o = {
                ...i.props
            };
            return delete o.context,
            o
        }
        ));
        $c.canUseDOM ? Kp(l) : io && (r = io(l)),
        n(r)
    }
    init() {
        if (this.rendered)
            return;
        this.rendered = !0;
        const {helmetInstances: t} = this.props.context;
        t.add(this),
        this.emitChange()
    }
    render() {
        return this.init(),
        null
    }
}
, di, Xp = (di = class extends se.Component {
    shouldComponentUpdate(e) {
        return !Np(va(this.props, "helmetData"), va(e, "helmetData"))
    }
    mapNestedChildrenToProps(e, t) {
        if (!t)
            return null;
        switch (e.type) {
        case "script":
        case "noscript":
            return {
                innerHTML: t
            };
        case "style":
            return {
                cssText: t
            };
        default:
            throw new Error(`<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)
        }
    }
    flattenArrayTypeChildren(e, t, n, r) {
        return {
            ...t,
            [e.type]: [...t[e.type] || [], {
                ...n,
                ...this.mapNestedChildrenToProps(e, r)
            }]
        }
    }
    mapObjectTypeChildren(e, t, n, r) {
        switch (e.type) {
        case "title":
            return {
                ...t,
                [e.type]: r,
                titleAttributes: {
                    ...n
                }
            };
        case "body":
            return {
                ...t,
                bodyAttributes: {
                    ...n
                }
            };
        case "html":
            return {
                ...t,
                htmlAttributes: {
                    ...n
                }
            };
        default:
            return {
                ...t,
                [e.type]: {
                    ...n
                }
            }
        }
    }
    mapArrayTypeChildrenToProps(e, t) {
        let n = {
            ...t
        };
        return Object.keys(e).forEach(r => {
            n = {
                ...n,
                [r]: e[r]
            }
        }
        ),
        n
    }
    warnOnInvalidChildren(e, t) {
        return ma(ha.some(n => e.type === n), typeof e.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${ha.join(", ")} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`),
        ma(!t || typeof t == "string" || Array.isArray(t) && !t.some(n => typeof n != "string"), `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`),
        !0
    }
    mapChildrenToProps(e, t) {
        let n = {};
        return ge.Children.forEach(e, r => {
            if (!r || !r.props)
                return;
            const {children: l, ...i} = r.props
              , o = Object.keys(i).reduce( (a, c) => (a[Pp[c] || c] = i[c],
            a), {});
            let {type: s} = r;
            switch (typeof s == "symbol" ? s = s.toString() : this.warnOnInvalidChildren(r, l),
            s) {
            case "Symbol(react.fragment)":
                t = this.mapChildrenToProps(l, t);
                break;
            case "link":
            case "meta":
            case "noscript":
            case "script":
            case "style":
                n = this.flattenArrayTypeChildren(r, n, o, l);
                break;
            default:
                t = this.mapObjectTypeChildren(r, t, o, l);
                break
            }
        }
        ),
        this.mapArrayTypeChildrenToProps(n, t)
    }
    render() {
        const {children: e, ...t} = this.props;
        let n = {
            ...t
        }
          , {helmetData: r} = t;
        if (e && (n = this.mapChildrenToProps(e, n)),
        r && !(r instanceof oo)) {
            const l = r;
            r = new oo(l.context,!0),
            delete n.helmetData
        }
        return r ? ge.createElement(ya, {
            ...n,
            context: r.value
        }) : ge.createElement(Fc.Consumer, null, l => ge.createElement(ya, {
            ...n,
            context: l
        }))
    }
}
,
Qe(di, "defaultProps", {
    defer: !0,
    encodeSpecialCharacters: !0,
    prioritizeSeoTags: !1
}),
di);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Yp = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gp = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , te = (e, t) => {
    const n = se.forwardRef( ({color: r="currentColor", size: l=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: s="", children: a, ...c}, m) => se.createElement("svg", {
        ref: m,
        ...Yp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(l) : i,
        className: ["lucide", `lucide-${Gp(e)}`, s].join(" "),
        ...c
    }, [...t.map( ([v,h]) => se.createElement(v, h)), ...Array.isArray(a) ? a : [a]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zp = te("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jp = te("BarChart2", [["line", {
    x1: "18",
    x2: "18",
    y1: "20",
    y2: "10",
    key: "1xfpm4"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "20",
    y2: "4",
    key: "be30l9"
}], ["line", {
    x1: "6",
    x2: "6",
    y1: "20",
    y2: "14",
    key: "1r4le6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = te("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bp = te("DollarSign", [["line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22",
    key: "7eqyqh"
}], ["path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    key: "1b0p4s"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const em = te("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uc = te("MessageCircle", [["path", {
    d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
    key: "vv11sd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tm = te("MousePointerClick", [["path", {
    d: "m9 9 5 12 1.8-5.2L21 14Z",
    key: "1b76lo"
}], ["path", {
    d: "M7.2 2.2 8 5.1",
    key: "1cfko1"
}], ["path", {
    d: "m5.1 8-2.9-.8",
    key: "1go3kf"
}], ["path", {
    d: "M14 4.1 12 6",
    key: "ita8i4"
}], ["path", {
    d: "m6 12-1.9 2",
    key: "mnht97"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nm = te("Play", [["polygon", {
    points: "5 3 19 12 5 21 5 3",
    key: "191637"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rm = te("Rocket", [["path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
    key: "m3kijz"
}], ["path", {
    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
    key: "1fmvmk"
}], ["path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
    key: "1f8sc4"
}], ["path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    key: "qeys4"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lm = te("ShoppingBag", [["path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
    key: "hou9p0"
}], ["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M16 10a4 4 0 0 1-8 0",
    key: "1ltviw"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const im = te("Target", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "6",
    key: "1vlfrh"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const om = te("Timer", [["line", {
    x1: "10",
    x2: "14",
    y1: "2",
    y2: "2",
    key: "14vaq8"
}], ["line", {
    x1: "12",
    x2: "15",
    y1: "14",
    y2: "11",
    key: "17fdiu"
}], ["circle", {
    cx: "12",
    cy: "14",
    r: "8",
    key: "1e1u0o"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sm = te("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const am = te("Twitter", [["path", {
    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    key: "pff0z6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const um = te("UsersRound", [["path", {
    d: "M18 21a8 8 0 0 0-16 0",
    key: "3ypg7q"
}], ["circle", {
    cx: "10",
    cy: "8",
    r: "5",
    key: "o932ke"
}], ["path", {
    d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",
    key: "10s06x"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cm = te("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bc = te("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
function dm() {
    return u.jsxs("div", {
        className: "flex items-center gap-2",
        children: [u.jsx("img", {
            src: "/assets/headerlogo.png",
            alt: "Nova Logo",
            className: "h-8 w-8"
        }), u.jsx("span", {
            className: "text-white font-bold text-xl tracking-widest uppercase",
            children: "Nova"
        })]
    })
}
function an({href: e, children: t, variant: n="primary", className: r=""}) {
    const l = "relative w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium flex items-center justify-center gap-2 text-base md:text-lg overflow-hidden group"
      , i = {
        primary: "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20",
        secondary: "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
    };
    return u.jsxs("a", {
        href: e,
        target: "_blank",
        rel: "noopener noreferrer",
        className: `${l} ${i[n]} ${r}`,
        children: [u.jsx("span", {
            className: "relative z-10 flex items-center gap-2",
            children: t
        }), u.jsx("div", {
            className: "absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-purple-400/20 to-transparent transition-transform duration-500 ease-out"
        })]
    })
}
function fm() {
    const [e,t] = ge.useState(!1);
    return u.jsxs("nav", {
        className: "bg-black/95 fixed w-full z-50 border-b border-purple-500/20",
        children: [u.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: u.jsxs("div", {
                className: "flex items-center justify-between h-16",
                children: [u.jsx("div", {
                    className: "flex items-center",
                    children: u.jsx("div", {
                        className: "flex-shrink-0",
                        children: u.jsx(dm, {})
                    })
                }), u.jsx("div", {
                    className: "hidden md:block",
                    children: u.jsx("div", {
                        className: "ml-4 flex items-center gap-4 md:ml-6",
                        children: u.jsx(an, {
                            href: "https://axiom.trade/@tradenova",
                            variant: "primary",
                            className: "!py-2 !px-4",
                            children: "Start Trading"
                        })
                    })
                }), u.jsx("div", {
                    className: "md:hidden",
                    children: u.jsx("button", {
                        onClick: () => t(!e),
                        className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-purple-400 hover:bg-gray-700 focus:outline-none",
                        "aria-expanded": e,
                        "aria-label": "Toggle navigation",
                        children: e ? u.jsx(Bc, {
                            className: "h-6 w-6"
                        }) : u.jsx(em, {
                            className: "h-6 w-6"
                        })
                    })
                })]
            })
        }), u.jsx("div", {
            className: `md:hidden transition-all duration-300 ease-in-out ${e ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`,
            children: u.jsx("div", {
                className: "px-4 pt-2 pb-3 space-y-3 bg-black/95 border-t border-purple-500/20",
                children: u.jsx(an, {
                    href: "https://axiom.trade/@tradenova",
                    variant: "primary",
                    children: "Start Trading"
                })
            })
        })]
    })
}
function Hc({type: e, children: t}) {
    return u.jsxs("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [u.jsx("div", {
            className: "absolute inset-0 bg-black/95"
        }), t, e === "static" ? u.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-purple-500/5 via-purple-500/10 to-transparent opacity-50"
        }) : u.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"
        })]
    })
}
function pm({x: e, y: t, size: n, delay: r}) {
    return u.jsx("div", {
        className: "absolute bg-purple-500/20 border border-purple-400/30",
        style: {
            left: `${e}px`,
            top: `${t}px`,
            width: `${n}px`,
            height: `${n}px`,
            animation: `pulse 3s infinite ${r}s, glow 3s infinite ${r}s`
        }
    })
}
function mm() {
    const e = se.useRef(null)
      , [t,n] = ge.useState([])
      , [r,l] = ge.useState({
        x: 0,
        y: 0
    });
    se.useEffect( () => {
        if (!e.current)
            return;
        const {width: o, height: s} = e.current.getBoundingClientRect()
          , a = 100
          , c = [];
        for (let m = 0; m < o; m += a)
            for (let v = 0; v < s; v += a)
                c.push({
                    x: m,
                    y: v,
                    size: a,
                    delay: Math.random() * 2,
                    id: Math.random()
                });
        n(c)
    }
    , []);
    const i = o => {
        if (!e.current)
            return;
        const {left: s, top: a} = e.current.getBoundingClientRect();
        l({
            x: o.clientX - s,
            y: o.clientY - a
        })
    }
    ;
    return u.jsxs("div", {
        ref: e,
        className: "absolute inset-0 overflow-hidden",
        onMouseMove: i,
        children: [u.jsx("div", {
            className: "absolute inset-0 bg-black/90"
        }), t.map(o => {
            const s = r.x - o.x
              , a = r.y - o.y
              , c = Math.sqrt(s * s + a * a)
              , m = 300
              , v = Math.max(1, 1 + (1 - Math.min(c, m) / m) * .2);
            return u.jsx("div", {
                style: {
                    transform: `scale(${v})`,
                    transition: "transform 0.3s ease-out"
                },
                children: u.jsx(pm, {
                    ...o
                })
            }, o.id)
        }
        ), u.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
        }), u.jsx("div", {
            className: "absolute inset-0 bg-gradient-radial-purple opacity-30"
        })]
    })
}
function hm() {
    return u.jsxs("section", {
        className: "relative min-h-[calc(100vh-4rem)] bg-black text-white",
        children: [u.jsx(Hc, {
            type: "animated",
            children: u.jsx(mm, {})
        }), u.jsx("div", {
            className: "relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center py-20 md:py-32",
            children: u.jsxs("div", {
                className: "text-center",
                children: [u.jsx("div", {
                    className: "flex justify-center mb-8",
                    children: u.jsx("img", {
                        src: "/assets/maincontentlogoabovethefastesttradingplatform.png",
                        alt: "Nova Logo",
                        className: "w-24 h-24 md:w-32 md:h-32 animate-pulse"
                    })
                }), u.jsxs("h1", {
                    className: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-tight",
                    children: [u.jsx("span", {
                        className: "block",
                        children: "The Fastest Trading Platform"
                    }), u.jsx("span", {
                        className: "block text-purple-400",
                        children: "Nova Solana"
                    })]
                }), u.jsx("p", {
                    className: "mt-4 md:mt-6 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed px-4",
                    children: "Seamlessly trade any token on Solana with total control."
                }), u.jsxs("div", {
                    className: "mt-8 md:mt-12",
                    children: [u.jsx("p", {
                        className: "text-purple-400 text-lg md:text-xl font-semibold mb-4",
                        children: "Save 10% on trading fees!"
                    }), u.jsx(an, {
                        href: "https://axiom.trade/@tradenova",
                        variant: "primary",
                        className: "!py-4 !px-12 text-2xl md:text-3xl inline-flex !bg-purple-500 hover:!bg-purple-400 border-purple-400/50 animate-glow",
                        children: "Start Trading"
                    })]
                }), u.jsxs("div", {
                    className: "mt-8 md:mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4 flex-wrap",
                    children: [u.jsxs(an, {
                        href: "https://docs.tradeonnova.net/",
                        variant: "secondary",
                        className: "!py-2 !px-4 text-sm opacity-70 hover:opacity-100",
                        children: [u.jsx(Uc, {
                            className: "h-5 w-5"
                        }), " Read Docs"]
                    }), u.jsx(an, {
                        href: "https://duel.com/r/com",
                        variant: "secondary",
                        className: "!py-2 !px-4 text-sm opacity-70 hover:opacity-100",
                        children: "Play On Duel"
                    })]
                })]
            })
        })]
    })
}
function vm() {
    return u.jsxs(u.Fragment, {
        children: [u.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-purple-400/20 via-purple-500/20 to-purple-600/20 rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
        }), u.jsx("div", {
            className: "absolute inset-0 rounded-xl opacity-20 bg-[radial-gradient(at_top_left,rgba(147,51,234,0.1),transparent_50%),radial-gradient(at_bottom_right,rgba(168,85,247,0.1),transparent_50%)]"
        }), u.jsx("div", {
            className: "absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 via-purple-500/[0.07] to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
        })]
    })
}
function gm({url: e}) {
    return u.jsxs("a", {
        href: e,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-lg text-purple-300 hover:bg-purple-500/30 transition-all duration-300 group",
        children: [u.jsx(nm, {
            className: "w-4 h-4 transition-transform duration-300 group-hover:scale-110"
        }), u.jsx("span", {
            className: "text-sm font-medium",
            children: "Watch Tutorial"
        })]
    })
}
function ym({icon: e, title: t, description: n, videoUrl: r}) {
    return u.jsx("div", {
        className: "group min-h-[350px] sm:h-[400px]",
        children: u.jsxs("div", {
            className: "relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-xl p-4 sm:p-6 lg:p-8 transition-all duration-500 ease-out hover:scale-[1.02] hover:border-purple-500/30 hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.3)]",
            children: [u.jsx(vm, {}), u.jsxs("div", {
                className: "relative h-full flex flex-col",
                children: [u.jsxs("div", {
                    className: "relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 transition-transform duration-500 ease-out group-hover:-translate-y-1",
                    children: [u.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-purple-400/20 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 ease-out"
                    }), u.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-bl from-purple-500/20 to-purple-400/20 rounded-xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 ease-out"
                    }), u.jsx("div", {
                        className: "relative w-full h-full bg-gradient-to-br from-purple-500/30 to-purple-400/30 rounded-xl flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-105",
                        children: ge.cloneElement(e, {
                            className: "h-6 w-6 sm:h-8 sm:w-8 text-purple-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all duration-500 ease-out group-hover:scale-110"
                        })
                    })]
                }), u.jsxs("div", {
                    className: "flex-1",
                    children: [u.jsx("h3", {
                        className: "text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 tracking-tight transition-colors duration-500 ease-out group-hover:text-purple-300",
                        children: t
                    }), u.jsx("p", {
                        className: "text-gray-400 leading-relaxed text-sm sm:text-[15px] transition-colors duration-500 ease-out group-hover:text-gray-300",
                        children: n
                    }), r && u.jsx("div", {
                        className: "mt-4",
                        children: u.jsx(gm, {
                            url: r
                        })
                    })]
                }), u.jsxs("div", {
                    className: "pt-4 sm:pt-6",
                    children: [u.jsx("div", {
                        className: "h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent transform origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
                    }), u.jsxs("div", {
                        className: "mt-4 flex items-center gap-2 text-xs sm:text-sm text-purple-400/70",
                        children: [u.jsx("div", {
                            className: "w-2 h-2 rounded-full bg-purple-400/70 animate-pulse"
                        }), u.jsx("span", {
                            children: "Active Feature"
                        })]
                    })]
                })]
            })]
        })
    })
}
function xm() {
    const e = [{
        icon: u.jsx(lm, {
            strokeWidth: 1.5
        }),
        title: "Buy",
        description: "Nova makes trading effortless with multiple buying options: normal buy, multi wallet buy, limit buy, and auto buy. Experience seamless transactions across all trading types."
    }, {
        icon: u.jsx(sm, {
            strokeWidth: 1.5
        }),
        title: "Sell",
        description: "Nova's sell module is integral to securing your profits instantaneously. Experience the fastest fills in the market with our advanced selling features."
    }, {
        icon: u.jsx(om, {
            strokeWidth: 1.5
        }),
        title: "Limit Order",
        description: "Nova's Limit Order's allow you to automatically trigger buy and sell trades when a token or position hits a certain market cap, price or profit level. Take control of your trading strategy with precision.",
        videoUrl: "https://www.youtube.com/watch?v=IO3HOncpxCU"
    }, {
        icon: u.jsx(im, {
            strokeWidth: 1.5
        }),
        title: "Sniper",
        description: "Snipe currently migrating Pump-Fun Tokens and new Raydium liquidity pools with ease. Get filled quickly to maximize your profit potential.",
        videoUrl: "https://www.youtube.com/watch?v=Cp6U3dlscaY"
    }, {
        icon: u.jsx(tm, {
            strokeWidth: 1.5
        }),
        title: "Nova Click",
        description: "Purchase directly from DEX's such as Photon & BullX and process transactions using Nova's server for the FASTEST speeds.",
        videoUrl: "https://www.youtube.com/watch?v=HSwBqb19fKk"
    }, {
        icon: u.jsx(um, {
            strokeWidth: 1.5
        }),
        title: "Copy Trade",
        description: "Copy trades from any wallet on Solana with our ground-up built system. Experience unmatched speed and MEV attack prevention, ensuring your copied trades are executed efficiently and securely.",
        videoUrl: "https://www.youtube.com/watch?v=Cq0BB7gNmhg"
    }];
    return u.jsxs("section", {
        className: "relative min-h-screen bg-black py-16 sm:py-24 lg:py-32",
        children: [u.jsx(Hc, {
            type: "static"
        }), u.jsxs("div", {
            className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [u.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-20",
                children: [u.jsxs("div", {
                    className: "relative group",
                    children: [u.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-purple-500/20 via-purple-400/20 to-purple-500/20 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                    }), u.jsxs("div", {
                        className: "relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center",
                        children: [u.jsx("div", {
                            className: "inline-flex items-center justify-center p-3 bg-purple-500/10 rounded-full mb-4",
                            children: u.jsx(bp, {
                                className: "h-6 w-6 text-purple-400"
                            })
                        }), u.jsx("div", {
                            className: "text-3xl font-bold text-white mb-2",
                            children: "$2B+"
                        }), u.jsx("div", {
                            className: "text-gray-400",
                            children: "Lifetime Volume"
                        })]
                    })]
                }), u.jsxs("div", {
                    className: "relative group",
                    children: [u.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-purple-500/20 via-purple-400/20 to-purple-500/20 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                    }), u.jsxs("div", {
                        className: "relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center",
                        children: [u.jsx("div", {
                            className: "inline-flex items-center justify-center p-3 bg-purple-500/10 rounded-full mb-4",
                            children: u.jsx(Jp, {
                                className: "h-6 w-6 text-purple-400"
                            })
                        }), u.jsx("div", {
                            className: "text-3xl font-bold text-white mb-2",
                            children: "50K+"
                        }), u.jsx("div", {
                            className: "text-gray-400",
                            children: "Daily Trades"
                        })]
                    })]
                }), u.jsxs("div", {
                    className: "relative group",
                    children: [u.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-purple-500/20 via-purple-400/20 to-purple-500/20 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"
                    }), u.jsxs("div", {
                        className: "relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center",
                        children: [u.jsx("div", {
                            className: "inline-flex items-center justify-center p-3 bg-purple-500/10 rounded-full mb-4",
                            children: u.jsx(cm, {
                                className: "h-6 w-6 text-purple-400"
                            })
                        }), u.jsx("div", {
                            className: "text-3xl font-bold text-white mb-2",
                            children: "200K+"
                        }), u.jsx("div", {
                            className: "text-gray-400",
                            children: "Lifetime Users"
                        })]
                    })]
                })]
            }), u.jsxs("div", {
                className: "text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24",
                children: [u.jsx("div", {
                    className: "inline-flex items-center justify-center p-2 bg-purple-500/10 rounded-full mb-4 sm:mb-6",
                    children: u.jsx(rm, {
                        className: "h-5 w-5 sm:h-6 sm:w-6 text-purple-400"
                    })
                }), u.jsx("h2", {
                    className: "text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6",
                    children: "Our Mission"
                }), u.jsx("p", {
                    className: "text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed px-4",
                    children: "Creating a comprehensive all-in-one trading platform where our supporters are rewarded for their role in our growth. We aim not only to be the fastest but to deliver on every promise we make."
                }), u.jsxs("a", {
                    href: "https://docs.tradeonnova.net/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-2 mt-6 sm:mt-8 text-purple-400 hover:text-purple-300 transition-colors",
                    children: ["Learn more about our vision ", u.jsx(Zp, {
                        className: "h-4 w-4"
                    })]
                })]
            }), u.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8",
                children: e.map( (t, n) => u.jsx(ym, {
                    ...t
                }, n))
            })]
        })]
    })
}
function wm({title: e, content: t}) {
    const [n,r] = ge.useState(!1);
    return u.jsxs("div", {
        className: "border-b border-purple-500/20",
        children: [u.jsxs("button", {
            onClick: () => r(!n),
            className: "w-full py-4 px-6 flex items-center justify-between text-left text-gray-400 hover:text-purple-400",
            children: [u.jsx("span", {
                children: e
            }), u.jsx(qp, {
                className: `w-5 h-5 transition-transform ${n ? "rotate-180" : ""}`
            })]
        }), u.jsx("div", {
            className: `overflow-hidden transition-all ${n ? "max-h-96" : "max-h-0"}`,
            children: u.jsx("p", {
                className: "px-6 pb-4 text-gray-500",
                children: t
            })
        })]
    })
}
function km() {
    const e = [{
        title: "Nova Solana Bot",
        content: "Nova represents the next evolution in decentralized trading, featuring enhanced MEV protection, advanced multi-wallet management, and AI-powered trading strategies. With improved execution speeds, expanded DEX integration, and innovative features like predictive analytics and smart order routing, Nova V2 sets new standards for professional trading on Solana."
    }, {
        title: "Nova Airdrop",
        content: "Our mission is creating a comprehensive all-in-one trading platform where our supporters are rewarded for their role in our growth."
    }, {
        title: "Nova Trading Bot",
        content: "Nova Trading Bot is the fastest and most advanced trading bot for Solana, offering features like instant buys, multi-wallet trading, and automated trading strategies. With Nova, traders can execute trades at lightning speed, implement sophisticated trading strategies, and manage multiple wallets efficiently. The platform includes advanced features such as MEV protection, real-time market analysis, and customizable trading parameters for optimal performance."
    }, {
        title: "SOL Trading Bot",
        content: "Experience lightning-fast Solana trading with Nova's advanced SOL trading bot. Features include sniping, copy trading, and limit orders for optimal trading performance. Our SOL trading bot offers unmatched execution speed, allowing traders to capitalize on market opportunities instantly. With features like auto-buy, multi-wallet support, and advanced order types, Nova provides everything needed for successful Solana trading."
    }, {
        title: "Best SOL Trading Bot",
        content: "Nova stands out as the best Solana trading bot with its comprehensive features, including instant DEX trading, multi-wallet support, and advanced automation capabilities. Our platform offers the fastest transaction speeds, most reliable execution, and most advanced trading features in the Solana ecosystem. With built-in MEV protection, customizable trading strategies, and real-time market data, Nova provides traders with everything needed for successful trading on Solana."
    }, {
        title: "Nova Bot",
        content: "Nova Bot provides a complete trading solution for Solana, featuring advanced trading tools, real-time market analysis, and automated trading strategies. The platform includes features like instant buys, limit orders, copy trading, and multi-wallet support. Nova Bot's sophisticated architecture ensures the fastest possible execution speeds while maintaining reliability and security. Whether you're sniping new tokens or implementing complex trading strategies, Nova Bot has you covered."
    }, {
        title: "Nova SOL Bot",
        content: "Nova SOL Bot offers the fastest trading execution on Solana, with features like instant buys, limit orders, and advanced sniping capabilities for optimal trading results. Our platform includes sophisticated tools for market analysis, automated trading strategies, and real-time portfolio management. With features like MEV protection, multi-wallet support, and customizable trading parameters, Nova SOL Bot provides everything needed for successful trading on Solana."
    }, {
        title: "Nova Solana Trading Features",
        content: "Nova's Solana trading platform includes essential features like instant buys, multi-wallet support, limit orders, and advanced sniping capabilities. Our platform offers MEV protection, real-time market data, and automated trading strategies. With the fastest execution speeds and most reliable infrastructure in the Solana ecosystem, Nova ensures optimal trading performance."
    }, {
        title: "Nova Advanced Trading Tools",
        content: "Nova provides advanced trading tools including real-time market analysis, automated trading strategies, and sophisticated order types. Our platform features instant execution, multi-wallet support, and comprehensive portfolio management. With built-in MEV protection and customizable trading parameters, Nova offers everything needed for professional trading on Solana."
    }, {
        title: "Nova Bot BSC",
        content: "Nova Bot BSC brings advanced trading capabilities to the Binance Smart Chain, offering features like instant buys, multi-wallet trading, and automated strategies. Our Nova BSC trading bot provides lightning-fast execution speeds, MEV protection, and sophisticated trading tools optimized for BSC tokens. With features including sniper bot functionality, limit orders, and copy trading, Nova Bot BSC delivers a comprehensive trading solution for the Binance Smart Chain ecosystem. Experience professional-grade trading with real-time market analysis, portfolio management, and customizable trading parameters specifically designed for BSC trading."
    }, {
        title: "Nova Cosmo",
        content: "Real time feed of tokens throughout their lifespan. Easily navigate tokens from newly created, about to graduate and graduated. Extensive and effective filters with lightning execution. Our advanced token tracking system provides comprehensive insights into token lifecycles, from inception to maturity. With Nova Cosmo, traders can identify opportunities at every stage of a token's development, backed by powerful filtering capabilities and instant execution features for optimal trading performance."
    }, {
        title: "Nova Trade",
        content: "Nova Trade is a trading platform designed to be the only application you need to trade onchain. We offer a suite a integrations that allow you to trade the hottest solana tokens with lightning speed. We offer rewards and the best tools for total chain domination and maximum value for the user."
    }];
    return u.jsx("footer", {
        className: "bg-black/95 border-t border-purple-500/20",
        children: u.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [u.jsx("div", {
                className: "grid divide-y divide-purple-500/20",
                children: e.map( (t, n) => u.jsx(wm, {
                    ...t
                }, n))
            }), u.jsx("div", {
                className: "py-12 px-6 lg:px-8 text-gray-400",
                children: u.jsxs("div", {
                    className: "prose prose-sm max-w-none",
                    children: [u.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: [u.jsxs("div", {
                            children: [u.jsx("h3", {
                                className: "text-lg font-semibold text-purple-400 mb-4",
                                children: "Nova solana bot Features"
                            }), u.jsxs("ul", {
                                className: "space-y-2 text-sm",
                                children: [u.jsx("li", {
                                    children: "• Enhanced MEV protection system"
                                }), u.jsx("li", {
                                    children: "• AI-powered trading strategies"
                                }), u.jsx("li", {
                                    children: "• Advanced multi-wallet management"
                                }), u.jsx("li", {
                                    children: "• Predictive market analytics"
                                }), u.jsx("li", {
                                    children: "• Smart order routing"
                                }), u.jsx("li", {
                                    children: "• Cross-DEX arbitrage"
                                }), u.jsx("li", {
                                    children: "• Real-time portfolio optimization"
                                }), u.jsx("li", {
                                    children: "• Advanced risk management"
                                }), u.jsx("li", {
                                    children: "• Custom strategy builder"
                                }), u.jsx("li", {
                                    children: "• Enhanced security features"
                                })]
                            })]
                        }), u.jsxs("div", {
                            children: [u.jsx("h3", {
                                className: "text-lg font-semibold text-purple-400 mb-4",
                                children: "Nova Solana Trading Bot "
                            }), u.jsxs("ul", {
                                className: "space-y-2 text-sm",
                                children: [u.jsx("li", {
                                    children: "• Token sniping capabilities"
                                }), u.jsx("li", {
                                    children: "• Limit order functionality"
                                }), u.jsx("li", {
                                    children: "• Auto-buy features"
                                }), u.jsx("li", {
                                    children: "• Portfolio management"
                                }), u.jsx("li", {
                                    children: "• Price tracking tools"
                                }), u.jsx("li", {
                                    children: "• Custom trading parameters"
                                }), u.jsx("li", {
                                    children: "• Market trend analysis"
                                }), u.jsx("li", {
                                    children: "• Profit/loss tracking"
                                }), u.jsx("li", {
                                    children: "• Trading history analytics"
                                }), u.jsx("li", {
                                    children: "• Performance metrics"
                                })]
                            })]
                        }), u.jsxs("div", {
                            children: [u.jsx("h3", {
                                className: "text-lg font-semibold text-purple-400 mb-4",
                                children: "Why Choose Nova Bot"
                            }), u.jsxs("ul", {
                                className: "space-y-2 text-sm",
                                children: [u.jsx("li", {
                                    children: "• Best-in-class SOL trading bot"
                                }), u.jsx("li", {
                                    children: "• Advanced Solana sniper"
                                }), u.jsx("li", {
                                    children: "• Instant DEX trading"
                                }), u.jsx("li", {
                                    children: "• Comprehensive security features"
                                }), u.jsx("li", {
                                    children: "• 24/7 automated trading"
                                }), u.jsx("li", {
                                    children: "• Professional trading tools"
                                }), u.jsx("li", {
                                    children: "• Real-time market data"
                                }), u.jsx("li", {
                                    children: "• Advanced charting tools"
                                }), u.jsx("li", {
                                    children: "• Technical indicators"
                                }), u.jsx("li", {
                                    children: "• Expert support team"
                                })]
                            })]
                        })]
                    }), u.jsxs("div", {
                        className: "mt-12 grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: [u.jsxs("div", {
                            children: [u.jsx("h3", {
                                className: "text-lg font-semibold text-purple-400 mb-4",
                                children: "Nova Trading Bot"
                            }), u.jsx("p", {
                                className: "text-sm leading-relaxed mb-4",
                                children: "Nova V2 represents a quantum leap in decentralized trading technology, introducing groundbreaking features like AI-powered trading strategies and enhanced MEV protection. Our next-generation platform combines advanced multi-wallet management with predictive analytics, offering traders unprecedented control and efficiency in the Solana ecosystem. With improved execution speeds and expanded DEX integration, Nova V2 sets new standards for professional cryptocurrency trading."
                            }), u.jsx("p", {
                                className: "text-sm leading-relaxed",
                                children: "The platform's innovative smart order routing and cross-DEX arbitrage capabilities enable traders to capitalize on market inefficiencies while maintaining optimal security. Nova V2's custom strategy builder and real-time portfolio optimization tools provide traders with the flexibility and precision needed in today's dynamic market environment."
                            })]
                        }), u.jsxs("div", {
                            children: [u.jsx("h3", {
                                className: "text-lg font-semibold text-purple-400 mb-4",
                                children: "Nova Solana Platform"
                            }), u.jsx("p", {
                                className: "text-sm leading-relaxed mb-4",
                                children: "As the leading SOL trading bot, Nova offers a comprehensive suite of professional trading tools designed for both novice and experienced traders. Our platform includes advanced charting capabilities, technical indicators, and real-time market data to inform trading decisions. The intuitive interface makes it easy to manage multiple trading strategies across different wallets simultaneously."
                            }), u.jsx("p", {
                                className: "text-sm leading-relaxed",
                                children: "With features like automated trading strategies, copy trading, and customizable risk management tools, Nova empowers traders to achieve their trading goals efficiently and securely. Our platform's robust infrastructure ensures reliable execution and optimal performance in all market conditions."
                            })]
                        })]
                    })]
                })
            }), u.jsx("div", {
                className: "py-4 px-4 sm:px-6 lg:px-8",
                children: u.jsxs("div", {
                    className: "flex justify-center space-x-6",
                    children: [u.jsx("a", {
                        href: "https://t.me/TradeOnNova",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-400 hover:text-purple-400 transition-colors",
                        "aria-label": "Telegram",
                        children: u.jsx(Uc, {
                            className: "h-6 w-6"
                        })
                    }), u.jsx("a", {
                        href: "https://x.com/TradeonNova/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-400 hover:text-purple-400 transition-colors",
                        "aria-label": "Twitter",
                        children: u.jsx(am, {
                            className: "h-6 w-6"
                        })
                    })]
                })
            })]
        })
    })
}
const Sm = e => e.length > 160 ? `${e.substring(0, 157)}...` : e
  , Ue = {
    siteName: "Nova Trading Bot",
    baseUrl: "https://tradeonnova.net",
    defaultImage: "/assets/headerlogo.png",
    twitterHandle: "@Tradeonnova",
    defaultLocale: "en",
    alternateLocales: ["es", "zh", "ru"]
};
function Em({title: e="Nova - The Fastest All-In-One Solana Trading Platform", description: t="Experience lightning-fast trading on Solana with Nova. Features include sniping, copy trading, limit orders, and instant DEX trading. Join the future of decentralized trading.", keywords: n=["nova solana", "nova trading bot", "nova bot solana", "solana nova", "trade on nova", "trade nova", "nova trade"], image: r=Ue.defaultImage, url: l=Ue.baseUrl, type: i="website", publishedTime: o, modifiedTime: s, authors: a, section: c}) {
    const m = Sm(t)
      , v = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: Ue.siteName,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web-based",
        description: m,
        url: l,
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "1247"
        }
    };
    return u.jsxs(Xp, {
        children: [u.jsx("html", {
            lang: Ue.defaultLocale
        }), u.jsx("title", {
            children: e
        }), u.jsx("meta", {
            name: "description",
            content: m
        }), u.jsx("meta", {
            name: "keywords",
            content: n.join(", ")
        }), u.jsx("meta", {
            name: "robots",
            content: "index, follow"
        }), u.jsx("meta", {
            property: "og:site_name",
            content: Ue.siteName
        }), u.jsx("meta", {
            property: "og:type",
            content: i
        }), u.jsx("meta", {
            property: "og:url",
            content: l
        }), u.jsx("meta", {
            property: "og:title",
            content: e
        }), u.jsx("meta", {
            property: "og:description",
            content: m
        }), u.jsx("meta", {
            property: "og:image",
            content: r
        }), u.jsx("meta", {
            property: "og:locale",
            content: Ue.defaultLocale
        }), Ue.alternateLocales.map(h => u.jsx("meta", {
            property: "og:locale:alternate",
            content: h
        }, h)), o && u.jsx("meta", {
            property: "article:published_time",
            content: o
        }), s && u.jsx("meta", {
            property: "article:modified_time",
            content: s
        }), c && u.jsx("meta", {
            property: "article:section",
            content: c
        }), a == null ? void 0 : a.map(h => u.jsx("meta", {
            property: "article:author",
            content: h
        }, h)), u.jsx("meta", {
            name: "twitter:card",
            content: "summary_large_image"
        }), u.jsx("meta", {
            name: "twitter:site",
            content: Ue.twitterHandle
        }), u.jsx("meta", {
            name: "twitter:title",
            content: e
        }), u.jsx("meta", {
            name: "twitter:description",
            content: m
        }), u.jsx("meta", {
            name: "twitter:image",
            content: r
        }), u.jsx("meta", {
            name: "application-name",
            content: Ue.siteName
        }), u.jsx("meta", {
            name: "apple-mobile-web-app-title",
            content: Ue.siteName
        }), u.jsx("meta", {
            name: "theme-color",
            content: "#9333EA"
        }), u.jsx("meta", {
            name: "mobile-web-app-capable",
            content: "yes"
        }), u.jsx("meta", {
            name: "apple-mobile-web-app-capable",
            content: "yes"
        }), u.jsx("meta", {
            name: "msapplication-TileColor",
            content: "#9333EA"
        }), u.jsx("meta", {
            httpEquiv: "X-DNS-Prefetch-Control",
            content: "on"
        }), u.jsx("link", {
            rel: "dns-prefetch",
            href: "//www.youtube.com"
        }), u.jsx("link", {
            rel: "preconnect",
            href: "//www.youtube.com"
        }), u.jsx("script", {
            type: "application/ld+json",
            children: JSON.stringify(v)
        }), u.jsx("link", {
            rel: "canonical",
            href: l
        })]
    })
}
function Nm() {
    const [e,t] = se.useState(!1)
      , [n,r] = se.useState(!1);
    se.useEffect( () => {
        const i = setTimeout( () => {
            t(!0)
        }
        , 9e3);
        return () => clearTimeout(i)
    }
    , []);
    const l = () => {
        r(!0),
        setTimeout( () => {
            t(!1),
            r(!1)
        }
        , 300)
    }
    ;
    return e ? u.jsxs("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        children: [u.jsx("div", {
            className: `absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${n ? "opacity-0" : "opacity-100"}`,
            onClick: l
        }), u.jsxs("div", {
            className: `relative bg-black/90 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 max-w-md w-full mx-4 transform transition-all duration-300 ${n ? "scale-95 opacity-0" : "scale-100 opacity-100"}`,
            children: [u.jsx("button", {
                onClick: l,
                className: "absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",
                "aria-label": "Close popup",
                children: u.jsx(Bc, {
                    className: "h-5 w-5"
                })
            }), u.jsxs("div", {
                className: "text-center",
                children: [u.jsxs("div", {
                    className: "mb-6",
                    children: [u.jsx("img", {
                        src: "/assets/popuplogo.png",
                        alt: "Nova Logo",
                        className: "w-16 h-16 mx-auto mb-4 animate-pulse"
                    }), u.jsx("h3", {
                        className: "text-2xl font-bold text-white mb-2",
                        children: "Ready to start trading?"
                    }), u.jsx("p", {
                        className: "text-purple-400 text-lg font-semibold mb-2",
                        children: "Save 10% on trading fees!"
                    }), u.jsx("p", {
                        className: "text-gray-300 text-sm",
                        children: "Join thousands of traders using Nova for lightning-fast Solana trading"
                    })]
                }), u.jsx(an, {
                    href: "https://axiom.trade/@tradenova",
                    variant: "primary",
                    className: "!py-3 !px-8 text-lg !bg-purple-500 hover:!bg-purple-400 border-purple-400/50 animate-glow w-full",
                    children: "Start Trading"
                })]
            }), u.jsx("div", {
                className: "absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-purple-400/50 rounded-tl-2xl"
            }), u.jsx("div", {
                className: "absolute -top-1 -right-1 w-8 h-8 border-r-2 border-t-2 border-purple-400/50 rounded-tr-2xl"
            }), u.jsx("div", {
                className: "absolute -bottom-1 -left-1 w-8 h-8 border-l-2 border-b-2 border-purple-400/50 rounded-bl-2xl"
            }), u.jsx("div", {
                className: "absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-purple-400/50 rounded-br-2xl"
            })]
        })]
    }) : null
}
function Cm() {
    return u.jsxs($c, {
        children: [u.jsx(Em, {}), u.jsxs("div", {
            className: "min-h-screen bg-black flex flex-col",
            children: [u.jsx(fm, {}), u.jsxs("main", {
                className: "flex-grow",
                children: [u.jsx(hm, {}), u.jsx(xm, {})]
            }), u.jsx(km, {}), u.jsx(Nm, {})]
        })]
    })
}
const xa = "G-PM8783QYLH"
  , jm = () => {
    const e = document.createElement("script");
    e.src = `https://www.googletagmanager.com/gtag/js?id=${xa}`,
    e.async = !0;
    const t = document.createElement("script");
    t.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${xa}');
  `,
    document.head.appendChild(e),
    document.head.appendChild(t)
}
;
jm();
Lc(document.getElementById("root")).render(u.jsx(se.StrictMode, {
    children: u.jsx(Cm, {})
}));
