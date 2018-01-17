webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Base = function Base(name) {
    var Atom = function Atom(_ref) {
        var refCb = _ref.refCb,
            others = _objectWithoutProperties(_ref, ['refCb']);

        if (refCb) {
            others.ref = refCb;
        }
        return _react2.default.createElement(name, others);
    };
    return Atom;
};

exports.default = Base;
module.exports = exports['default'];

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixClass = __webpack_require__(39);

Object.defineProperty(exports, 'mixClass', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mixClass).default;
  }
});

var _hasClass = __webpack_require__(17);

Object.defineProperty(exports, 'hasClass', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hasClass).default;
  }
});

var _removeClass = __webpack_require__(41);

Object.defineProperty(exports, 'removeClass', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_removeClass).default;
  }
});

var _toggleClass = __webpack_require__(75);

Object.defineProperty(exports, 'toggleClass', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toggleClass).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_atomic_atom__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_atomic_atom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_atomic_atom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_get_object_value__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_get_object_value___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_get_object_value__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ucfirst__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ucfirst___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ucfirst__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_lib_styles_injectStyle__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_class_lib__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* jshint esnext: true */








var keys = Object.keys;

var getChildren = function getChildren(render, children) {
    if (!render) {
        return null;
    }
    /**
     * Hack for https://fb.me/react-warning-keys
     * Each child in an array or iterator should have a unique "key"
     */
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (c) {
        return c;
    });
};

var SemanticUI = function SemanticUI(_ref) {
    var atom = _ref.atom,
        children = _ref.children,
        renderChildren = _ref.renderChildren,
        styles = _ref.styles,
        styleOrder = _ref.styleOrder,
        ui = _ref.ui,
        others = _objectWithoutProperties(_ref, ['atom', 'children', 'renderChildren', 'styles', 'styleOrder', 'ui']);

    Object(__WEBPACK_IMPORTED_MODULE_4__src_lib_styles_injectStyle__["b" /* default */])();
    var className = others.className,
        style = others.style;

    var component = void 0;
    switch (atom) {
        case 'input':
            component = __WEBPACK_IMPORTED_MODULE_1_react_atomic_atom__["Input"];
            renderChildren = false;
            break;
        case 'img':
            component = __WEBPACK_IMPORTED_MODULE_1_react_atomic_atom__["Img"];
            renderChildren = false;
            break;
        case 'path':
            component = __WEBPACK_IMPORTED_MODULE_1_react_atomic_atom__["Path"];
            ui = false;
            break;
        default:
            if (!atom) {
                atom = '';
            }
            component = __WEBPACK_IMPORTED_MODULE_2_get_object_value___default()(__WEBPACK_IMPORTED_MODULE_1_react_atomic_atom__, [__WEBPACK_IMPORTED_MODULE_3_ucfirst___default()(atom)], function () {
                return __WEBPACK_IMPORTED_MODULE_1_react_atomic_atom__["Div"];
            });
            break;
    }
    // bindStyles need after inject
    var bindProps = {};
    if (styles) {
        // Need avoid props pass by ref !!important!!
        bindProps = Object(__WEBPACK_IMPORTED_MODULE_4__src_lib_styles_injectStyle__["a" /* bindStyles */])({
            className: className,
            style: style,
            styles: styles,
            styleOrder: styleOrder
        });
    }
    keys(bindProps).forEach(function (key) {
        return others[key] = bindProps[key];
    });
    if (others.className && ui) {
        others.className = Object(__WEBPACK_IMPORTED_MODULE_5_class_lib__["mixClass"])(others.className, 'ui');
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(component, others, getChildren(renderChildren, children));
};

SemanticUI.defaultProps = {
    ui: true,
    renderChildren: true
};

/* harmony default export */ __webpack_exports__["a"] = (SemanticUI);

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stores_scrollStore__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__stores_scrollStore__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_organisms_ScrollSpy__ = __webpack_require__(74);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ui_organisms_ScrollSpy__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_organisms_ScrollReceiver__ = __webpack_require__(144);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__ui_organisms_ScrollReceiver__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_organisms_SmoothScrollLink__ = __webpack_require__(145);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__ui_organisms_SmoothScrollLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scrollDispatcher__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__scrollDispatcher__["b"]; });
// Stores


// UI




// Dispatch


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var lastScroll = void 0;
var isWebkit = void 0;
var docEl = void 0;
if ('undefined' !== typeof document) {
    isWebkit = 'undefined' !== typeof document.webkitIsFullScreen;
    docEl = document.documentElement;
}

var getScrollNode = function getScrollNode(el) {
    if (!el) {
        if ('undefined' !== typeof document) {
            if (isWebkit) {
                el = document.scrollingElement ? document.scrollingElement : document.body;
            } else {
                el = docEl;
            }
        }
    }
    return el;
};

var getScrollInfo = function getScrollInfo(el, margin) {
    el = getScrollNode(el);
    if (!margin) {
        margin = 50;
    }
    var h = void 0;
    var w = void 0;
    var isBody = el.nodeName && 'body' === el.nodeName.toLowerCase();
    if (isWebkit && isBody) {
        h = window.innerHeight;
        w = window.innerWidth;
    } else {
        h = el.clientHeight;
        w = el.clientWidth;
    }
    var scrollLeft = el.scrollLeft;
    var scrollHeight = el.scrollHeight;
    var scrollTop = el.scrollTop;
    var scrollWidth = el.scrollWidth;
    var scrollBottom = scrollTop + h;
    var scrollRight = scrollLeft + w;

    var info = {
        atTop: scrollTop < margin,
        atRight: scrollRight > scrollWidth - margin,
        atBottom: scrollBottom > scrollHeight - margin,
        atLeft: scrollLeft < margin,

        isScrollDown: lastScroll && scrollTop > lastScroll.top,
        isScrollLeft: lastScroll && scrollLeft < lastScroll.left,
        isScrollRight: lastScroll && scrollLeft > lastScroll.left,
        isScrollUp: lastScroll && scrollTop < lastScroll.top,

        scrollWidth: scrollWidth,
        scrollHeight: scrollHeight,
        scrollNodeWidth: w,
        scrollNodeHeight: h,

        top: scrollTop,
        right: scrollRight,
        bottom: scrollBottom,
        left: scrollLeft
    };
    lastScroll = info;
    return info;
};

exports.default = getScrollInfo;
exports.getScrollNode = getScrollNode;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mouse = undefined;

var _getScrollInfo = __webpack_require__(9);

var _getScrollInfo2 = _interopRequireDefault(_getScrollInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mouse = function mouse(e, dom) {
    if (!dom) {
        dom = e.currentTarget;
    }
    var svg = dom.ownerSVGElement || dom;
    var x = e.clientX;
    var y = e.clientY;
    if (svg.createSVGPoint) {
        var point = svg.createSVGPoint();
        point.x = x;
        point.y = y;
        point = point.matrixTransform(dom.getScreenCTM().inverse());
        return [point.x, point.y];
    }
    var domXY = getOffset(dom);
    return [x - domXY.left - dom.clientLeft, y - domXY.top - dom.clientTop];
};

var getOffset = function getOffset(dom) {
    var top = 0;
    var left = 0;
    var w = void 0;
    var h = void 0;
    if (dom instanceof SVGElement) {
        var scrollInfo = (0, _getScrollInfo2.default)();
        var rect = dom.getBoundingClientRect();
        top = rect.top + scrollInfo.top;
        left = rect.left + scrollInfo.left;
        w = rect.width;
        h = rect.height;
    } else {
        w = dom.offsetWidth;
        h = dom.offsetHeight;
        var el = dom;
        do {
            var offsetTop = el.offsetTop || 0;
            var offsetLeft = el.offsetLeft || 0;
            if ('BODY' === el.nodeName) {
                top += offsetTop;
                left += offsetLeft;
            } else {
                top += offsetTop - el.scrollTop;
                left += offsetLeft - el.scrollLeft;
            }
            el = el.offsetParent;
        } while (el);
    }
    var result = {
        w: w,
        h: h,
        top: top,
        right: left + w,
        bottom: top + h,
        left: left
    };
    return result;
};

exports.mouse = mouse;
exports.default = getOffset;

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connect__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__connect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connectFunctional__ = __webpack_require__(62);
/* unused harmony reexport connectFunctional */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ReduceStore__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__ReduceStore__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Dispatcher__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__Dispatcher__["a"]; });





/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var positions = {
    TL: 'tl',
    TC: 'tc',
    TR: 'tr',
    RT: 'rt',
    RC: 'rc',
    RB: 'rb',
    BL: 'bl',
    BC: 'bc',
    BR: 'br',
    LT: 'lt',
    LC: 'lc',
    LB: 'lb',
    CC: 'cc'
};

exports.default = positions;
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _isArray = Array.isArray;

var getDefaultValue = function getDefaultValue(v) {
    if ('function' === typeof v) {
        return v();
    }
    return v;
};

var getObjectValue = function getObjectValue(o, path, defaultValue) {
    if (null === o || 'undefined' === typeof o) {
        return getDefaultValue(defaultValue);
    }
    if (!_isArray(path)) {
        return o;
    }
    var current = o;
    path.every(function (a) {
        if (null !== current[a] && 'undefined' !== typeof current[a]) {
            current = current[a];
            return true;
        } else {
            current = getDefaultValue(defaultValue);
            return false;
        }
    });
    return current;
};

