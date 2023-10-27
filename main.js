/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&family=Pixelify+Sans&family=Poppins&family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    padding: 0;
    margin: 0;
    --bg-color: #e9e4bb;
    --bg-menu-btn-color: #ffffff;
    --bg-menu-btn-active-color: #ffa500;
    --primary-color: #000000;
    --secondary-color: #ffffff;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: var(--bg-color);
    padding: 10px;
}

#header {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-items: center;
    align-items: center;
}

#main-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
}

#main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
    height: 85vh;
}

#footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-items: center;
}

.menu-wrapper {
    display: flex;
    gap: 20px;
}

.main-cell {
    display: flex;
    flex-direction: column;
    gap: 50px;

    .heading-wrapper {
        >h2 {
            font-size: 80px;
        }

        >p {
            font-size: 35px;
        }
    }
}

.menu-item {
    position: relative;
    display: grid;
    grid-template-rows: 1fr 1fr;
    border: none;
    border-radius: 50px;
    height: 120px;
    width: 70px;
    background-color: var(--secondary-color);
    padding: 6px;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-items: center;
}

.menu-btn-icon-wrapper {
    display: flex;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 35px;
    background-color: var(--bg-color);
    justify-content: center;
    align-items: center;

    >img {
        width: 30px;
    }
}

.social-icon {
    background-color: var(--primary-color);
    padding: 10px;
    border: none;
    border-radius: 12px;

    >img {
        width: 20px;
        height: 20px;
    }
}

.notification-wrapper {
    background-color: var(--primary-color);
    padding: 10px;
    border: none;
    border-radius: 12px;

    >img {
        width: 20px;
        height: 20px;
    }
}

#harder-link-wrapper {
    display: flex;
    gap: 50px;
}

.header-link {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
}

.menu-item:hover {
    background-color: var(--bg-menu-btn-active-color);

    .menu-btn-price-wrapper {
        background-color: var(--bg-menu-btn-active-color);

        >p {
            color: var(--secondary-color);
            font-weight: 600;
        }
    }

    .menu-btn-icon-wrapper {
        background-color: var(--secondary-color);
    }

    >p {
        color: var(--secondary-color);
        font-weight: 600;
    }
}

#logo {
    display: flex;
    width: 100px;
}

.header-cell:first-child {
    justify-self: flex-end;
}

.header-cell:last-child {
    justify-self: flex-start;
}


#food-img {
    width: 650px;
}

.menu-btn-price-wrapper {
    position: absolute;
    display: flex;
    content: '\$5';
    background-color: var(--secondary-color);
    padding: 5px 10px;
    top: -22px;
    border-top-right-radius: 15px;
    border-top-left-radius: 4px;
}

.active {
    background-color: var(--bg-menu-btn-active-color);

    .menu-btn-price-wrapper {
        background-color: var(--bg-menu-btn-active-color);

        >p {
            color: var(--secondary-color);
            font-weight: 600;
        }
    }

    .menu-btn-icon-wrapper {
        background-color: var(--secondary-color);
    }

    >p {
        color: var(--secondary-color);
        font-weight: 600;
    }
}

/* Contact page */
#contact-form-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(255, 165, 0, 0.2);
    border-radius: 10px;
    gap: 50px;
    padding: 40px;

    
    
}

#contact-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    
    >div {
        display: flex;
        flex-direction: column;
        gap: 4px;
        
        >input {
            border-radius: 10px;
            padding: 10px;
            width: 30vw;
            border: 1px solid var(--bg-menu-btn-active-color);
        }
        >input[type="submit"] {
            font-size: 18px;
            font-weight: 900;
            background-color: var(--bg-menu-btn-active-color);
            border: 1px solid var(--bg-color);
            color: var(--secondary-color);
        }
    }
}

.contant-info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
}
.contact-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
}
#map-img {
    height: 40vh;
}

/* Header link */
.header-active {
    position: relative;
}
.header-active::after {
    position: absolute;
    width: 100%;
    height: 10%;
    content: '';
    background-color:  var(--bg-menu-btn-active-color);
    left: 0;
    bottom: -4px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&family=Pixelify+Sans&family=Poppins&family=Roboto&display=swap');\n\n:root {\n    padding: 0;\n    margin: 0;\n    --bg-color: #e9e4bb;\n    --bg-menu-btn-color: #ffffff;\n    --bg-menu-btn-active-color: #ffa500;\n    --primary-color: #000000;\n    --secondary-color: #ffffff;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Open Sans', sans-serif;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    background: var(--bg-color);\n    padding: 10px;\n}\n\n#header {\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n#main-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 85vh;\n}\n\n#main {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-content: center;\n    align-content: center;\n    justify-items: center;\n    align-items: center;\n    height: 85vh;\n}\n\n#footer {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    justify-content: center;\n    align-items: center;\n    justify-items: center;\n    align-items: center;\n}\n\n.menu-wrapper {\n    display: flex;\n    gap: 20px;\n}\n\n.main-cell {\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n\n    .heading-wrapper {\n        >h2 {\n            font-size: 80px;\n        }\n\n        >p {\n            font-size: 35px;\n        }\n    }\n}\n\n.menu-item {\n    position: relative;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    border: none;\n    border-radius: 50px;\n    height: 120px;\n    width: 70px;\n    background-color: var(--secondary-color);\n    padding: 6px;\n    justify-content: center;\n    align-items: center;\n    justify-items: center;\n    align-items: center;\n}\n\n.menu-btn-icon-wrapper {\n    display: flex;\n    width: 60px;\n    height: 60px;\n    border: none;\n    border-radius: 35px;\n    background-color: var(--bg-color);\n    justify-content: center;\n    align-items: center;\n\n    >img {\n        width: 30px;\n    }\n}\n\n.social-icon {\n    background-color: var(--primary-color);\n    padding: 10px;\n    border: none;\n    border-radius: 12px;\n\n    >img {\n        width: 20px;\n        height: 20px;\n    }\n}\n\n.notification-wrapper {\n    background-color: var(--primary-color);\n    padding: 10px;\n    border: none;\n    border-radius: 12px;\n\n    >img {\n        width: 20px;\n        height: 20px;\n    }\n}\n\n#harder-link-wrapper {\n    display: flex;\n    gap: 50px;\n}\n\n.header-link {\n    color: var(--primary-color);\n    text-decoration: none;\n    font-weight: 600;\n}\n\n.menu-item:hover {\n    background-color: var(--bg-menu-btn-active-color);\n\n    .menu-btn-price-wrapper {\n        background-color: var(--bg-menu-btn-active-color);\n\n        >p {\n            color: var(--secondary-color);\n            font-weight: 600;\n        }\n    }\n\n    .menu-btn-icon-wrapper {\n        background-color: var(--secondary-color);\n    }\n\n    >p {\n        color: var(--secondary-color);\n        font-weight: 600;\n    }\n}\n\n#logo {\n    display: flex;\n    width: 100px;\n}\n\n.header-cell:first-child {\n    justify-self: flex-end;\n}\n\n.header-cell:last-child {\n    justify-self: flex-start;\n}\n\n\n#food-img {\n    width: 650px;\n}\n\n.menu-btn-price-wrapper {\n    position: absolute;\n    display: flex;\n    content: '$5';\n    background-color: var(--secondary-color);\n    padding: 5px 10px;\n    top: -22px;\n    border-top-right-radius: 15px;\n    border-top-left-radius: 4px;\n}\n\n.active {\n    background-color: var(--bg-menu-btn-active-color);\n\n    .menu-btn-price-wrapper {\n        background-color: var(--bg-menu-btn-active-color);\n\n        >p {\n            color: var(--secondary-color);\n            font-weight: 600;\n        }\n    }\n\n    .menu-btn-icon-wrapper {\n        background-color: var(--secondary-color);\n    }\n\n    >p {\n        color: var(--secondary-color);\n        font-weight: 600;\n    }\n}\n\n/* Contact page */\n#contact-form-wrapper {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: rgba(255, 165, 0, 0.2);\n    border-radius: 10px;\n    gap: 50px;\n    padding: 40px;\n\n    \n    \n}\n\n#contact-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 20px;\n    \n    >div {\n        display: flex;\n        flex-direction: column;\n        gap: 4px;\n        \n        >input {\n            border-radius: 10px;\n            padding: 10px;\n            width: 30vw;\n            border: 1px solid var(--bg-menu-btn-active-color);\n        }\n        >input[type=\"submit\"] {\n            font-size: 18px;\n            font-weight: 900;\n            background-color: var(--bg-menu-btn-active-color);\n            border: 1px solid var(--bg-color);\n            color: var(--secondary-color);\n        }\n    }\n}\n\n.contant-info-wrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 20px;\n}\n.contact-info {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 10px;\n}\n#map-img {\n    height: 40vh;\n}\n\n/* Header link */\n.header-active {\n    position: relative;\n}\n.header-active::after {\n    position: absolute;\n    width: 100%;\n    height: 10%;\n    content: '';\n    background-color:  var(--bg-menu-btn-active-color);\n    left: 0;\n    bottom: -4px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactForm)
