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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimatedHero)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var _barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRightIcon,PhoneCall!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/arrow-right.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowRightIcon,PhoneCall!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/phone-call.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction AnimatedHero() {\n    _s();\n    const [titleNumber, setTitleNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const titles = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)({\n        \"AnimatedHero.useMemo[titles]\": ()=>[\n                \"Alanını Oluştur\",\n                \"Markalaş\",\n                \"Satışa Başla\",\n                \"Para Kazan\",\n                \"Topluluğunu Yönet\",\n                \"Eğitimler Ver\",\n                \"Aboneliklerini Sat\",\n                \"Dijital Ürün Sat\",\n                \"Pazara Çık\"\n            ]\n    }[\"AnimatedHero.useMemo[titles]\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AnimatedHero.useEffect\": ()=>{\n            const timeoutId = setTimeout({\n                \"AnimatedHero.useEffect.timeoutId\": ()=>{\n                    if (titleNumber === titles.length - 1) {\n                        setTitleNumber(0);\n                    } else {\n                        setTitleNumber(titleNumber + 1);\n                    }\n                }\n            }[\"AnimatedHero.useEffect.timeoutId\"], 1900);\n            return ({\n                \"AnimatedHero.useEffect\": ()=>clearTimeout(timeoutId)\n            })[\"AnimatedHero.useEffect\"];\n        }\n    }[\"AnimatedHero.useEffect\"], [\n        titleNumber,\n        titles\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full min-h-[80vh] relative isolate overflow-hidden bg-[#161616]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative z-10 container mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-15 py-20 lg:py-20 items-center justify-center flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/manifesto\",\n                            className: \"inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#FFFFFFFF] bg-[#000AFF] hover:bg-[#ff008C] hover:text-white\",\n                            children: [\n                                \"Manifestomuzu Okuyun\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    className: \"ml-2 h-5 w-5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-4 flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-5xl md:text-7xl max-w-5xl tracking-tighter text-center font-regular\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-[#84ff20]\",\n                                        children: \"Hikie ile\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1\",\n                                        children: [\n                                            \"\\xa0\",\n                                            titles.map((title, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.span, {\n                                                    className: \"absolute font-semibold text-[#ff008C]\",\n                                                    initial: {\n                                                        opacity: 0,\n                                                        y: \"-100\"\n                                                    },\n                                                    transition: {\n                                                        type: \"spring\",\n                                                        stiffness: 50\n                                                    },\n                                                    animate: titleNumber === index ? {\n                                                        y: 0,\n                                                        opacity: 1\n                                                    } : {\n                                                        y: titleNumber > index ? -150 : 150,\n                                                        opacity: 0\n                                                    },\n                                                    children: title\n                                                }, index, false, {\n                                                    fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 19\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg md:text-xl leading-relaxed tracking-tight text-white max-w-2xl text-center\",\n                                children: \"\\xdcr\\xfcnlerinizi satışa \\xe7ıkarın, online kursunuzla yeni \\xf6ğrencilere ulaşın, veya topluluğunuza \\xf6zel merch koleksiyonunuzu oluşturun - Hikie ile siz değerinizi \\xfcretmeye odaklanın, geri kalan her şeyi biz halledelim.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-8 py-20 lg:py-4 items-center justify-center flex-col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-4 flex-col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/contact\",\n                                    className: \"inline-flex items-center justify-center px-6 py-3 bg-[#84ff20] text-[#161616] hover:bg-[#ff008C] hover:text-white rounded-md text-base font-medium transition-colors\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            className: \"w-4 h-4 mr-2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, this),\n                                        \"G\\xf6r\\xfcşme Planla\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/register\",\n                                    className: \"inline-flex items-center justify-center px-6 py-3 bg-[#ff008C] text-white hover:bg-[#84ff20] hover:text-[#161616] rounded-md text-base font-medium transition-colors\",\n                                    children: [\n                                        \"Hemen Başla\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowRightIcon_PhoneCall_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            className: \"ml-2 h-5 w-5\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/egedemirtas/hikianasayfa/src/components/ui/animated-hero.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimatedHero, \"VkOdLClBfHvEFNEAWHj55LAWj0o=\");\n_c = AnimatedHero;\nvar _c;\n$RefreshReg$(_c, \"AnimatedHero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2FuaW1hdGVkLWhlcm8udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXFEO0FBQ2Q7QUFDNkI7QUFFdkM7QUFHZCxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU1RLFNBQVNULDhDQUFPQTt3Q0FDcEIsSUFBTTtnQkFDSjtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTtnQkFDQTthQUNEO3VDQUNELEVBQUU7SUFHSkQsZ0RBQVNBO2tDQUFDO1lBQ1IsTUFBTVcsWUFBWUM7b0RBQVc7b0JBQzNCLElBQUlKLGdCQUFnQkUsT0FBT0csTUFBTSxHQUFHLEdBQUc7d0JBQ3JDSixlQUFlO29CQUNqQixPQUFPO3dCQUNMQSxlQUFlRCxjQUFjO29CQUMvQjtnQkFDRjttREFBRztZQUNIOzBDQUFPLElBQU1NLGFBQWFIOztRQUM1QjtpQ0FBRztRQUFDSDtRQUFhRTtLQUFPO0lBRXhCLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO2tDQUNDLDRFQUFDVCxrREFBSUE7NEJBQ0hXLE1BQUs7NEJBQ0xELFdBQVU7O2dDQUNYOzhDQUVDLDhEQUFDWCxvR0FBY0E7b0NBQUNXLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUc5Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBR0YsV0FBVTs7a0RBQ1osOERBQUNHO3dDQUFLSCxXQUFVO2tEQUFpQjs7Ozs7O2tEQUNqQyw4REFBQ0c7d0NBQUtILFdBQVU7OzRDQUFrRjs0Q0FFL0ZOLE9BQU9VLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDbEIsOERBQUNuQixpREFBTUEsQ0FBQ2dCLElBQUk7b0RBRVZILFdBQVU7b0RBQ1ZPLFNBQVM7d0RBQUVDLFNBQVM7d0RBQUdDLEdBQUc7b0RBQU87b0RBQ2pDQyxZQUFZO3dEQUFFQyxNQUFNO3dEQUFVQyxXQUFXO29EQUFHO29EQUM1Q0MsU0FDRXJCLGdCQUFnQmMsUUFDWjt3REFDRUcsR0FBRzt3REFDSEQsU0FBUztvREFDWCxJQUNBO3dEQUNFQyxHQUFHakIsY0FBY2MsUUFBUSxDQUFDLE1BQU07d0RBQ2hDRSxTQUFTO29EQUNYOzhEQUdMSDttREFoQklDOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FzQmIsOERBQUNRO2dDQUFFZCxXQUFVOzBDQUFxRjs7Ozs7Ozs7Ozs7O2tDQVFwRyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1Ysa0RBQUlBO29DQUNIVyxNQUFLO29DQUNMRCxXQUFVOztzREFFViw4REFBQ1osb0dBQVNBOzRDQUFDWSxXQUFVOzs7Ozs7d0NBQWlCOzs7Ozs7OzhDQUd4Qyw4REFBQ1Ysa0RBQUlBO29DQUNIVyxNQUFLO29DQUNMRCxXQUFVOzt3Q0FDWDtzREFFQyw4REFBQ1gsb0dBQWNBOzRDQUFDVyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRMUM7R0FwR3dCVDtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL2VnZWRlbWlydGFzL2hpa2lhbmFzYXlmYS9zcmMvY29tcG9uZW50cy91aS9hbmltYXRlZC1oZXJvLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBNb3ZlUmlnaHQsIFBob25lQ2FsbCwgQXJyb3dSaWdodEljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hdGVkSGVybygpIHtcbiAgY29uc3QgW3RpdGxlTnVtYmVyLCBzZXRUaXRsZU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgdGl0bGVzID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICBcIkFsYW7EsW7EsSBPbHXFn3R1clwiLFxuICAgICAgXCJNYXJrYWxhxZ9cIixcbiAgICAgIFwiU2F0xLHFn2EgQmHFn2xhXCIsXG4gICAgICBcIlBhcmEgS2F6YW5cIixcbiAgICAgIFwiVG9wbHVsdcSfdW51IFnDtm5ldFwiLFxuICAgICAgXCJFxJ9pdGltbGVyIFZlclwiLFxuICAgICAgXCJBYm9uZWxpa2xlcmluaSBTYXRcIixcbiAgICAgIFwiRGlqaXRhbCDDnHLDvG4gU2F0XCIsXG4gICAgICBcIlBhemFyYSDDh8Sxa1wiXG4gICAgXSxcbiAgICBbXVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGl0bGVOdW1iZXIgPT09IHRpdGxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHNldFRpdGxlTnVtYmVyKDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGl0bGVOdW1iZXIodGl0bGVOdW1iZXIgKyAxKTtcbiAgICAgIH1cbiAgICB9LCAxOTAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gIH0sIFt0aXRsZU51bWJlciwgdGl0bGVzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC1bODB2aF0gcmVsYXRpdmUgaXNvbGF0ZSBvdmVyZmxvdy1oaWRkZW4gYmctWyMxNjE2MTZdXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xNSBweS0yMCBsZzpweS0yMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIi9tYW5pZmVzdG9cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBweS0zIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC1bI0ZGRkZGRkZGXSBiZy1bIzAwMEFGRl0gaG92ZXI6YmctWyNmZjAwOENdIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNYW5pZmVzdG9tdXp1IE9rdXl1blxuICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gY2xhc3NOYW1lPVwibWwtMiBoLTUgdy01XCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtZDp0ZXh0LTd4bCBtYXgtdy01eGwgdHJhY2tpbmctdGlnaHRlciB0ZXh0LWNlbnRlciBmb250LXJlZ3VsYXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzg0ZmYyMF1cIj5IaWtpZSBpbGU8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiB0ZXh0LWNlbnRlciBtZDpwYi00IG1kOnB0LTFcIj5cbiAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICB7dGl0bGVzLm1hcCgodGl0bGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bW90aW9uLnNwYW5cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZm9udC1zZW1pYm9sZCB0ZXh0LVsjZmYwMDhDXVwiXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogXCItMTAwXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiBcInNwcmluZ1wiLCBzdGlmZm5lc3M6IDUwIH19XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTnVtYmVyID09PSBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aXRsZU51bWJlciA+IGluZGV4ID8gLTE1MCA6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBtZDp0ZXh0LXhsIGxlYWRpbmctcmVsYXhlZCB0cmFja2luZy10aWdodCB0ZXh0LXdoaXRlIG1heC13LTJ4bCB0ZXh0LWNlbnRlclwiPlxuICAgICAgXG5cbiAgICAgICAgICAgICAgIMOccsO8bmxlcmluaXppIHNhdMSxxZ9hIMOnxLFrYXLEsW4sIG9ubGluZSBrdXJzdW51emxhIHllbmkgw7bEn3JlbmNpbGVyZSB1bGHFn8SxbiwgdmV5YSBcbnRvcGx1bHXEn3VudXphIMO2emVsIG1lcmNoIGtvbGVrc2l5b251bnV6dSBvbHXFn3R1cnVuIC0gSGlraWUgaWxlIHNpeiBkZcSfZXJpbml6aSDDvHJldG1leWUgb2Rha2xhbsSxbiwgXG5nZXJpIGthbGFuIGhlciDFn2V5aSBiaXogaGFsbGVkZWxpbS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTggcHktMjAgbGc6cHktNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvY29udGFjdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgcHktMyBiZy1bIzg0ZmYyMF0gdGV4dC1bIzE2MTYxNl0gaG92ZXI6YmctWyNmZjAwOENdIGhvdmVyOnRleHQtd2hpdGUgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFBob25lQ2FsbCBjbGFzc05hbWU9XCJ3LTQgaC00IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgIEfDtnLDvMWfbWUgUGxhbmxhXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiL3JlZ2lzdGVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBweS0zIGJnLVsjZmYwMDhDXSB0ZXh0LXdoaXRlIGhvdmVyOmJnLVsjODRmZjIwXSBob3Zlcjp0ZXh0LVsjMTYxNjE2XSByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBIZW1lbiBCYcWfbGFcbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodEljb24gY2xhc3NOYW1lPVwibWwtMiBoLTUgdy01XCIgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwibW90aW9uIiwiUGhvbmVDYWxsIiwiQXJyb3dSaWdodEljb24iLCJMaW5rIiwiQW5pbWF0ZWRIZXJvIiwidGl0bGVOdW1iZXIiLCJzZXRUaXRsZU51bWJlciIsInRpdGxlcyIsInRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJjbGVhclRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiaDEiLCJzcGFuIiwibWFwIiwidGl0bGUiLCJpbmRleCIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwiYW5pbWF0ZSIsInAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/animated-hero.tsx\n"));

/***/ })

});