exports.default = getObjectValue;
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_molecules_Button__ = __webpack_require__(38);
/* unused harmony reexport Button */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_molecules_Card__ = __webpack_require__(118);
/* unused harmony reexport Card */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_molecules_Content__ = __webpack_require__(44);
/* unused harmony reexport Content */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_molecules_Circular__ = __webpack_require__(119);
/* unused harmony reexport Circular */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui_molecules_Description__ = __webpack_require__(120);
/* unused harmony reexport Description */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_molecules_Divider__ = __webpack_require__(121);
/* unused harmony reexport Divider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_molecules_DividingHeader__ = __webpack_require__(122);
/* unused harmony reexport DividingHeader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ui_molecules_Dimmer__ = __webpack_require__(123);
/* unused harmony reexport Dimmer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ui_molecules_Form__ = __webpack_require__(124);
/* unused harmony reexport Form */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ui_molecules_Field__ = __webpack_require__(125);
/* unused harmony reexport Field */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ui_molecules_Header__ = __webpack_require__(45);
/* unused harmony reexport Header */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ui_molecules_Icon__ = __webpack_require__(43);
/* unused harmony reexport Icon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ui_molecules_Item__ = __webpack_require__(126);
/* unused harmony reexport Item */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ui_molecules_Image__ = __webpack_require__(127);
/* unused harmony reexport Image */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ui_molecules_InputBox__ = __webpack_require__(128);
/* unused harmony reexport InputBox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ui_molecules_List__ = __webpack_require__(129);
/* unused harmony reexport List */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ui_molecules_Label__ = __webpack_require__(20);
/* unused harmony reexport Label */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ui_molecules_Menu__ = __webpack_require__(130);
/* unused harmony reexport Menu */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ui_molecules_Message__ = __webpack_require__(131);
/* unused harmony reexport Message */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ui_molecules_Meta__ = __webpack_require__(132);
/* unused harmony reexport Meta */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ui_molecules_Progress__ = __webpack_require__(133);
/* unused harmony reexport Progress */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ui_molecules_Rail__ = __webpack_require__(137);
/* unused harmony reexport Rail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ui_molecules_Ribbon__ = __webpack_require__(138);
/* unused harmony reexport Ribbon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ui_molecules_SemanticUI__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_23__ui_molecules_SemanticUI__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ui_molecules_Segment__ = __webpack_require__(139);
/* unused harmony reexport Segment */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ui_molecules_Title__ = __webpack_require__(140);
/* unused harmony reexport Title */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ui_molecules_Unsafe__ = __webpack_require__(141);
/* unused harmony reexport Unsafe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_class_lib__);
/* unused harmony reexport mixClass */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__lib_styles_injectStyle__ = __webpack_require__(18);
/* unused harmony reexport injectStyle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__lib_styles_lazyInject__ = __webpack_require__(142);
/* unused harmony reexport lazyInject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__lib_styles_index__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_30__lib_styles_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__config_styles_rwd__ = __webpack_require__(143);
/* unused harmony reexport min */
/* unused harmony reexport max */
// ui




























// libs


//styles




// config


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getClassReg = __webpack_require__(40);

var _getClassReg2 = _interopRequireDefault(_getClassReg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasClass = function hasClass(classes, name) {
    return (0, _getClassReg2.default)(name).test(classes);
};

exports.default = hasClass;
module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bindStyles; });
/* unused harmony export reInjectStyle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__applyStyles__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stylesToCSS__ = __webpack_require__(116);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var doc = 'undefined' !== typeof document ? document : null;

/**
 *  props.className
 *  props.style
 *  props.styles
 *  props.styleOrder
 */
var bindStyles = function bindStyles(_ref) {
    var className = _ref.className,
        style = _ref.style,
        styles = _ref.styles,
        styleOrder = _ref.styleOrder;

    var newStyleProps = {
        className: className,
        style: style
    };
    Object(__WEBPACK_IMPORTED_MODULE_1__applyStyles__["a" /* default */])(newStyleProps, styles, styleOrder ? styleOrder : 0);
    if (!newStyleProps.className) {
        delete newStyleProps.className;
    }
    if (!newStyleProps.style) {
        delete newStyleProps.style;
    }
    return newStyleProps;
};

var reInjectStyle = function reInjectStyle() {
    __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].newStyles = Object.values(__WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].registry);
    injectStyle();
};

var appendCss = function appendCss(css) {
    var tag = doc.createElement('style');
    tag.innerHTML = css;
    doc.getElementsByTagName('head')[0].appendChild(tag);
};

var injectStyle = function injectStyle() {
    if (!__WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].newStyles.length) {
        // We are in Node or Styles are already injected
        return null;
    }
    var compiled = Object(__WEBPACK_IMPORTED_MODULE_2__stylesToCSS__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].newStyles);
    __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].newStyles = [];
    __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].registry = _extends({}, __WEBPACK_IMPORTED_MODULE_0__store_js__["a" /* default */].registry, compiled.styleIds);
    if (compiled.css) {
        if (doc) {
            appendCss(compiled.css);
        } else {
            console.log(compiled.css);
        }
    }
};


/* harmony default export */ __webpack_exports__["b"] = (injectStyle);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var stylesStore = {
    registry: [],
    newStyles: [],
    counter: 0
};
var g = null;

if ('undefined' != typeof window) {
    g = window;
} else {
    g = global;
}
if (g.reactStylesStore) {
    stylesStore = g.reactStylesStore;
} else {
    g.reactStylesStore = stylesStore;
}

/* harmony default export */ __webpack_exports__["a"] = (stylesStore);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(22)))

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Label = function Label(props) {
    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(props.className, 'label');
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({}, props, {
        className: classes
    }));
};

/* harmony default export */ __webpack_exports__["a"] = (Label);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ucfirst__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ucfirst___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ucfirst__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cssNumberToUnit__ = __webpack_require__(135);
/*jslint browser: true*/







var isArray = Array.isArray;
var keys = Object.keys;
var Browser = {
    webkit: 'Webkit',
    ms: 'ms',
    moz: 'Moz'
};

var genStyleId = function genStyleId() {
    __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].counter += 1;
    return 'c' + __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].counter + '_';
};

var createStyle = function createStyle(css, selector, styleId) {
    if (!css) {
        return;
    }
    if ('undefined' === typeof styleId) {
        styleId = genStyleId();
    } else if (__WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].registry[styleId]) {
        return __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].registry[styleId];
    }
    if (!isArray(css)) {
        css = [css];
    }

    var styles = [];
    css.forEach(function (one, i) {
        styles[i] = {};
        keys(one).forEach(function (key) {
            if (isArray(one[key]) && 1 === one[key].length) {
                var ucFirstKey = __WEBPACK_IMPORTED_MODULE_0_ucfirst___default()(key);
                styles[i][Browser.webkit + ucFirstKey] = styles[i][Browser.ms + ucFirstKey] = styles[i][Browser.moz + ucFirstKey] = styles[i][key] = Object(__WEBPACK_IMPORTED_MODULE_3__cssNumberToUnit__["a" /* default */])(key, one[key][0]);
            } else {
                styles[i][key] = Object(__WEBPACK_IMPORTED_MODULE_3__cssNumberToUnit__["a" /* default */])(key, one[key]);
            }
        });
    });

    var styleDecl = new __WEBPACK_IMPORTED_MODULE_1__style__["a" /* default */](styles, selector, styleId);
    __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].newStyles.push(styleDecl);
    return styleDecl;
};

/* harmony default export */ __webpack_exports__["a"] = (createStyle); // reactStyle('', '', '')

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_array_dedup__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_array_dedup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_array_dedup__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var DEFAULT_OPTIONS = {
    withProps: false,
    withConstructor: false
};

var keys = Object.keys;

var connect = function connect(Base, options) {
    var thisOptions = DEFAULT_OPTIONS;
    if (options) {
        keys(options).forEach(function (key) {
            return thisOptions[key] = options[key];
        });
    }

    var getState = function getState(self, prevState, maybeProps) {
        var props = thisOptions.withProps ? maybeProps : undefined;
        return self.calculateState(prevState, props);
    };

    var getStores = function getStores(self, maybeProps) {
        var props = thisOptions.withProps ? maybeProps : undefined;
        return self.getStores(props);
    };

    var ConnectedClass = function (_Base) {
        _inherits(ConnectedClass, _Base);

        function ConnectedClass(props) {
            _classCallCheck(this, ConnectedClass);

            var _this = _possibleConstructorReturn(this, (ConnectedClass.__proto__ || Object.getPrototypeOf(ConnectedClass)).call(this, props));

            _initialiseProps.call(_this);

            var con = _this.constructor;
            if (thisOptions.withConstructor) {
                _this.__setStores(getStores(con, _this.props));
            }
            var calculatedState = getState(con, undefined, props);
            if (!_this.state) {
                _this.state = {};
            }
            if (calculatedState) {
                keys(calculatedState).forEach(function (key) {
                    return _this.state[key] = calculatedState[key];
                });
            }
            return _this;
        }

        _createClass(ConnectedClass, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                if (_get(ConnectedClass.prototype.__proto__ || Object.getPrototypeOf(ConnectedClass.prototype), 'componentDidMount', this)) {
                    _get(ConnectedClass.prototype.__proto__ || Object.getPrototypeOf(ConnectedClass.prototype), 'componentDidMount', this).call(this);
                }
                if (!thisOptions.withConstructor) {
                    this.__setStores(getStores(this.constructor, this.props));
                }
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if (_get(ConnectedClass.prototype.__proto__ || Object.getPrototypeOf(ConnectedClass.prototype), 'componentWillReceiveProps', this)) {
                    _get(ConnectedClass.prototype.__proto__ || Object.getPrototypeOf(ConnectedClass.prototype), 'componentWillReceiveProps', this).call(this, nextProps);
                }
                var con = this.constructor;
                if (thisOptions.withProps) {
                    this.__setStores(getStores(con, nextProps));
                    this.setState(function (prevState) {
                        return getState(con, prevState, nextProps);
                    });
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                if (_get(ConnectedClass.prototype.__proto__ || Object.getPrototypeOf(ConnectedClass.prototype), 'componentWillUnmount', this)) {
                    _get(ConnectedClass.prototype.__proto__ || Object.getPrototypeOf(ConnectedClass.prototype), 'componentWillUnmount', this).call(this);
                }
                this.__resetStores();
            }
        }]);

        return ConnectedClass;
    }(Base);

    var _initialiseProps = function _initialiseProps() {
        var _this2 = this;

        this.__stores = [];

        this.__fluxHandler = function () {
            var con = _this2.constructor;
            _this2.setState(function (prevState, currentProps) {
                return getState(con, prevState, currentProps);
            });
        };

        this.__setStores = function (stores) {
            if (_this2.__stores) {
                _this2.__resetStores();
            }
            stores = __WEBPACK_IMPORTED_MODULE_0_array_dedup___default()(stores);
            stores.forEach(function (store) {
                return store.addListener(_this2.__fluxHandler);
            });
            _this2.__stores = stores;
        };

        this.__resetStores = function () {
            _this2.__stores.forEach(function (store) {
                return store.removeListener(_this2.__fluxHandler);
            });
        };
    };

    var componentName = Base.displayName || Base.name;
    ConnectedClass.displayName = 'FluxConnected(' + componentName + ')';
    return ConnectedClass;
};

/* harmony default export */ __webpack_exports__["a"] = (connect);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var dedup = function dedup(array) {
    if (!array || !array.filter) {
        return array;
    }
    return array.filter(function (item, pos, arr) {
        return arr.indexOf(item) === pos;
    });
};

exports.default = dedup;
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scrollDispatch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_flux__ = __webpack_require__(13);




var instance = new __WEBPACK_IMPORTED_MODULE_0_reshow_flux__["a" /* Dispatcher */]();
/* harmony default export */ __webpack_exports__["a"] = (instance);

