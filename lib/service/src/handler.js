(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/handler.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/graphql/schema.ts":
/*!*******************************!*\
  !*** ./src/graphql/schema.ts ***!
  \*******************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"typeDefs\", function() { return typeDefs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolvers\", function() { return resolvers; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-server-lambda */ \"apollo-server-lambda\");\n/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models_conference_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/conference.model */ \"./src/models/conference.model.ts\");\n\n\n\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2___default()([\"\\n  enum ConferenceStatus {\\n    UPCOMING\\n    ACTIVE\\n    COMPLETED\\n    INACTIVE\\n  }\\n\\n  type ConferenceDateRange {\\n    startDate: Date!\\n    endDate: Date!\\n  }\\n\\n  input ConferenceDateRangeInput {\\n    startDate: Date!\\n    endDate: Date!\\n  }\\n\\n  type ConferenceOrganizer {\\n    id: String!\\n    name: String!\\n    facebook: String\\n    twitter: String\\n    linkedin: String\\n    url: String\\n  }\\n\\n  type ConferenceSpeaker {\\n    id: String!\\n    name: String!\\n    title: String!\\n    company: String\\n    preferredPronoun: String\\n    talkTitle: String!\\n    talkAbstract: String!\\n    bio: String!\\n    presentationTime: Date!\\n  }\\n\\n  # type that represents data about a Conference\\n  type Conference {\\n    id: String!\\n    name: String!\\n    description: String!\\n    keywords: [String!]!\\n    dates: ConferenceDateRange!\\n    # FK to the ConferenceOrganizer table id field\\n    organizerId: String!\\n    organizer: ConferenceOrganizer\\n    speakers: [ConferenceSpeaker!]\\n    status: ConferenceStatus!\\n  }\\n\\n  input ConferenceInput {\\n    id: String\\n    name: String!\\n    description: String!\\n    keywords: [String!]!\\n    dates: ConferenceDateRangeInput!\\n    organizerId: String!\\n    status: ConferenceStatus!\\n  }\\n\\n  input ConferenceListFilter {\\n    name: String\\n    keywords: [String]\\n    speakers: [String]\\n  }\\n\\n  type Query {\\n    hello(name: String!): String!\\n    # get a list of conferences\\n    conferences(filter: ConferenceListFilter): [Conference]\\n    # get conference details\\n    conference(id: String!): Conference\\n  }\\n\\n  type Mutation {\\n    createConference(conference: ConferenceInput!): Conference\\n  }\\n\\n  scalar Date\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar typeDefs = Object(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_3__[\"gql\"])(_templateObject());\nvar resolvers = {\n  Query: {\n    hello: function () {\n      var _hello = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_source, _ref) {\n        var name;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                name = _ref.name;\n                return _context.abrupt(\"return\", \"\".concat(name));\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function hello(_x, _x2) {\n        return _hello.apply(this, arguments);\n      }\n\n      return hello;\n    }(),\n    conferences: function () {\n      var _conferences = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                return _context2.abrupt(\"return\", [{\n                  id: 'absshjdshshs',\n                  name: 'Women Who Code',\n                  description: 'Lots od code stuff',\n                  keywords: ['GraphQL', 'NodeJs', 'Serverless'],\n                  dates: {\n                    startDate: new Date(),\n                    endDate: new Date()\n                  },\n                  organizerId: 'hdhdhd',\n                  status: _models_conference_model__WEBPACK_IMPORTED_MODULE_4__[\"ConferenceStatus\"].ACTIVE\n                }]);\n\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function conferences() {\n        return _conferences.apply(this, arguments);\n      }\n\n      return conferences;\n    }(),\n    conference: function () {\n      var _conference = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                return _context3.abrupt(\"return\", null);\n\n              case 1:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      function conference() {\n        return _conference.apply(this, arguments);\n      }\n\n      return conference;\n    }()\n  },\n  Mutation: {\n    createConference: function () {\n      var _createConference = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(_source, _ref2) {\n        var conference;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n          while (1) {\n            switch (_context4.prev = _context4.next) {\n              case 0:\n                conference = _ref2.conference;\n                return _context4.abrupt(\"return\", conference);\n\n              case 2:\n              case \"end\":\n                return _context4.stop();\n            }\n          }\n        }, _callee4);\n      }));\n\n      function createConference(_x3, _x4) {\n        return _createConference.apply(this, arguments);\n      }\n\n      return createConference;\n    }()\n  },\n  Conference: {\n    speakers: function () {\n      var _speakers = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(parent) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n          while (1) {\n            switch (_context5.prev = _context5.next) {\n              case 0:\n                console.log('retrieveing conference speakers', parent.id);\n                return _context5.abrupt(\"return\", [{\n                  id: 'hjdhdhdhd',\n                  name: 'Chris Whited',\n                  title: 'Senior Software Engineer',\n                  company: 'This Dot',\n                  talkTitle: 'Intro to GraphQL',\n                  talkAbstract: 'GraphQL',\n                  preferredPronoun: 'He/Him',\n                  presentationTime: new Date(),\n                  bio: 'software engineer'\n                }]);\n\n              case 2:\n              case \"end\":\n                return _context5.stop();\n            }\n          }\n        }, _callee5);\n      }));\n\n      function speakers(_x5) {\n        return _speakers.apply(this, arguments);\n      }\n\n      return speakers;\n    }()\n  }\n};\n\n//# sourceURL=webpack:///./src/graphql/schema.ts?");