/* harmony export */ });
function contactForm(mapImg) {
    return `
    <div id="contact-form-wrapper">
        <div>
            <h4>Started(*) Fields are required</h4>
            <form id="contact-form">
            <div>
                <label for="name">Name *</label>
                <input type="text" id="name" name="name" placeholder="Saurabh Choudhary" required autocomplete="off">
            </div>
            <div>
                <label for="e-mail">Email *</label>
                <input type="email" id="e-mail" name="email" placeholder="example@mail.com" required autocomplete="off">
            </div>
            <div>
                <label for="message">Message *</label>
                <input type="textarea" id="message" name="message" placeholder="Write your message here." required autocomplete="off">
            </div>
            <div>
                <input type="submit" value="Send" id="submit-btn">
            </div>
            </form>
            <h5 id="feedback"></h5>
        </div>
        <div class="contant-info-wrapper">
            <div class="contact-info-text-wrapper">
                <p class="contact-info">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1007 13.359L16.5562 12.9062C17.1858 12.2801 18.1672 12.1515 18.9728 12.5894L20.8833 13.628C22.1102 14.2949 
                            22.3806 15.9295 21.4217 16.883L20.0011 18.2954C19.6399 18.6546 19.1917 18.9171 18.6763 18.9651C17.4841 19.0763 15.0313 19.0163 12.1374 17.3223L16.1007 13.359ZM10.1907 
                            7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668
                            3.96765 5.12559 4.00289 5.74561C4.06761 6.88446 4.45582 8.9649 6.15176 11.5215L10.1907 7.48257Z" fill="#1C274C"></path> <path opacity="0.6" d="M12.0627 11.4971C9.11695 
                            8.56804 10.1836 7.48913 10.1903 7.48242L6.15137 11.5214C6.81756 12.5256 7.68554 13.6034 8.81497 14.7264C9.95468 15.8596 11.0755 16.7008 12.137 17.3222L16.1003 13.3589C16.1003 
                            13.3589 15.0177 14.4353 12.0627 11.4971Z" fill="#1C274C">
                            </path> 
                        </g>
                    </svg>
                    <span>9876543210</span>
                </p>
                <p class="contact-info">
                    <svg width="24px" height="24px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"><path d="M607.7 64.2c-102.9 0-186.3 83.4-186.3 186.3 0 30 15.9 66.6 38.3 103.3 15.2 24.8 33.3 49.7 51.7 
                        72.6C559 486 607.7 533 607.7 533s17.7-17.1 42.3-43.8c14-15.3 30.3-33.6 46.7-53.8 47.9-58.7 97.3-132 97.3-184.9 0-102.9-83.4-186.3-186.3-186.3z 
                        m77.8 353.2c-8 10-16.1 19.6-23.9 28.6-7.8 9-15.4 17.5-22.5 25.3-12.5 13.7-23.4 25.1-31.4 33.3-12.5-12.8-32.3-33.5-53.8-58.5-7.8-9-15.8-18.5-23.
                        8-28.5-13.5-16.7-25.5-32.7-36.1-48-10.1-14.6-18.8-28.4-26.1-41.5-17.6-31.6-26.6-57.8-26.6-77.8 0-44.4 17.3-86.2 48.7-117.6C521.4 101.3 563.2 84 
                        607.6 84c44.4 0 86.2 17.3 117.6 48.7 31.4 31.4 48.7 73.2 48.7 117.6 0 20-8.9 46.1-26.5 77.6-14.8 26.9-35.6 56.9-61.9 89.5z" fill="#ffa500">
                        </path>
                        <path d="M607.7 183.1c36.9 0 67 30.1 67 67s-30.1 67-67 67-67-30.1-67-67 30-67 67-67m0-20c-48 0-87 38.9-87 87 0 48 38.9 87 87 87 48 0 87-38.9 
                        87-87s-39-87-87-87z" fill="#ffa500"></path>
                        <path d="M927.9 352.4l-195.7 70.3-35.6 12.8c-16.4 20.1-32.7 38.5-46.7 53.8l1.9 0.9v416.6l-12.7-5.9-46.3-21.6-212.2-98.9-8.6-4v-415l139.4 
                        65c-18.4-23-36.5-47.8-51.7-72.6l-77.6-36.2-3.7-1.7-8.6-4-7.8-3.7-2.2 0.8L64 415.3v511.8L362 820l230.8 107.6 46.3 21.6 22.7 10.6L960 852.7V340.9l-32.1 
                        11.5zM352 776.9l-4.9 1.8L108 864.6V446.2l244-87.7v418.4z m564 44.9l-244.2 87.7V491.1l5.1-1.8L916 403.4v418.4z" fill="#39393A">
                        </path>
                        </g>
                    </svg>
                    <span>Suite 383 8400 Leopoldo Via, North Emilton, UT 02450</span>
                </p>
            </div>
            <img src=${mapImg} id="map-img">
        </div>
    </div>
    `;
}

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footer)
/* harmony export */ });
function footer(face, insta, twitter) {
    return ` <div id="footer">
    <div class="footer-cell">
        <button class="social-icon"><img src=${face} alt=""></button>
        <button class="social-icon"><img src=${twitter} alt=""></button>
        <button class="social-icon"><img src=${insta} alt=""></button>
    </div>
    <div class="footer-cell"></div>
    <div class="footer-cell">
        <h4>Copywrite &copy; 2023 Saurabh Choudhary</h4>
    </div>
</div>`
};

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
function header(logo, notify) {
    return `<div id="header">
    <div class="header-cell">
        <img src=${logo} alt="" id="logo">
    </div>
    <div class="header-cell" id="harder-link-wrapper">
        <a href="#" class="header-link header-active" id="home">Home</a>
        <a href="#" class="header-link" id="contact">Contact</a>
    </div>
    <div class="header-cell">
        <button class="notification-wrapper">
            <img src=${notify} alt="" id="notify-icon">
        </button>
    </div>
</div>`;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeMain)
/* harmony export */ });
function homeMain(img) {
    return `
    <div id="main-wrapper">
        <div id="main">
            <div class="main-cell">
                <div class="heading-wrapper">
                    <h2>The best <br>delicious <br>food</h2>
                    <p>that meets your needs</p>
                </div>
                <div id="menu" class="menu-wrapper"></div>
            </div>
            <div class="main-cell">
                <div id="img-wrapper">
                    <img src=${img} alt="" id="food-img">
                </div>
            </div>
        </div>
    </div>`;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuItemBtn: () => (/* binding */ createMenuItemBtn),
/* harmony export */   setFoodImg: () => (/* binding */ setFoodImg)
/* harmony export */ });
function createMenuItemBtn(menuItem, imgLink, price) {
    return `<button id=${menuItem.toLowerCase()} class="menu-item">
        <div class="menu-btn-price-wrapper">
        <p>$${price}</p>
        </div>
        <div class="menu-btn-icon-wrapper">
        <img src=${imgLink}>
        </div>
        <p>${menuItem}</p> 
    </button>`;
}