var scrollDispatch = instance.dispatch.bind(instance);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _getScrollInfo = __webpack_require__(9);

var _getScrollInfo2 = _interopRequireDefault(_getScrollInfo);

var _getoffset = __webpack_require__(10);

var _getoffset2 = _interopRequireDefault(_getoffset);

var _isOnScreen = __webpack_require__(36);

var _isOnScreen2 = _interopRequireDefault(_isOnScreen);

var _isFixed = __webpack_require__(37);

var _isFixed2 = _interopRequireDefault(_isFixed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var calWindowOffset = function calWindowOffset(domInfo, scrollInfo) {
    var _distanceFlip;

    var distance = {};
    distance.top = domInfo.top - scrollInfo.top;
    distance.right = scrollInfo.right - domInfo.right;
    distance.bottom = scrollInfo.bottom - domInfo.bottom;
    distance.left = domInfo.left - scrollInfo.left;
    var distanceFlip = (_distanceFlip = {}, _defineProperty(_distanceFlip, distance.top, 't'), _defineProperty(_distanceFlip, distance.right, 'r'), _defineProperty(_distanceFlip, distance.bottom, 'b'), _defineProperty(_distanceFlip, distance.left, 'l'), _distanceFlip);
    var maxDistance = Math.max(distance.top, distance.right, distance.bottom, distance.left);
    var firstKey = distanceFlip[maxDistance];
    var secondKey = void 0;
    var locs = [firstKey + 'c'];
    if (firstKey === 't' || firstKey === 'b') {
        var _distanceFlip2;

        distanceFlip = (_distanceFlip2 = {}, _defineProperty(_distanceFlip2, distance.right, 'r'), _defineProperty(_distanceFlip2, distance.left, 'l'), _distanceFlip2);
        secondKey = distanceFlip[Math.max(distance.left, distance.right)];
    } else {
        var _distanceFlip3;

        distanceFlip = (_distanceFlip3 = {}, _defineProperty(_distanceFlip3, distance.top, 't'), _defineProperty(_distanceFlip3, distance.bottom, 'b'), _distanceFlip3);
        secondKey = firstKey;
        firstKey = distanceFlip[Math.max(distance.top, distance.bottom)];
    }
    locs.push(firstKey + secondKey);
    locs.push(secondKey + firstKey);
    var tb = firstKey;
    var lr = secondKey;
    return {
        locs: locs,
        tb: tb,
        lr: lr
    };
};

var getWindowOffset = function getWindowOffset(dom) {
    if (!dom) {
        console.error('getWindowOffset not assign dom');
        console.trace();
        return false;
    }
    var scrollInfo = (0, _getScrollInfo2.default)();
    var domInfo = (0, _isOnScreen2.default)((0, _getoffset2.default)(dom), scrollInfo);
    domInfo.isFixed = (0, _isFixed2.default)(dom);
    if (!domInfo.isFixed && !domInfo.isOnScreen) {
        console.warn('Dom is not in screen', { dom: dom, domInfo: domInfo, scrollInfo: scrollInfo });
        return false;
    }
    var cookScrollInfo = _extends({}, scrollInfo);
    if (domInfo.isFixed) {
        cookScrollInfo.top = 0;
        cookScrollInfo.right = scrollInfo.scrollNodeWidth;
        cookScrollInfo.bottom = scrollInfo.scrollNodeHeight;
        cookScrollInfo.left = 0;
    }
    return _extends({ domInfo: domInfo, scrollInfo: scrollInfo }, calWindowOffset(domInfo, cookScrollInfo));
};

exports.default = getWindowOffset;
module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var isOnScreen = function isOnScreen(domInfo, scrollInfo) {
    var margin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    domInfo.atTop = domInfo.bottom <= scrollInfo.top + margin;
    domInfo.atRight = domInfo.left >= scrollInfo.right - margin;
    domInfo.atBottom = domInfo.top >= scrollInfo.bottom - margin;
    domInfo.atLeft = domInfo.right <= scrollInfo.left + margin;
    domInfo.isOnScreen = !(domInfo.atTop || domInfo.atRight || domInfo.atBottom || domInfo.atLeft);
    return domInfo;
};

exports.default = isOnScreen;
module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getStyle = __webpack_require__(69);

var _getStyle2 = _interopRequireDefault(_getStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFixed = function isFixed(node) {
    if (!document.body.contains(node)) {
        console.warn(['Dom not exists in body', node]);
        return false;
    }
    var thisParent = node;
    while (thisParent.nodeName != 'BODY') {
        var position = (0, _getStyle2.default)(thisParent, 'position');
        if ('fixed' === position) {
            return true;
        }
        thisParent = thisParent.parentNode;
    }
    return false;
};

exports.default = isFixed;
module.exports = exports['default'];

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__molecules_Icon__ = __webpack_require__(43);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var Button = function Button(props) {
    var className = props.className,
        children = props.children,
        icon = props.icon,
        style = props.style,
        others = _objectWithoutProperties(props, ['className', 'children', 'icon', 'style']);

    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(className, 'button');
    var thisIcon = void 0;
    var buttonWithIconStyle = void 0;
    if (icon) {
        thisIcon = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__molecules_Icon__["a" /* default */],
            { style: Styles.icon },
            icon
        );
        buttonWithIconStyle = Styles.buttonWithIcon;
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */],
        _extends({
            atom: 'button'
        }, others, {
            className: classes,
            style: _extends({}, buttonWithIconStyle, style)
        }),
        thisIcon,
        children
    );
};

Button.defaultProps = {
    type: 'button'
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

var Styles = {
    icon: {
        width: 25,
        height: 25,
        left: 20,
        top: 7,
        fill: '#fff',
        position: 'absolute'
    },
    buttonWithIcon: {
        position: 'relative',
        paddingLeft: 44
    }
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _array = __webpack_require__(33);

var _array2 = _interopRequireDefault(_array);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isArray = Array.isArray;
var keys = Object.keys;

var mixClass = function mixClass() {
    var classes = [];
    var args = arguments;
    keys(args).forEach(function (key) {
        var arg = args[key];
        if (!arg) {
            return;
        }
        var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);
        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        } else if (isArray(arg)) {
            classes.push(mixClass.apply(null, arg));
        } else if (argType === 'object') {
            keys(arg).forEach(function (k) {
                if (arg[k]) {
                    classes.push(k);
                }
            });
        }
    });
    var cookClasses = [];
    classes.forEach(function (c) {
        return cookClasses = cookClasses.concat(c.split(' '));
    });
    return (0, _array2.default)(cookClasses).join(' ');
};

exports.default = mixClass;
module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var cache = {};
var esc = /[|\\{}()[\]^$+*?.]/g;

var getClassReg = function getClassReg(name) {
    if (!cache[name]) {
        var sReg = '(?:^|\\s+)' + name.replace(esc, '\\$&') + '(?:\\s+|$)';
        cache[name] = new RegExp(sReg);
    }
    return cache[name];
};

exports.default = getClassReg;
module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getClassReg = __webpack_require__(40);

var _getClassReg2 = _interopRequireDefault(_getClassReg);

var _hasClass = __webpack_require__(17);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var removeClass = function removeClass(classes, name) {
    if (classes && (0, _hasClass2.default)(classes, name)) {
        classes = classes.replace((0, _getClassReg2.default)(name), ' ').replace(/(^\s+)|\s+$/g, '');
        if ((0, _hasClass2.default)(classes, name)) {
            // in case of multiple adjacent
            classes = removeClass(classes, name);
        }
    }
    return classes;
};

exports.default = removeClass;
module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(s) {
  return s.substr(0, 1).toUpperCase() + s.substring(1);
};



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





var Icon = function Icon(props) {
    var className = props.className,
        style = props.style,
        others = _objectWithoutProperties(props, ['className', 'style']);

    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(className, 'icon');
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({
        atom: 'i',
        ui: false
    }, others, {
        className: className,
        style: _extends({
            display: 'inline-block'
        }, style)
    }));
};

/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Content = function Content(props) {
  var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(props.className, 'content');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({}, props, {
    ui: false,
    className: classes
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (Content);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Header = function Header(props) {
    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(props.className, 'header');
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({}, props, {
        className: classes
    }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_app_client__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_pages_index__ = __webpack_require__(60);



/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0_reshow_app_client__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__ui_pages_index__["a" /* default */]));

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
__webpack_require__(48);



var render = function render(oApp, dom) {
    var r = void 0;
    if (dom.innerHTML && __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.hydrate) {
        r = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.hydrate;
    } else {
        r = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render;
    }
    r(oApp, dom);
};

var client = function client(rawApp) {
    var app = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createFactory(rawApp);
    setImmediate(function () {
        var w = window;
        var d = document;
        w.ReactDOM = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a;
        w.Reshow = { render: render, app: app };
        var data = {};
        if ('undefined' !== typeof REACT_DATA) {
            data = REACT_DATA;
        }
        render(new app(data), d.getElementById('app'));
    });
};

/* harmony default export */ __webpack_exports__["a"] = (client);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22), __webpack_require__(4)))

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_atomic_molecule__ = __webpack_require__(16);
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}



/**
 * Production please use
 * import {xxx} from 'organism-react-scroll-nav';
 */


Object(__WEBPACK_IMPORTED_MODULE_1__src_index__["d" /* scrollDispatch */])({
    scrollMargin: 67
});



var MenuItem = function (_Component) {
    _inherits(MenuItem, _Component);

    function MenuItem() {
        _classCallCheck(this, MenuItem);

        return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
    }

    _createClass(MenuItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                targetInfo = _props.targetInfo,
                style = _props.style,
                reset = _objectWithoutProperties(_props, ['targetInfo', 'style']);

            var activeStyle = null;
            if (targetInfo.active) {
                activeStyle = Styles.active;
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', _extends({ style: _extends({}, Styles.link, style, activeStyle) }, reset));
        }
    }]);

    return MenuItem;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _ref = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuItem, null);

var _ref2 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuItem, null);

var _ref3 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(MenuItem, null);

