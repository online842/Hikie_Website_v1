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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimatedHero)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRightIcon,PhoneCall!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRightIcon,PhoneCall!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/phone-call.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction AnimatedHero() {\n    _s();\n    const [titleNumber, setTitleNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const titles = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)({\n        \"AnimatedHero.useMemo[titles]\": ()=>[\n                \"Para Kazan\",\n                \"İşini Büyüt\",\n                \"Kendini Anlat\",\n                \"Eğitim Ver\",\n                \"Ürün Sat\",\n                \"Topluluk Kur\",\n                \"Abonelik Aç\",\n                \"Danışmanlık Ver\",\n                \"Dijital Sat\"\n            ]\n    }[\"AnimatedHero.useMemo[titles]\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AnimatedHero.useEffect\": ()=>{\n            const timeoutId = setTimeout({\n                \"AnimatedHero.useEffect.timeoutId\": ()=>{\n                    if (titleNumber === titles.length - 1) {\n                        setTitleNumber(0);\n                    } else {\n                        setTitleNumber(titleNumber + 1);\n                    }\n                }\n            }[\"AnimatedHero.useEffect.timeoutId\"], 1900);\n            return ({\n                \"AnimatedHero.useEffect\": ()=>clearTimeout(timeoutId)\n            })[\"AnimatedHero.useEffect\"];\n        }\n    }[\"AnimatedHero.useEffect\"], [\n        titleNumber,\n        titles\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full min-h-[80vh] relative isolate overflow-hidden bg-[#161616]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative z-10 container mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-10 py-20 lg:py-20 items-center justify-center flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/manifesto\",\n                            className: \"inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#161616] bg-[#DBFF08] hover:bg-[#DE2C00] hover:text-white\",\n                            children: [\n                                \"Manifestomuzu Okuyun\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    className: \"ml-2 h-5 w-5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-4 flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-5xl md:text-7xl max-w-5xl tracking-tighter text-center font-regular\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-[#DBFF08]\",\n                                        children: \"Hikie ile\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1\",\n                                        children: [\n                                            \"\\xa0\",\n                                            titles.map((title, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.span, {\n                                                    className: \"absolute font-semibold text-[#DE2C00]\",\n                                                    initial: {\n                                                        opacity: 0,\n                                                        y: \"-100\"\n                                                    },\n                                                    transition: {\n                                                        type: \"spring\",\n                                                        stiffness: 50\n                                                    },\n                                                    animate: titleNumber === index ? {\n                                                        y: 0,\n                                                        opacity: 1\n                                                    } : {\n                                                        y: titleNumber > index ? -150 : 150,\n                                                        opacity: 0\n                                                    },\n                                                    children: title\n                                                }, index, false, {\n                                                    fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 19\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center\",\n                                children: \"Hemen bir kreat\\xf6r, eğitmen veya girişimci olun - İhtiyacınız olan t\\xfcm yapıyı Hikie sizin i\\xe7in sunuyor, siz sadece internetten daha fazla gelir elde edin ve işinizi b\\xfcy\\xfct\\xfcn. \\xdcr\\xfcnlerinizi satışa \\xe7ıkarın, online kursunuzla binlerce \\xf6ğrenciye ulaşın, veya topluluğunuza \\xf6zel merch koleksiyonunuzu oluşturun - Hikie ile i\\xe7erik \\xfcretmeye odaklanın, geri kalan her şeyi biz halledelim.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-8 py-20 lg:py-4 items-center justify-center flex-col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-4 flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/contact\",\n                                    className: \"inline-flex items-center justify-center px-6 py-3 bg-[#DBFF08] text-[#161616] hover:bg-[#DE2C00] hover:text-white rounded-md text-base font-medium transition-colors\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            className: \"w-4 h-4 mr-2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"G\\xf6r\\xfcşme Planla\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/register\",\n                                    className: \"inline-flex items-center justify-center px-6 py-3 bg-[#DE2C00] text-white hover:bg-[#DBFF08] hover:text-[#161616] rounded-md text-base font-medium transition-colors\",\n                                    children: [\n                                        \"Hemen Başla\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            className: \"ml-2 h-5 w-5\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimatedHero, \"VkOdLClBfHvEFNEAWHj55LAWj0o=\");\n_c = AnimatedHero;\nvar _c;\n$RefreshReg$(_c, \"AnimatedHero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2FuaW1hdGVkLWhlcm8udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXFEO0FBQ2Q7QUFDNkI7QUFFdkM7QUFHZCxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1RLFNBQVNULDhDQUFPQTt3Q0FDcEIsSUFBTTtnQkFBQztnQkFBYztnQkFBZTtnQkFBaUI7Z0JBQWM7Z0JBQVk7Z0JBQWdCO2dCQUFlO2dCQUFtQjthQUFjO3VDQUMvSSxFQUFFO0lBR0pELGdEQUFTQTtrQ0FBQztZQUNSLE1BQU1XLFlBQVlDO29EQUFXO29CQUMzQixJQUFJSixnQkFBZ0JFLE9BQU9HLE1BQU0sR0FBRyxHQUFHO3dCQUNyQ0osZUFBZTtvQkFDakIsT0FBTzt3QkFDTEEsZUFBZUQsY0FBYztvQkFDL0I7Z0JBQ0Y7bURBQUc7WUFDSDswQ0FBTyxJQUFNTSxhQUFhSDs7UUFDNUI7aUNBQUc7UUFBQ0g7UUFBYUU7S0FBTztJQUV4QixxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDtrQ0FDQyw0RUFBQ1Qsa0RBQUlBOzRCQUNIVyxNQUFLOzRCQUNMRCxXQUFVOztnQ0FDWDs4Q0FFQyw4REFBQ1gsb0dBQWNBO29DQUFDVyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHOUIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUdGLFdBQVU7O2tEQUNaLDhEQUFDRzt3Q0FBS0gsV0FBVTtrREFBaUI7Ozs7OztrREFDakMsOERBQUNHO3dDQUFLSCxXQUFVOzs0Q0FBa0Y7NENBRS9GTixPQUFPVSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ2xCLDhEQUFDbkIsaURBQU1BLENBQUNnQixJQUFJO29EQUVWSCxXQUFVO29EQUNWTyxTQUFTO3dEQUFFQyxTQUFTO3dEQUFHQyxHQUFHO29EQUFPO29EQUNqQ0MsWUFBWTt3REFBRUMsTUFBTTt3REFBVUMsV0FBVztvREFBRztvREFDNUNDLFNBQ0VyQixnQkFBZ0JjLFFBQ1o7d0RBQ0VHLEdBQUc7d0RBQ0hELFNBQVM7b0RBQ1gsSUFDQTt3REFDRUMsR0FBR2pCLGNBQWNjLFFBQVEsQ0FBQyxNQUFNO3dEQUNoQ0UsU0FBUztvREFDWDs4REFHTEg7bURBaEJJQzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBc0JiLDhEQUFDUTtnQ0FBRWQsV0FBVTswQ0FBcUY7Ozs7Ozs7Ozs7OztrQ0FTcEcsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNWLGtEQUFJQTtvQ0FDSFcsTUFBSztvQ0FDTEQsV0FBVTs7c0RBRVYsOERBQUNaLG9HQUFTQTs0Q0FBQ1ksV0FBVTs7Ozs7O3dDQUFpQjs7Ozs7Ozs4Q0FHeEMsOERBQUNWLGtEQUFJQTtvQ0FDSFcsTUFBSztvQ0FDTEQsV0FBVTs7d0NBQ1g7c0RBRUMsOERBQUNYLG9HQUFjQTs0Q0FBQ1csV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTFDO0dBM0Z3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZ2VkZW1pcnRhcy9oaWtpYW5hc2F5ZmEvc3JjL2NvbXBvbmVudHMvdWkvYW5pbWF0ZWQtaGVyby50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgTW92ZVJpZ2h0LCBQaG9uZUNhbGwsIEFycm93UmlnaHRJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbmltYXRlZEhlcm8oKSB7XG4gIGNvbnN0IFt0aXRsZU51bWJlciwgc2V0VGl0bGVOdW1iZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHRpdGxlcyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gW1wiUGFyYSBLYXphblwiLCBcIsSwxZ9pbmkgQsO8ecO8dFwiLCBcIktlbmRpbmkgQW5sYXRcIiwgXCJFxJ9pdGltIFZlclwiLCBcIsOccsO8biBTYXRcIiwgXCJUb3BsdWx1ayBLdXJcIiwgXCJBYm9uZWxpayBBw6dcIiwgXCJEYW7EscWfbWFubMSxayBWZXJcIiwgXCJEaWppdGFsIFNhdFwiXSxcbiAgICBbXVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGl0bGVOdW1iZXIgPT09IHRpdGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHNldFRpdGxlTnVtYmVyKDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGl0bGVOdW1iZXIodGl0bGVOdW1iZXIgKyAxKTtcbiAgICAgIH1cbiAgICB9LCAxOTAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gIH0sIFt0aXRsZU51bWJlciwgdGl0bGVzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC1bODB2aF0gcmVsYXRpdmUgaXNvbGF0ZSBvdmVyZmxvdy1oaWRkZW4gYmctWyMxNjE2MTZdXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xMCBweS0yMCBsZzpweS0yMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIi9tYW5pZmVzdG9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBweS0zIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC1bIzE2MTYxNl0gYmctWyNEQkZGMDhdIGhvdmVyOmJnLVsjREUyQzAwXSBob3Zlcjp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTWFuaWZlc3RvbXV6dSBPa3V5dW5cbiAgICAgICAgICAgICAgPEFycm93UmlnaHRJY29uIGNsYXNzTmFtZT1cIm1sLTIgaC01IHctNVwiIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgbWQ6dGV4dC03eGwgbWF4LXctNXhsIHRyYWNraW5nLXRpZ2h0ZXIgdGV4dC1jZW50ZXIgZm9udC1yZWd1bGFyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNEQkZGMDhdXCI+SGlraWUgaWxlPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gdGV4dC1jZW50ZXIgbWQ6cGItNCBtZDpwdC0xXCI+XG4gICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAge3RpdGxlcy5tYXAoKHRpdGxlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGZvbnQtc2VtaWJvbGQgdGV4dC1bI0RFMkMwMF1cIlxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IFwiLTEwMFwiIH19XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiA1MCB9fVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZU51bWJlciA9PT0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdGl0bGVOdW1iZXIgPiBpbmRleCA/IC0xNTAgOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCBsZWFkaW5nLXJlbGF4ZWQgdHJhY2tpbmctdGlnaHQgdGV4dC13aGl0ZSBtYXgtdy0yeGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgSGVtZW4gYmlyIGtyZWF0w7ZyLCBlxJ9pdG1lbiB2ZXlhIGdpcmnFn2ltY2kgb2x1biAtIMSwaHRpeWFjxLFuxLF6IG9sYW4gdMO8bSB5YXDEsXnEsSBIaWtpZSBzaXppbiBpw6dpbiBzdW51eW9yLCBzaXogc2FkZWNlXG4gICAgICAgICAgICAgIGludGVybmV0dGVuIGRhaGEgZmF6bGEgZ2VsaXIgZWxkZSBlZGluIHZlIGnFn2luaXppIGLDvHnDvHTDvG4uXG5cbiAgICAgICAgICAgICAgIMOccsO8bmxlcmluaXppIHNhdMSxxZ9hIMOnxLFrYXLEsW4sIG9ubGluZSBrdXJzdW51emxhIGJpbmxlcmNlIMO2xJ9yZW5jaXllIHVsYcWfxLFuLCB2ZXlhIFxudG9wbHVsdcSfdW51emEgw7Z6ZWwgbWVyY2gga29sZWtzaXlvbnVudXp1IG9sdcWfdHVydW4gLSBIaWtpZSBpbGUgacOnZXJpayDDvHJldG1leWUgb2Rha2xhbsSxbiwgXG5nZXJpIGthbGFuIGhlciDFn2V5aSBiaXogaGFsbGVkZWxpbS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTggcHktMjAgbGc6cHktNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvY29udGFjdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgcHktMyBiZy1bI0RCRkYwOF0gdGV4dC1bIzE2MTYxNl0gaG92ZXI6YmctWyNERTJDMDBdIGhvdmVyOnRleHQtd2hpdGUgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBob25lQ2FsbCBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgIEfDtnLDvMWfbWUgUGxhbmxhXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiL3JlZ2lzdGVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBweS0zIGJnLVsjREUyQzAwXSB0ZXh0LXdoaXRlIGhvdmVyOmJnLVsjREJGRjA4XSBob3Zlcjp0ZXh0LVsjMTYxNjE2XSByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBIZW1lbiBCYcWfbGFcbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gY2xhc3NOYW1lPVwibWwtMiBoLTUgdy01XCIgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwibW90aW9uIiwiUGhvbmVDYWxsIiwiQXJyb3dSaWdodEljb24iLCJMaW5rIiwiQW5pbWF0ZWRIZXJvIiwidGl0bGVOdW1iZXIiLCJzZXRUaXRsZU51bWJlciIsInRpdGxlcyIsInRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJjbGVhclRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiaDEiLCJzcGFuIiwibWFwIiwidGl0bGUiLCJpbmRleCIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwiYW5pbWF0ZSIsInAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/animated-hero.tsx\n"));

/***/ })

});