function setFoodImg(imgLink) {
    return `<img id="food-img" src=${imgLink}>`;
}

/***/ }),

/***/ "./src/icon/burger.svg":
/*!*****************************!*\
  !*** ./src/icon/burger.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c2d6e3f52743eb91ec2.svg";

/***/ }),

/***/ "./src/icon/cake.svg":
/*!***************************!*\
  !*** ./src/icon/cake.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebf8da8d6e3f5b945917.svg";

/***/ }),

/***/ "./src/icon/drinks.svg":
/*!*****************************!*\
  !*** ./src/icon/drinks.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3067bfec6ca0f86b155.svg";

/***/ }),

/***/ "./src/icon/facebook.svg":
/*!*******************************!*\
  !*** ./src/icon/facebook.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59e07cf2f1f1a4e77cb3.svg";

/***/ }),

/***/ "./src/icon/instagram.svg":
/*!********************************!*\
  !*** ./src/icon/instagram.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1cafedb2215ba13da28.svg";

/***/ }),

/***/ "./src/icon/logo.svg":
/*!***************************!*\
  !*** ./src/icon/logo.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75986a8cbee58f714ef1.svg";

/***/ }),

/***/ "./src/icon/notification.svg":
/*!***********************************!*\
  !*** ./src/icon/notification.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45d8a665c2ae9c3a5f79.svg";

/***/ }),

/***/ "./src/icon/pizza.svg":
/*!****************************!*\
  !*** ./src/icon/pizza.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88a0eda8e4d75a0e5b14.svg";

/***/ }),

/***/ "./src/icon/salad.svg":
/*!****************************!*\
  !*** ./src/icon/salad.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a10b0dff33e0cb7b8d0.svg";

/***/ }),

/***/ "./src/icon/twitter.svg":
/*!******************************!*\
  !*** ./src/icon/twitter.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62b394d66272ee27173b.svg";

/***/ }),

/***/ "./src/img/burger.png":
/*!****************************!*\
  !*** ./src/img/burger.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d74043e3e0987a122655.png";

/***/ }),

/***/ "./src/img/cake.png":
/*!**************************!*\
  !*** ./src/img/cake.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "318749af5f5c11120ace.png";

/***/ }),

/***/ "./src/img/drinks.png":
/*!****************************!*\
  !*** ./src/img/drinks.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03c83a079ebfb4635e49.png";

/***/ }),

/***/ "./src/img/map.png":
/*!*************************!*\
  !*** ./src/img/map.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "862a6ace615eed3ccc97.png";

/***/ }),

/***/ "./src/img/pizza.png":
/*!***************************!*\
  !*** ./src/img/pizza.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f57f3bf08b7bef4fae0.png";

/***/ }),

/***/ "./src/img/salad.png":
/*!***************************!*\
  !*** ./src/img/salad.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "124b181cd415b9af68a2.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _icon_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon/logo.svg */ "./src/icon/logo.svg");
/* harmony import */ var _icon_notification_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon/notification.svg */ "./src/icon/notification.svg");
/* harmony import */ var _icon_burger_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icon/burger.svg */ "./src/icon/burger.svg");
/* harmony import */ var _icon_salad_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icon/salad.svg */ "./src/icon/salad.svg");
/* harmony import */ var _icon_pizza_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icon/pizza.svg */ "./src/icon/pizza.svg");
/* harmony import */ var _icon_drinks_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icon/drinks.svg */ "./src/icon/drinks.svg");
/* harmony import */ var _icon_cake_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icon/cake.svg */ "./src/icon/cake.svg");
/* harmony import */ var _icon_facebook_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icon/facebook.svg */ "./src/icon/facebook.svg");
/* harmony import */ var _icon_instagram_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icon/instagram.svg */ "./src/icon/instagram.svg");
/* harmony import */ var _icon_twitter_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icon/twitter.svg */ "./src/icon/twitter.svg");
/* harmony import */ var _img_burger_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/burger.png */ "./src/img/burger.png");
/* harmony import */ var _img_salad_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./img/salad.png */ "./src/img/salad.png");
/* harmony import */ var _img_pizza_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./img/pizza.png */ "./src/img/pizza.png");
/* harmony import */ var _img_cake_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./img/cake.png */ "./src/img/cake.png");
/* harmony import */ var _img_drinks_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./img/drinks.png */ "./src/img/drinks.png");
/* harmony import */ var _img_map_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./img/map.png */ "./src/img/map.png");