var Index = function (_Component2) {
    _inherits(Index, _Component2);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
    }

    _createClass(Index, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_atomic_molecule__["a" /* SemanticUI */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'nav-parent', style: Styles.nav }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_index__["c" /* SmoothScrollLink */], {
                scrollRefId: 'nav-parent',
                container: _ref,
                targetId: 't1',
                style: { background: '#3498DB' }
            }, 'test1'), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_index__["c" /* SmoothScrollLink */], {
                scrollRefId: 'nav-parent',
                container: _ref2,
                targetId: 't2',
                style: { background: '#F1C40F' }
            }, 'test2'), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_index__["c" /* SmoothScrollLink */], {
                scrollRefId: 'nav-parent',
                container: _ref3,
                targetId: 't3',
                style: { background: '#2ECC71' }
            }, 'test3')), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { padding: '30px 0 0' } }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_index__["b" /* ScrollSpy */], { id: 't1', style: _extends({}, Styles.content, { background: "#3498DB" }) }, 'test111'), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_index__["b" /* ScrollSpy */], { id: 't2', style: _extends({}, Styles.content, { background: "#F1C40F" }) }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_index__["b" /* ScrollSpy */], { monitorScroll: false }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_index__["a" /* ScrollReceiver */], { style: { border: "1px solid #fff" } }, 'test222'))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_index__["b" /* ScrollSpy */], { id: 't3', style: _extends({}, Styles.content, { background: "#2ECC71" }) }, 'test333')));
        }
    }]);

    return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Index);

var Styles = {
    content: {
        height: "500px",
        textAlign: "center",
        paddingTop: "10%",
        fontSize: "4rem",
        color: "#fff"
    },
    link: {
        display: "inline-block",
        padding: "0.3rem 0.5rem",
        fontSize: "2rem",
        color: "#fff",
        marginRight: "10px",
        opacity: "0.5",
        cursor: "pointer"
    },
    active: {
        opacity: 1
    },
    body: Object(__WEBPACK_IMPORTED_MODULE_2_react_atomic_molecule__["b" /* reactStyle */])({
        margin: 0
    }, 'body'),
    nav: {
        position: 'fixed',
        background: '#fff',
        textAlign: 'center',
        width: "100%",
        padding: "10px 0"
    }
};

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_flux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scrollDispatcher__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_get_scroll_info__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_get_scroll_info___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_get_scroll_info__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_get_window_offset__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_get_window_offset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_get_window_offset__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_getoffset__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_getoffset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_getoffset__);


var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}







var incNum = 0;

var ScrollStore = function (_ReduceStore) {
    _inherits(ScrollStore, _ReduceStore);

    function ScrollStore() {
        _classCallCheck(this, ScrollStore);

        return _possibleConstructorReturn(this, (ScrollStore.__proto__ || Object.getPrototypeOf(ScrollStore)).apply(this, arguments));
    }

    _createClass(ScrollStore, [{
        key: 'getInitialState',
        value: function getInitialState() {
            var self = this;
            self.spys = __WEBPACK_IMPORTED_MODULE_0_immutable___default.a.Set();
            self.margins = __WEBPACK_IMPORTED_MODULE_0_immutable___default.a.Set();
            if ('undefined' !== typeof window) {
                var win = window;
                if (win.addEventListener) {
                    win.addEventListener('scroll', self.scrollMonitor.bind(self));
                    win.addEventListener('resize', self.scrollMonitor.bind(self));
                } else {
                    win.attachEvent('onscroll', self.scrollMonitor.bind(self));
                    win.attachEvent('resize', self.scrollMonitor.bind(self));
                }
                setTimeout(function () {
                    self.scrollMonitor.call(self);
                });
                setTimeout(function () {
                    //for lazy content 
                    self.scrollMonitor.call(self);
                }, 777);
            }
            return __WEBPACK_IMPORTED_MODULE_0_immutable___default.a.Map({
                scrollDelay: 50,
                scrollMargin: 0
            });
        }
    }, {
        key: 'scrollMonitor',
        value: function scrollMonitor() {
            clearTimeout(this._scrollTimeout);
            var self = this;
            var delay = self.getState().get('scrollDelay');
            self._scrollTimeout = setTimeout(function () {
                self._triggerScroll.call(self);
            }, delay);
        }
    }, {
        key: '_triggerScroll',
        value: function _triggerScroll() {
            var defaultMargin = this.getState().get('scrollMargin');
            var scroll = __WEBPACK_IMPORTED_MODULE_3_get_scroll_info___default()();
            var actives = { mdefault: null };
            var offsetCache = {};
            var scrollTop = scroll.top + defaultMargin;
            var arrMonitorScroll = [];
            var margin = void 0;
            this.spys.forEach(function (node) {
                var pos = __WEBPACK_IMPORTED_MODULE_5_getoffset___default()(node.getOffsetEl());
                if (node.props.monitorScroll) {
                    if (scrollTop >= pos.top && scrollTop < pos.bottom) {
                        actives.mdefault = node.id;
                    }
                    arrMonitorScroll.push(node);
                }
                margin = node.scrollMargin ? node.scrollMargin : defaultMargin;
                pos = Object(__WEBPACK_IMPORTED_MODULE_4_get_window_offset__["isOnScreen"])(pos, scroll, margin);
                console.log(pos, 'scrollstore');
                offsetCache[node.id] = pos;
            });
            this.margins.forEach(function (margin) {
                scrollTop = scroll.top + margin;
                actives['m' + margin] = null;
                arrMonitorScroll.every(function (node) {
                    var pos = offsetCache[node.id];
                    if (scrollTop >= pos.top && scrollTop < pos.bottom) {
                        actives['m' + margin] = node.id;
                        return false;
                    }
                    return true;
                });
            });
            this.margins = this.margins.clear();
            Object(__WEBPACK_IMPORTED_MODULE_2__scrollDispatcher__["b" /* scrollDispatch */])(_extends({}, actives, {
                nodes: offsetCache,
                scroll: scroll
            }));
        }
    }, {
        key: 'getNode',
        value: function getNode(id) {
            var item = false;
            this.spys.some(function (node) {
                if (id === node.id) {
                    item = node;
                }
                return item;
            });
            return item;
        }
    }, {
        key: 'getOffset',
        value: function getOffset(id) {
            var nodes = this.getMap('nodes');
            if (nodes[id]) {
                console.log(nodes, 'nodes');
                return nodes[id];
            }
        }
    }, {
        key: 'attach',
        value: function attach(node) {
            if (!node.id) {
                if (node.props.id) {
                    node.id = node.props.id;
                } else {
                    node.id = 'spy-' + incNum;
                    incNum++;
                }
            }
            this.spys = this.spys.add(node);
            return node.id;
        }
    }, {
        key: 'detach',
        value: function detach(node) {
            this.spys = this.spys.remove(node);
        }
    }, {
        key: 'addMargin',
        value: function addMargin(num) {
            this.margins = this.margins.add(num);
        }
    }, {
        key: 'deleteMargin',
        value: function deleteMargin(num) {
            this.margins = this.margins.remove(num);
        }
    }, {
        key: 'reduce',
        value: function reduce(state, action) {
            return state.merge(action);
        }
    }]);

    return ScrollStore;
}(__WEBPACK_IMPORTED_MODULE_1_reshow_flux__["b" /* ReduceStore */]);

/* harmony default export */ __webpack_exports__["a"] = (new ScrollStore(__WEBPACK_IMPORTED_MODULE_2__scrollDispatcher__["a" /* default */]));

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connect__ = __webpack_require__(32);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var connectFunctional = function connectFunctional(viewFn, _getStores, _calculateState, options) {
    var FunctionalConnected = function (_PureComponent) {
        _inherits(FunctionalConnected, _PureComponent);

        function FunctionalConnected() {
            _classCallCheck(this, FunctionalConnected);

            return _possibleConstructorReturn(this, (FunctionalConnected.__proto__ || Object.getPrototypeOf(FunctionalConnected)).apply(this, arguments));
        }

        _createClass(FunctionalConnected, [{
            key: 'render',
            value: function render() {
                return viewFn(this.state);
            }
        }], [{
            key: 'getStores',
            value: function getStores(props) {
                return _getStores(props);
            }
        }, {
            key: 'calculateState',
            value: function calculateState(prevState, props) {
                return _calculateState(prevState, props);
            }
        }]);

        return FunctionalConnected;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

    var viewFnName = viewFn.displayName || viewFn.name || 'FunctionalConnected';
    FunctionalConnected.displayName = viewFnName;
    return Object(__WEBPACK_IMPORTED_MODULE_1__connect__["a" /* default */])(FunctionalConnected, options);
};
/* unused harmony default export */ var _unused_webpack_default_export = (connectFunctional);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mitt__ = __webpack_require__(64);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var CHANGE_EVENT = 'change';

var MittStore = function () {
    _createClass(MittStore, [{
        key: 'getInitialState',
        value: function getInitialState() {
            console.error('You should override getInitialState() function.');
        }
    }, {
        key: 'reduce',
        value: function reduce() {
            console.error('You should override reduce() function.');
        }
    }]);

    function MittStore(dispatcher) {
        var _this = this;

        _classCallCheck(this, MittStore);

        this.getMap = function (k, state) {
            if (!state) {
                state = _this.getState();
            }
            var v = state.get(k);
            if (v && v.toJS) {
                v = v.toJS();
            }
            if (!v) {
                v = {};
            }
            return v;
        };

        this.mitt = new __WEBPACK_IMPORTED_MODULE_0_mitt__["a" /* default */]();
        dispatcher.register(function (payload) {
            _this.__invokeOnDispatch(payload);
        });
        this._state = this.getInitialState();
    }

    _createClass(MittStore, [{
        key: 'getState',
        value: function getState() {
            return this._state;
        }
    }, {
        key: 'areEqual',
        value: function areEqual(one, two) {
            return one === two;
        }
    }, {
        key: '__invokeOnDispatch',
        value: function __invokeOnDispatch(action) {
            this.__changed = false;
            var startingState = this._state;
            var endingState = this.reduce(startingState, action);
            if (endingState === undefined) {
                console.error('returned undefined from reduce(...)');
            }
            if (!this.areEqual(startingState, endingState)) {
                this._state = endingState;
                this.__emitChange();
            }
            if (this.__changed) {
                this.mitt.emit(CHANGE_EVENT);
            }
        }
    }, {
        key: 'addListener',
        value: function addListener(listener) {
            this.mitt.on(CHANGE_EVENT, listener);
        }
    }, {
        key: 'removeListener',
        value: function removeListener(listener) {
            this.mitt.off(CHANGE_EVENT, listener);
        }
    }, {
        key: '__emitChange',
        value: function __emitChange() {
            this.__changed = true;
        }
    }]);

    return MittStore;
}();

/* harmony default export */ __webpack_exports__["a"] = (MittStore);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["a"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dispatcher = function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this.callbacks = [];
  }

  _createClass(Dispatcher, [{
    key: "register",
    value: function register(callback) {
      this.callbacks.push(callback);
    }
  }, {
    key: "dispatch",
    value: function dispatch(payload) {
      if (!payload) {
        payload = {};
      }
      this.callbacks.forEach(function (c) {
        return c(payload);
      });
    }
  }]);

  return Dispatcher;
}();

