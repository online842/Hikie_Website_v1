"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ui/animated-hero.tsx":
/*!*********************************************!*\
  !*** ./src/components/ui/animated-hero.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimatedHero)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRightIcon,PhoneCall!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRightIcon,PhoneCall!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/phone-call.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction AnimatedHero() {\n    _s();\n    const [titleNumber, setTitleNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const titles = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)({\n        \"AnimatedHero.useMemo[titles]\": ()=>[\n                \"İçerik Üret\",\n                \"Eğitim Ver\",\n                \"Ürün Sat\",\n                \"Topluluk Kur\",\n                \"Abonelik Başlat\",\n                \"Danışmanlık Ver\",\n                \"Mentorluk Yap\"\n            ]\n    }[\"AnimatedHero.useMemo[titles]\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AnimatedHero.useEffect\": ()=>{\n            const timeoutId = setTimeout({\n                \"AnimatedHero.useEffect.timeoutId\": ()=>{\n                    if (titleNumber === titles.length - 1) {\n                        setTitleNumber(0);\n                    } else {\n                        setTitleNumber(titleNumber + 1);\n                    }\n                }\n            }[\"AnimatedHero.useEffect.timeoutId\"], 1900);\n            return ({\n                \"AnimatedHero.useEffect\": ()=>clearTimeout(timeoutId)\n            })[\"AnimatedHero.useEffect\"];\n        }\n    }[\"AnimatedHero.useEffect\"], [\n        titleNumber,\n        titles\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full min-h-[80vh] relative isolate overflow-hidden bg-[#161616]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative z-10 container mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-10 py-20 lg:py-20 items-center justify-center flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/manifesto\",\n                            className: \"inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#161616] bg-[#DBFF08] hover:bg-[#DE2C00] hover:text-white\",\n                            children: [\n                                \"Manifestomuzu Okuyun\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    className: \"ml-2 h-5 w-5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-4 flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-5xl md:text-7xl max-w-5xl tracking-tighter text-center font-regular\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-[#DBFF08]\",\n                                        children: \"Hikie ile\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1\",\n                                        children: [\n                                            \"\\xa0\",\n                                            titles.map((title, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.span, {\n                                                    className: \"absolute font-semibold text-[#DE2C00]\",\n                                                    initial: {\n                                                        opacity: 0,\n                                                        y: \"-100\"\n                                                    },\n                                                    transition: {\n                                                        type: \"spring\",\n                                                        stiffness: 50\n                                                    },\n                                                    animate: titleNumber === index ? {\n                                                        y: 0,\n                                                        opacity: 1\n                                                    } : {\n                                                        y: titleNumber > index ? -150 : 150,\n                                                        opacity: 0\n                                                    },\n                                                    children: title\n                                                }, index, false, {\n                                                    fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 19\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center\",\n                                children: \"İnternetteki alanınızı oluşturmak artık \\xe7ok daha kolay. Hikie \\xfczerinden kendi dijital d\\xfcnyanızı yaratın ve y\\xf6netin. Size \\xf6zel alanınızda dilediğiniz gibi b\\xfcy\\xfcy\\xfcn, gelişin ve kazanın.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-8 py-20 lg:py-4 items-center justify-center flex-col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-4 flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/contact\",\n                                    className: \"inline-flex items-center justify-center px-6 py-3 bg-[#DBFF08] text-[#161616] hover:bg-[#DE2C00] hover:text-white rounded-md text-base font-medium transition-colors\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            className: \"w-4 h-4 mr-2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"G\\xf6r\\xfcşme Planla\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/register\",\n                                    className: \"inline-flex items-center justify-center px-6 py-3 bg-[#DE2C00] text-white hover:bg-[#DBFF08] hover:text-[#161616] rounded-md text-base font-medium transition-colors\",\n                                    children: [\n                                        \"Hemen Başla\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            className: \"ml-2 h-5 w-5\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimatedHero, \"VkOdLClBfHvEFNEAWHj55LAWj0o=\");\n_c = AnimatedHero;\nvar _c;\n$RefreshReg$(_c, \"AnimatedHero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2FuaW1hdGVkLWhlcm8udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXFEO0FBQ2Q7QUFDNkI7QUFFdkM7QUFHZCxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1RLFNBQVNULDhDQUFPQTt3Q0FDcEIsSUFBTTtnQkFBQztnQkFBZTtnQkFBYztnQkFBWTtnQkFBZ0I7Z0JBQW1CO2dCQUFtQjthQUFnQjt1Q0FDdEgsRUFBRTtJQUdKRCxnREFBU0E7a0NBQUM7WUFDUixNQUFNVyxZQUFZQztvREFBVztvQkFDM0IsSUFBSUosZ0JBQWdCRSxPQUFPRyxNQUFNLEdBQUcsR0FBRzt3QkFDckNKLGVBQWU7b0JBQ2pCLE9BQU87d0JBQ0xBLGVBQWVELGNBQWM7b0JBQy9CO2dCQUNGO21EQUFHO1lBQ0g7MENBQU8sSUFBTU0sYUFBYUg7O1FBQzVCO2lDQUFHO1FBQUNIO1FBQWFFO0tBQU87SUFFeEIscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7a0NBQ0MsNEVBQUNULGtEQUFJQTs0QkFDSFcsTUFBSzs0QkFDTEQsV0FBVTs7Z0NBQ1g7OENBRUMsOERBQUNYLG9HQUFjQTtvQ0FBQ1csV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzlCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFHRixXQUFVOztrREFDWiw4REFBQ0c7d0NBQUtILFdBQVU7a0RBQWlCOzs7Ozs7a0RBQ2pDLDhEQUFDRzt3Q0FBS0gsV0FBVTs7NENBQWtGOzRDQUUvRk4sT0FBT1UsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNsQiw4REFBQ25CLGlEQUFNQSxDQUFDZ0IsSUFBSTtvREFFVkgsV0FBVTtvREFDVk8sU0FBUzt3REFBRUMsU0FBUzt3REFBR0MsR0FBRztvREFBTztvREFDakNDLFlBQVk7d0RBQUVDLE1BQU07d0RBQVVDLFdBQVc7b0RBQUc7b0RBQzVDQyxTQUNFckIsZ0JBQWdCYyxRQUNaO3dEQUNFRyxHQUFHO3dEQUNIRCxTQUFTO29EQUNYLElBQ0E7d0RBQ0VDLEdBQUdqQixjQUFjYyxRQUFRLENBQUMsTUFBTTt3REFDaENFLFNBQVM7b0RBQ1g7OERBR0xIO21EQWhCSUM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQXNCYiw4REFBQ1E7Z0NBQUVkLFdBQVU7MENBQXFGOzs7Ozs7Ozs7Ozs7a0NBTXBHLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDVixrREFBSUE7b0NBQ0hXLE1BQUs7b0NBQ0xELFdBQVU7O3NEQUVWLDhEQUFDWixvR0FBU0E7NENBQUNZLFdBQVU7Ozs7Ozt3Q0FBaUI7Ozs7Ozs7OENBR3hDLDhEQUFDVixrREFBSUE7b0NBQ0hXLE1BQUs7b0NBQ0xELFdBQVU7O3dDQUNYO3NEQUVDLDhEQUFDWCxvR0FBY0E7NENBQUNXLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVExQztHQXhGd0JUO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvZWdlZGVtaXJ0YXMvaGlraWFuYXNheWZhL3NyYy9jb21wb25lbnRzL3VpL2FuaW1hdGVkLWhlcm8udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IE1vdmVSaWdodCwgUGhvbmVDYWxsLCBBcnJvd1JpZ2h0SWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5pbWF0ZWRIZXJvKCkge1xuICBjb25zdCBbdGl0bGVOdW1iZXIsIHNldFRpdGxlTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCB0aXRsZXMgPSB1c2VNZW1vKFxuICAgICgpID0+IFtcIsSww6dlcmlrIMOccmV0XCIsIFwiRcSfaXRpbSBWZXJcIiwgXCLDnHLDvG4gU2F0XCIsIFwiVG9wbHVsdWsgS3VyXCIsIFwiQWJvbmVsaWsgQmHFn2xhdFwiLCBcIkRhbsSxxZ9tYW5sxLFrIFZlclwiLCBcIk1lbnRvcmx1ayBZYXBcIl0sXG4gICAgW11cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRpdGxlTnVtYmVyID09PSB0aXRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBzZXRUaXRsZU51bWJlcigwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpdGxlTnVtYmVyKHRpdGxlTnVtYmVyICsgMSk7XG4gICAgICB9XG4gICAgfSwgMTkwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICB9LCBbdGl0bGVOdW1iZXIsIHRpdGxlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtWzgwdmhdIHJlbGF0aXZlIGlzb2xhdGUgb3ZlcmZsb3ctaGlkZGVuIGJnLVsjMTYxNjE2XVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIGNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMTAgcHktMjAgbGc6cHktMjAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtY29sXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCIvbWFuaWZlc3RvXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgcHktMyBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtYmFzZSBmb250LW1lZGl1bSByb3VuZGVkLW1kIHRleHQtWyMxNjE2MTZdIGJnLVsjREJGRjA4XSBob3ZlcjpiZy1bI0RFMkMwMF0gaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1hbmlmZXN0b211enUgT2t1eXVuXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBjbGFzc05hbWU9XCJtbC0yIGgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIG1kOnRleHQtN3hsIG1heC13LTV4bCB0cmFja2luZy10aWdodGVyIHRleHQtY2VudGVyIGZvbnQtcmVndWxhclwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjREJGRjA4XVwiPkhpa2llIGlsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHRleHQtY2VudGVyIG1kOnBiLTQgbWQ6cHQtMVwiPlxuICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgIHt0aXRsZXMubWFwKCh0aXRsZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uc3BhblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmb250LXNlbWlib2xkIHRleHQtWyNERTJDMDBdXCJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiBcIi0xMDBcIiB9fVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IHR5cGU6IFwic3ByaW5nXCIsIHN0aWZmbmVzczogNTAgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGVOdW1iZXIgPT09IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRpdGxlTnVtYmVyID4gaW5kZXggPyAtMTUwIDogMTUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQteGwgbGVhZGluZy1yZWxheGVkIHRyYWNraW5nLXRpZ2h0IHRleHQtd2hpdGUgbWF4LXctMnhsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIMSwbnRlcm5ldHRla2kgYWxhbsSxbsSxesSxIG9sdcWfdHVybWFrIGFydMSxayDDp29rIGRhaGEga29sYXkuIEhpa2llIMO8emVyaW5kZW4ga2VuZGkgZGlqaXRhbFxuICAgICAgICAgICAgICBkw7xueWFuxLF6xLEgeWFyYXTEsW4gdmUgecO2bmV0aW4uIFNpemUgw7Z6ZWwgYWxhbsSxbsSxemRhIGRpbGVkacSfaW5peiBnaWJpIGLDvHnDvHnDvG4sXG4gICAgICAgICAgICAgIGdlbGnFn2luIHZlIGthemFuxLFuLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtOCBweS0yMCBsZzpweS00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9jb250YWN0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBweS0zIGJnLVsjREJGRjA4XSB0ZXh0LVsjMTYxNjE2XSBob3ZlcjpiZy1bI0RFMkMwMF0gaG92ZXI6dGV4dC13aGl0ZSByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGhvbmVDYWxsIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgR8O2csO8xZ9tZSBQbGFubGFcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvcmVnaXN0ZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IHB5LTMgYmctWyNERTJDMDBdIHRleHQtd2hpdGUgaG92ZXI6YmctWyNEQkZGMDhdIGhvdmVyOnRleHQtWyMxNjE2MTZdIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEhlbWVuIEJhxZ9sYVxuICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0SWNvbiBjbGFzc05hbWU9XCJtbC0yIGgtNSB3LTVcIiAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJtb3Rpb24iLCJQaG9uZUNhbGwiLCJBcnJvd1JpZ2h0SWNvbiIsIkxpbmsiLCJBbmltYXRlZEhlcm8iLCJ0aXRsZU51bWJlciIsInNldFRpdGxlTnVtYmVyIiwidGl0bGVzIiwidGltZW91dElkIiwic2V0VGltZW91dCIsImxlbmd0aCIsImNsZWFyVGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJoMSIsInNwYW4iLCJtYXAiLCJ0aXRsZSIsImluZGV4IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJhbmltYXRlIiwicCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/animated-hero.tsx\n"));

/***/ })

});