// Images and icons
// Icons
// Header


// Menu Icons






// Footer



// Images







const body = document.querySelector('body');
const rootDiv = document.createElement('div');
rootDiv.id = 'root';
body.appendChild(rootDiv);

// Add elements to dom 
rootDiv.innerHTML = (0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_icon_logo_svg__WEBPACK_IMPORTED_MODULE_6__, _icon_notification_svg__WEBPACK_IMPORTED_MODULE_7__) + (0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_img_burger_png__WEBPACK_IMPORTED_MODULE_16__, '') + (0,_footer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_13__, _icon_instagram_svg__WEBPACK_IMPORTED_MODULE_14__, _icon_twitter_svg__WEBPACK_IMPORTED_MODULE_15__);

const menuItems = [
    {
        name: "Salad",
        price: 10,
        icon: _icon_salad_svg__WEBPACK_IMPORTED_MODULE_9__,
    },
    {
        name: "Burger",
        price: 5,
        icon: _icon_burger_svg__WEBPACK_IMPORTED_MODULE_8__,
    },
    {
        name: "Pizza",
        price: 15,
        icon: _icon_pizza_svg__WEBPACK_IMPORTED_MODULE_10__,
    },
    {
        name: "Drinks",
        price: 4,
        icon: _icon_drinks_svg__WEBPACK_IMPORTED_MODULE_11__,
    },
    {
        name: "Dessert",
        price: 5,
        icon: _icon_cake_svg__WEBPACK_IMPORTED_MODULE_12__,
    }
];

const imgObjLink = {
    salad: _img_salad_png__WEBPACK_IMPORTED_MODULE_17__,
    burger: _img_burger_png__WEBPACK_IMPORTED_MODULE_16__,
    pizza: _img_pizza_png__WEBPACK_IMPORTED_MODULE_18__,
    drinks: _img_drinks_png__WEBPACK_IMPORTED_MODULE_20__,
    dessert: _img_cake_png__WEBPACK_IMPORTED_MODULE_19__,
}

const renderMenuItems = () => {
    let btns = '';
    menuItems.forEach((item) => {
        const btn = (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.createMenuItemBtn)(item.name, item.icon, item.price);
        btns += btn;
    });
    return btns;
}
function setActive(id) {
    document.getElementById(id).classList.add('active');
}

function removeActive(item) {
    item.classList.remove('active');
}

function renderBtn() {
    const menu = document.getElementById('menu');
    menu.innerHTML = renderMenuItems();
}

function listenForClick() {
    const foodImgWrapper = document.getElementById('img-wrapper');
    const menuBtns = document.querySelectorAll('.menu-item');
    menuBtns.forEach(item => {
        item.addEventListener('click', () => {
            menuBtns.forEach(item => {
                removeActive(item);
            });
            setActive(item.id);
            const items = (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.setFoodImg)(imgObjLink[item.id]);
            foodImgWrapper.innerHTML = items;
        });
    });
}

function removeActiveFromHeaderLink(headerLinks) {
    headerLinks.forEach(link => {
        link.classList.remove('header-active');
    }); 
}

function listenForMenuBtnClick() {
    const main = document.getElementById('main-wrapper');
    const headerLinks = document.querySelectorAll('.header-link');
    headerLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            if (e.target.id === 'contact') {
                main.innerHTML = (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_img_map_png__WEBPACK_IMPORTED_MODULE_21__);
                preventDefaultFormBehaviour();
                removeActiveFromHeaderLink(headerLinks);
                e.target.classList.add('header-active');
            } else {
                main.innerHTML = (0,_home_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_img_burger_png__WEBPACK_IMPORTED_MODULE_16__);
                renderBtn();
                listenForClick();
                removeActiveFromHeaderLink(headerLinks);
                e.target.classList.add('header-active');
            }
        });
    });
}


// Form 
function preventDefaultFormBehaviour() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearForm(form);
        showFeedback();
    });    
}

function clearForm(form) {
    form.reset();
}