/* harmony default export */ __webpack_exports__["a"] = (Dispatcher);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFixed = exports.isOnScreen = exports.getPositionString = exports.alignUI = exports.default = undefined;

var _alignUI = __webpack_require__(67);

Object.defineProperty(exports, 'alignUI', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_alignUI).default;
  }
});

var _getPositionString = __webpack_require__(73);

Object.defineProperty(exports, 'getPositionString', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getPositionString).default;
  }
});

var _isOnScreen = __webpack_require__(36);

Object.defineProperty(exports, 'isOnScreen', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isOnScreen).default;
  }
});

var _isFixed = __webpack_require__(37);

Object.defineProperty(exports, 'isFixed', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isFixed).default;
  }
});

var _getWindowOffset = __webpack_require__(35);

var _getWindowOffset2 = _interopRequireDefault(_getWindowOffset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _getWindowOffset2.default;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getoffset = __webpack_require__(10);

var _getoffset2 = _interopRequireDefault(_getoffset);

var _getAfterMove = __webpack_require__(68);

var _getAfterMove2 = _interopRequireDefault(_getAfterMove);

var _getWindowOffset = __webpack_require__(35);

var _getWindowOffset2 = _interopRequireDefault(_getWindowOffset);

var _alignWith = __webpack_require__(70);

var _alignWith2 = _interopRequireDefault(_alignWith);

var _isFullOnScreen = __webpack_require__(72);

var _isFullOnScreen2 = _interopRequireDefault(_isFullOnScreen);

var _positions = __webpack_require__(14);

var _positions2 = _interopRequireDefault(_positions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAlignWithLoc = function getAlignWithLoc(toLoc) {
    var loc = void 0;
    switch (toLoc) {
        case _positions2.default.TL:
            loc = _positions2.default.TR;
            break;
        case _positions2.default.TR:
            loc = _positions2.default.TL;
            break;
        case _positions2.default.BL:
            loc = _positions2.default.BR;
            break;
        case _positions2.default.BR:
            loc = _positions2.default.BL;
            break;
        default:
            loc = toLoc;
            break;
    }
    return loc;
};

var alignUI = function alignUI(targetEl, floatEl, toLoc, disableAutoLoc) {
    if (!targetEl) {
        console.error('targetEl was empty');
        console.trace();
        return false;
    }
    var targetInfo = void 0;
    var winInfo = void 0;
    var locs = [];
    if (toLoc) {
        locs.push(toLoc);
    }
    if (!disableAutoLoc) {
        winInfo = (0, _getWindowOffset2.default)(targetEl);
        if (!winInfo) {
            console.error('get windows offset failed');
        } else {
            targetInfo = winInfo.domInfo;
            locs = locs.concat(winInfo.locs);
        }
    }
    if (!targetInfo) {
        targetInfo = (0, _getoffset2.default)(targetEl);
    }
    if (!locs.length) {
        console.error('Not set any locs', toLoc);
        return;
    }
    var loc = void 0;
    var move = void 0;
    var floatInfo = (0, _getoffset2.default)(floatEl);
    locs.some(function (locItem) {
        toLoc = locItem;
        loc = getAlignWithLoc(toLoc);
        move = (0, _alignWith2.default)(targetInfo, floatInfo, loc);
        if (!winInfo) {
            return true;
        } else {
            var movePos = (0, _getAfterMove2.default)(floatInfo, move);
            var bFullOnScreen = (0, _isFullOnScreen2.default)(movePos, winInfo.scrollInfo);
            if (bFullOnScreen) {
                return true;
            } else {
                return false;
            }
        }
    });
    var result = {
        loc: loc,
        toLoc: toLoc,
        move: move
    };
    //console.log(result);
    return result;
};

exports.default = alignUI;
module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getAfterMove = function getAfterMove(domInfo, moveXY) {
    var width = domInfo.right - domInfo.left;
    var height = domInfo.bottom - domInfo.top;
    var info = {
        top: moveXY[1],
        right: moveXY[0] + width,
        bottom: moveXY[1] + height,
        left: moveXY[0]
    };
    return info;
};

exports.default = getAfterMove;
module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getStyle = function getStyle(el, styleKey) {
    if ('undefined' === typeof document) {
        return;
    }
    var doc = document;
    var styleValue = '';
    if (el.currentStyle) {
        styleValue = el.currentStyle[styleKey];
    } else if (doc.defaultView && doc.defaultView.getComputedStyle) {
        styleValue = doc.defaultView.getComputedStyle(el, null).getPropertyValue(styleKey);
    }
    if (styleValue && styleValue.toLowerCase) {
        return styleValue.toLowerCase();
    } else {
        return styleValue;
    }
};

exports.default = getStyle;
module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getAlignTargetXY = __webpack_require__(71);

var _getAlignTargetXY2 = _interopRequireDefault(_getAlignTargetXY);

var _positions = __webpack_require__(14);

var _positions2 = _interopRequireDefault(_positions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var alignWith = function alignWith(targetInfo, floatElInfo, loc) {
    var xy = (0, _getAlignTargetXY2.default)(targetInfo, loc);
    var width = floatElInfo.right - floatElInfo.left;
    var height = floatElInfo.bottom - floatElInfo.top;
    var moveXY = void 0;
    switch (loc) {
        case _positions2.default.TL:
            moveXY = [xy[0], xy[1] - height];
            break;
        case _positions2.default.TC:
            moveXY = [xy[0] - Math.floor(width / 2), xy[1] - height];
            break;
        case _positions2.default.TR:
            moveXY = [xy[0] - width, xy[1] - height];
            break;
        case _positions2.default.RT:
            moveXY = [xy[0], xy[1]];
            break;
        case _positions2.default.RC:
            moveXY = [xy[0], xy[1] - Math.floor(height / 2)];
            break;
        case _positions2.default.RB:
            moveXY = [xy[0], xy[1] - height];
            break;
        case _positions2.default.BL:
            moveXY = [xy[0], xy[1]];
            break;
        case _positions2.default.BC:
            moveXY = [xy[0] - Math.floor(width / 2), xy[1]];
            break;
        case _positions2.default.BR:
            moveXY = [xy[0] - width, xy[1]];
            break;
        case _positions2.default.LT:
            moveXY = [xy[0] - width, xy[1]];
            break;
        case _positions2.default.LC:
            moveXY = [xy[0] - width, xy[1] - Math.floor(height / 2)];
            break;
        case _positions2.default.LB:
            moveXY = [xy[0] - width, xy[1] - height];
            break;
        case _positions2.default.CC:
            moveXY = [xy[0] - Math.floor(width / 2), xy[1] - Math.floor(height / 2)];
            break;
        default:
            console.error('Not support align type.');
            break;
    }
    return moveXY;
};

exports.default = alignWith;
module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _positions = __webpack_require__(14);

var _positions2 = _interopRequireDefault(_positions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAlignTargetXY = function getAlignTargetXY(domInfo, loc) {
    var xy = void 0;
    var width = domInfo.right - domInfo.left;
    var height = domInfo.bottom - domInfo.top;
    switch (loc) {
        case _positions2.default.LT:
        case _positions2.default.TL:
            xy = [domInfo.left, domInfo.top];
            break;
        case _positions2.default.TC:
            xy = [domInfo.left + Math.floor(width / 2), domInfo.top];
            break;
        case _positions2.default.RT:
        case _positions2.default.TR:
            xy = [domInfo.right, domInfo.top];
            break;
        case _positions2.default.LT:
        case _positions2.default.BL:
            xy = [domInfo.left, domInfo.bottom];
            break;
        case _positions2.default.BC:
            xy = [domInfo.left + Math.floor(width / 2), domInfo.bottom];
            break;
        case _positions2.default.RB:
        case _positions2.default.BR:
            xy = [domInfo.right, domInfo.bottom];
            break;
        case _positions2.default.RC:
            xy = [domInfo.right, domInfo.top + Math.floor(height / 2)];
            break;
        case _positions2.default.LC:
            xy = [domInfo.left, domInfo.top + Math.floor(height / 2)];
            break;
        case _positions2.default.CC:
            xy = [domInfo.left + Math.floor(width / 2), domInfo.top + Math.floor(height / 2)];
            break;
        default:
            console.error('Not support align type. [' + loc + ']');
            break;
    }
    return xy;
};

exports.default = getAlignTargetXY;
module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var isFullOnScreen = function isFullOnScreen(domInfo, scrollInfo) {
    var bool = domInfo.top > scrollInfo.top && domInfo.right < scrollInfo.right && domInfo.bottom < scrollInfo.bottom && domInfo.left > scrollInfo.left;
    return bool;
};

exports.default = isFullOnScreen;
module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getObjectValue = __webpack_require__(15);

var _getObjectValue2 = _interopRequireDefault(_getObjectValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var position = {
    tl: 'top left',
    tc: 'top center',
    tr: 'top right',
    rt: 'right center',
    rc: 'right center',
    rb: 'right center',
    bl: 'bottom left',
    bc: 'bottom center',
    br: 'bottom right',
    lt: 'left center',
    lc: 'left center',
    lb: 'left center'
};

var getPositionString = function getPositionString(loc) {
    return (0, _getObjectValue2.default)(position, [loc]);
};

exports.default = getPositionString;
module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_get_object_value__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_get_object_value___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_get_object_value__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_atomic_molecule__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_index__ = __webpack_require__(6);
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}






var _ref = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_atomic_molecule__["a" /* SemanticUI */], null);

var ScrollSpy = function (_Component) {
    _inherits(ScrollSpy, _Component);

    function ScrollSpy(props) {
        _classCallCheck(this, ScrollSpy);

        var _this = _possibleConstructorReturn(this, (ScrollSpy.__proto__ || Object.getPrototypeOf(ScrollSpy)).call(this, props));

        _this.scrollMargin = props.scrollMargin;
        _this.state = {
            id: _this.props.id
        };
        return _this;
    }

    _createClass(ScrollSpy, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var id = this.attach(this);
            this.setState({
                id: id
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.detach();
        }
    }, {
        key: 'getOffsetEl',
        value: function getOffsetEl() {
            if (this.el) {
                return this.el;
            } else {
                console.warn('Please use SemanticUI. props.container -> import {SemanticUI} from "react-atomic-molecule"');
            }
        }
    }, {
        key: 'attach',
        value: function attach() {
            return __WEBPACK_IMPORTED_MODULE_3__src_index__["e" /* scrollStore */].attach(this);
        }
    }, {
        key: 'detach',
        value: function detach() {
            return __WEBPACK_IMPORTED_MODULE_3__src_index__["e" /* scrollStore */].detach(this);
        }
    }, {
        key: 'isScrollReceiver',
        value: function isScrollReceiver(el) {
            if (__WEBPACK_IMPORTED_MODULE_1_get_object_value___default()(el, ['props', 'isScrollReceiver'])) {
                return true;
            }
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            /**
             * monitorScroll use in store, in component just for reset props.
             */
            var _props = this.props,
                monitorScroll = _props.monitorScroll,
                children = _props.children,
                container = _props.container,
                others = _objectWithoutProperties(_props, ['monitorScroll', 'children', 'container']);

            var isScrollReceiver = this.isScrollReceiver(children);
            var cookChildren = void 0;
            var thisContainer = void 0;
            var thisProps = void 0;
            if (isScrollReceiver) {
                thisContainer = children;
                thisProps = _extends({
                    targetId: this.state.id,
                    container: container
                }, others, children.props);
            } else {
                thisProps = _extends({
                    children: children
                }, others);
                if (container) {
                    thisContainer = container;
                } else {
                    thisContainer = _ref;
                }
            }
            thisProps = _extends({}, thisProps, {
                refCb: function refCb(el) {
                    return _this2.el = el;
                }
            });
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(thisContainer, thisProps);
        }
    }]);

    return ScrollSpy;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ScrollSpy.defaultProps = {
    monitorScroll: true
};

/* harmony default export */ __webpack_exports__["a"] = (ScrollSpy);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hasClass = __webpack_require__(17);

var _hasClass2 = _interopRequireDefault(_hasClass);

var _removeClass = __webpack_require__(41);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _mixClass = __webpack_require__(39);

var _mixClass2 = _interopRequireDefault(_mixClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toggleClass = function toggleClass(classes, name) {
    if ((0, _hasClass2.default)(classes, name)) {
        classes = (0, _removeClass2.default)(classes, name);
    } else {
        classes = (0, _mixClass2.default)(classes, name);
    }
    return classes;
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ul = exports.TSpan = exports.Tr = exports.Th = exports.Textarea = exports.Text = exports.Td = exports.Table = exports.Svg = exports.Span = exports.Section = exports.Rect = exports.Polygon = exports.Path = exports.P = exports.Ol = exports.Nav = exports.Line = exports.Li = exports.Label = exports.Input = exports.Img = exports.Iframe = exports.I = exports.Header = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.G = exports.Form = exports.Dl = exports.Div = exports.Button = exports.Article = exports.A = undefined;

var _a = __webpack_require__(77);

var _a2 = _interopRequireDefault(_a);

var _article = __webpack_require__(78);

var _article2 = _interopRequireDefault(_article);

var _button = __webpack_require__(79);

var _button2 = _interopRequireDefault(_button);

var _div = __webpack_require__(80);

var _div2 = _interopRequireDefault(_div);

var _dl = __webpack_require__(81);

var _dl2 = _interopRequireDefault(_dl);

var _form = __webpack_require__(82);

var _form2 = _interopRequireDefault(_form);

var _g = __webpack_require__(83);

var _g2 = _interopRequireDefault(_g);

var _h = __webpack_require__(84);

var _h2 = _interopRequireDefault(_h);

var _h3 = __webpack_require__(85);

var _h4 = _interopRequireDefault(_h3);

var _h5 = __webpack_require__(86);

var _h6 = _interopRequireDefault(_h5);

var _h7 = __webpack_require__(87);

var _h8 = _interopRequireDefault(_h7);

var _h9 = __webpack_require__(88);

var _h10 = _interopRequireDefault(_h9);

var _h11 = __webpack_require__(89);

var _h12 = _interopRequireDefault(_h11);

var _header = __webpack_require__(90);

var _header2 = _interopRequireDefault(_header);

var _i = __webpack_require__(91);

var _i2 = _interopRequireDefault(_i);

var _iframe = __webpack_require__(92);

var _iframe2 = _interopRequireDefault(_iframe);

var _img = __webpack_require__(93);

var _img2 = _interopRequireDefault(_img);

var _input = __webpack_require__(94);

var _input2 = _interopRequireDefault(_input);

var _label = __webpack_require__(95);

var _label2 = _interopRequireDefault(_label);

var _li = __webpack_require__(96);

var _li2 = _interopRequireDefault(_li);

var _line = __webpack_require__(97);

var _line2 = _interopRequireDefault(_line);

var _nav = __webpack_require__(98);

var _nav2 = _interopRequireDefault(_nav);

var _ol = __webpack_require__(99);

var _ol2 = _interopRequireDefault(_ol);

var _p = __webpack_require__(100);

var _p2 = _interopRequireDefault(_p);

var _path = __webpack_require__(101);

var _path2 = _interopRequireDefault(_path);

var _polygon = __webpack_require__(102);

var _polygon2 = _interopRequireDefault(_polygon);

var _rect = __webpack_require__(103);

var _rect2 = _interopRequireDefault(_rect);

var _section = __webpack_require__(104);

var _section2 = _interopRequireDefault(_section);

var _span = __webpack_require__(105);

var _span2 = _interopRequireDefault(_span);

var _svg = __webpack_require__(106);

var _svg2 = _interopRequireDefault(_svg);

var _table = __webpack_require__(107);

var _table2 = _interopRequireDefault(_table);

var _td = __webpack_require__(108);

var _td2 = _interopRequireDefault(_td);

var _text = __webpack_require__(109);

var _text2 = _interopRequireDefault(_text);

var _textarea = __webpack_require__(110);

var _textarea2 = _interopRequireDefault(_textarea);

var _th = __webpack_require__(111);

var _th2 = _interopRequireDefault(_th);

var _tr = __webpack_require__(112);

var _tr2 = _interopRequireDefault(_tr);

var _tspan = __webpack_require__(113);

var _tspan2 = _interopRequireDefault(_tspan);

var _ul = __webpack_require__(114);

var _ul2 = _interopRequireDefault(_ul);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.A = _a2.default;
exports.Article = _article2.default;
exports.Button = _button2.default;
exports.Div = _div2.default;
exports.Dl = _dl2.default;
exports.Form = _form2.default;
exports.G = _g2.default;
exports.H1 = _h2.default;
exports.H2 = _h4.default;
exports.H3 = _h6.default;
exports.H4 = _h8.default;
exports.H5 = _h10.default;
exports.H6 = _h12.default;
exports.Header = _header2.default;
exports.I = _i2.default;
exports.Iframe = _iframe2.default;
exports.Img = _img2.default;
exports.Input = _input2.default;
exports.Label = _label2.default;
exports.Li = _li2.default;
exports.Line = _line2.default;
exports.Nav = _nav2.default;
exports.Ol = _ol2.default;
exports.P = _p2.default;
exports.Path = _path2.default;
exports.Polygon = _polygon2.default;
exports.Rect = _rect2.default;
exports.Section = _section2.default;
exports.Span = _span2.default;
exports.Svg = _svg2.default;
exports.Table = _table2.default;
exports.Td = _td2.default;
exports.Text = _text2.default;
exports.Textarea = _textarea2.default;
exports.Th = _th2.default;
exports.Tr = _tr2.default;
exports.TSpan = _tspan2.default;
exports.Ul = _ul2.default;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('a');

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('article');

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('button');

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('div');

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('dl');

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('form');

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('g');

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('h1');

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('h2');

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('h3');

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('h4');

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('h5');

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('h6');

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('header');

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('i');

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('iframe');

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('img');

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('input');

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('label');

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('li');

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('line');

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('nav');

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('ol');

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('p');

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('path');

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('polygon');

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('rect');

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('section');

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('span');

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('svg');

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('table');

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('td');

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('text');

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('textarea');

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('th');

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('tr');

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('tspan');

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base = __webpack_require__(0);
module.exports = base('ul');

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keys = Object.keys;

function applyClassName(props, style, order) {
    if (!props.className) {
        props.className = '';
    }
    var styleId = style.styleId;
    props.className += ' ' + styleId;
    for (var j = 1; j <= order; j++) {
        props.className += ' ' + styleId + j;
    }
    return order + 1;
}

function applyInlineStyle(props, styles, order) {
    if (isArray(styles.selector)) {
        return order;
    }
    if (!props.style) {
        props.style = {};
    }
    styles.style.forEach(function (one) {
        return keys(one).forEach(function (key) {
            return props.style[key] = one[key];
        });
    });
    return order;
}

function applyStyle(props, style, order) {
    if (style === null || style === undefined || style === false) {
        return order;
    }
    if (!style.isCompiled) {
        console.error('Not a style object', style);
        console.trace();
    }
    if (style.isCompiled() && order < 10) {
        return applyClassName(props, style, order);
    } else {
        return applyInlineStyle(props, style, order);
    }
}

function applyStyles(props, styles, order) {
    if (order === undefined) {
        order = 0;
    }
    if (!isArray(styles)) {
        styles = [styles];
    }
    styles.forEach(function (one) {
        return order = applyStyle(props, one, order);
    });
}

/* harmony default export */ __webpack_exports__["a"] = (applyStyles);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__);




// Follows syntax at https://developer.mozilla.org/en-US/docs/Web/CSS/content,
// including multiple space separated values.
var unquotedContentValueRegex = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;

var isArray = Array.isArray;
var keys = Object.keys;
var browsers = ['webkit', 'moz'];

function buildRule(key, value) {
    if (null === value) {
        return '';
    }

    if (key === 'content' && !unquotedContentValueRegex.test(value)) {
        value = "'" + value.replace(/'/g, "\\'") + "'";
    }
    // TODO: escape value
    return __WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name___default()(key) + ': ' + value + ';';
}

function buildRules(result, rules, selector) {
    if (!rules.length) {
        return result;
    }
    var mycss = '';
    var parentSelector = '';
    if (isArray(selector)) {
        parentSelector = selector[0].trim();
        selector.shift();
    } else {
        selector = [selector];
    }

    rules.forEach(function (rule, i) {
        mycss += selector[i] + ' {\n';
        keys(rule).forEach(function (styleKey) {
            if (rule[styleKey] && rule[styleKey].forEach) {
                rule[styleKey].forEach(function (item) {
                    return mycss += buildRule(styleKey, item);
                });
            } else {
                mycss += buildRule(styleKey, rule[styleKey]);
            }
        });
        mycss += '}\n\n';
    });

    if (parentSelector) {
        var keyframesString = '@keyframes';
        if (0 === parentSelector.indexOf(keyframesString)) {
            browsers.forEach(function (browser) {
                result.css += parentSelector.replace(keyframesString, '@-' + browser + '-keyframes') + ' {\n' + mycss + '}\n';
            });
        }
        result.css += parentSelector + ' {\n' + mycss + '}\n';
    } else {
        result.css += mycss;
    }
    return result;
}

function replicateSelector(s) {
    s = '.' + s;
    var a = [s];
    for (var i = 1; i < 10; i++) {
        a[i] = a[i - 1] + s + i;
    }
    return a.join(',');
}

function buildStyle(result, oStyle) {
    var styleId = oStyle.styleId;
    if (!styleId || result.styleIds[styleId]) {
        return;
    }
    var selector = oStyle.selector;
    if (selector) {
        if (isArray(selector) && !selector[1]) {
            selector[1] = replicateSelector(styleId);
        }
    } else {
        selector = replicateSelector(styleId);
    }
    result.styleIds[styleId] = oStyle; //for check already inject
    buildRules(result, oStyle.style, selector);
}

function stylesToCSS(styles) {
    if (!isArray(styles)) {
        styles = [styles];
    }
    var result = { css: '', styleIds: {} };
    styles.forEach(function (style) {
        buildStyle(result, style);
    });
    return result;
}

/* harmony default export */ __webpack_exports__["a"] = (stylesToCSS);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
    return string in cache
    ? cache[string]
    : cache[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Card = function Card(props) {
    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(props.className, 'card');
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({}, props, {
        className: classes
    }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Card);

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Circular = function Circular(props) {
    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(props.className, 'circular');
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({}, props, { className: classes }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Circular);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* jshint esnext: true */




var Description = function Description(props) {
    var children = props.children,
        className = props.className,
        lineAtom = props.lineAtom,
        others = _objectWithoutProperties(props, ['children', 'className', 'lineAtom']);

    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(className, 'description');
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */],
        _extends({}, others, {
            ui: false,
            className: classes
        }),
        children && children.map ? children.map(function (v, k) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */],
                { atom: lineAtom, key: k },
                v
            );
        }) : children
    );
};

/* unused harmony default export */ var _unused_webpack_default_export = (Description);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Divider = function Divider(props) {
    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(props.className, 'divider');

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({}, props, {
        className: classes
    }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Divider);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var DividingHeader = function DividingHeader(props) {
    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(props.className, 'dividing header');
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({}, props, { className: classes }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (DividingHeader);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_Content__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* jshint esnext: true */





var Dimmer = function Dimmer(props) {
    var className = props.className,
        show = props.show,
        children = props.children,
        center = props.center,
        isModal = props.isModal,
        others = _objectWithoutProperties(props, ['className', 'show', 'children', 'center', 'isModal']);

    if (!show) {
        return null;
    }
    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(className, 'transition visible active', {
        dimmer: !isModal,
        modal: isModal
    });

    var content = void 0;
    if (center) {
        content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__molecules_Content__["a" /* default */],
            { style: { boxSizing: 'inherit' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'center' },
                children
            )
        );
    } else {
        content = children;
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__molecules_SemanticUI__["a" /* default */],
        _extends({}, others, {
            className: classes
        }),
        content
    );
};

Dimmer.defaultProps = {
    show: false,
    isModal: false,
    center: true
};

/* unused harmony default export */ var _unused_webpack_default_export = (Dimmer);

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* jshint esnext: true */




var Form = function Form(props) {
    var messageType = props.messageType,
        className = props.className,
        others = _objectWithoutProperties(props, ['messageType', 'className']);

    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(className, messageType, 'form');
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({
        atom: 'form'
    }, others, {
        className: classes
    }));
};
/* unused harmony default export */ var _unused_webpack_default_export = (Form);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* jshint esnext: true */




var Field = function Field(props) {
    var fieldClassName = props.fieldClassName,
        fieldStyles = props.fieldStyles,
        type = props.type,
        inputWrapper = props.inputWrapper,
        label = props.label,
        labelStyles = props.labelStyles,
        style = props.style,
        styleOrder = props.styleOrder,
        others = _objectWithoutProperties(props, ['fieldClassName', 'fieldStyles', 'type', 'inputWrapper', 'label', 'labelStyles', 'style', 'styleOrder']);

    var isGroup = !props.atom;
    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(fieldClassName, {
        field: !isGroup,
        fields: isGroup
    });
    var oLabel = null;
    if (label) {
        var labelStyle = {};
        if (props.id) {
            labelStyle = { cursor: 'pointer' };
        }
        oLabel = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */],
            {
                atom: 'label',
                key: 'label',
                htmlFor: props.id,
                style: labelStyle,
                styles: labelStyles
            },
            label
        );
    }
    var input = null;
    var thisFieldStyles = null;
    if (isGroup) {
        thisFieldStyles = props.styles;
    } else {
        thisFieldStyles = fieldStyles;
        input = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({}, others, {
            style: _extends({ boxSizing: 'border-box' }, style),
            styleOrder: styleOrder,
            key: 'input',
            type: type
        }));
    }
    var inputs = void 0;
    if ('checkbox' === type || 'radio' === type) {
        inputs = [input, oLabel];
    } else {
        inputs = [oLabel, input];
    }
    if (inputWrapper) {
        inputs = Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(inputWrapper, {}, inputs);
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */],
        {
            className: classes,
            styles: thisFieldStyles,
            styleOrder: styleOrder
        },
        inputs,
        props.children
    );
};

