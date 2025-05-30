/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/battleships.png":
/*!********************************!*\
  !*** ./assets/battleships.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a6a496c9dafaa55b22b.png";

/***/ }),

/***/ "./assets/calculator.png":
/*!*******************************!*\
  !*** ./assets/calculator.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc39ed1accbb96e00504.png";

/***/ }),

/***/ "./assets/etch-A-sketch.png":
/*!**********************************!*\
  !*** ./assets/etch-A-sketch.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c3538eac77138553e5d.png";

/***/ }),

/***/ "./assets/library.png":
/*!****************************!*\
  !*** ./assets/library.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3531c192e25a9b344d59.png";

/***/ }),

/***/ "./assets/oldGuy-1.jpg":
/*!*****************************!*\
  !*** ./assets/oldGuy-1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05125e4cfdef14019e40.jpg";

/***/ }),

/***/ "./assets/oldGuy.jpg":
/*!***************************!*\
  !*** ./assets/oldGuy.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7ab5cbf7b6a84745f789.jpg";

/***/ }),

/***/ "./assets/tic-tac-toe.png":
/*!********************************!*\
  !*** ./assets/tic-tac-toe.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13c4c06d3804f7cef30b.png";

/***/ }),

/***/ "./assets/weather-forecast.png":
/*!*************************************!*\
  !*** ./assets/weather-forecast.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "403444a587ce167071f6.png";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/mediaStyles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/mediaStyles.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/oldGuy.jpg */ "./assets/oldGuy.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/oldGuy-1.jpg */ "./assets/oldGuy-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* 963 px and greater 3 column display covered by style.css */

/*  1436px is max width for two column display */
/*  1200px is min-width for two column display without impact as per style.css */
/*   963px is min-width for two column display per style.css*/
/*   962px is max-width for single column display per style.css */
/*   500px is smallest laptop viewport width */
/*   320px is smallest viewport to cater for */ 

/* stles.css represents default desktop layout */


/*  at medial for tablet versions  */
@media (max-width: 1200px) {

header {
  min-width: 100vw;
  height: auto;
  min-height: 500px;
  background-color: bisque;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

#container {
  display:grid;
  grid-area: 1/1/2/2;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
  grid-template-rows: 1fr;
  justify-content: center;
  align-content: center;
  position: relative;
  min-height: 500px;
  min-width: vw;
  overflow: hidden; 
  background-color:rgb(100, 150, 200);
  z-index: 0;
}

#container:before { 
  display:grid;
  grid-area: 1/1/2/2;
  content: 'xyz';
  position:absolute;
  left: -10%;
  width:  350%;
  height: 70%; 
  background-color: rgb(255, 255, 255);
  -webkit-transform: rotate(-10deg);
  -moz-transform: rotate(-10deg);
  transform: rotate(-10deg);
   z-index: 0;
}

.picContainer_1 {
  display:grid;
  grid-column: 1 / span 6;
  grid-row: 1;
  margin : -10px 0px 0px 10px;;                 /*this pushes the image up, and keeps it proportional as it resizes */
  justify-content: center;
  align-content: center;
  justify-self: left;
  align-self: center;
  max-height: 480px;
  min-height: 450px;
  min-width: 450px;
  max-width: 480px;
  background-color: white;
   z-index: 10;
}

.imageContainer_1{
  max-height: 480px;
  min-height: 450px;
  min-width: 450px;
  max-width: 480px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  z-index: inherit;
}

.textOverlay_1 {
  opacity: 0;
}

.picContainer_1 > .attribution {
  padding-left : 15%;
}

    .textContainer {  
        display:grid;
        grid-column: 4 / -1;            /* -1 means span to the end */
        grid-row:1;                     /* on the same row */
        justify-content: right;
        align-content: bottom;
        justify-self: center;
        align-self: bottom;
        max-height: 800px;
        min-height: 500px;
        min-width: 480px;
        max-width: 800px;                             
        background-color: white;
        z-index: 5 ;
        border-color: blue;
        border-width: 2px;
        border-style: solid;
        margin-top: 60px;
    }

    .textLayout {
        padding-left:20px;
        padding-right: 20px;
        font-size:x-large;
        z-index: inherit;
    }

    .textOverlay_2 {
      opacity: 100;
      color: blue;
      z-index:5;
    } 

}

/*---------------------------------------------------------------------------*/

@media (max-width: 962px) {

header {
  min-width: 100vw;
  max-height: 1000px;                /* auto;  */
  min-height: 500px;
  background-color: bisque;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr; 
  justify-content: center;
  align-content: center;
}

#container {
  display:grid;
  grid-area: 1/1/2/2; 
  grid-template-columns: 1fr; 
  grid-template-rows: 1fr; 
  justify-content: center;
  align-content: center;
  position: relative;
  min-height: 500px;
  min-width: vw;
  overflow: hidden; 
  background-color:rgb(100, 150, 200);
  z-index: 0;
}

#container:before { 
  display:grid;
  grid-area: 1/1/2/2; 
  content: 'xyz';
  position: absolute;
  left: 0%;
  width: 110%; 
  height: 100%; 
  background-color: rgb(255, 255, 255);
  top: 50%;
  -webkit-transform: rotate(-10deg);
  -moz-transform: rotate(-10deg);
  transform: rotate(-10deg);
   z-index: 0;
}


.picContainer_1 {
  display:grid;
  grid-area: 1/1/2/2;
  justify-content: center;
  align-content: center;
  justify-self: center;
  align-self: center;
  max-height: 480px;
  min-height: 450px;
  min-width: 400px;
  max-width: 450px;
  background-color: white;
   z-index: 10;
}

.imageContainer_1{
  max-height: 480px;
  min-height: 450px;
  min-width: 400px;
  max-width: 450px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  z-index: inherit;
}

.textOverlay_1 {
  position: relative;
  margin-top: 90%;
  font-size: 2rem;
  color:blue;
  opacity:100;
}

.textOverlay_2 {
  display:none;
  opacity:0;
}

.picContainer_1 > .attribution {
  padding-left : 15%;
}

.textContainer {  
  display:grid;
  grid-area: 2/1/3/2;
  justify-content: center;
  align-content: center;
  justify-self: center;
  align-self: center;
  max-height: 1000px;
  min-height: 500px;
  min-width: 500px;
  max-width: 650px;                             
  background-color: white;
  z-index: 10 ;
  border-color: blue;
  border-width: 2px;
  border-style: solid;
}

.textLayout {
  padding-left: 40px;
  padding-right: 40px;
  font-size:x-large;
}

.textLayout > h1 {
  font-size:xx-large;
  font-weight: 800;
}

.textLayout > span {
  margin-left: 70%;
}

/* ---main---------------------------------------------- */
.projects {
  display: grid;
  grid-area: 1/1/2/2;
  min-height: auto;
  min-width: 500px;
  background-color: white;
  justify-content: center;
}

ul{
  padding-top: 80px;
}

.textOverlay_3 {
  width:100%;
  position: relative;
  top:0;
  left:0;
  grid-area: 1/1/2/2;
  margin-top: -25%;
  font-size: 2rem;
  color:blue;
}

/* --- footer ---------------------------------- */

footer {
  max-width: 100vw;
  min-width: 500px;
  height: auto;
  min-height: 600px;
  background-color:rgb(100, 150, 200);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
}

.textContainer-1 {  
  display:grid;
  grid-area: 1/1/2/2;
  max-height: 650px;
  min-height: 500px;
  min-width: 500px;
  max-width: 850px;
  background-color:rgb(100, 150, 200);
  color: white;
  z-index: 10 ;
  margin-left: 20px;
}

.textContainer-1 > h1,
.textLayout-1 {
  padding-left: 40px;
  padding-right: 40px;

}

.textContainer-1 > h1 {
  font-size:xx-large;
  font-weight: 800;
}

.textLayout-1 {
  font-size:x-large;
  background-color:rgb(100, 150, 200);
  color: white;
}

.textLayout > i,
.textLayout-1 > i {
  color:black;
  margin : 15px;
}


.picContainer_2 {
  display:grid;
  grid-area: 2/1/3/2;
  max-height: 650px;
  min-height: 500px;
  min-width: 500px;
  max-width: 650px;
  background-color: white;
   z-index: 10;
}

.imageContainer_2 {
  max-height: 650px;
  min-height: 500px;
  min-width: 500px;
  max-width: 650px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-position: center;
  z-index: inherit;
}

.picContainer_2 > .attribution {
  padding-left : 25%;
  background-color:rgb(100, 150, 200);
}

}

