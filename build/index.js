module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./main.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wordsanimator = function (_React$Component) {
  _inherits(Wordsanimator, _React$Component);

  function Wordsanimator() {
    _classCallCheck(this, Wordsanimator);

    return _possibleConstructorReturn(this, (Wordsanimator.__proto__ || Object.getPrototypeOf(Wordsanimator)).call(this));
  }

  _createClass(Wordsanimator, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.words.length > 6) {
        alert('Only 6 words are allowed!');
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'section',
          { className: 'rw-wrapper' },
          _react2.default.createElement(
            'span',
            { className: 'rw-sentence' },
            _react2.default.createElement(
              'span',
              null,
              this.props.partialSentance
            ),
            _react2.default.createElement(
              'div',
              { className: !this.props.style ? 'rw-words rw-words-1' : 'rw-words ' + this.props.style },
              this.props.words.map(function (word, i) {
                return _react2.default.createElement(
                  'span',
                  { key: i },
                  word
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Wordsanimator;
}(_react2.default.Component);

exports.default = Wordsanimator;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".rw-wrapper{\n\t/*width: 80%;*/\n\t/*position: relative;*/\n\t/*margin: 110px auto 0 auto;*/\n\t/*font-family: 'Bree Serif';*/\n\t/*padding: 10px;*/\n}\n.rw-sentence{\n\t/*margin: 0;*/\n\t/*text-align: left;*/\n\t/*text-shadow: 1px 1px 1px rgba(255,255,255,0.8);*/\n}\n.rw-sentence span{\n\t/*color: #444;*/\n\t/*font-size: 200%;*/\n\t/*font-weight: normal;*/\n}\n.rw-words-1{\n\tdisplay: inline;\n\ttext-indent:5px;\n}\n.rw-words-1 span{\n\tposition: absolute;\n\topacity: 0;\n\toverflow: hidden;\n\t-webkit-animation: rotateWord 18s linear infinite 0s;\n\t-ms-animation: rotateWord 18s linear infinite 0s;\n\tanimation: rotateWord 18s linear infinite 0s;\n}\n.rw-words-1 span:nth-child(2) {\n    -webkit-animation-delay: 3s;\n\t-ms-animation-delay: 3s;\n\tanimation-delay: 3s;\n}\n.rw-words-1 span:nth-child(3) {\n    -webkit-animation-delay: 6s;\n\t-ms-animation-delay: 6s;\n\tanimation-delay: 6s;\n}\n.rw-words-1 span:nth-child(4) {\n    -webkit-animation-delay: 9s;\n\t-ms-animation-delay: 9s;\n\tanimation-delay: 9s;\n}\n.rw-words-1 span:nth-child(5) {\n    -webkit-animation-delay: 12s;\n\t-ms-animation-delay: 12s;\n\tanimation-delay: 12s;\n}\n.rw-words-1 span:nth-child(6) {\n    -webkit-animation-delay: 15s;\n\t-ms-animation-delay: 15s;\n\tanimation-delay: 15s;\n}\n@-webkit-keyframes rotateWord {\n    0% { opacity: 0; }\n    2% { opacity: 0; -webkit-transform: translateY(-30px); }\n\t5% { opacity: 1; -webkit-transform: translateY(0px);}\n    17% { opacity: 1; -webkit-transform: translateY(0px); }\n\t20% { opacity: 0; -webkit-transform: translateY(30px); }\n\t80% { opacity: 0; }\n    100% { opacity: 0; }\n}\n@-ms-keyframes rotateWord {\n    0% { opacity: 0; }\n    2% { opacity: 0; -ms-transform: translateY(-30px); }\n\t5% { opacity: 1; -ms-transform: translateY(0px);}\n    17% { opacity: 1; -ms-transform: translateY(0px); }\n\t20% { opacity: 0; -ms-transform: translateY(30px); }\n\t80% { opacity: 0; }\n    100% { opacity: 0; }\n}\n@keyframes rotateWord {\n    0% { opacity: 0; }\n    2% { opacity: 0; -webkit-transform: translateY(-30px); transform: translateY(-30px); }\n\t5% { opacity: 1; -webkit-transform: translateY(0px); transform: translateY(0px);}\n    17% { opacity: 1; -webkit-transform: translateY(0px); transform: translateY(0px); }\n\t20% { opacity: 0; -webkit-transform: translateY(30px); transform: translateY(30px); }\n\t80% { opacity: 0; }\n    100% { opacity: 0; }\n}\n@media screen and (max-width: 768px){\n\t.rw-sentence { font-size: 18px; }\n}\n@media screen and (max-width: 320px){\n\t.rw-sentence { font-size: 9px; }\n}\n\n.rw-words-3{\n\tdisplay: inline;\n\ttext-indent: 10px;\n}\n.rw-words-3 span{\n\tposition: absolute;\n\topacity: 0;\n\toverflow: hidden;\n\tcolor: #888;\n\t-webkit-transform-origin: 10% 75%;\n\ttransform-origin: 10% 75%;\n\t-webkit-animation: rotateWord3 18s linear infinite 0s;\n\t-ms-animation: rotateWord3 18s linear infinite 0s;\n\tanimation: rotateWord3 18s linear infinite 0s;\n}\n.rw-words-3 span:nth-child(2) {\n    -webkit-animation-delay: 3s;\n\t-ms-animation-delay: 3s;\n\tanimation-delay: 3s;\n\tcolor: #6b889d;\n}\n.rw-words-3 span:nth-child(3) {\n    -webkit-animation-delay: 6s;\n\t-ms-animation-delay: 6s;\n\tanimation-delay: 6s;\n\tcolor: #6b739d;\n}\n.rw-words-3 span:nth-child(4) {\n    -webkit-animation-delay: 9s;\n\t-ms-animation-delay: 9s;\n\tanimation-delay: 9s;\n\tcolor: #7a6b9d;\n}\n.rw-words-3 span:nth-child(5) {\n    -webkit-animation-delay: 12s;\n\t-ms-animation-delay: 12s;\n\tanimation-delay: 12s;\n\tcolor: #8d6b9d;\n}\n.rw-words-3 span:nth-child(6) {\n    -webkit-animation-delay: 15s;\n\t-ms-animation-delay: 15s;\n\tanimation-delay: 15s;\n\tcolor: #9b6b9d;\n}\n@-webkit-keyframes rotateWord3 {\n    0% { opacity: 0; }\n    5% { opacity: 1; }\n    17% { opacity: 1; -webkit-transform: rotate(0deg); }\n\t19% { opacity: 1; -webkit-transform: rotate(98deg); }\n\t21% { opacity: 1; -webkit-transform: rotate(86deg); }\n\t23% { opacity: 1; -webkit-transform: translateY(85px) rotate(83deg); }\n\t25% { opacity: 0; -webkit-transform: translateY(170px) rotate(80deg); }\n\t80% { opacity: 0; }\n    100% { opacity: 0; }\n}\n@-ms-keyframes rotateWord3 {\n    0% { opacity: 0; }\n    5% { opacity: 1; }\n    17% { opacity: 1; -ms-transform: rotate(0deg); }\n\t19% { opacity: 1; -ms-transform: rotate(98deg); }\n\t21% { opacity: 1; -ms-transform: rotate(86deg); }\n\t23% { opacity: 1; -ms-transform: translateY(85px) rotate(83deg); }\n\t25% { opacity: 0; -ms-transform: translateY(170px) rotate(80deg); }\n\t80% { opacity: 0; }\n    100% { opacity: 0; }\n}\n@keyframes rotateWord3 {\n    0% { opacity: 0; }\n    5% { opacity: 1; }\n    17% { opacity: 1; -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n\t19% { opacity: 1; -webkit-transform: rotate(98deg); transform: rotate(98deg); }\n\t21% { opacity: 1; -webkit-transform: rotate(86deg); transform: rotate(86deg); }\n\t23% { opacity: 1; -webkit-transform: translateY(85px) rotate(83deg); transform: translateY(85px) rotate(83deg); }\n\t25% { opacity: 0; -webkit-transform: translateY(170px) rotate(80deg); transform: translateY(170px) rotate(80deg); }\n\t80% { opacity: 0; }\n    100% { opacity: 0; }\n}\n@media screen and (max-width: 768px){\n\t.rw-sentence { font-size: 18px; }\n}\n@media screen and (max-width: 320px){\n\t.rw-sentence { font-size: 9px; }\n}\n\n\n.rw-words-4{\n\tposition: absolute;\n\tleft: 100px;\n\ttop: 100px;\n\theight: 80px;\n\twidth: 400px;\n\t-webkit-perspective: 800px;\n\tperspective: 800px;\n}\n.rw-words-4 span{\n\tposition: absolute;\n\t/*font-size: 800%;*/\n\t/*color: transparent;*/\n\ttext-shadow: 0px 0px 80px rgba(255,255,255,1);\n\topacity: 0;\n\t-webkit-animation: rotateWord4 18s linear infinite 0s;\n\t-ms-animation: rotateWord4 18s linear infinite 0s;\n\tanimation: rotateWord4 18s linear infinite 0s;\n}\n.rw-words-4 span:nth-child(2) {\n    -webkit-animation-delay: 3s;\n\t-ms-animation-delay: 3s;\n\tanimation-delay: 3s;\n}\n.rw-words-4 span:nth-child(3) {\n    -webkit-animation-delay: 6s;\n\t-ms-animation-delay: 6s;\n\tanimation-delay: 6s;\n}\n.rw-words-4 span:nth-child(4) {\n    -webkit-animation-delay: 9s;\n\t-ms-animation-delay: 9s;\n\tanimation-delay: 9s;\n}\n.rw-words-4 span:nth-child(5) {\n    -webkit-animation-delay: 12s;\n\t-ms-animation-delay: 12s;\n\tanimation-delay: 12s;\n}\n.rw-words-4 span:nth-child(6) {\n    -webkit-animation-delay: 15s;\n\t-ms-animation-delay: 15s;\n\tanimation-delay: 15s;\n}\n@-webkit-keyframes rotateWord4 {\n    0% { opacity: 0; -webkit-animation-timing-function: ease-in; -webkit-transform: translateY(-200px) translateZ(300px) rotateY(-120deg); }\n    5% { opacity: 1; -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(0px) translateZ(0px) rotateY(0deg); }\n\t6% { text-shadow: 0px 0px 0px rgba(255,255,255,1); color: #fff; }\n    17% { opacity: 1; text-shadow: 0px 0px 0px rgba(255,255,255,1); color: #fff; }\n    20% { opacity: 0; }\n    100% { opacity: 0; }\n}\n@-ms-keyframes rotateWord4 {\n    0% { opacity: 0; -ms-animation-timing-function: ease-in; -ms-transform: translateY(-200px) translateZ(300px) rotateY(-120deg); }\n    5% { opacity: 1; -ms-animation-timing-function: ease-out; -ms-transform: translateY(0px) translateZ(0px) rotateY(0deg); }\n\t6% { text-shadow: 0px 0px 0px rgba(255,255,255,1); color: #fff; }\n    17% { opacity: 1; text-shadow: 0px 0px 0px rgba(255,255,255,1); color: #fff; }\n    20% { opacity: 0; }\n    100% { opacity: 0; }\n}\n@keyframes rotateWord4 {\n    0% { opacity: 0; -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in; -webkit-transform: translateY(-200px) translateZ(300px) rotateY(-120deg); transform: translateY(-200px) translateZ(300px) rotateY(-120deg); }\n    5% { opacity: 1; -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; -webkit-transform: translateY(0px) translateZ(0px) rotateY(0deg); transform: translateY(0px) translateZ(0px) rotateY(0deg); }\n\t6% { text-shadow: 0px 0px 0px rgba(255,255,255,1); color: #fff; }\n    17% { opacity: 1; text-shadow: 0px 0px 0px rgba(255,255,255,1); color: #fff; }\n    20% { opacity: 0; }\n    100% { opacity: 0; }\n}\n@media screen and (max-width: 1060px){\n\t.rw-sentence > span:first-child { font-size: 500%; left: 0px;}\n\t.rw-sentence > span:nth-child(2) { font-size: 200%; top: 125px; left: 30px; }\n\t.rw-sentence > span:nth-child(3) { top: 175px; left: 30px; font-size: 235%; }\n\t.rw-words-4 { left: 95px; top: 171px; }\n\t.rw-words-4 span { font-size: 250%; }\n\t.rw-sentence > span:last-child { top: 240px; left: 30px; }\n}\n@media screen and (max-width: 400px){\n\t.rw-sentence > span:first-child { font-size: 200%; left: 0px;}\n\t.rw-sentence > span:nth-child(2) { font-size: 100%; top: 50px; left: 10px; }\n\t.rw-sentence > span:nth-child(3) { top: 76px; left: 10px; font-size: 120%; }\n\t.rw-words-4 { left: 45px; top: 76px; }\n\t.rw-words-4 span { font-size: 120%; }\n\t.rw-sentence > span:last-child { top: 106px; left: 10px; font-size: 100%; }\n}\n\n\n\n.rw-words-2{\n\tdisplay: inline;\n\ttext-indent: 10px;\n}\n.rw-words-2 span{\n\tposition: absolute;\n\topacity: 0;\n\toverflow: hidden;\n\twidth: 100%;\n\tcolor: #6b969d;\n}\n.rw-words-2 span{\n\t-webkit-animation: rotateWordsSecond 18s linear infinite 0s;\n\t-ms-animation: rotateWordsSecond 18s linear infinite 0s;\n\tanimation: rotateWordsSecond 18s linear infinite 0s;\n}\n.rw-words-2 span:nth-child(2) {\n    -webkit-animation-delay: 3s;\n\t-ms-animation-delay: 3s;\n\tanimation-delay: 3s;\n\tcolor: #6b889d;\n}\n.rw-words-2 span:nth-child(3) {\n    -webkit-animation-delay: 6s;\n\t-ms-animation-delay: 6s;\n\tanimation-delay: 6s;\n\tcolor: #6b739d;\n}\n.rw-words-2 span:nth-child(4) {\n    -webkit-animation-delay: 9s;\n\t-ms-animation-delay: 9s;\n\tanimation-delay: 9s;\n\tcolor: #7a6b9d;\n}\n.rw-words-2 span:nth-child(5) {\n    -webkit-animation-delay: 12s;\n\t-ms-animation-delay: 12s;\n\tanimation-delay: 12s;\n\tcolor: #8d6b9d;\n}\n.rw-words-2 span:nth-child(6) {\n    -webkit-animation-delay: 15s;\n\t-ms-animation-delay: 15s;\n\tanimation-delay: 15s;\n\tcolor: #9b6b9d;\n}\n@-webkit-keyframes rotateWordsFirst {\n    0% { opacity: 1; -webkit-animation-timing-function: ease-in; height: 0px; }\n    8% { opacity: 1; height: 60px; }\n    19% { opacity: 1; height: 60px; }\n\t25% { opacity: 0; height: 60px; }\n    100% { opacity: 0; }\n}\n@-ms-keyframes rotateWordsFirst {\n    0% { opacity: 1; -ms-animation-timing-function: ease-in; height: 0px; }\n    8% { opacity: 1; height: 60px; }\n    19% { opacity: 1; height: 60px; }\n\t25% { opacity: 0; height: 60px; }\n    100% { opacity: 0; }\n}\n@keyframes rotateWordsFirst {\n    0% { opacity: 1; -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in; height: 0px; }\n    8% { opacity: 1; height: 60px; }\n    19% { opacity: 1; height: 60px; }\n\t25% { opacity: 0; height: 60px; }\n    100% { opacity: 0; }\n}\n\n@-webkit-keyframes rotateWordsSecond {\n    0% { opacity: 1; -webkit-animation-timing-function: ease-in; width: 0px; }\n    10% { opacity: 0.3; width: 0px; }\n\t20% { opacity: 1; width: 100%; }\n    27% { opacity: 0; width: 100%; }\n    100% { opacity: 0; }\n}\n@-ms-keyframes rotateWordsSecond {\n    0% { opacity: 1; -ms-animation-timing-function: ease-in; width: 0px; }\n    10% { opacity: 0.3; width: 0px; }\n\t20% { opacity: 1; width: 100%; }\n    27% { opacity: 0; width: 100%; }\n    100% { opacity: 0; }\n}\n@keyframes rotateWordsSecond {\n    0% { opacity: 1; -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in; width: 0px; }\n    10% { opacity: 0.3; width: 0px; }\n\t20% { opacity: 1; width: 100%; }\n    27% { opacity: 0; width: 100%; }\n    100% { opacity: 0; }\n}\n@media screen and (max-width: 768px){\n\t.rw-sentence { font-size: 18px; }\n}\n@media screen and (max-width: 320px){\n\t.rw-sentence { font-size: 9px; }\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);