/* unused harmony default export */ var _unused_webpack_default_export = (Field);

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* jshint esnext: true */




var Item = function Item(props) {
    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(props.className, 'item');
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({}, props, {
        className: classes
    }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Item);

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Image = function Image(props) {
    var alt = props.alt,
        title = props.title,
        ui = props.ui;

    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(props.className, {
        image: ui
    });

    var thisAlt = alt;
    if (!thisAlt) {
        thisAlt = title;
    }

    if (props.atom && 'img' !== props.atom) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */],
            _extends({}, props, {
                className: classes
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], { atom: 'img', src: props.src, alt: thisAlt }),
            props.children
        );
    } else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({ atom: 'img'
        }, props, {
            alt: thisAlt,
            className: classes }));
    }
};
Image.defaultProps = { ui: true };
/* unused harmony default export */ var _unused_webpack_default_export = (Image);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__molecules_Button__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__molecules_Label__ = __webpack_require__(20);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* jshint esnext: true */






var InputBox = function InputBox(props) {
    var button = props.button,
        buttonProps = props.buttonProps,
        className = props.className,
        children = props.children,
        messageType = props.messageType,
        leftLabel = props.leftLabel,
        rightLabel = props.rightLabel,
        style = props.style,
        inputStyle = props.inputStyle,
        others = _objectWithoutProperties(props, ['button', 'buttonProps', 'className', 'children', 'messageType', 'leftLabel', 'rightLabel', 'style', 'inputStyle']);

    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(className, messageType, 'input action', {
        labeled: leftLabel || rightLabel,
        right: rightLabel
    });
    var thisLeftLabel = void 0;
    if (leftLabel) {
        thisLeftLabel = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__molecules_Label__["a" /* default */],
            null,
            leftLabel
        );
    }
    var thisRightLabel = void 0;
    if (rightLabel) {
        thisRightLabel = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__molecules_Label__["a" /* default */],
            { style: Styles.rightLabel, className: 'basic' },
            rightLabel
        );
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */],
        { className: classes, style: style },
        thisLeftLabel,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({ atom: 'input' }, others, { style: inputStyle, ui: false })),
        thisRightLabel,
        children,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__molecules_Button__["a" /* default */],
            buttonProps,
            button
        )
    );
};