/***/ }),

/***/ "./src/handler.ts":
/*!************************!*\
  !*** ./src/handler.ts ***!
  \************************/
/*! exports provided: graphqlHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"graphqlHandler\", function() { return graphqlHandler; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-server-lambda */ \"apollo-server-lambda\");\n/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphql/schema */ \"./src/graphql/schema.ts\");\n\n\n\n\nvar server = new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_2__[\"ApolloServer\"]({\n  typeDefs: _graphql_schema__WEBPACK_IMPORTED_MODULE_3__[\"typeDefs\"],\n  resolvers: _graphql_schema__WEBPACK_IMPORTED_MODULE_3__[\"resolvers\"],\n  context: function () {\n    var _context2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {\n      var event, _context;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              event = _ref.event, _context = _ref.context;\n              return _context3.abrupt(\"return\", {\n                headers: event.headers,\n                functionName: _context.functionName,\n                event: event,\n                context: _context\n              });\n\n            case 2:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    function context(_x) {\n      return _context2.apply(this, arguments);\n    }\n\n    return context;\n  }()\n});\nvar graphqlHandler = server.createHandler({\n  cors: {\n    origin: '*',\n    methods: ['GET', 'POST', 'OPTIONS'],\n    allowedHeaders: ['Content-Type', 'Accept', 'Authorization']\n  }\n});\n\n//# sourceURL=webpack:///./src/handler.ts?");

/***/ }),

/***/ "./src/models/conference.model.ts":
/*!****************************************!*\
  !*** ./src/models/conference.model.ts ***!
  \****************************************/
/*! exports provided: ConferenceStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConferenceStatus\", function() { return ConferenceStatus; });\nvar ConferenceStatus;\n\n(function (ConferenceStatus) {\n  ConferenceStatus[\"UPCOMING\"] = \"UPCOMING\";\n  ConferenceStatus[\"ACTIVE\"] = \"ACTIVE\";\n  ConferenceStatus[\"COMPLETED\"] = \"COMPLETED\";\n  ConferenceStatus[\"INACTIVE\"] = \"INACTIVE\";\n})(ConferenceStatus || (ConferenceStatus = {}));\n\n//# sourceURL=webpack:///./src/models/conference.model.ts?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/taggedTemplateLiteral\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/taggedTemplateLiteral%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-lambda\");\n\n//# sourceURL=webpack:///external_%22apollo-server-lambda%22?");

/***/ })

/******/ })));