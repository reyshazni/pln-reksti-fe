"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/util/firebase.ts":
/*!******************************!*\
  !*** ./src/util/firebase.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"attachDataListener1\": function() { return /* binding */ attachDataListener1; },\n/* harmony export */   \"attachDataListener2\": function() { return /* binding */ attachDataListener2; }\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n// Import the functions you need from the SDKs you need\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBaL2m6vcPej-fI7hF7Y1T4LD2SMIwhYMg\",\n    authDomain: \"pln-reksti.firebaseapp.com\",\n    databaseURL: \"https://pln-reksti-default-rtdb.asia-southeast1.firebasedatabase.app\",\n    projectId: \"pln-reksti\",\n    storageBucket: \"pln-reksti.appspot.com\",\n    messagingSenderId: \"340226970797\",\n    appId: \"1:340226970797:web:7d45d89e3ca51675b4e224\",\n    measurementId: \"G-QFQ08NSKT3\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n\nconst attachDataListener1 = (setData1)=>{\n    const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)();\n    const starCountRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(db, \"\");\n    (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.onValue)(starCountRef, (snapshot)=>{\n        const data = snapshot.val();\n        console.log(data.data);\n        setData1(data.engine1.data);\n    });\n};\nconst attachDataListener2 = (setData2)=>{\n    const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.getDatabase)();\n    const starCountRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(db, \"\");\n    (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.onValue)(starCountRef, (snapshot)=>{\n        const data = snapshot.val();\n        console.log(data.data);\n        setData2(data.engine2.data);\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9maXJlYmFzZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsdURBQXVEO0FBQ1Y7QUFDN0MsNERBQTREO0FBQzVELGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLE1BQU1DLGlCQUFpQjtJQUNyQkMsUUFBUTtJQUNSQyxZQUFZO0lBQ1pDLGFBQWE7SUFDYkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0FBQ2pCO0FBRUEsc0JBQXNCO0FBQ3RCLE1BQU1DLE1BQU1WLDJEQUFhQSxDQUFDQztBQUVtQztBQUV0RCxNQUFNYSxzQkFBc0IsQ0FBQ0MsV0FBcUM7SUFDdkUsTUFBTUMsS0FBS0wsOERBQVdBO0lBQ3RCLE1BQU1NLGVBQWVMLHNEQUFHQSxDQUFDSSxJQUFJO0lBRTdCSCwwREFBT0EsQ0FBQ0ksY0FBYyxDQUFDQyxXQUFhO1FBQ2xDLE1BQU1DLE9BQU9ELFNBQVNFLEdBQUc7UUFDekJDLFFBQVFDLEdBQUcsQ0FBQ0gsS0FBS0EsSUFBSTtRQUNyQkosU0FBU0ksS0FBS0ksT0FBTyxDQUFDSixJQUFJO0lBQzVCO0FBQ0YsRUFBRTtBQUVLLE1BQU1LLHNCQUFzQixDQUFDQyxXQUFxQztJQUN2RSxNQUFNVCxLQUFLTCw4REFBV0E7SUFDdEIsTUFBTU0sZUFBZUwsc0RBQUdBLENBQUNJLElBQUk7SUFFN0JILDBEQUFPQSxDQUFDSSxjQUFjLENBQUNDLFdBQWE7UUFDbEMsTUFBTUMsT0FBT0QsU0FBU0UsR0FBRztRQUN6QkMsUUFBUUMsR0FBRyxDQUFDSCxLQUFLQSxJQUFJO1FBQ3JCTSxTQUFTTixLQUFLTyxPQUFPLENBQUNQLElBQUk7SUFDNUI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlsL2ZpcmViYXNlLnRzPzZlYTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuLy8gRm9yIEZpcmViYXNlIEpTIFNESyB2Ny4yMC4wIGFuZCBsYXRlciwgbWVhc3VyZW1lbnRJZCBpcyBvcHRpb25hbFxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lCYUwybTZ2Y1Blai1mSTdoRjdZMVQ0TEQyU01Jd2hZTWdcIixcbiAgYXV0aERvbWFpbjogXCJwbG4tcmVrc3RpLmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3Bsbi1yZWtzdGktZGVmYXVsdC1ydGRiLmFzaWEtc291dGhlYXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcFwiLFxuICBwcm9qZWN0SWQ6IFwicGxuLXJla3N0aVwiLFxuICBzdG9yYWdlQnVja2V0OiBcInBsbi1yZWtzdGkuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMzQwMjI2OTcwNzk3XCIsXG4gIGFwcElkOiBcIjE6MzQwMjI2OTcwNzk3OndlYjo3ZDQ1ZDg5ZTNjYTUxNjc1YjRlMjI0XCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1RRlEwOE5TS1QzXCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG5pbXBvcnQgeyBnZXREYXRhYmFzZSwgcmVmLCBvblZhbHVlfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcblxuZXhwb3J0IGNvbnN0IGF0dGFjaERhdGFMaXN0ZW5lcjEgPSAoc2V0RGF0YTE6IChkYXRhOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbiAgY29uc3QgZGIgPSBnZXREYXRhYmFzZSgpO1xuICBjb25zdCBzdGFyQ291bnRSZWYgPSByZWYoZGIsICcnKTtcbiAgXG4gIG9uVmFsdWUoc3RhckNvdW50UmVmLCAoc25hcHNob3QpID0+IHtcbiAgICBjb25zdCBkYXRhID0gc25hcHNob3QudmFsKCk7XG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcbiAgICBzZXREYXRhMShkYXRhLmVuZ2luZTEuZGF0YSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGF0dGFjaERhdGFMaXN0ZW5lcjIgPSAoc2V0RGF0YTI6IChkYXRhOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbiAgY29uc3QgZGIgPSBnZXREYXRhYmFzZSgpO1xuICBjb25zdCBzdGFyQ291bnRSZWYgPSByZWYoZGIsICcnKTtcbiAgXG4gIG9uVmFsdWUoc3RhckNvdW50UmVmLCAoc25hcHNob3QpID0+IHtcbiAgICBjb25zdCBkYXRhID0gc25hcHNob3QudmFsKCk7XG4gICAgY29uc29sZS5sb2coZGF0YS5kYXRhKTtcbiAgICBzZXREYXRhMihkYXRhLmVuZ2luZTIuZGF0YSk7XG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJnZXREYXRhYmFzZSIsInJlZiIsIm9uVmFsdWUiLCJhdHRhY2hEYXRhTGlzdGVuZXIxIiwic2V0RGF0YTEiLCJkYiIsInN0YXJDb3VudFJlZiIsInNuYXBzaG90IiwiZGF0YSIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJlbmdpbmUxIiwiYXR0YWNoRGF0YUxpc3RlbmVyMiIsInNldERhdGEyIiwiZW5naW5lMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/util/firebase.ts\n"));

/***/ })

});