InputBox.defaultProps = {
    button: 'Submit'
};

/* unused harmony default export */ var _unused_webpack_default_export = (InputBox);

var Styles = {
    rightLabel: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    }
};

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





var renderChildren = function renderChildren(children, atom) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].map(children, function (child) {
        if (!child) {
            return null;
        }
        if ('ul' === atom || 'ol' === atom) {
            var clone = Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(child, {
                atom: 'li'
            });
            return clone;
        }
        return child;
    });
};

var List = function List(props) {
    var type = props.type,
        className = props.className,
        children = props.children,
        others = _objectWithoutProperties(props, ['type', 'className', 'children']);

    var typeClass = 'list';
    if (type) {
        typeClass = type;
    }
    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(className, typeClass);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */],
        _extends({}, others, { className: classes }),
        renderChildren(children, props.atom)
    );
};
/* unused harmony default export */ var _unused_webpack_default_export = (List);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Menu = function Menu(props) {
    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(props.className, 'menu');
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({}, props, {
        className: classes
    }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Menu);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_Header__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var Message = function Message(props) {
    var header = props.header,
        className = props.className,
        children = props.children,
        messageType = props.messageType,
        reset = _objectWithoutProperties(props, ['header', 'className', 'children', 'messageType']);

    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(className, {
        info: messageType === 'info',
        error: messageType === 'error',
        success: messageType === 'success',
        warning: messageType === 'warning'
    }, 'message');
    var thisHeader = void 0;
    if (header) {
        thisHeader = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__molecules_Header__["a" /* default */],
            null,
            header
        );
    }
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__molecules_SemanticUI__["a" /* default */],
        _extends({}, reset, { className: classes }),
        thisHeader,
        children
    );
};
/* unused harmony default export */ var _unused_webpack_default_export = (Message);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Meta = function Meta(props) {
  var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(props.className, 'meta');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({}, props, {
    ui: false,
    className: classes
  }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Meta);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_lib_styles_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var Progress = function Progress(props) {
    var barProps = props.barProps,
        className = props.className,
        percent = props.percent,
        style = props.style,
        styles = props.styles,
        others = _objectWithoutProperties(props, ['barProps', 'className', 'percent', 'style', 'styles']);

    var _ref = barProps || {},
        barStyle = _ref.style,
        barStyles = _ref.styles,
        otherBarProps = _objectWithoutProperties(_ref, ['style', 'styles']);

    var classes = Object(__WEBPACK_IMPORTED_MODULE_2_class_lib__["mixClass"])(className, 'progress');

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__molecules_SemanticUI__["a" /* default */],
        _extends({}, others, {
            className: classes,
            styles: [Object(__WEBPACK_IMPORTED_MODULE_1__src_lib_styles_index__["a" /* default */])(_extends({
                fontSize: 0
            }, style), null, false), styles]
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__molecules_SemanticUI__["a" /* default */], _extends({
            className: 'bar'
        }, otherBarProps, {
            styles: [Object(__WEBPACK_IMPORTED_MODULE_1__src_lib_styles_index__["a" /* default */])(_extends({
                width: percent + '%'
            }, barStyle), null, false), barStyles]
        }))
    );
};

/* unused harmony default export */ var _unused_webpack_default_export = (Progress);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(19);
/*jslint browser: true*/




function Style(style, selector, styleId) {
  this.style = style;
  this.selector = selector;
  this.styleId = styleId;
}

Style.prototype.isCompiled = function () {
  var registry = __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].registry;
  return registry && registry[this.styleId];
};