`, "",{"version":3,"sources":["webpack://./src/mediaStyles.css"],"names":[],"mappings":"AAAA,6DAA6D;;AAE7D,gDAAgD;AAChD,gFAAgF;AAChF,6DAA6D;AAC7D,iEAAiE;AACjE,8CAA8C;AAC9C,8CAA8C;;AAE9C,gDAAgD;;;AAGhD,oCAAoC;AACpC;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,wBAAwB;EACxB,aAAa;EACb,0BAA0B;EAC1B,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,sCAAsC;EACtC,kBAAkB;EAClB,uBAAuB;EACvB,uBAAuB;EACvB,qBAAqB;EACrB,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;EACb,gBAAgB;EAChB,mCAAmC;EACnC,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,UAAU;EACV,YAAY;EACZ,WAAW;EACX,oCAAoC;EACpC,iCAAiC;EACjC,8BAA8B;EAC9B,yBAAyB;GACxB,UAAU;AACb;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,WAAW;EACX,2BAA2B,mBAAmB,qEAAqE;EACnH,uBAAuB;EACvB,qBAAqB;EACrB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;GACtB,WAAW;AACd;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,yDAA6C;EAC7C,sBAAsB;EACtB,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;AACpB;;IAEI;QACI,YAAY;QACZ,mBAAmB,aAAa,6BAA6B;QAC7D,UAAU,sBAAsB,oBAAoB;QACpD,sBAAsB;QACtB,qBAAqB;QACrB,oBAAoB;QACpB,kBAAkB;QAClB,iBAAiB;QACjB,iBAAiB;QACjB,gBAAgB;QAChB,gBAAgB;QAChB,uBAAuB;QACvB,WAAW;QACX,kBAAkB;QAClB,iBAAiB;QACjB,mBAAmB;QACnB,gBAAgB;IACpB;;IAEA;QACI,iBAAiB;QACjB,mBAAmB;QACnB,iBAAiB;QACjB,gBAAgB;IACpB;;IAEA;MACE,YAAY;MACZ,WAAW;MACX,SAAS;IACX;;AAEJ;;AAEA,8EAA8E;;AAE9E;;AAEA;EACE,gBAAgB;EAChB,kBAAkB,iBAAiB,WAAW;EAC9C,iBAAiB;EACjB,wBAAwB;EACxB,aAAa;EACb,0BAA0B;EAC1B,uBAAuB;EACvB,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,0BAA0B;EAC1B,uBAAuB;EACvB,uBAAuB;EACvB,qBAAqB;EACrB,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;EACb,gBAAgB;EAChB,mCAAmC;EACnC,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,QAAQ;EACR,iCAAiC;EACjC,8BAA8B;EAC9B,yBAAyB;GACxB,UAAU;AACb;;;AAGA;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,qBAAqB;EACrB,oBAAoB;EACpB,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;GACtB,WAAW;AACd;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,yDAA6C;EAC7C,sBAAsB;EACtB,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,UAAU;EACV,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,uBAAuB;EACvB,qBAAqB;EACrB,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,0DAA0D;AAC1D;EACE,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,KAAK;EACL,MAAM;EACN,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,UAAU;AACZ;;AAEA,kDAAkD;;AAElD;EACE,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,mCAAmC;EACnC,aAAa;EACb,0BAA0B;EAC1B,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,mCAAmC;EACnC,YAAY;EACZ,YAAY;EACZ,iBAAiB;AACnB;;AAEA;;EAEE,kBAAkB;EAClB,mBAAmB;;AAErB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,mCAAmC;EACnC,YAAY;AACd;;AAEA;;EAEE,WAAW;EACX,aAAa;AACf;;;AAGA;EACE,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;GACtB,WAAW;AACd;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,yDAA+C;EAC/C,sBAAsB;EACtB,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,mCAAmC;AACrC;;AAEA","sourcesContent":["/* 963 px and greater 3 column display covered by style.css */\n\n/*  1436px is max width for two column display */\n/*  1200px is min-width for two column display without impact as per style.css */\n/*   963px is min-width for two column display per style.css*/\n/*   962px is max-width for single column display per style.css */\n/*   500px is smallest laptop viewport width */\n/*   320px is smallest viewport to cater for */ \n\n/* stles.css represents default desktop layout */\n\n\n/*  at medial for tablet versions  */\n@media (max-width: 1200px) {\n\nheader {\n  min-width: 100vw;\n  height: auto;\n  min-height: 500px;\n  background-color: bisque;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n}\n\n#container {\n  display:grid;\n  grid-area: 1/1/2/2;\n  grid-template-columns: repeat(12, 1fr);\n  position: relative;\n  grid-template-rows: 1fr;\n  justify-content: center;\n  align-content: center;\n  position: relative;\n  min-height: 500px;\n  min-width: vw;\n  overflow: hidden; \n  background-color:rgb(100, 150, 200);\n  z-index: 0;\n}\n\n#container:before { \n  display:grid;\n  grid-area: 1/1/2/2;\n  content: 'xyz';\n  position:absolute;\n  left: -10%;\n  width:  350%;\n  height: 70%; \n  background-color: rgb(255, 255, 255);\n  -webkit-transform: rotate(-10deg);\n  -moz-transform: rotate(-10deg);\n  transform: rotate(-10deg);\n   z-index: 0;\n}\n\n.picContainer_1 {\n  display:grid;\n  grid-column: 1 / span 6;\n  grid-row: 1;\n  margin : -10px 0px 0px 10px;;                 /*this pushes the image up, and keeps it proportional as it resizes */\n  justify-content: center;\n  align-content: center;\n  justify-self: left;\n  align-self: center;\n  max-height: 480px;\n  min-height: 450px;\n  min-width: 450px;\n  max-width: 480px;\n  background-color: white;\n   z-index: 10;\n}\n\n.imageContainer_1{\n  max-height: 480px;\n  min-height: 450px;\n  min-width: 450px;\n  max-width: 480px;\n  background-image: url(\"../assets/oldGuy.jpg\");\n  background-size: cover;\n  background-position: center;\n  z-index: inherit;\n}\n\n.textOverlay_1 {\n  opacity: 0;\n}\n\n.picContainer_1 > .attribution {\n  padding-left : 15%;\n}\n\n    .textContainer {  \n        display:grid;\n        grid-column: 4 / -1;            /* -1 means span to the end */\n        grid-row:1;                     /* on the same row */\n        justify-content: right;\n        align-content: bottom;\n        justify-self: center;\n        align-self: bottom;\n        max-height: 800px;\n        min-height: 500px;\n        min-width: 480px;\n        max-width: 800px;                             \n        background-color: white;\n        z-index: 5 ;\n        border-color: blue;\n        border-width: 2px;\n        border-style: solid;\n        margin-top: 60px;\n    }\n\n    .textLayout {\n        padding-left:20px;\n        padding-right: 20px;\n        font-size:x-large;\n        z-index: inherit;\n    }\n\n    .textOverlay_2 {\n      opacity: 100;\n      color: blue;\n      z-index:5;\n    } \n\n}\n\n/*---------------------------------------------------------------------------*/\n\n@media (max-width: 962px) {\n\nheader {\n  min-width: 100vw;\n  max-height: 1000px;                /* auto;  */\n  min-height: 500px;\n  background-color: bisque;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr; \n  justify-content: center;\n  align-content: center;\n}\n\n#container {\n  display:grid;\n  grid-area: 1/1/2/2; \n  grid-template-columns: 1fr; \n  grid-template-rows: 1fr; \n  justify-content: center;\n  align-content: center;\n  position: relative;\n  min-height: 500px;\n  min-width: vw;\n  overflow: hidden; \n  background-color:rgb(100, 150, 200);\n  z-index: 0;\n}\n\n#container:before { \n  display:grid;\n  grid-area: 1/1/2/2; \n  content: 'xyz';\n  position: absolute;\n  left: 0%;\n  width: 110%; \n  height: 100%; \n  background-color: rgb(255, 255, 255);\n  top: 50%;\n  -webkit-transform: rotate(-10deg);\n  -moz-transform: rotate(-10deg);\n  transform: rotate(-10deg);\n   z-index: 0;\n}\n\n\n.picContainer_1 {\n  display:grid;\n  grid-area: 1/1/2/2;\n  justify-content: center;\n  align-content: center;\n  justify-self: center;\n  align-self: center;\n  max-height: 480px;\n  min-height: 450px;\n  min-width: 400px;\n  max-width: 450px;\n  background-color: white;\n   z-index: 10;\n}\n\n.imageContainer_1{\n  max-height: 480px;\n  min-height: 450px;\n  min-width: 400px;\n  max-width: 450px;\n  background-image: url(\"../assets/oldGuy.jpg\");\n  background-size: cover;\n  background-position: center;\n  z-index: inherit;\n}\n\n.textOverlay_1 {\n  position: relative;\n  margin-top: 90%;\n  font-size: 2rem;\n  color:blue;\n  opacity:100;\n}\n\n.textOverlay_2 {\n  display:none;\n  opacity:0;\n}\n\n.picContainer_1 > .attribution {\n  padding-left : 15%;\n}\n\n.textContainer {  \n  display:grid;\n  grid-area: 2/1/3/2;\n  justify-content: center;\n  align-content: center;\n  justify-self: center;\n  align-self: center;\n  max-height: 1000px;\n  min-height: 500px;\n  min-width: 500px;\n  max-width: 650px;                             \n  background-color: white;\n  z-index: 10 ;\n  border-color: blue;\n  border-width: 2px;\n  border-style: solid;\n}\n\n.textLayout {\n  padding-left: 40px;\n  padding-right: 40px;\n  font-size:x-large;\n}\n\n.textLayout > h1 {\n  font-size:xx-large;\n  font-weight: 800;\n}\n\n.textLayout > span {\n  margin-left: 70%;\n}\n\n/* ---main---------------------------------------------- */\n.projects {\n  display: grid;\n  grid-area: 1/1/2/2;\n  min-height: auto;\n  min-width: 500px;\n  background-color: white;\n  justify-content: center;\n}\n\nul{\n  padding-top: 80px;\n}\n\n.textOverlay_3 {\n  width:100%;\n  position: relative;\n  top:0;\n  left:0;\n  grid-area: 1/1/2/2;\n  margin-top: -25%;\n  font-size: 2rem;\n  color:blue;\n}\n\n/* --- footer ---------------------------------- */\n\nfooter {\n  max-width: 100vw;\n  min-width: 500px;\n  height: auto;\n  min-height: 600px;\n  background-color:rgb(100, 150, 200);\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.textContainer-1 {  \n  display:grid;\n  grid-area: 1/1/2/2;\n  max-height: 650px;\n  min-height: 500px;\n  min-width: 500px;\n  max-width: 850px;\n  background-color:rgb(100, 150, 200);\n  color: white;\n  z-index: 10 ;\n  margin-left: 20px;\n}\n\n.textContainer-1 > h1,\n.textLayout-1 {\n  padding-left: 40px;\n  padding-right: 40px;\n\n}\n\n.textContainer-1 > h1 {\n  font-size:xx-large;\n  font-weight: 800;\n}\n\n.textLayout-1 {\n  font-size:x-large;\n  background-color:rgb(100, 150, 200);\n  color: white;\n}\n\n.textLayout > i,\n.textLayout-1 > i {\n  color:black;\n  margin : 15px;\n}\n\n\n.picContainer_2 {\n  display:grid;\n  grid-area: 2/1/3/2;\n  max-height: 650px;\n  min-height: 500px;\n  min-width: 500px;\n  max-width: 650px;\n  background-color: white;\n   z-index: 10;\n}\n\n.imageContainer_2 {\n  max-height: 650px;\n  min-height: 500px;\n  min-width: 500px;\n  max-width: 650px;\n  background-image: url(\"../assets/oldGuy-1.jpg\");\n  background-size: cover;\n  background-position: center;\n  z-index: inherit;\n}\n\n.picContainer_2 > .attribution {\n  padding-left : 25%;\n  background-color:rgb(100, 150, 200);\n}\n\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/oldGuy.jpg */ "./assets/oldGuy.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/weather-forecast.png */ "./assets/weather-forecast.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/library.png */ "./assets/library.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/etch-A-sketch.png */ "./assets/etch-A-sketch.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/tic-tac-toe.png */ "./assets/tic-tac-toe.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/calculator.png */ "./assets/calculator.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/battleships.png */ "./assets/battleships.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/oldGuy-1.jpg */ "./assets/oldGuy-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*css template with minimal reset by Digital Ocean */
/* reset notes

    images are responsive by default.
    important part of this CSS reset is the box-sizing: border-box,
    this will ensure consistent and predictable sizing. 
    The default value of content-box doesn’t account for the padding or border.
    Remove the rule for ol and ul to keep the default bullet points for lists.
    With font-weight: normal headings won’t be bolded by default.
    default font size is 16px. 
    Everything else can be specified in rem units and it will be based 16px. 
    Adjust globally to make the text a little larger overall:- change the base rule for something like 17 or 18px say.
*/

html {
  box-sizing: border-box;
  font-size: 16px;
  background-origin: border-box;
  background-repeat: no-repeat;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
  /*min-height: 100vh;*/
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

/*------------------------------------------------------------*/
body {
  min-height: 100vh;
  margin: 0;
}

header {
  min-width: 100vw;
  height: auto;
  min-height: 500px;
  background-color: bisque;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-content: center;
}

#container {
  display:grid;
  grid-area: 1/1/2/4;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-content: center;
  position: relative;
  min-height: 500px;
  min-width: vw;
  overflow: hidden; 
  background-color:rgb(100, 150, 200);
  z-index: 0;
}

#container:before { 
  display:grid;
  grid-area: 1/1/2/4;
  content: 'xyz';
  position: absolute;
  left: 0%;
  width: 110%; 
  height: 100%; 
  background-color: rgb(255, 255, 255); 
  top: 50%;
  -webkit-transform: rotate(-10deg);
  -moz-transform: rotate(-10deg);
  transform: rotate(-10deg);
   z-index: 0;
}


.picContainer_1 {
  display:grid;
  grid-area: 1/1/2/2;
  justify-content: center;
  align-content: center;
  justify-self: right;
  align-self: center;
  max-height: 480px;
  min-height: 450px;
  min-width: 400px;
  max-width: 450px;
  background-color: white;
   z-index: 10;
}

.imageContainer_1{
  max-height: 480px;
  min-height: 450px;
  min-width: 400px;
  max-width: 450px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  z-index: inherit;
}

.textOverlay_1 {
  position: relative;
  margin-top: 90%;
  font-size: 2rem;
  color:yellow;
  opacity:100;
}

.picContainer_1 > .attribution {
  padding-left : 15%;
}

.textContainer {  
  display:grid;
  grid-area: 1/2/2/4;
  justify-content: center;
  align-content: center;
  justify-self: left;
  align-self: center;
  max-height: 400px;
  min-height: 350px;
  min-width: 800px;
  max-width: 850px;
  background-color: white;
  z-index: 10 ;
  border-color: blue;
  border-width: 2px;
  border-style: solid;
}

.textLayout {
  margin: 0;
  padding-left: 40px;
  padding-right: 40px;
  font-size:x-large;
}

.textOverlay_2 {
      opacity: 0;
  }


.textLayout > h1 {
  font-size:xx-large;
  font-weight: 800;
}

/*--------------------------------------------------------------*/
main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
}

.projects {
  display: grid;
  grid-area: 1/1/2/2;
  min-height: auto; 
  min-width: 500px;
  background-color: white;
}

ul {
    display:grid;
    resize: both;
    justify-self: center;
    overflow: auto;
    grid-template-rows: repeat(2  minmax(250px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    height: 100%;
    width: 95%;
    background-color:white;
    padding-top: 80px;
}

.textOverlay_3 {
  width:100%;
  position: relative;
  top:0;
  left:0;
  grid-area: 1/1/2/2;
  margin-top: -20%;
  font-size: 2rem;
  color:blue;
}

li {
    display:grid;
    grid-template-rows: repeat(3, 1fr) ;
    grid-template-columns: 1fr ;
    max-height: 600px;
    min-height: 500px;
    max-width: 480px;
    background-color:white;
    margin: 50px;
    box-shadow: 10px 10px lightgrey; 
}

li > .screenshot {
    display: grid;
    grid-area: 1/1/3/2;
    background-color: aqua;
    min-width: 100%;
    min-height: 100%;
    background-size: cover;
    background-position: center;
}

li > .description {
    display: grid;
    align-content: center;
    grid-area: 3/1/4/2;
    background-color:white;
    min-width: 100%;
    min-height: 100%;
    font-size: 2rem;
    padding : 15px;
}

#pop-ups {
  font-size: 1rem;
}

#imgA {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

#imgB {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

#imgC {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

#imgD {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
}

#imgE {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___});
}

#imgF {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
}

span > i > img {
  width: 20px;
  height: 20px;
}

.description > span {
  margin-left: 70%;
}

.iconMedium {
  font-size: 2rem;
}

/*----------------------------------------------------------------*/
footer {
  min-width: 100vw;
  height: auto;
  min-height: 600px;
  background-color:rgb(100, 150, 200);
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-content: center;
}

.textContainer-1 {  
  display:grid;
  grid-area: 1/1/2/2;
  justify-content: center;
  align-content: center;
  justify-self: center;
  align-self: center;
  max-height: 580px;
  min-height: 550px;
  min-width: 650px;
  max-width: 850px;
  background-color:rgb(100, 150, 200);
  color: white;
  z-index: 10 ;
  margin-left: 20px;
}

.textContainer-1 > h1,
.textLayout-1 {
  padding-left: 40px;
  padding-right: 40px;
}

.textContainer-1 > h1 {
  font-size:xx-large;
  font-weight: 800;
}

.textLayout-1 {
  font-size:x-large;
  background-color:rgb(100, 150, 200);
  color: white;
}

.textLayout > i,
.textLayout-1 > i {
  color:black;
  margin : 15px;
}

.picContainer_2 {
  display:grid;
  grid-area: 1/2/2/3;
  justify-content: center;
  align-content: center;
  justify-self: center;
  align-self: center;
  max-height: 550px;
  min-height: 500px;
  min-width: 800px;
  max-width: 850px;
  background-color: white;
   z-index: 10;
}

.imageContainer_2 {
  max-height: 550px;
  min-height: 500px;
  min-width: 800px;
  max-width: 850px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_7___});
  background-size: cover;
  background-position: center;
  z-index: inherit;
}

.picContainer_2 > .attribution {
  padding-left : 25%;
  background-color:rgb(100, 150, 200);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*css template with minimal reset by Digital Ocean */\n/* reset notes\n\n    images are responsive by default.\n    important part of this CSS reset is the box-sizing: border-box,\n    this will ensure consistent and predictable sizing. \n    The default value of content-box doesn’t account for the padding or border.\n    Remove the rule for ol and ul to keep the default bullet points for lists.\n    With font-weight: normal headings won’t be bolded by default.\n    default font size is 16px. \n    Everything else can be specified in rem units and it will be based 16px. \n    Adjust globally to make the text a little larger overall:- change the base rule for something like 17 or 18px say.\n*/\n\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n  background-origin: border-box;\n  background-repeat: no-repeat;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody, h1, h2, h3, h4, h5, h6, p, ol, ul {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n  /*min-height: 100vh;*/\n}\n\nol, ul {\n  list-style: none;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n/*------------------------------------------------------------*/\nbody {\n  min-height: 100vh;\n  margin: 0;\n}\n\nheader {\n  min-width: 100vw;\n  height: auto;\n  min-height: 500px;\n  background-color: bisque;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  justify-content: center;\n  align-content: center;\n}\n\n#container {\n  display:grid;\n  grid-area: 1/1/2/4;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  justify-content: center;\n  align-content: center;\n  position: relative;\n  min-height: 500px;\n  min-width: vw;\n  overflow: hidden; \n  background-color:rgb(100, 150, 200);\n  z-index: 0;\n}\n\n#container:before { \n  display:grid;\n  grid-area: 1/1/2/4;\n  content: 'xyz';\n  position: absolute;\n  left: 0%;\n  width: 110%; \n  height: 100%; \n  background-color: rgb(255, 255, 255); \n  top: 50%;\n  -webkit-transform: rotate(-10deg);\n  -moz-transform: rotate(-10deg);\n  transform: rotate(-10deg);\n   z-index: 0;\n}\n\n\n.picContainer_1 {\n  display:grid;\n  grid-area: 1/1/2/2;\n  justify-content: center;\n  align-content: center;\n  justify-self: right;\n  align-self: center;\n  max-height: 480px;\n  min-height: 450px;\n  min-width: 400px;\n  max-width: 450px;\n  background-color: white;\n   z-index: 10;\n}\n\n.imageContainer_1{\n  max-height: 480px;\n  min-height: 450px;\n  min-width: 400px;\n  max-width: 450px;\n  background-image: url(\"../assets/oldGuy.jpg\");\n  background-size: cover;\n  background-position: center;\n  z-index: inherit;\n}\n\n.textOverlay_1 {\n  position: relative;\n  margin-top: 90%;\n  font-size: 2rem;\n  color:yellow;\n  opacity:100;\n}\n\n.picContainer_1 > .attribution {\n  padding-left : 15%;\n}\n\n.textContainer {  \n  display:grid;\n  grid-area: 1/2/2/4;\n  justify-content: center;\n  align-content: center;\n  justify-self: left;\n  align-self: center;\n  max-height: 400px;\n  min-height: 350px;\n  min-width: 800px;\n  max-width: 850px;\n  background-color: white;\n  z-index: 10 ;\n  border-color: blue;\n  border-width: 2px;\n  border-style: solid;\n}\n\n.textLayout {\n  margin: 0;\n  padding-left: 40px;\n  padding-right: 40px;\n  font-size:x-large;\n}\n\n.textOverlay_2 {\n      opacity: 0;\n  }\n\n\n.textLayout > h1 {\n  font-size:xx-large;\n  font-weight: 800;\n}\n\n/*--------------------------------------------------------------*/\nmain {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  justify-content: center;\n}\n\n.projects {\n  display: grid;\n  grid-area: 1/1/2/2;\n  min-height: auto; \n  min-width: 500px;\n  background-color: white;\n}\n\nul {\n    display:grid;\n    resize: both;\n    justify-self: center;\n    overflow: auto;\n    grid-template-rows: repeat(2  minmax(250px, 1fr));\n    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));\n    height: 100%;\n    width: 95%;\n    background-color:white;\n    padding-top: 80px;\n}\n\n.textOverlay_3 {\n  width:100%;\n  position: relative;\n  top:0;\n  left:0;\n  grid-area: 1/1/2/2;\n  margin-top: -20%;\n  font-size: 2rem;\n  color:blue;\n}\n\nli {\n    display:grid;\n    grid-template-rows: repeat(3, 1fr) ;\n    grid-template-columns: 1fr ;\n    max-height: 600px;\n    min-height: 500px;\n    max-width: 480px;\n    background-color:white;\n    margin: 50px;\n    box-shadow: 10px 10px lightgrey; \n}\n\nli > .screenshot {\n    display: grid;\n    grid-area: 1/1/3/2;\n    background-color: aqua;\n    min-width: 100%;\n    min-height: 100%;\n    background-size: cover;\n    background-position: center;\n}\n\nli > .description {\n    display: grid;\n    align-content: center;\n    grid-area: 3/1/4/2;\n    background-color:white;\n    min-width: 100%;\n    min-height: 100%;\n    font-size: 2rem;\n    padding : 15px;\n}\n\n#pop-ups {\n  font-size: 1rem;\n}\n\n#imgA {\n  background-image: url(\"../assets/weather-forecast.png\");\n}\n\n#imgB {\n  background-image: url(\"../assets/library.png\");\n}\n\n#imgC {\n  background-image: url(\"../assets/etch-A-sketch.png\");\n}\n\n#imgD {\n  background-image: url(\"../assets/tic-tac-toe.png\");\n}\n\n#imgE {\n  background-image: url(\"../assets/calculator.png\");\n}\n\n#imgF {\n  background-image: url(\"../assets/battleships.png\");\n}\n\nspan > i > img {\n  width: 20px;\n  height: 20px;\n}\n\n.description > span {\n  margin-left: 70%;\n}\n\n.iconMedium {\n  font-size: 2rem;\n}\n\n/*----------------------------------------------------------------*/\nfooter {\n  min-width: 100vw;\n  height: auto;\n  min-height: 600px;\n  background-color:rgb(100, 150, 200);\n  display: grid;\n  grid-template-columns: 0.8fr 1.2fr;\n  grid-template-rows: 1fr;\n  justify-content: center;\n  align-content: center;\n}\n\n.textContainer-1 {  \n  display:grid;\n  grid-area: 1/1/2/2;\n  justify-content: center;\n  align-content: center;\n  justify-self: center;\n  align-self: center;\n  max-height: 580px;\n  min-height: 550px;\n  min-width: 650px;\n  max-width: 850px;\n  background-color:rgb(100, 150, 200);\n  color: white;\n  z-index: 10 ;\n  margin-left: 20px;\n}\n\n.textContainer-1 > h1,\n.textLayout-1 {\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.textContainer-1 > h1 {\n  font-size:xx-large;\n  font-weight: 800;\n}\n\n.textLayout-1 {\n  font-size:x-large;\n  background-color:rgb(100, 150, 200);\n  color: white;\n}\n\n.textLayout > i,\n.textLayout-1 > i {\n  color:black;\n  margin : 15px;\n}\n\n.picContainer_2 {\n  display:grid;\n  grid-area: 1/2/2/3;\n  justify-content: center;\n  align-content: center;\n  justify-self: center;\n  align-self: center;\n  max-height: 550px;\n  min-height: 500px;\n  min-width: 800px;\n  max-width: 850px;\n  background-color: white;\n   z-index: 10;\n}\n\n.imageContainer_2 {\n  max-height: 550px;\n  min-height: 500px;\n  min-width: 800px;\n  max-width: 850px;\n  background-image: url(\"../assets/oldGuy-1.jpg\");\n  background-size: cover;\n  background-position: center;\n  z-index: inherit;\n}\n\n.picContainer_2 > .attribution {\n  padding-left : 25%;\n  background-color:rgb(100, 150, 200);\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/mediaStyles.css":
/*!*****************************!*\
  !*** ./src/mediaStyles.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mediaStyles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./mediaStyles.css */ "./node_modules/css-loader/dist/cjs.js!./src/mediaStyles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mediaStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mediaStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mediaStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mediaStyles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _mediaStyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediaStyles.css */ "./src/mediaStyles.css");


var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
console.log('vw ', vw, ' vh ', vh);
var body = document.querySelector('.body');
var lastVW = vw;
var resize_up_actioned = false;
var pageReload = false;
if (vw > 1201) {
  pageReload = true; //so no need for another
  var txt = document.querySelector(".textLayout");
  txt.style.marginLeft = 0;
  lastVW = vw;
}
visualViewport.onresize = function () {
  vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  var txt = document.querySelector(".textLayout");
  var txtOverlay = document.querySelector(".textOverlay_2");
  if (vw > 1201) {
    pageReload = true;
    txt.style.marginLeft = 0;
    lastVW = vw;
  } else {
    var margin;
    if (vw < 963) {
      margin = 20;
      txt.style.marginLeft = "".concat(margin, "px");
    }
    if (vw > 962 && vw < 1201) {
      console.log('vw: ', vw);
      margin = vw * .25 - 2 * vw * .01;
      txtOverlay.style.marginLeft = '150px';
      if (vw > 1040) {
        margin = vw * .2 - 2 * vw * .01;
        txtOverlay.style.marginLeft = '200px';
      }
      if (vw > 1120) {
        margin = vw * .15 - 2 * vw * .01;
        txtOverlay.style.marginLeft = '300px';
      }
      console.log('margin: ', margin);
      var _txt = document.querySelector(".textLayout");
      _txt.style.marginLeft = "".concat(margin, "px");
      lastVW = vw;
      if (resize_up_actioned) {
        resize_up_actioned = false;
      }
    }
  }
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yOGE0N2YwZTUzOGNmMTNhZTRjMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsZ0hBQXVDO0FBQ25GLDRDQUE0QyxvSEFBeUM7QUFDckYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLGdCQUFnQixNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZ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QUFDLEdBQUdBLEVBQUUsR0FBRSxHQUFLO1FBQ3JDdUIsVUFBVSxDQUFDSixLQUFLLENBQUNDLFVBQVUsR0FBRyxPQUFPO01BQ3pDO01BR0FULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsRUFBRVksTUFBTSxDQUFDO01BQy9CLElBQU1OLElBQUcsR0FBSWYsUUFBUSxDQUFDVyxhQUFhLENBQUMsYUFBYSxDQUFDO01BQ2xESSxJQUFHLENBQUNDLEtBQUssQ0FBQ0MsVUFBVSxNQUFBSyxNQUFBLENBQU1ELE1BQU0sT0FBSTtNQUNwQ1QsTUFBTSxHQUFHZixFQUFFO01BRVYsSUFBR2dCLGtCQUFrQixFQUFDO1FBQ1BBLGtCQUFrQixHQUFHLEtBQUs7TUFDMUM7SUFDSjtFQUVKO0FBRUEsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvbWVkaWFTdHlsZXMuY3NzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9tZWRpYVN0eWxlcy5jc3M/NjUyMiIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvb2xkR3V5LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9vbGRHdXktMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiA5NjMgcHggYW5kIGdyZWF0ZXIgMyBjb2x1bW4gZGlzcGxheSBjb3ZlcmVkIGJ5IHN0eWxlLmNzcyAqL1xuXG4vKiAgMTQzNnB4IGlzIG1heCB3aWR0aCBmb3IgdHdvIGNvbHVtbiBkaXNwbGF5ICovXG4vKiAgMTIwMHB4IGlzIG1pbi13aWR0aCBmb3IgdHdvIGNvbHVtbiBkaXNwbGF5IHdpdGhvdXQgaW1wYWN0IGFzIHBlciBzdHlsZS5jc3MgKi9cbi8qICAgOTYzcHggaXMgbWluLXdpZHRoIGZvciB0d28gY29sdW1uIGRpc3BsYXkgcGVyIHN0eWxlLmNzcyovXG4vKiAgIDk2MnB4IGlzIG1heC13aWR0aCBmb3Igc2luZ2xlIGNvbHVtbiBkaXNwbGF5IHBlciBzdHlsZS5jc3MgKi9cbi8qICAgNTAwcHggaXMgc21hbGxlc3QgbGFwdG9wIHZpZXdwb3J0IHdpZHRoICovXG4vKiAgIDMyMHB4IGlzIHNtYWxsZXN0IHZpZXdwb3J0IHRvIGNhdGVyIGZvciAqLyBcblxuLyogc3RsZXMuY3NzIHJlcHJlc2VudHMgZGVmYXVsdCBkZXNrdG9wIGxheW91dCAqL1xuXG5cbi8qICBhdCBtZWRpYWwgZm9yIHRhYmxldCB2ZXJzaW9ucyAgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcblxuaGVhZGVyIHtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG59XG5cbiNjb250YWluZXIge1xuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIG1pbi13aWR0aDogdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47IFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMDAsIDE1MCwgMjAwKTtcbiAgei1pbmRleDogMDtcbn1cblxuI2NvbnRhaW5lcjpiZWZvcmUgeyBcbiAgZGlzcGxheTpncmlkO1xuICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gIGNvbnRlbnQ6ICd4eXonO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgbGVmdDogLTEwJTtcbiAgd2lkdGg6ICAzNTAlO1xuICBoZWlnaHQ6IDcwJTsgXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gICB6LWluZGV4OiAwO1xufVxuXG4ucGljQ29udGFpbmVyXzEge1xuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiA2O1xuICBncmlkLXJvdzogMTtcbiAgbWFyZ2luIDogLTEwcHggMHB4IDBweCAxMHB4OzsgICAgICAgICAgICAgICAgIC8qdGhpcyBwdXNoZXMgdGhlIGltYWdlIHVwLCBhbmQga2VlcHMgaXQgcHJvcG9ydGlvbmFsIGFzIGl0IHJlc2l6ZXMgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDQ4MHB4O1xuICBtaW4taGVpZ2h0OiA0NTBweDtcbiAgbWluLXdpZHRoOiA0NTBweDtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICB6LWluZGV4OiAxMDtcbn1cblxuLmltYWdlQ29udGFpbmVyXzF7XG4gIG1heC1oZWlnaHQ6IDQ4MHB4O1xuICBtaW4taGVpZ2h0OiA0NTBweDtcbiAgbWluLXdpZHRoOiA0NTBweDtcbiAgbWF4LXdpZHRoOiA0ODBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHotaW5kZXg6IGluaGVyaXQ7XG59XG5cbi50ZXh0T3ZlcmxheV8xIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnBpY0NvbnRhaW5lcl8xID4gLmF0dHJpYnV0aW9uIHtcbiAgcGFkZGluZy1sZWZ0IDogMTUlO1xufVxuXG4gICAgLnRleHRDb250YWluZXIgeyAgXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDQgLyAtMTsgICAgICAgICAgICAvKiAtMSBtZWFucyBzcGFuIHRvIHRoZSBlbmQgKi9cbiAgICAgICAgZ3JpZC1yb3c6MTsgICAgICAgICAgICAgICAgICAgICAvKiBvbiB0aGUgc2FtZSByb3cgKi9cbiAgICAgICAganVzdGlmeS1jb250ZW50OiByaWdodDtcbiAgICAgICAgYWxpZ24tY29udGVudDogYm90dG9tO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tc2VsZjogYm90dG9tO1xuICAgICAgICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgICAgIG1pbi13aWR0aDogNDgwcHg7XG4gICAgICAgIG1heC13aWR0aDogODAwcHg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHotaW5kZXg6IDUgO1xuICAgICAgICBib3JkZXItY29sb3I6IGJsdWU7XG4gICAgICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIH1cblxuICAgIC50ZXh0TGF5b3V0IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OjIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTp4LWxhcmdlO1xuICAgICAgICB6LWluZGV4OiBpbmhlcml0O1xuICAgIH1cblxuICAgIC50ZXh0T3ZlcmxheV8yIHtcbiAgICAgIG9wYWNpdHk6IDEwMDtcbiAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgei1pbmRleDo1O1xuICAgIH0gXG5cbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5AbWVkaWEgKG1heC13aWR0aDogOTYycHgpIHtcblxuaGVhZGVyIHtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWF4LWhlaWdodDogMTAwMHB4OyAgICAgICAgICAgICAgICAvKiBhdXRvOyAgKi9cbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyOyBcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yOyBcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjsgXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIG1pbi13aWR0aDogdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47IFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMDAsIDE1MCwgMjAwKTtcbiAgei1pbmRleDogMDtcbn1cblxuI2NvbnRhaW5lcjpiZWZvcmUgeyBcbiAgZGlzcGxheTpncmlkO1xuICBncmlkLWFyZWE6IDEvMS8yLzI7IFxuICBjb250ZW50OiAneHl6JztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwJTtcbiAgd2lkdGg6IDExMCU7IFxuICBoZWlnaHQ6IDEwMCU7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgIHotaW5kZXg6IDA7XG59XG5cblxuLnBpY0NvbnRhaW5lcl8xIHtcbiAgZGlzcGxheTpncmlkO1xuICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDQ4MHB4O1xuICBtaW4taGVpZ2h0OiA0NTBweDtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICB6LWluZGV4OiAxMDtcbn1cblxuLmltYWdlQ29udGFpbmVyXzF7XG4gIG1heC1oZWlnaHQ6IDQ4MHB4O1xuICBtaW4taGVpZ2h0OiA0NTBweDtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHotaW5kZXg6IGluaGVyaXQ7XG59XG5cbi50ZXh0T3ZlcmxheV8xIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA5MCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6Ymx1ZTtcbiAgb3BhY2l0eToxMDA7XG59XG5cbi50ZXh0T3ZlcmxheV8yIHtcbiAgZGlzcGxheTpub25lO1xuICBvcGFjaXR5OjA7XG59XG5cbi5waWNDb250YWluZXJfMSA+IC5hdHRyaWJ1dGlvbiB7XG4gIHBhZGRpbmctbGVmdCA6IDE1JTtcbn1cblxuLnRleHRDb250YWluZXIgeyAgXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBtaW4td2lkdGg6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDY1MHB4OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMCA7XG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi50ZXh0TGF5b3V0IHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6eC1sYXJnZTtcbn1cblxuLnRleHRMYXlvdXQgPiBoMSB7XG4gIGZvbnQtc2l6ZTp4eC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnRleHRMYXlvdXQgPiBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDcwJTtcbn1cblxuLyogLS0tbWFpbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5wcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgbWluLXdpZHRoOiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG51bHtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG59XG5cbi50ZXh0T3ZlcmxheV8zIHtcbiAgd2lkdGg6MTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6MDtcbiAgbGVmdDowO1xuICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gIG1hcmdpbi10b3A6IC0yNSU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6Ymx1ZTtcbn1cblxuLyogLS0tIGZvb3RlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmZvb3RlciB7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG1pbi13aWR0aDogNTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDEwMCwgMTUwLCAyMDApO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xufVxuXG4udGV4dENvbnRhaW5lci0xIHsgIFxuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcbiAgbWF4LWhlaWdodDogNjUwcHg7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBtaW4td2lkdGg6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDg1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMDAsIDE1MCwgMjAwKTtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMCA7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4udGV4dENvbnRhaW5lci0xID4gaDEsXG4udGV4dExheW91dC0xIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuXG59XG5cbi50ZXh0Q29udGFpbmVyLTEgPiBoMSB7XG4gIGZvbnQtc2l6ZTp4eC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnRleHRMYXlvdXQtMSB7XG4gIGZvbnQtc2l6ZTp4LWxhcmdlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMDAsIDE1MCwgMjAwKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGV4dExheW91dCA+IGksXG4udGV4dExheW91dC0xID4gaSB7XG4gIGNvbG9yOmJsYWNrO1xuICBtYXJnaW4gOiAxNXB4O1xufVxuXG5cbi5waWNDb250YWluZXJfMiB7XG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xuICBtYXgtaGVpZ2h0OiA2NTBweDtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIG1pbi13aWR0aDogNTAwcHg7XG4gIG1heC13aWR0aDogNjUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgei1pbmRleDogMTA7XG59XG5cbi5pbWFnZUNvbnRhaW5lcl8yIHtcbiAgbWF4LWhlaWdodDogNjUwcHg7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBtaW4td2lkdGg6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgei1pbmRleDogaW5oZXJpdDtcbn1cblxuLnBpY0NvbnRhaW5lcl8yID4gLmF0dHJpYnV0aW9uIHtcbiAgcGFkZGluZy1sZWZ0IDogMjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMDAsIDE1MCwgMjAwKTtcbn1cblxufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tZWRpYVN0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNkRBQTZEOztBQUU3RCxnREFBZ0Q7QUFDaEQsZ0ZBQWdGO0FBQ2hGLDZEQUE2RDtBQUM3RCxpRUFBaUU7QUFDakUsOENBQThDO0FBQzlDLDhDQUE4Qzs7QUFFOUMsZ0RBQWdEOzs7QUFHaEQsb0NBQW9DO0FBQ3BDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLG9DQUFvQztFQUNwQyxpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLHlCQUF5QjtHQUN4QixVQUFVO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCwyQkFBMkIsbUJBQW1CLHFFQUFxRTtFQUNuSCx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtHQUN0QixXQUFXO0FBQ2Q7O0FBRUE7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RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLEtBQUs7RUFDTCxNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBLGtEQUFrRDs7QUFFbEQ7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsWUFBWTtBQUNkOztBQUVBOztFQUVFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0dBQ3RCLFdBQVc7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5REFBK0M7RUFDL0Msc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUNBQW1DO0FBQ3JDOztBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIDk2MyBweCBhbmQgZ3JlYXRlciAzIGNvbHVtbiBkaXNwbGF5IGNvdmVyZWQgYnkgc3R5bGUuY3NzICovXFxuXFxuLyogIDE0MzZweCBpcyBtYXggd2lkdGggZm9yIHR3byBjb2x1bW4gZGlzcGxheSAqL1xcbi8qICAxMjAwcHggaXMgbWluLXdpZHRoIGZvciB0d28gY29sdW1uIGRpc3BsYXkgd2l0aG91dCBpbXBhY3QgYXMgcGVyIHN0eWxlLmNzcyAqL1xcbi8qICAgOTYzcHggaXMgbWluLXdpZHRoIGZvciB0d28gY29sdW1uIGRpc3BsYXkgcGVyIHN0eWxlLmNzcyovXFxuLyogICA5NjJweCBpcyBtYXgtd2lkdGggZm9yIHNpbmdsZSBjb2x1bW4gZGlzcGxheSBwZXIgc3R5bGUuY3NzICovXFxuLyogICA1MDBweCBpcyBzbWFsbGVzdCBsYXB0b3Agdmlld3BvcnQgd2lkdGggKi9cXG4vKiAgIDMyMHB4IGlzIHNtYWxsZXN0IHZpZXdwb3J0IHRvIGNhdGVyIGZvciAqLyBcXG5cXG4vKiBzdGxlcy5jc3MgcmVwcmVzZW50cyBkZWZhdWx0IGRlc2t0b3AgbGF5b3V0ICovXFxuXFxuXFxuLyogIGF0IG1lZGlhbCBmb3IgdGFibGV0IHZlcnNpb25zICAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG5cXG5oZWFkZXIge1xcbiAgbWluLXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogYXV0bztcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTpncmlkO1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBtaW4td2lkdGg6IHZ3O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMDAsIDE1MCwgMjAwKTtcXG4gIHotaW5kZXg6IDA7XFxufVxcblxcbiNjb250YWluZXI6YmVmb3JlIHsgXFxuICBkaXNwbGF5OmdyaWQ7XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICBjb250ZW50OiAneHl6JztcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgbGVmdDogLTEwJTtcXG4gIHdpZHRoOiAgMzUwJTtcXG4gIGhlaWdodDogNzAlOyBcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuICAgei1pbmRleDogMDtcXG59XFxuXFxuLnBpY0NvbnRhaW5lcl8xIHtcXG4gIGRpc3BsYXk6Z3JpZDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiA2O1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBtYXJnaW4gOiAtMTBweCAwcHggMHB4IDEwcHg7OyAgICAgICAgICAgICAgICAgLyp0aGlzIHB1c2hlcyB0aGUgaW1hZ2UgdXAsIGFuZCBrZWVwcyBpdCBwcm9wb3J0aW9uYWwgYXMgaXQgcmVzaXplcyAqL1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXgtaGVpZ2h0OiA0ODBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiA0NTBweDtcXG4gIG1heC13aWR0aDogNDgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLmltYWdlQ29udGFpbmVyXzF7XFxuICBtYXgtaGVpZ2h0OiA0ODBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiA0NTBweDtcXG4gIG1heC13aWR0aDogNDgwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9vbGRHdXkuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgei1pbmRleDogaW5oZXJpdDtcXG59XFxuXFxuLnRleHRPdmVybGF5XzEge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnBpY0NvbnRhaW5lcl8xID4gLmF0dHJpYnV0aW9uIHtcXG4gIHBhZGRpbmctbGVmdCA6IDE1JTtcXG59XFxuXFxuICAgIC50ZXh0Q29udGFpbmVyIHsgIFxcbiAgICAgICAgZGlzcGxheTpncmlkO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDQgLyAtMTsgICAgICAgICAgICAvKiAtMSBtZWFucyBzcGFuIHRvIHRoZSBlbmQgKi9cXG4gICAgICAgIGdyaWQtcm93OjE7ICAgICAgICAgICAgICAgICAgICAgLyogb24gdGhlIHNhbWUgcm93ICovXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgICAgICAgYWxpZ24tY29udGVudDogYm90dG9tO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1zZWxmOiBib3R0b207XFxuICAgICAgICBtYXgtaGVpZ2h0OiA4MDBweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgICAgICAgbWluLXdpZHRoOiA0ODBweDtcXG4gICAgICAgIG1heC13aWR0aDogODAwcHg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgei1pbmRleDogNSA7XFxuICAgICAgICBib3JkZXItY29sb3I6IGJsdWU7XFxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcXG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgICB9XFxuXFxuICAgIC50ZXh0TGF5b3V0IHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDoyMHB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTp4LWxhcmdlO1xcbiAgICAgICAgei1pbmRleDogaW5oZXJpdDtcXG4gICAgfVxcblxcbiAgICAudGV4dE92ZXJsYXlfMiB7XFxuICAgICAgb3BhY2l0eTogMTAwO1xcbiAgICAgIGNvbG9yOiBibHVlO1xcbiAgICAgIHotaW5kZXg6NTtcXG4gICAgfSBcXG5cXG59XFxuXFxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NjJweCkge1xcblxcbmhlYWRlciB7XFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgbWF4LWhlaWdodDogMTAwMHB4OyAgICAgICAgICAgICAgICAvKiBhdXRvOyAgKi9cXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7IFxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTpncmlkO1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yOyBcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyBcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyOyBcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBtaW4td2lkdGg6IHZ3O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMDAsIDE1MCwgMjAwKTtcXG4gIHotaW5kZXg6IDA7XFxufVxcblxcbiNjb250YWluZXI6YmVmb3JlIHsgXFxuICBkaXNwbGF5OmdyaWQ7XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7IFxcbiAgY29udGVudDogJ3h5eic7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwJTtcXG4gIHdpZHRoOiAxMTAlOyBcXG4gIGhlaWdodDogMTAwJTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB0b3A6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuICAgei1pbmRleDogMDtcXG59XFxuXFxuXFxuLnBpY0NvbnRhaW5lcl8xIHtcXG4gIGRpc3BsYXk6Z3JpZDtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXgtaGVpZ2h0OiA0ODBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIG1heC13aWR0aDogNDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLmltYWdlQ29udGFpbmVyXzF7XFxuICBtYXgtaGVpZ2h0OiA0ODBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIG1heC13aWR0aDogNDUwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9vbGRHdXkuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgei1pbmRleDogaW5oZXJpdDtcXG59XFxuXFxuLnRleHRPdmVybGF5XzEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXRvcDogOTAlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6Ymx1ZTtcXG4gIG9wYWNpdHk6MTAwO1xcbn1cXG5cXG4udGV4dE92ZXJsYXlfMiB7XFxuICBkaXNwbGF5Om5vbmU7XFxuICBvcGFjaXR5OjA7XFxufVxcblxcbi5waWNDb250YWluZXJfMSA+IC5hdHRyaWJ1dGlvbiB7XFxuICBwYWRkaW5nLWxlZnQgOiAxNSU7XFxufVxcblxcbi50ZXh0Q29udGFpbmVyIHsgIFxcbiAgZGlzcGxheTpncmlkO1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIG1heC13aWR0aDogNjUwcHg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTAgO1xcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG4udGV4dExheW91dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOngtbGFyZ2U7XFxufVxcblxcbi50ZXh0TGF5b3V0ID4gaDEge1xcbiAgZm9udC1zaXplOnh4LWxhcmdlO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLnRleHRMYXlvdXQgPiBzcGFuIHtcXG4gIG1hcmdpbi1sZWZ0OiA3MCU7XFxufVxcblxcbi8qIC0tLW1haW4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLnByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbnVse1xcbiAgcGFkZGluZy10b3A6IDgwcHg7XFxufVxcblxcbi50ZXh0T3ZlcmxheV8zIHtcXG4gIHdpZHRoOjEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6MDtcXG4gIGxlZnQ6MDtcXG4gIGdyaWQtYXJlYTogMS8xLzIvMjtcXG4gIG1hcmdpbi10b3A6IC0yNSU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjpibHVlO1xcbn1cXG5cXG4vKiAtLS0gZm9vdGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5mb290ZXIge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDEwMCwgMTUwLCAyMDApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4udGV4dENvbnRhaW5lci0xIHsgIFxcbiAgZGlzcGxheTpncmlkO1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgbWF4LWhlaWdodDogNjUwcHg7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICBtYXgtd2lkdGg6IDg1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTAwLCAxNTAsIDIwMCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB6LWluZGV4OiAxMCA7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLnRleHRDb250YWluZXItMSA+IGgxLFxcbi50ZXh0TGF5b3V0LTEge1xcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgcGFkZGluZy1yaWdodDogNDBweDtcXG5cXG59XFxuXFxuLnRleHRDb250YWluZXItMSA+IGgxIHtcXG4gIGZvbnQtc2l6ZTp4eC1sYXJnZTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi50ZXh0TGF5b3V0LTEge1xcbiAgZm9udC1zaXplOngtbGFyZ2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMDAsIDE1MCwgMjAwKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRleHRMYXlvdXQgPiBpLFxcbi50ZXh0TGF5b3V0LTEgPiBpIHtcXG4gIGNvbG9yOmJsYWNrO1xcbiAgbWFyZ2luIDogMTVweDtcXG59XFxuXFxuXFxuLnBpY0NvbnRhaW5lcl8yIHtcXG4gIGRpc3BsYXk6Z3JpZDtcXG4gIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gIG1heC1oZWlnaHQ6IDY1MHB4O1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgbWF4LXdpZHRoOiA2NTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4uaW1hZ2VDb250YWluZXJfMiB7XFxuICBtYXgtaGVpZ2h0OiA2NTBweDtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgbWluLXdpZHRoOiA1MDBweDtcXG4gIG1heC13aWR0aDogNjUwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9vbGRHdXktMS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB6LWluZGV4OiBpbmhlcml0O1xcbn1cXG5cXG4ucGljQ29udGFpbmVyXzIgPiAuYXR0cmlidXRpb24ge1xcbiAgcGFkZGluZy1sZWZ0IDogMjUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTAwLCAxNTAsIDIwMCk7XFxufVxcblxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9vbGRHdXkuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3dlYXRoZXItZm9yZWNhc3QucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2xpYnJhcnkucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2V0Y2gtQS1za2V0Y2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3RpYy10YWMtdG9lLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9jYWxjdWxhdG9yLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9iYXR0bGVzaGlwcy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvb2xkR3V5LTEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypjc3MgdGVtcGxhdGUgd2l0aCBtaW5pbWFsIHJlc2V0IGJ5IERpZ2l0YWwgT2NlYW4gKi9cbi8qIHJlc2V0IG5vdGVzXG5cbiAgICBpbWFnZXMgYXJlIHJlc3BvbnNpdmUgYnkgZGVmYXVsdC5cbiAgICBpbXBvcnRhbnQgcGFydCBvZiB0aGlzIENTUyByZXNldCBpcyB0aGUgYm94LXNpemluZzogYm9yZGVyLWJveCxcbiAgICB0aGlzIHdpbGwgZW5zdXJlIGNvbnNpc3RlbnQgYW5kIHByZWRpY3RhYmxlIHNpemluZy4gXG4gICAgVGhlIGRlZmF1bHQgdmFsdWUgb2YgY29udGVudC1ib3ggZG9lc27igJl0IGFjY291bnQgZm9yIHRoZSBwYWRkaW5nIG9yIGJvcmRlci5cbiAgICBSZW1vdmUgdGhlIHJ1bGUgZm9yIG9sIGFuZCB1bCB0byBrZWVwIHRoZSBkZWZhdWx0IGJ1bGxldCBwb2ludHMgZm9yIGxpc3RzLlxuICAgIFdpdGggZm9udC13ZWlnaHQ6IG5vcm1hbCBoZWFkaW5ncyB3b27igJl0IGJlIGJvbGRlZCBieSBkZWZhdWx0LlxuICAgIGRlZmF1bHQgZm9udCBzaXplIGlzIDE2cHguIFxuICAgIEV2ZXJ5dGhpbmcgZWxzZSBjYW4gYmUgc3BlY2lmaWVkIGluIHJlbSB1bml0cyBhbmQgaXQgd2lsbCBiZSBiYXNlZCAxNnB4LiBcbiAgICBBZGp1c3QgZ2xvYmFsbHkgdG8gbWFrZSB0aGUgdGV4dCBhIGxpdHRsZSBsYXJnZXIgb3ZlcmFsbDotIGNoYW5nZSB0aGUgYmFzZSBydWxlIGZvciBzb21ldGhpbmcgbGlrZSAxNyBvciAxOHB4IHNheS5cbiovXG5cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtb3JpZ2luOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmJvZHksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIG9sLCB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgLyptaW4taGVpZ2h0OiAxMDB2aDsqL1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG59XG5cbmhlYWRlciB7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNjb250YWluZXIge1xuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtYXJlYTogMS8xLzIvNDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIG1pbi13aWR0aDogdnc7XG4gIG92ZXJmbG93OiBoaWRkZW47IFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMDAsIDE1MCwgMjAwKTtcbiAgei1pbmRleDogMDtcbn1cblxuI2NvbnRhaW5lcjpiZWZvcmUgeyBcbiAgZGlzcGxheTpncmlkO1xuICBncmlkLWFyZWE6IDEvMS8yLzQ7XG4gIGNvbnRlbnQ6ICd4eXonO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDAlO1xuICB3aWR0aDogMTEwJTsgXG4gIGhlaWdodDogMTAwJTsgXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgXG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgIHotaW5kZXg6IDA7XG59XG5cblxuLnBpY0NvbnRhaW5lcl8xIHtcbiAgZGlzcGxheTpncmlkO1xuICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWF4LWhlaWdodDogNDgwcHg7XG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgIHotaW5kZXg6IDEwO1xufVxuXG4uaW1hZ2VDb250YWluZXJfMXtcbiAgbWF4LWhlaWdodDogNDgwcHg7XG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgei1pbmRleDogaW5oZXJpdDtcbn1cblxuLnRleHRPdmVybGF5XzEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDkwJTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjp5ZWxsb3c7XG4gIG9wYWNpdHk6MTAwO1xufVxuXG4ucGljQ29udGFpbmVyXzEgPiAuYXR0cmlidXRpb24ge1xuICBwYWRkaW5nLWxlZnQgOiAxNSU7XG59XG5cbi50ZXh0Q29udGFpbmVyIHsgIFxuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtYXJlYTogMS8yLzIvNDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBsZWZ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgbWluLXdpZHRoOiA4MDBweDtcbiAgbWF4LXdpZHRoOiA4NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDEwIDtcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnRleHRMYXlvdXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgZm9udC1zaXplOngtbGFyZ2U7XG59XG5cbi50ZXh0T3ZlcmxheV8yIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuXG4udGV4dExheW91dCA+IGgxIHtcbiAgZm9udC1zaXplOnh4LWxhcmdlO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbm1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvamVjdHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gIG1pbi1oZWlnaHQ6IGF1dG87IFxuICBtaW4td2lkdGg6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxudWwge1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICByZXNpemU6IGJvdGg7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiAgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQ1MHB4LCAxZnIpKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xufVxuXG4udGV4dE92ZXJsYXlfMyB7XG4gIHdpZHRoOjEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOjA7XG4gIGxlZnQ6MDtcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xuICBtYXJnaW4tdG9wOiAtMjAlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOmJsdWU7XG59XG5cbmxpIHtcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKSA7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgO1xuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIG1heC13aWR0aDogNDgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IGxpZ2h0Z3JleTsgXG59XG5cbmxpID4gLnNjcmVlbnNob3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMy8yO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbmxpID4gLmRlc2NyaXB0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgcGFkZGluZyA6IDE1cHg7XG59XG5cbiNwb3AtdXBzIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4jaW1nQSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuI2ltZ0Ige1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbiNpbWdDIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG4jaW1nRCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX199KTtcbn1cblxuI2ltZ0Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19ffSk7XG59XG5cbiNpbWdGIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fX30pO1xufVxuXG5zcGFuID4gaSA+IGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5kZXNjcmlwdGlvbiA+IHNwYW4ge1xuICBtYXJnaW4tbGVmdDogNzAlO1xufVxuXG4uaWNvbk1lZGl1bSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmZvb3RlciB7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDEwMCwgMTUwLCAyMDApO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuOGZyIDEuMmZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnRleHRDb250YWluZXItMSB7ICBcbiAgZGlzcGxheTpncmlkO1xuICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1heC1oZWlnaHQ6IDU4MHB4O1xuICBtaW4taGVpZ2h0OiA1NTBweDtcbiAgbWluLXdpZHRoOiA2NTBweDtcbiAgbWF4LXdpZHRoOiA4NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTAwLCAxNTAsIDIwMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTAgO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnRleHRDb250YWluZXItMSA+IGgxLFxuLnRleHRMYXlvdXQtMSB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLnRleHRDb250YWluZXItMSA+IGgxIHtcbiAgZm9udC1zaXplOnh4LWxhcmdlO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4udGV4dExheW91dC0xIHtcbiAgZm9udC1zaXplOngtbGFyZ2U7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDEwMCwgMTUwLCAyMDApO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0TGF5b3V0ID4gaSxcbi50ZXh0TGF5b3V0LTEgPiBpIHtcbiAgY29sb3I6YmxhY2s7XG4gIG1hcmdpbiA6IDE1cHg7XG59XG5cbi5waWNDb250YWluZXJfMiB7XG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXgtaGVpZ2h0OiA1NTBweDtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIG1pbi13aWR0aDogODAwcHg7XG4gIG1heC13aWR0aDogODUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgei1pbmRleDogMTA7XG59XG5cbi5pbWFnZUNvbnRhaW5lcl8yIHtcbiAgbWF4LWhlaWdodDogNTUwcHg7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBtaW4td2lkdGg6IDgwMHB4O1xuICBtYXgtd2lkdGg6IDg1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgei1pbmRleDogaW5oZXJpdDtcbn1cblxuLnBpY0NvbnRhaW5lcl8yID4gLmF0dHJpYnV0aW9uIHtcbiAgcGFkZGluZy1sZWZ0IDogMjUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMDAsIDE1MCwgMjAwKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0RBQW9EO0FBQ3BEOzs7Ozs7Ozs7OztDQVdDOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGVB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QztFQUNuQyxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7R0FDdEIsV0FBVztBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHlEQUErQztFQUMvQyxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQ0FBbUM7QUFDckNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypjc3MgdGVtcGxhdGUgd2l0aCBtaW5pbWFsIHJlc2V0IGJ5IERpZ2l0YWwgT2NlYW4gKi9cXG4vKiByZXNldCBub3Rlc1xcblxcbiAgICBpbWFnZXMgYXJlIHJlc3BvbnNpdmUgYnkgZGVmYXVsdC5cXG4gICAgaW1wb3J0YW50IHBhcnQgb2YgdGhpcyBDU1MgcmVzZXQgaXMgdGhlIGJveC1zaXppbmc6IGJvcmRlci1ib3gsXFxuICAgIHRoaXMgd2lsbCBlbnN1cmUgY29uc2lzdGVudCBhbmQgcHJlZGljdGFibGUgc2l6aW5nLiBcXG4gICAgVGhlIGRlZmF1bHQgdmFsdWUgb2YgY29udGVudC1ib3ggZG9lc27igJl0IGFjY291bnQgZm9yIHRoZSBwYWRkaW5nIG9yIGJvcmRlci5cXG4gICAgUmVtb3ZlIHRoZSBydWxlIGZvciBvbCBhbmQgdWwgdG8ga2VlcCB0aGUgZGVmYXVsdCBidWxsZXQgcG9pbnRzIGZvciBsaXN0cy5cXG4gICAgV2l0aCBmb250LXdlaWdodDogbm9ybWFsIGhlYWRpbmdzIHdvbuKAmXQgYmUgYm9sZGVkIGJ5IGRlZmF1bHQuXFxuICAgIGRlZmF1bHQgZm9udCBzaXplIGlzIDE2cHguIFxcbiAgICBFdmVyeXRoaW5nIGVsc2UgY2FuIGJlIHNwZWNpZmllZCBpbiByZW0gdW5pdHMgYW5kIGl0IHdpbGwgYmUgYmFzZWQgMTZweC4gXFxuICAgIEFkanVzdCBnbG9iYWxseSB0byBtYWtlIHRoZSB0ZXh0IGEgbGl0dGxlIGxhcmdlciBvdmVyYWxsOi0gY2hhbmdlIHRoZSBiYXNlIHJ1bGUgZm9yIHNvbWV0aGluZyBsaWtlIDE3IG9yIDE4cHggc2F5LlxcbiovXFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBvbCwgdWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAvKm1pbi1oZWlnaHQ6IDEwMHZoOyovXFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICBncmlkLWFyZWE6IDEvMS8yLzQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgbWluLXdpZHRoOiB2dztcXG4gIG92ZXJmbG93OiBoaWRkZW47IFxcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTAwLCAxNTAsIDIwMCk7XFxuICB6LWluZGV4OiAwO1xcbn1cXG5cXG4jY29udGFpbmVyOmJlZm9yZSB7IFxcbiAgZGlzcGxheTpncmlkO1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi80O1xcbiAgY29udGVudDogJ3h5eic7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwJTtcXG4gIHdpZHRoOiAxMTAlOyBcXG4gIGhlaWdodDogMTAwJTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7IFxcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcbiAgIHotaW5kZXg6IDA7XFxufVxcblxcblxcbi5waWNDb250YWluZXJfMSB7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXgtaGVpZ2h0OiA0ODBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIG1heC13aWR0aDogNDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLmltYWdlQ29udGFpbmVyXzF7XFxuICBtYXgtaGVpZ2h0OiA0ODBweDtcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIG1heC13aWR0aDogNDUwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9vbGRHdXkuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgei1pbmRleDogaW5oZXJpdDtcXG59XFxuXFxuLnRleHRPdmVybGF5XzEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXRvcDogOTAlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6eWVsbG93O1xcbiAgb3BhY2l0eToxMDA7XFxufVxcblxcbi5waWNDb250YWluZXJfMSA+IC5hdHRyaWJ1dGlvbiB7XFxuICBwYWRkaW5nLWxlZnQgOiAxNSU7XFxufVxcblxcbi50ZXh0Q29udGFpbmVyIHsgIFxcbiAgZGlzcGxheTpncmlkO1xcbiAgZ3JpZC1hcmVhOiAxLzIvMi80O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXgtaGVpZ2h0OiA0MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xcbiAgbWluLXdpZHRoOiA4MDBweDtcXG4gIG1heC13aWR0aDogODUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHotaW5kZXg6IDEwIDtcXG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuLnRleHRMYXlvdXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbiAgcGFkZGluZy1yaWdodDogNDBweDtcXG4gIGZvbnQtc2l6ZTp4LWxhcmdlO1xcbn1cXG5cXG4udGV4dE92ZXJsYXlfMiB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG5cXG4udGV4dExheW91dCA+IGgxIHtcXG4gIGZvbnQtc2l6ZTp4eC1sYXJnZTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICBtaW4taGVpZ2h0OiBhdXRvOyBcXG4gIG1pbi13aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxudWwge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIHJlc2l6ZTogYm90aDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyICBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQ1MHB4LCAxZnIpKTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgICBwYWRkaW5nLXRvcDogODBweDtcXG59XFxuXFxuLnRleHRPdmVybGF5XzMge1xcbiAgd2lkdGg6MTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDowO1xcbiAgbGVmdDowO1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAgbWFyZ2luLXRvcDogLTIwJTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOmJsdWU7XFxufVxcblxcbmxpIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpIDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgO1xcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcXG4gICAgbWluLWhlaWdodDogNTAwcHg7XFxuICAgIG1heC13aWR0aDogNDgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxuICAgIG1hcmdpbjogNTBweDtcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IGxpZ2h0Z3JleTsgXFxufVxcblxcbmxpID4gLnNjcmVlbnNob3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IDEvMS8zLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG5saSA+IC5kZXNjcmlwdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZyA6IDE1cHg7XFxufVxcblxcbiNwb3AtdXBzIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2ltZ0Ege1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvd2VhdGhlci1mb3JlY2FzdC5wbmdcXFwiKTtcXG59XFxuXFxuI2ltZ0Ige1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvbGlicmFyeS5wbmdcXFwiKTtcXG59XFxuXFxuI2ltZ0Mge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvZXRjaC1BLXNrZXRjaC5wbmdcXFwiKTtcXG59XFxuXFxuI2ltZ0Qge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvdGljLXRhYy10b2UucG5nXFxcIik7XFxufVxcblxcbiNpbWdFIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2NhbGN1bGF0b3IucG5nXFxcIik7XFxufVxcblxcbiNpbWdGIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2JhdHRsZXNoaXBzLnBuZ1xcXCIpO1xcbn1cXG5cXG5zcGFuID4gaSA+IGltZyB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uID4gc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogNzAlO1xcbn1cXG5cXG4uaWNvbk1lZGl1bSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuZm9vdGVyIHtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDEwMCwgMTUwLCAyMDApO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC44ZnIgMS4yZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGV4dENvbnRhaW5lci0xIHsgIFxcbiAgZGlzcGxheTpncmlkO1xcbiAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1heC1oZWlnaHQ6IDU4MHB4O1xcbiAgbWluLWhlaWdodDogNTUwcHg7XFxuICBtaW4td2lkdGg6IDY1MHB4O1xcbiAgbWF4LXdpZHRoOiA4NTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDEwMCwgMTUwLCAyMDApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgei1pbmRleDogMTAgO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbi50ZXh0Q29udGFpbmVyLTEgPiBoMSxcXG4udGV4dExheW91dC0xIHtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XFxufVxcblxcbi50ZXh0Q29udGFpbmVyLTEgPiBoMSB7XFxuICBmb250LXNpemU6eHgtbGFyZ2U7XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4udGV4dExheW91dC0xIHtcXG4gIGZvbnQtc2l6ZTp4LWxhcmdlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTAwLCAxNTAsIDIwMCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50ZXh0TGF5b3V0ID4gaSxcXG4udGV4dExheW91dC0xID4gaSB7XFxuICBjb2xvcjpibGFjaztcXG4gIG1hcmdpbiA6IDE1cHg7XFxufVxcblxcbi5waWNDb250YWluZXJfMiB7XFxuICBkaXNwbGF5OmdyaWQ7XFxuICBncmlkLWFyZWE6IDEvMi8yLzM7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWF4LWhlaWdodDogNTUwcHg7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIG1pbi13aWR0aDogODAwcHg7XFxuICBtYXgtd2lkdGg6IDg1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgei1pbmRleDogMTA7XFxufVxcblxcbi5pbWFnZUNvbnRhaW5lcl8yIHtcXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBtaW4td2lkdGg6IDgwMHB4O1xcbiAgbWF4LXdpZHRoOiA4NTBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL29sZEd1eS0xLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHotaW5kZXg6IGluaGVyaXQ7XFxufVxcblxcbi5waWNDb250YWluZXJfMiA+IC5hdHRyaWJ1dGlvbiB7XFxuICBwYWRkaW5nLWxlZnQgOiAyNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMDAsIDE1MCwgMjAwKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVkaWFTdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVkaWFTdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vbWVkaWFTdHlsZXMuY3NzXCI7XG5cbmxldCB2dyA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCAwLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbmxldCB2aCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgMCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuY29uc29sZS5sb2coJ3Z3ICcsdncsJyB2aCAnLHZoKTtcblxubGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keScpO1xubGV0IGxhc3RWVyA9IHZ3O1xubGV0IHJlc2l6ZV91cF9hY3Rpb25lZCA9IGZhbHNlO1xubGV0IHBhZ2VSZWxvYWQgPSBmYWxzZTtcbmlmKHZ3ID4gMTIwMSl7XG4gICAgcGFnZVJlbG9hZCA9IHRydWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc28gbm8gbmVlZCBmb3IgYW5vdGhlclxuICAgIGNvbnN0IHR4dCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRleHRMYXlvdXRcIik7XG4gICAgdHh0LnN0eWxlLm1hcmdpbkxlZnQgPSAwO1xuICAgIGxhc3RWVyA9IHZ3O1xufVxuXG52aXN1YWxWaWV3cG9ydC5vbnJlc2l6ZSA9ICgpID0+e1xuICB2dyA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCAwLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgdmggPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IDAsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcbiAgY29uc3QgdHh0ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dExheW91dFwiKTtcbiAgbGV0IHR4dE92ZXJsYXkgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXh0T3ZlcmxheV8yXCIpO1xuXG4gaWYodncgPiAxMjAxKXtcbiAgICBwYWdlUmVsb2FkID0gdHJ1ZTtcbiAgICB0eHQuc3R5bGUubWFyZ2luTGVmdCA9IDA7XG4gICAgbGFzdFZXID0gdnc7XG5cbn1lbHNle1xuICAgIGxldCBtYXJnaW47XG5cbiAgICBpZiAodncgPCA5NjMpIHtcbiAgICAgICAgbWFyZ2luID0gMjA7XG4gICAgICAgIHR4dC5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7bWFyZ2lufXB4YDsgXG4gICAgfVxuICAgIFxuICAgIGlmKCh2dyA+IDk2MikgJiYgKHZ3IDwgMTIwMSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3Z3OiAnLHZ3KTtcbiAgICAgICAgbWFyZ2luID0gKCh2dyAqIC4yNSkgLSAoMiAqIHZ3ICouMDEpKTtcbiAgICAgICAgdHh0T3ZlcmxheS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzE1MHB4JztcblxuICAgICAgICBpZiggdncgPiAxMDQwKSB7XG4gICAgICAgICAgICBtYXJnaW4gPSAoKHZ3ICogLjIpIC0gKDIgKiB2dyAqLjAxKSk7XG4gICAgICAgICAgICB0eHRPdmVybGF5LnN0eWxlLm1hcmdpbkxlZnQgPSAnMjAwcHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodncgPiAxMTIwKSB7XG4gICAgICAgICAgICBtYXJnaW4gPSAoKHZ3ICogLjE1KSAtICgyICogdncgKi4wMSkpO1xuICAgICAgICAgICAgdHh0T3ZlcmxheS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzMwMHB4JztcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnbWFyZ2luOiAnLCBtYXJnaW4pO1xuICAgICAgICBjb25zdCB0eHQgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXh0TGF5b3V0XCIpO1xuICAgICAgICB0eHQuc3R5bGUubWFyZ2luTGVmdCA9IGAke21hcmdpbn1weGA7XG4gICAgICAgIGxhc3RWVyA9IHZ3O1xuXG4gICAgICAgICBpZihyZXNpemVfdXBfYWN0aW9uZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplX3VwX2FjdGlvbmVkID0gZmFsc2U7XG4gICAgICAgIH0gXG4gICAgfVxuXG59XG5cbn1cbiJdLCJuYW1lcyI6WyJ2dyIsIk1hdGgiLCJtYXgiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInZoIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJsYXN0VlciLCJyZXNpemVfdXBfYWN0aW9uZWQiLCJwYWdlUmVsb2FkIiwidHh0Iiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwidmlzdWFsVmlld3BvcnQiLCJvbnJlc2l6ZSIsInR4dE92ZXJsYXkiLCJtYXJnaW4iLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9