function showFeedback() {
    const feedback = document.getElementById('feedback');
    feedback.textContent = 'Submitted!'; 
}
renderBtn();
listenForClick();
listenForMenuBtnClick();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHFMQUFxTDtBQUNyTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLGFBQWEsTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsYUFBYSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLE1BQU0sYUFBYSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsTUFBTSxhQUFhLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxLQUFLLFVBQVUsWUFBWSxZQUFZLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsdUtBQXVLLFdBQVcsaUJBQWlCLGdCQUFnQiwwQkFBMEIsbUNBQW1DLDBDQUEw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aUMsb0RBQVEsQ0FBQyw2Q0FBUztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0byZmYW1pbHk9T3BlbitTYW5zJmZhbWlseT1QaXhlbGlmeStTYW5zJmZhbWlseT1Qb3BwaW5zJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLS1iZy1jb2xvcjogI2U5ZTRiYjtcbiAgICAtLWJnLW1lbnUtYnRuLWNvbG9yOiAjZmZmZmZmO1xuICAgIC0tYmctbWVudS1idG4tYWN0aXZlLWNvbG9yOiAjZmZhNTAwO1xuICAgIC0tcHJpbWFyeS1jb2xvcjogIzAwMDAwMDtcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcbn1cblxuKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI2hlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnIgMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jbWFpbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4NXZoO1xufVxuXG4jbWFpbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDg1dmg7XG59XG5cbiNmb290ZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbn1cblxuLm1haW4tY2VsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNTBweDtcblxuICAgIC5oZWFkaW5nLXdyYXBwZXIge1xuICAgICAgICA+aDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgPnAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWVudS1pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWVudS1idG4taWNvbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgID5pbWcge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICB9XG59XG5cbi5zb2NpYWwtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcblxuICAgID5pbWcge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgIH1cbn1cblxuLm5vdGlmaWNhdGlvbi13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuXG4gICAgPmltZyB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgfVxufVxuXG4jaGFyZGVyLWxpbmstd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDUwcHg7XG59XG5cbi5oZWFkZXItbGluayB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWVudS1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tZW51LWJ0bi1hY3RpdmUtY29sb3IpO1xuXG4gICAgLm1lbnUtYnRuLXByaWNlLXdyYXBwZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tZW51LWJ0bi1hY3RpdmUtY29sb3IpO1xuXG4gICAgICAgID5wIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5tZW51LWJ0bi1pY29uLXdyYXBwZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIH1cblxuICAgID5wIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxufVxuXG4jbG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi5oZWFkZXItY2VsbDpmaXJzdC1jaGlsZCB7XG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLmhlYWRlci1jZWxsOmxhc3QtY2hpbGQge1xuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbn1cblxuXG4jZm9vZC1pbWcge1xuICAgIHdpZHRoOiA2NTBweDtcbn1cblxuLm1lbnUtYnRuLXByaWNlLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbnRlbnQ6ICdcXCQ1JztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIHRvcDogLTIycHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tZW51LWJ0bi1hY3RpdmUtY29sb3IpO1xuXG4gICAgLm1lbnUtYnRuLXByaWNlLXdyYXBwZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1tZW51LWJ0bi1hY3RpdmUtY29sb3IpO1xuXG4gICAgICAgID5wIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5tZW51LWJ0bi1pY29uLXdyYXBwZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIH1cblxuICAgID5wIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxufVxuXG4vKiBDb250YWN0IHBhZ2UgKi9cbiNjb250YWN0LWZvcm0td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY1LCAwLCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZ2FwOiA1MHB4O1xuICAgIHBhZGRpbmc6IDQwcHg7XG5cbiAgICBcbiAgICBcbn1cblxuI2NvbnRhY3QtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMjBweDtcbiAgICBcbiAgICA+ZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiA0cHg7XG4gICAgICAgIFxuICAgICAgICA+aW5wdXQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMzB2dztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJnLW1lbnUtYnRuLWFjdGl2ZS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgPmlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1lbnUtYnRuLWFjdGl2ZS1jb2xvcik7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNvbnRhbnQtaW5mby13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAyMHB4O1xufVxuLmNvbnRhY3QtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG4jbWFwLWltZyB7XG4gICAgaGVpZ2h0OiA0MHZoO1xufVxuXG4vKiBIZWFkZXIgbGluayAqL1xuLmhlYWRlci1hY3RpdmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXItYWN0aXZlOjphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICB2YXIoLS1iZy1tZW51LWJ0bi1hY3RpdmUtY29sb3IpO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAtNHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixtQ0FBbUM7SUFDbkMsd0JBQXdCO0lBQ3hCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JB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QUNmLGdCQUFnQjtZQUNoQixpREFBaUQ7WUFDakQsaUNBQWlDO1lBQ2pDLDZCQUE2QjtRQUNqQztJQUNKO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0RBQWtEO0lBQ2xELE9BQU87SUFDUCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZmFtaWx5PU9wZW4rU2FucyZmYW1pbHk9UGl4ZWxpZnkrU2FucyZmYW1pbHk9UG9wcGlucyZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICAtLWJnLWNvbG9yOiAjZTllNGJiO1xcbiAgICAtLWJnLW1lbnUtYnRuLWNvbG9yOiAjZmZmZmZmO1xcbiAgICAtLWJnLW1lbnUtYnRuLWFjdGl2ZS1jb2xvcjogI2ZmYTUwMDtcXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMDAwMDAwO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI2hlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI21haW4td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxufVxcblxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxufVxcblxcbiNmb290ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubWFpbi1jZWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1MHB4O1xcblxcbiAgICAuaGVhZGluZy13cmFwcGVyIHtcXG4gICAgICAgID5oMiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgPnAge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUtYnRuLWljb24td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgPmltZyB7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgfVxcbn1cXG5cXG4uc29jaWFsLWljb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcblxcbiAgICA+aW1nIHtcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB9XFxufVxcblxcbi5ub3RpZmljYXRpb24td3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuXFxuICAgID5pbWcge1xcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIH1cXG59XFxuXFxuI2hhcmRlci1saW5rLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbi5oZWFkZXItbGluayB7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWVudS1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWVudS1idG4tYWN0aXZlLWNvbG9yKTtcXG5cXG4gICAgLm1lbnUtYnRuLXByaWNlLXdyYXBwZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWVudS1idG4tYWN0aXZlLWNvbG9yKTtcXG5cXG4gICAgICAgID5wIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5tZW51LWJ0bi1pY29uLXdyYXBwZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgfVxcblxcbiAgICA+cCB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIH1cXG59XFxuXFxuI2xvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5oZWFkZXItY2VsbDpmaXJzdC1jaGlsZCB7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5oZWFkZXItY2VsbDpsYXN0LWNoaWxkIHtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5cXG4jZm9vZC1pbWcge1xcbiAgICB3aWR0aDogNjUwcHg7XFxufVxcblxcbi5tZW51LWJ0bi1wcmljZS13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb250ZW50OiAnJDUnO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgdG9wOiAtMjJweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1lbnUtYnRuLWFjdGl2ZS1jb2xvcik7XFxuXFxuICAgIC5tZW51LWJ0bi1wcmljZS13cmFwcGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW1lbnUtYnRuLWFjdGl2ZS1jb2xvcik7XFxuXFxuICAgICAgICA+cCB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAubWVudS1idG4taWNvbi13cmFwcGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIH1cXG5cXG4gICAgPnAge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB9XFxufVxcblxcbi8qIENvbnRhY3QgcGFnZSAqL1xcbiNjb250YWN0LWZvcm0td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NSwgMCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcblxcbiAgICBcXG4gICAgXFxufVxcblxcbiNjb250YWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgXFxuICAgID5kaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDRweDtcXG4gICAgICAgIFxcbiAgICAgICAgPmlucHV0IHtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDMwdnc7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmctbWVudS1idG4tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgIH1cXG4gICAgICAgID5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctbWVudS1idG4tYWN0aXZlLWNvbG9yKTtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvcik7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmNvbnRhbnQtaW5mby13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5jb250YWN0LWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuI21hcC1pbWcge1xcbiAgICBoZWlnaHQ6IDQwdmg7XFxufVxcblxcbi8qIEhlYWRlciBsaW5rICovXFxuLmhlYWRlci1hY3RpdmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oZWFkZXItYWN0aXZlOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLWJnLW1lbnUtYnRuLWFjdGl2ZS1jb2xvcik7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogLTRweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RGb3JtKG1hcEltZykge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBpZD1cImNvbnRhY3QtZm9ybS13cmFwcGVyXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+U3RhcnRlZCgqKSBGaWVsZHMgYXJlIHJlcXVpcmVkPC9oND5cbiAgICAgICAgICAgIDxmb3JtIGlkPVwiY29udGFjdC1mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZSAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiU2F1cmFiaCBDaG91ZGhhcnlcIiByZXF1aXJlZCBhdXRvY29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZS1tYWlsXCI+RW1haWwgKjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZS1tYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJleGFtcGxlQG1haWwuY29tXCIgcmVxdWlyZWQgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlICo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dGFyZWFcIiBpZD1cIm1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBtZXNzYWdlIGhlcmUuXCIgcmVxdWlyZWQgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIiBpZD1cInN1Ym1pdC1idG5cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGg1IGlkPVwiZmVlZGJhY2tcIj48L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhbnQtaW5mby13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1pbmZvLXRleHQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udGFjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHJva2U9XCIjZmZmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9faWNvbkNhcnJpZXJcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE2LjEwMDcgMTMuMzU5TDE2LjU1NjIgMTIuOTA2MkMxNy4xODU4IDEyLjI4MDEgMTguMTY3MiAxMi4xNTE1IDE4Ljk3MjggMTIuNTg5NEwyMC44ODMzIDEzLjYyOEMyMi4xMTAyIDE0LjI5NDkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjIuMzgwNiAxNS45Mjk1IDIxLjQyMTcgMTYuODgzTDIwLjAwMTEgMTguMjk1NEMxOS42Mzk5IDE4LjY1NDYgMTkuMTkxNyAxOC45MTcxIDE4LjY3NjMgMTguOTY1MUMxNy40ODQxIDE5LjA3NjMgMTUuMDMxMyAxOS4wMTYzIDEyLjEzNzQgMTcuMzIyM0wxNi4xMDA3IDEzLjM1OVpNMTAuMTkwNyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3LjQ4MjU3TDEwLjQ3NzUgNy4xOTczOEMxMS4xODQxIDYuNDk0ODQgMTEuMjUwNyA1LjM2NjkxIDEwLjYzNDIgNC41NDM0OEw5LjM3MzI2IDIuODU5MDhDOC42MTAyOCAxLjgzOTkyIDcuMTM1OTYgMS43MDUyOSA2LjI2MTQ1IDIuNTc0ODNMNC42OTE4NSA0LjEzNTUyQzQuMjU4MjMgNC41NjY2OFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMuOTY3NjUgNS4xMjU1OSA0LjAwMjg5IDUuNzQ1NjFDNC4wNjc2MSA2Ljg4NDQ2IDQuNDU1ODIgOC45NjQ5IDYuMTUxNzYgMTEuNTIxNUwxMC4xOTA3IDcuNDgyNTdaXCIgZmlsbD1cIiMxQzI3NENcIj48L3BhdGg+IDxwYXRoIG9wYWNpdHk9XCIwLjZcIiBkPVwiTTEyLjA2MjcgMTEuNDk3MUM5LjExNjk1IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDguNTY4MDQgMTAuMTgzNiA3LjQ4OTEzIDEwLjE5MDMgNy40ODI0Mkw2LjE1MTM3IDExLjUyMTRDNi44MTc1NiAxMi41MjU2IDcuNjg1NTQgMTMuNjAzNCA4LjgxNDk3IDE0LjcyNjRDOS45NTQ2OCAxNS44NTk2IDExLjA3NTUgMTYuNzAwOCAxMi4xMzcgMTcuMzIyMkwxNi4xMDAzIDEzLjM1ODlDMTYuMTAwMyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMy4zNTg5IDE1LjAxNzcgMTQuNDM1MyAxMi4wNjI3IDExLjQ5NzFaXCIgZmlsbD1cIiMxQzI3NENcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhdGg+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+OTg3NjU0MzIxMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250YWN0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjI0cHhcIiBoZWlnaHQ9XCIyNHB4XCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiBjbGFzcz1cImljb25cIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCIjMDAwMDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIlNWR1JlcG9fYmdDYXJyaWVyXCIgc3Ryb2tlLXdpZHRoPVwiMFwiPjwvZz48ZyBpZD1cIlNWR1JlcG9fdHJhY2VyQ2FycmllclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPjwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPjxwYXRoIGQ9XCJNNjA3LjcgNjQuMmMtMTAyLjkgMC0xODYuMyA4My40LTE4Ni4zIDE4Ni4zIDAgMzAgMTUuOSA2Ni42IDM4LjMgMTAzLjMgMTUuMiAyNC44IDMzLjMgNDkuNyA1MS43IFxuICAgICAgICAgICAgICAgICAgICAgICAgNzIuNkM1NTkgNDg2IDYwNy43IDUzMyA2MDcuNyA1MzNzMTcuNy0xNy4xIDQyLjMtNDMuOGMxNC0xNS4zIDMwLjMtMzMuNiA0Ni43LTUzLjggNDcuOS01OC43IDk3LjMtMTMyIDk3LjMtMTg0LjkgMC0xMDIuOS04My40LTE4Ni4zLTE4Ni4zLTE4Ni4zeiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG03Ny44IDM1My4yYy04IDEwLTE2LjEgMTkuNi0yMy45IDI4LjYtNy44IDktMTUuNCAxNy41LTIyLjUgMjUuMy0xMi41IDEzLjctMjMuNCAyNS4xLTMxLjQgMzMuMy0xMi41LTEyLjgtMzIuMy0zMy41LTUzLjgtNTguNS03LjgtOS0xNS44LTE4LjUtMjMuXG4gICAgICAgICAgICAgICAgICAgICAgICA4LTI4LjUtMTMuNS0xNi43LTI1LjUtMzIuNy0zNi4xLTQ4LTEwLjEtMTQuNi0xOC44LTI4LjQtMjYuMS00MS41LTE3LjYtMzEuNi0yNi42LTU3LjgtMjYuNi03Ny44IDAtNDQuNCAxNy4zLTg2LjIgNDguNy0xMTcuNkM1MjEuNCAxMDEuMyA1NjMuMiA4NCBcbiAgICAgICAgICAgICAgICAgICAgICAgIDYwNy42IDg0YzQ0LjQgMCA4Ni4yIDE3LjMgMTE3LjYgNDguNyAzMS40IDMxLjQgNDguNyA3My4yIDQ4LjcgMTE3LjYgMCAyMC04LjkgNDYuMS0yNi41IDc3LjYtMTQuOCAyNi45LTM1LjYgNTYuOS02MS45IDg5LjV6XCIgZmlsbD1cIiNmZmE1MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNjA3LjcgMTgzLjFjMzYuOSAwIDY3IDMwLjEgNjcgNjdzLTMwLjEgNjctNjcgNjctNjctMzAuMS02Ny02NyAzMC02NyA2Ny02N20wLTIwYy00OCAwLTg3IDM4LjktODcgODcgMCA0OCAzOC45IDg3IDg3IDg3IDQ4IDAgODctMzguOSBcbiAgICAgICAgICAgICAgICAgICAgICAgIDg3LTg3cy0zOS04Ny04Ny04N3pcIiBmaWxsPVwiI2ZmYTUwMFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOTI3LjkgMzUyLjRsLTE5NS43IDcwLjMtMzUuNiAxMi44Yy0xNi40IDIwLjEtMzIuNyAzOC41LTQ2LjcgNTMuOGwxLjkgMC45djQxNi42bC0xMi43LTUuOS00Ni4zLTIxLjYtMjEyLjItOTguOS04LjYtNHYtNDE1bDEzOS40IFxuICAgICAgICAgICAgICAgICAgICAgICAgNjVjLTE4LjQtMjMtMzYuNS00Ny44LTUxLjctNzIuNmwtNzcuNi0zNi4yLTMuNy0xLjctOC42LTQtNy44LTMuNy0yLjIgMC44TDY0IDQxNS4zdjUxMS44TDM2MiA4MjBsMjMwLjggMTA3LjYgNDYuMyAyMS42IDIyLjcgMTAuNkw5NjAgODUyLjdWMzQwLjlsLTMyLjEgXG4gICAgICAgICAgICAgICAgICAgICAgICAxMS41ek0zNTIgNzc2LjlsLTQuOSAxLjhMMTA4IDg2NC42VjQ0Ni4ybDI0NC04Ny43djQxOC40eiBtNTY0IDQ0LjlsLTI0NC4yIDg3LjdWNDkxLjFsNS4xLTEuOEw5MTYgNDAzLjR2NDE4LjR6XCIgZmlsbD1cIiMzOTM5M0FcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlN1aXRlIDM4MyA4NDAwIExlb3BvbGRvIFZpYSwgTm9ydGggRW1pbHRvbiwgVVQgMDI0NTA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz0ke21hcEltZ30gaWQ9XCJtYXAtaW1nXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9vdGVyKGZhY2UsIGluc3RhLCB0d2l0dGVyKSB7XG4gICAgcmV0dXJuIGAgPGRpdiBpZD1cImZvb3RlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXItY2VsbFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic29jaWFsLWljb25cIj48aW1nIHNyYz0ke2ZhY2V9IGFsdD1cIlwiPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic29jaWFsLWljb25cIj48aW1nIHNyYz0ke3R3aXR0ZXJ9IGFsdD1cIlwiPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic29jaWFsLWljb25cIj48aW1nIHNyYz0ke2luc3RhfSBhbHQ9XCJcIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWNlbGxcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLWNlbGxcIj5cbiAgICAgICAgPGg0PkNvcHl3cml0ZSAmY29weTsgMjAyMyBTYXVyYWJoIENob3VkaGFyeTwvaDQ+XG4gICAgPC9kaXY+XG48L2Rpdj5gXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcihsb2dvLCBub3RpZnkpIHtcbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJoZWFkZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNlbGxcIj5cbiAgICAgICAgPGltZyBzcmM9JHtsb2dvfSBhbHQ9XCJcIiBpZD1cImxvZ29cIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNlbGxcIiBpZD1cImhhcmRlci1saW5rLXdyYXBwZXJcIj5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImhlYWRlci1saW5rIGhlYWRlci1hY3RpdmVcIiBpZD1cImhvbWVcIj5Ib21lPC9hPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiaGVhZGVyLWxpbmtcIiBpZD1cImNvbnRhY3RcIj5Db250YWN0PC9hPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY2VsbFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibm90aWZpY2F0aW9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPSR7bm90aWZ5fSBhbHQ9XCJcIiBpZD1cIm5vdGlmeS1pY29uXCI+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC9kaXY+YDtcbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZU1haW4oaW1nKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGlkPVwibWFpbi13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJtYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbi1jZWxsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRpbmctd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+VGhlIGJlc3QgPGJyPmRlbGljaW91cyA8YnI+Zm9vZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPnRoYXQgbWVldHMgeW91ciBuZWVkczwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWVudVwiIGNsYXNzPVwibWVudS13cmFwcGVyXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWNlbGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaW1nLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JHtpbWd9IGFsdD1cIlwiIGlkPVwiZm9vZC1pbWdcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5gO1xufSIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW51SXRlbUJ0bihtZW51SXRlbSwgaW1nTGluaywgcHJpY2UpIHtcbiAgICByZXR1cm4gYDxidXR0b24gaWQ9JHttZW51SXRlbS50b0xvd2VyQ2FzZSgpfSBjbGFzcz1cIm1lbnUtaXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1idG4tcHJpY2Utd3JhcHBlclwiPlxuICAgICAgICA8cD4kJHtwcmljZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudS1idG4taWNvbi13cmFwcGVyXCI+XG4gICAgICAgIDxpbWcgc3JjPSR7aW1nTGlua30+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD4ke21lbnVJdGVtfTwvcD4gXG4gICAgPC9idXR0b24+YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZvb2RJbWcoaW1nTGluaykge1xuICAgIHJldHVybiBgPGltZyBpZD1cImZvb2QtaW1nXCIgc3JjPSR7aW1nTGlua30+YDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNyZWF0ZU1lbnVJdGVtQnRuLCBzZXRGb29kSW1nIH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlci5qcyc7XG5pbXBvcnQgZm9vdGVyIGZyb20gJy4vZm9vdGVyLmpzJztcbmltcG9ydCBob21lTWFpbiBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBJbWFnZXMgYW5kIGljb25zXG4vLyBJY29uc1xuLy8gSGVhZGVyXG5pbXBvcnQgbG9nbyBmcm9tICcuL2ljb24vbG9nby5zdmcnO1xuaW1wb3J0IG5vdGlmaWNhdGlvbiBmcm9tICcuL2ljb24vbm90aWZpY2F0aW9uLnN2Zyc7XG4vLyBNZW51IEljb25zXG5pbXBvcnQgYnVyZ2VyIGZyb20gJy4vaWNvbi9idXJnZXIuc3ZnJztcbmltcG9ydCBzYWxhZCBmcm9tICcuL2ljb24vc2FsYWQuc3ZnJztcbmltcG9ydCBwaXp6YSBmcm9tICcuL2ljb24vcGl6emEuc3ZnJztcbmltcG9ydCBkcmlua3MgZnJvbSAnLi9pY29uL2RyaW5rcy5zdmcnO1xuaW1wb3J0IGNha2UgZnJvbSAnLi9pY29uL2Nha2Uuc3ZnJztcblxuLy8gRm9vdGVyXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnLi9pY29uL2ZhY2Vib29rLnN2Zyc7XG5pbXBvcnQgaW5zdGFncmFtIGZyb20gJy4vaWNvbi9pbnN0YWdyYW0uc3ZnJztcbmltcG9ydCB0d2l0dGVyIGZyb20gJy4vaWNvbi90d2l0dGVyLnN2Zyc7XG4vLyBJbWFnZXNcbmltcG9ydCBidXJnZXJJbWcgZnJvbSAnLi9pbWcvYnVyZ2VyLnBuZyc7XG5pbXBvcnQgc2FsYWRJbWcgZnJvbSAnLi9pbWcvc2FsYWQucG5nJztcbmltcG9ydCBwaXp6YUltZyBmcm9tICcuL2ltZy9waXp6YS5wbmcnO1xuaW1wb3J0IGNha2VJbWcgZnJvbSAnLi9pbWcvY2FrZS5wbmcnO1xuaW1wb3J0IGRyaW5rc0ltZyBmcm9tICcuL2ltZy9kcmlua3MucG5nJztcbmltcG9ydCBtYXBJbWcgZnJvbSAnLi9pbWcvbWFwLnBuZyc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCByb290RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5yb290RGl2LmlkID0gJ3Jvb3QnO1xuYm9keS5hcHBlbmRDaGlsZChyb290RGl2KTtcblxuLy8gQWRkIGVsZW1lbnRzIHRvIGRvbSBcbnJvb3REaXYuaW5uZXJIVE1MID0gaGVhZGVyKGxvZ28sIG5vdGlmaWNhdGlvbikgKyBob21lTWFpbihidXJnZXJJbWcsICcnKSArIGZvb3RlcihmYWNlYm9vaywgaW5zdGFncmFtLCB0d2l0dGVyKTtcblxuY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJTYWxhZFwiLFxuICAgICAgICBwcmljZTogMTAsXG4gICAgICAgIGljb246IHNhbGFkLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkJ1cmdlclwiLFxuICAgICAgICBwcmljZTogNSxcbiAgICAgICAgaWNvbjogYnVyZ2VyLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlBpenphXCIsXG4gICAgICAgIHByaWNlOiAxNSxcbiAgICAgICAgaWNvbjogcGl6emEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiRHJpbmtzXCIsXG4gICAgICAgIHByaWNlOiA0LFxuICAgICAgICBpY29uOiBkcmlua3MsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiRGVzc2VydFwiLFxuICAgICAgICBwcmljZTogNSxcbiAgICAgICAgaWNvbjogY2FrZSxcbiAgICB9XG5dO1xuXG5jb25zdCBpbWdPYmpMaW5rID0ge1xuICAgIHNhbGFkOiBzYWxhZEltZyxcbiAgICBidXJnZXI6IGJ1cmdlckltZyxcbiAgICBwaXp6YTogcGl6emFJbWcsXG4gICAgZHJpbmtzOiBkcmlua3NJbWcsXG4gICAgZGVzc2VydDogY2FrZUltZyxcbn1cblxuY29uc3QgcmVuZGVyTWVudUl0ZW1zID0gKCkgPT4ge1xuICAgIGxldCBidG5zID0gJyc7XG4gICAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gY3JlYXRlTWVudUl0ZW1CdG4oaXRlbS5uYW1lLCBpdGVtLmljb24sIGl0ZW0ucHJpY2UpO1xuICAgICAgICBidG5zICs9IGJ0bjtcbiAgICB9KTtcbiAgICByZXR1cm4gYnRucztcbn1cbmZ1bmN0aW9uIHNldEFjdGl2ZShpZCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlKGl0ZW0pIHtcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJCdG4oKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gICAgbWVudS5pbm5lckhUTUwgPSByZW5kZXJNZW51SXRlbXMoKTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuRm9yQ2xpY2soKSB7XG4gICAgY29uc3QgZm9vZEltZ1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nLXdyYXBwZXInKTtcbiAgICBjb25zdCBtZW51QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWl0ZW0nKTtcbiAgICBtZW51QnRucy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVudUJ0bnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVBY3RpdmUoaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldEFjdGl2ZShpdGVtLmlkKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gc2V0Rm9vZEltZyhpbWdPYmpMaW5rW2l0ZW0uaWRdKTtcbiAgICAgICAgICAgIGZvb2RJbWdXcmFwcGVyLmlubmVySFRNTCA9IGl0ZW1zO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlRnJvbUhlYWRlckxpbmsoaGVhZGVyTGlua3MpIHtcbiAgICBoZWFkZXJMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1hY3RpdmUnKTtcbiAgICB9KTsgXG59XG5cbmZ1bmN0aW9uIGxpc3RlbkZvck1lbnVCdG5DbGljaygpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4td3JhcHBlcicpO1xuICAgIGNvbnN0IGhlYWRlckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlci1saW5rJyk7XG4gICAgaGVhZGVyTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ2NvbnRhY3QnKSB7XG4gICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBjb250YWN0KG1hcEltZyk7XG4gICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHRGb3JtQmVoYXZpb3VyKCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWN0aXZlRnJvbUhlYWRlckxpbmsoaGVhZGVyTGlua3MpO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1hY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWFpbi5pbm5lckhUTUwgPSBob21lTWFpbihidXJnZXJJbWcpO1xuICAgICAgICAgICAgICAgIHJlbmRlckJ0bigpO1xuICAgICAgICAgICAgICAgIGxpc3RlbkZvckNsaWNrKCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWN0aXZlRnJvbUhlYWRlckxpbmsoaGVhZGVyTGlua3MpO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cblxuLy8gRm9ybSBcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0Rm9ybUJlaGF2aW91cigpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QtZm9ybScpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjbGVhckZvcm0oZm9ybSk7XG4gICAgICAgIHNob3dGZWVkYmFjaygpO1xuICAgIH0pOyAgICBcbn1cblxuZnVuY3Rpb24gY2xlYXJGb3JtKGZvcm0pIHtcbiAgICBmb3JtLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIHNob3dGZWVkYmFjaygpIHtcbiAgICBjb25zdCBmZWVkYmFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVkYmFjaycpO1xuICAgIGZlZWRiYWNrLnRleHRDb250ZW50ID0gJ1N1Ym1pdHRlZCEnOyBcbn1cbnJlbmRlckJ0bigpO1xubGlzdGVuRm9yQ2xpY2soKTtcbmxpc3RlbkZvck1lbnVCdG5DbGljaygpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=