/* harmony default export */ __webpack_exports__["a"] = (Style);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cssUnitLessNumber__ = __webpack_require__(136);


var cssUnitToNumber = function cssUnitToNumber(key, value) {
    if (__WEBPACK_IMPORTED_MODULE_0__cssUnitLessNumber__["a" /* default */][key]) {
        return value;
    }
    if (value && value.map) {
        value.map(function (v) {
            if ('number' === typeof v) {
                v += 'px';
            }
            return v;
        });
    } else {
        if ('number' === typeof value) {
            value += 'px';
        }
    }
    return value;
};

/* harmony default export */ __webpack_exports__["a"] = (cssUnitToNumber);

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/**
 * CSS properties which accept numbers but are not in units of "px".
 */

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

/* harmony default export */ __webpack_exports__["a"] = (isUnitlessNumber);

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* jshint esnext: true */




var Rail = function Rail(props) {
    var left = props.left,
        others = _objectWithoutProperties(props, ['left']);

    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(props.className, 'rail', {
        left: left
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({}, others, {
        className: classes
    }));
};

Rail.defaultProps = { left: true };

/* unused harmony default export */ var _unused_webpack_default_export = (Rail);

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_Label__ = __webpack_require__(20);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Ribbon = function Ribbon(props) {
    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(props.className, 'ribbon');
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_Label__["a" /* default */], _extends({}, props, { clssName: classes }));
};
/* unused harmony default export */ var _unused_webpack_default_export = (Ribbon);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Segment = function Segment(props) {
    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(props.className, 'segment');
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({}, props, {
        className: classes
    }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Segment);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_class_lib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_class_lib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var Title = function Title(props) {
    var classes = Object(__WEBPACK_IMPORTED_MODULE_1_class_lib__["mixClass"])(props.className, 'title');
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__molecules_SemanticUI__["a" /* default */], _extends({}, props, {
        className: classes
    }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Title);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__molecules_SemanticUI__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var UnSafe = function UnSafe(props) {
    var children = props.children,
        others = _objectWithoutProperties(props, ['children']);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__molecules_SemanticUI__["a" /* default */], _extends({}, others, {
        dangerouslySetInnerHTML: {
            __html: children
        }
    }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (UnSafe);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__injectStyle__ = __webpack_require__(18);





var isArray = Array.isArray;
var keys = Object.keys;

var lazyInject = function lazyInject(injects, configs) {
    if (!injects) {
        injects = {};
        keys(configs).forEach(function (key) {
            var item = configs[key];
            if (!isArray(item)) {
                item = [item];
            }
            injects[key] = __WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */].apply(null, item);
        });
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__injectStyle__["b" /* default */])();
    return injects;
};

/* unused harmony default export */ var _unused_webpack_default_export = (lazyInject);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export min */
/* unused harmony export max */
var min = {
    sm: '@media (min-width: 35.5em)',
    md: '@media (min-width: 48em)',
    lg: '@media (min-width: 64em)',
    xl: '@media (min-width: 80em)'
};

var max = {
    sm: '@media (max-width: 35.5em)',
    md: '@media (max-width: 48em)',
    lg: '@media (max-width: 64em)',
    xl: '@media (max-width: 80em)'
};



/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_flux__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_atomic_molecule__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_index__ = __webpack_require__(6);
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}







var ScrollReceiver = function (_Component) {
    _inherits(ScrollReceiver, _Component);

    function ScrollReceiver() {
        _classCallCheck(this, ScrollReceiver);

        return _possibleConstructorReturn(this, (ScrollReceiver.__proto__ || Object.getPrototypeOf(ScrollReceiver)).apply(this, arguments));
    }

    _createClass(ScrollReceiver, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                atom = _props.atom,
                container = _props.container,
                scrollMargin = _props.scrollMargin,
                targetId = _props.targetId,
                isScrollReceiver = _props.isScrollReceiver,
                reset = _objectWithoutProperties(_props, ['atom', 'container', 'scrollMargin', 'targetId', 'isScrollReceiver']);

            var state = this.state;
            if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(container)) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_atomic_molecule__["a" /* SemanticUI */], reset);
            }
            var targetInfo = {
                active: state.active,
                isOnScreen: state.isOnScreen,
                targetId: targetId,
                isShown: state.isShown,
                atTop: state.atTop,
                atRight: state.atRight,
                atBottom: state.atBottom,
                atLeft: state.atLeft
            };
            console.log(targetInfo, 'render');
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(container, _extends({}, reset, {
                targetInfo: targetInfo
            }));
        }
    }], [{
        key: 'getStores',
        value: function getStores() {
            return [__WEBPACK_IMPORTED_MODULE_3__src_index__["e" /* scrollStore */]];
        }
    }, {
        key: 'calculateState',
        value: function calculateState(prevState, props) {
            var state = __WEBPACK_IMPORTED_MODULE_3__src_index__["e" /* scrollStore */].getState();
            var targetId = props.targetId;
            var isShown = prevState && prevState.isShown || false;
            var pos = __WEBPACK_IMPORTED_MODULE_3__src_index__["e" /* scrollStore */].getOffset(targetId) || {};
            if (pos.isOnScreen) {
                isShown = true;
            }
            var active = 'undefined' !== typeof targetId && targetId === state.get('m' + props.scrollMargin);
            if (!isNaN(props.scrollMargin)) {
                __WEBPACK_IMPORTED_MODULE_3__src_index__["e" /* scrollStore */].addMargin(props.scrollMargin);
            }
            return _extends({}, pos, {
                active: active,
                isShown: isShown
            });
        }
    }]);

    return ScrollReceiver;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ScrollReceiver.defaultProps = {
    scrollMargin: 'default',
    isScrollReceiver: true
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_reshow_flux__["c" /* connect */])(ScrollReceiver, { withProps: true }));

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_smooth_scroll_to__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_smooth_scroll_to___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_smooth_scroll_to__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_getoffset__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_getoffset___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_getoffset__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_index__ = __webpack_require__(6);


var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}







var SmoothScrollLink = function (_Component) {
    _inherits(SmoothScrollLink, _Component);

    function SmoothScrollLink(props) {
        _classCallCheck(this, SmoothScrollLink);

        var _this = _possibleConstructorReturn(this, (SmoothScrollLink.__proto__ || Object.getPrototypeOf(SmoothScrollLink)).call(this, props));

        _this.state = {
            scrollRefElement: ''
        };
        return _this;
    }

    _createClass(SmoothScrollLink, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var dom = document.getElementById(this.props.scrollRefId);
            if (dom) {
                this.setState({
                    scrollRefElement: dom
                });
            }
        }
    }, {
        key: 'getMargin',
        value: function getMargin(props, ref) {
            var scrollRefLoc = props.scrollRefLoc;

            var margin = 0;
            if (ref) {
                var offset = __WEBPACK_IMPORTED_MODULE_2_getoffset___default()(ref);
                margin = offset[scrollRefLoc];
            }
            if (!isNaN(props.scrollMargin)) {
                margin += props.scrollMargin;
            }
            return margin;
        }
    }, {
        key: 'render',
        value: function render() {
            var self = this;
            var props = self.props;

            var targetId = props.targetId,
                scrollRefLoc = props.scrollRefLoc,
                scrollMargin = props.scrollMargin,
                scrollRefId = props.scrollRefId,
                preventDefault = props.preventDefault,
                others = _objectWithoutProperties(props, ['targetId', 'scrollRefLoc', 'scrollMargin', 'scrollRefId', 'preventDefault']);

            var margin = self.getMargin(props, self.state.scrollRefElement);
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_index__["a" /* ScrollReceiver */], _extends({
                atom: 'a',
                targetId: targetId
            }, others, {
                scrollMargin: margin,
                style: _extends({}, Styles.link, props.style),
                onClick: function onClick(e) {
                    var offset = __WEBPACK_IMPORTED_MODULE_3__src_index__["e" /* scrollStore */].getOffset(targetId);
                    if (offset) {
                        margin = self.getMargin(props, self.state.scrollRefElement);
                        __WEBPACK_IMPORTED_MODULE_1_smooth_scroll_to___default()(offset.top - margin, null, null, function () {
                            setTimeout(function () {
                                offset = __WEBPACK_IMPORTED_MODULE_3__src_index__["e" /* scrollStore */].getOffset(targetId);
                                margin = self.getMargin(props, self.state.scrollRefElement);
                                __WEBPACK_IMPORTED_MODULE_1_smooth_scroll_to___default()(offset.top - margin, 100);
                            }, 500);
                        });
                        if (preventDefault) {
                            e.preventDefault();
                        }
                    }
                }
            }));
        }
    }]);

    return SmoothScrollLink;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

SmoothScrollLink.defaultProps = {
    scrollRefId: '',
    scrollRefLoc: 'bottom',
    preventDefault: true
};

/* harmony default export */ __webpack_exports__["a"] = (SmoothScrollLink);

var Styles = {
    link: {
        cursor: 'pointer'
    }
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getScrollInfo = __webpack_require__(9);

var isRunning = false;

var easeInOutCubic = function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t + b;
    }
    return c / 2 * ((t -= 2) * t * t + 2) + b;
};

/**
 *  !!Important!! any logic change need take care isRunning
 */
var smoothScrollTo = function smoothScrollTo(to, duration, el, callback) {
    if (isRunning) {
        if ('function' === typeof callback) {
            callback();
        }
        return false;
    } else {
        isRunning = true;
    }
    el = (0, _getScrollInfo.getScrollNode)(el);
    if (!duration) {
        duration = 900;
    }
    var from = el.scrollTop;
    var go = to - from;
    if (!go) {
        isRunning = false;
        if ('function' === typeof callback) {
            callback();
        }
        return;
    }
    var beginTimeStamp = void 0;
    var scrollTo = function scrollTo(timeStamp) {
        beginTimeStamp = beginTimeStamp || timeStamp;
        var elapsedTime = timeStamp - beginTimeStamp;
        var progress = easeInOutCubic(elapsedTime, from, go, duration);
        el.scrollTop = progress;
        if (elapsedTime < duration && go) {
            requestAnimationFrame(scrollTo);
        } else {
            isRunning = false;
            if ('function' === typeof callback) {
                callback();
            }
        }
    };
    requestAnimationFrame(scrollTo);
};

exports.default = smoothScrollTo;
module.exports = exports['default'];

/***/ })
],[46]);