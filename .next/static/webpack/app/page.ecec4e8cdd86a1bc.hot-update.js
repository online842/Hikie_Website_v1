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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimatedHero)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRightIcon,PhoneCall!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRightIcon,PhoneCall!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/phone-call.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction AnimatedHero() {\n    _s();\n    const [titleNumber, setTitleNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const titles = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)({\n        \"AnimatedHero.useMemo[titles]\": ()=>[\n                \"Para Kazan\",\n                \"Kendini Anlat\",\n                \"Ürünlerini Sat\",\n                \"Hizmet Ver\",\n                \"Ödül Dağıt\",\n                \"Destek Topla\",\n                \"Topluluk Oluştur\"\n            ]\n    }[\"AnimatedHero.useMemo[titles]\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AnimatedHero.useEffect\": ()=>{\n            const timeoutId = setTimeout({\n                \"AnimatedHero.useEffect.timeoutId\": ()=>{\n                    if (titleNumber === titles.length - 1) {\n                        setTitleNumber(0);\n                    } else {\n                        setTitleNumber(titleNumber + 1);\n                    }\n                }\n            }[\"AnimatedHero.useEffect.timeoutId\"], 1900);\n            return ({\n                \"AnimatedHero.useEffect\": ()=>clearTimeout(timeoutId)\n            })[\"AnimatedHero.useEffect\"];\n        }\n    }[\"AnimatedHero.useEffect\"], [\n        titleNumber,\n        titles\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full min-h-[80vh] relative isolate overflow-hidden bg-[#161616]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative z-10 container mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-8 py-20 lg:py-20 items-center justify-center flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/manifesto\",\n                            className: \"inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#161616] bg-[#DBFF08] hover:bg-[#DE2C00] hover:text-white\",\n                            children: [\n                                \"Manifestomuzu Okuyun\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    className: \"ml-2 h-5 w-5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-4 flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-[#DBFF08]\",\n                                        children: \"Hikie ile\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1\",\n                                        children: [\n                                            \"\\xa0\",\n                                            titles.map((title, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.span, {\n                                                    className: \"absolute font-semibold text-[#DE2C00]\",\n                                                    initial: {\n                                                        opacity: 0,\n                                                        y: \"-100\"\n                                                    },\n                                                    transition: {\n                                                        type: \"spring\",\n                                                        stiffness: 50\n                                                    },\n                                                    animate: titleNumber === index ? {\n                                                        y: 0,\n                                                        opacity: 1\n                                                    } : {\n                                                        y: titleNumber > index ? -150 : 150,\n                                                        opacity: 0\n                                                    },\n                                                    children: title\n                                                }, index, false, {\n                                                    fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 19\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-[#DBFF08]\",\n                                        children: \"Platformu\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center\",\n                                children: \"Marka y\\xf6netmek zaten yeterince zor. Eski ve zahmetli ticaret y\\xf6ntemlerini bırakarak işinizi daha da kolaylaştırın. Amacımız Kreat\\xf6rlerin ve Girişimcilerin s\\xfcre\\xe7lerini basitleştirmek ve her zamankinden daha hızlı hale getirmek.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-8 py-20 lg:py-4 items-center justify-center flex-col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-4 flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/contact\",\n                                    className: \"inline-flex items-center justify-center px-6 py-3 bg-[#DBFF08] text-[#161616] hover:bg-[#DE2C00] hover:text-white rounded-md text-base font-medium transition-colors\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            className: \"w-4 h-4 mr-2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"G\\xf6r\\xfcşme Planla\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/register\",\n                                    className: \"inline-flex items-center justify-center px-6 py-3 bg-[#DE2C00] text-white hover:bg-[#DBFF08] hover:text-[#161616] rounded-md text-base font-medium transition-colors\",\n                                    children: [\n                                        \"Hemen Başla\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            className: \"ml-2 h-5 w-5\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimatedHero, \"VkOdLClBfHvEFNEAWHj55LAWj0o=\");\n_c = AnimatedHero;\nvar _c;\n$RefreshReg$(_c, \"AnimatedHero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2FuaW1hdGVkLWhlcm8udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXFEO0FBQ2Q7QUFDNkI7QUFFdkM7QUFHZCxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1RLFNBQVNULDhDQUFPQTt3Q0FDcEIsSUFBTTtnQkFBQztnQkFBYztnQkFBaUI7Z0JBQWtCO2dCQUFjO2dCQUFjO2dCQUFnQjthQUFtQjt1Q0FDdkgsRUFBRTtJQUdKRCxnREFBU0E7a0NBQUM7WUFDUixNQUFNVyxZQUFZQztvREFBVztvQkFDM0IsSUFBSUosZ0JBQWdCRSxPQUFPRyxNQUFNLEdBQUcsR0FBRzt3QkFDckNKLGVBQWU7b0JBQ2pCLE9BQU87d0JBQ0xBLGVBQWVELGNBQWM7b0JBQy9CO2dCQUNGO21EQUFHO1lBQ0g7MENBQU8sSUFBTU0sYUFBYUg7O1FBQzVCO2lDQUFHO1FBQUNIO1FBQWFFO0tBQU87SUFFeEIscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7a0NBQ0MsNEVBQUNULGtEQUFJQTs0QkFDSFcsTUFBSzs0QkFDTEQsV0FBVTs7Z0NBQ1g7OENBRUMsOERBQUNYLG9HQUFjQTtvQ0FBQ1csV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzlCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFHRixXQUFVOztrREFDWiw4REFBQ0c7d0NBQUtILFdBQVU7a0RBQWlCOzs7Ozs7a0RBQ2pDLDhEQUFDRzt3Q0FBS0gsV0FBVTs7NENBQWtGOzRDQUUvRk4sT0FBT1UsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNsQiw4REFBQ25CLGlEQUFNQSxDQUFDZ0IsSUFBSTtvREFFVkgsV0FBVTtvREFDVk8sU0FBUzt3REFBRUMsU0FBUzt3REFBR0MsR0FBRztvREFBTztvREFDakNDLFlBQVk7d0RBQUVDLE1BQU07d0RBQVVDLFdBQVc7b0RBQUc7b0RBQzVDQyxTQUNFckIsZ0JBQWdCYyxRQUNaO3dEQUNFRyxHQUFHO3dEQUNIRCxTQUFTO29EQUNYLElBQ0E7d0RBQ0VDLEdBQUdqQixjQUFjYyxRQUFRLENBQUMsTUFBTTt3REFDaENFLFNBQVM7b0RBQ1g7OERBR0xIO21EQWhCSUM7Ozs7Ozs7Ozs7O2tEQW9CWCw4REFBQ0g7d0NBQUtILFdBQVU7a0RBQWlCOzs7Ozs7Ozs7Ozs7MENBR25DLDhEQUFDYztnQ0FBRWQsV0FBVTswQ0FBcUY7Ozs7Ozs7Ozs7OztrQ0FNcEcsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNWLGtEQUFJQTtvQ0FDSFcsTUFBSztvQ0FDTEQsV0FBVTs7c0RBRVYsOERBQUNaLG9HQUFTQTs0Q0FBQ1ksV0FBVTs7Ozs7O3dDQUFpQjs7Ozs7Ozs4Q0FHeEMsOERBQUNWLGtEQUFJQTtvQ0FDSFcsTUFBSztvQ0FDTEQsV0FBVTs7d0NBQ1g7c0RBRUMsOERBQUNYLG9HQUFjQTs0Q0FBQ1csV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTFDO0dBekZ3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZ2VkZW1pcnRhcy9oaWtpYW5hc2F5ZmEvc3JjL2NvbXBvbmVudHMvdWkvYW5pbWF0ZWQtaGVyby50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgTW92ZVJpZ2h0LCBQaG9uZUNhbGwsIEFycm93UmlnaHRJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRlZEhlcm8oKSB7XG4gIGNvbnN0IFt0aXRsZU51bWJlciwgc2V0VGl0bGVOdW1iZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHRpdGxlcyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gW1wiUGFyYSBLYXphblwiLCBcIktlbmRpbmkgQW5sYXRcIiwgXCLDnHLDvG5sZXJpbmkgU2F0XCIsIFwiSGl6bWV0IFZlclwiLCBcIsOWZMO8bCBEYcSfxLF0XCIsIFwiRGVzdGVrIFRvcGxhXCIsIFwiVG9wbHVsdWsgT2x1xZ90dXJcIl0sXG4gICAgW11cbiAgKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRpdGxlTnVtYmVyID09PSB0aXRsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBzZXRUaXRsZU51bWJlcigwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpdGxlTnVtYmVyKHRpdGxlTnVtYmVyICsgMSk7XG4gICAgICB9XG4gICAgfSwgMTkwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICB9LCBbdGl0bGVOdW1iZXIsIHRpdGxlc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtWzgwdmhdIHJlbGF0aXZlIGlzb2xhdGUgb3ZlcmZsb3ctaGlkZGVuIGJnLVsjMTYxNjE2XVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIGNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtOCBweS0yMCBsZzpweS0yMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIi9tYW5pZmVzdG9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBweS0zIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC1bIzE2MTYxNl0gYmctWyNEQkZGMDhdIGhvdmVyOmJnLVsjREUyQzAwXSBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTWFuaWZlc3RvbXV6dSBPa3V5dW5cbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGNsYXNzTmFtZT1cIm1sLTIgaC01IHctNVwiIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgbWQ6dGV4dC03eGwgbWF4LXctMnhsIHRyYWNraW5nLXRpZ2h0ZXIgdGV4dC1jZW50ZXIgZm9udC1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNEQkZGMDhdXCI+SGlraWUgaWxlPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gdGV4dC1jZW50ZXIgbWQ6cGItNCBtZDpwdC0xXCI+XG4gICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAge3RpdGxlcy5tYXAoKHRpdGxlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGZvbnQtc2VtaWJvbGQgdGV4dC1bI0RFMkMwMF1cIlxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IFwiLTEwMFwiIH19XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiA1MCB9fVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZU51bWJlciA9PT0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGl0bGVOdW1iZXIgPiBpbmRleCA/IC0xNTAgOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bI0RCRkYwOF1cIj5QbGF0Zm9ybXU8L3NwYW4+XG4gICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1kOnRleHQteGwgbGVhZGluZy1yZWxheGVkIHRyYWNraW5nLXRpZ2h0IHRleHQtd2hpdGUgbWF4LXctMnhsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIE1hcmthIHnDtm5ldG1layB6YXRlbiB5ZXRlcmluY2Ugem9yLiBFc2tpIHZlIHphaG1ldGxpIHRpY2FyZXQgecO2bnRlbWxlcmluaVxuICAgICAgICAgICAgICBixLFyYWthcmFrIGnFn2luaXppIGRhaGEgZGEga29sYXlsYcWfdMSxcsSxbi4gQW1hY8SxbcSxeiBLcmVhdMO2cmxlcmluIHZlIEdpcmnFn2ltY2lsZXJpbiBzw7xyZcOnbGVyaW5pIGJhc2l0bGXFn3Rpcm1la1xuICAgICAgICAgICAgICB2ZSBoZXIgemFtYW5raW5kZW4gZGFoYSBoxLF6bMSxIGhhbGUgZ2V0aXJtZWsuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC04IHB5LTIwIGxnOnB5LTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiL2NvbnRhY3RcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IHB5LTMgYmctWyNEQkZGMDhdIHRleHQtWyMxNjE2MTZdIGhvdmVyOmJnLVsjREUyQzAwXSBob3Zlcjp0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQaG9uZUNhbGwgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICBHw7Zyw7zFn21lIFBsYW5sYVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9yZWdpc3RlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgcHktMyBiZy1bI0RFMkMwMF0gdGV4dC13aGl0ZSBob3ZlcjpiZy1bI0RCRkYwOF0gaG92ZXI6dGV4dC1bIzE2MTYxNl0gcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgSGVtZW4gQmHFn2xhXG4gICAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGNsYXNzTmFtZT1cIm1sLTIgaC01IHctNVwiIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIlBob25lQ2FsbCIsIkFycm93UmlnaHRJY29uIiwiTGluayIsIkFuaW1hdGVkSGVybyIsInRpdGxlTnVtYmVyIiwic2V0VGl0bGVOdW1iZXIiLCJ0aXRsZXMiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwiY2xlYXJUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImgxIiwic3BhbiIsIm1hcCIsInRpdGxlIiwiaW5kZXgiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInN0aWZmbmVzcyIsImFuaW1hdGUiLCJwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/animated-hero.tsx\n"));

/***/ })

});