System.register(["aurelia-dependency-injection", "aurelia-binding", "../colors/swatches", "../styles/global-style-engine"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    function kebabCase(value) {
        value = value.charAt(0).toLowerCase() + value.slice(1);
        return value.replace(/([A-Z])/g, function (match) { return "-" + match[0].toLowerCase(); });
    }
    var aurelia_dependency_injection_1, aurelia_binding_1, swatches_1, global_style_engine_1, DesignProcessor;
    return {
        setters: [
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            },
            function (swatches_1_1) {
                swatches_1 = swatches_1_1;
            },
            function (global_style_engine_1_1) {
                global_style_engine_1 = global_style_engine_1_1;
            }
        ],
        execute: function () {
            DesignProcessor = /** @class */ (function () {
                function DesignProcessor(observerLocator, globalStyleEngine) {
                    this.observerLocator = observerLocator;
                    this.globalStyleEngine = globalStyleEngine;
                }
                DesignProcessor.prototype.setSwatchVariables = function () {
                    var swatchClasses = '';
                    for (var swatch in swatches_1.swatches) {
                        if (swatches_1.swatches.hasOwnProperty(swatch)) {
                            if (typeof swatches_1.swatches[swatch] === 'string') {
                                swatchClasses += "  --ux-swatch--" + kebabCase(swatch) + ": " + swatches_1.swatches[swatch] + ";\r\n";
                                continue;
                            }
                            for (var key in swatches_1.swatches[swatch]) {
                                if (swatches_1.swatches[swatch].hasOwnProperty(key)) {
                                    swatchClasses += "  --ux-swatch--" + kebabCase(swatch) + "-" + kebabCase(key) + ": " + swatches_1.swatches[swatch][key] + ";\r\n";
                                }
                            }
                        }
                    }
                    this.globalStyleEngine.addOrUpdateGlobalStyle("aurelia-ux swatches", swatchClasses, ':root');
                };
                DesignProcessor.prototype.setDesignVariables = function (design) {
                    this.globalStyleEngine.addOrUpdateGlobalStyle("aurelia-ux design styles", this.buildInnerHTML(design), ':root');
                };
                DesignProcessor.prototype.setDesignWatches = function (design) {
                    var _this = this;
                    for (var key in design) {
                        if (design.hasOwnProperty(key)) {
                            this.observerLocator.getObserver(design, key)
                                .subscribe(function () {
                                _this.globalStyleEngine.addOrUpdateGlobalStyle("aurelia-ux design styles", _this.buildInnerHTML(design), ':root');
                            });
                        }
                    }
                };
                DesignProcessor.prototype.buildInnerHTML = function (design) {
                    var designInnerHtml = '';
                    for (var key in design) {
                        if (design.hasOwnProperty(key)) {
                            designInnerHtml += "  --ux-design--" + kebabCase(key) + ": " + design[key] + ";\r\n";
                        }
                    }
                    return designInnerHtml;
                };
                DesignProcessor = __decorate([
                    aurelia_dependency_injection_1.inject(aurelia_binding_1.ObserverLocator, global_style_engine_1.GlobalStyleEngine)
                ], DesignProcessor);
                return DesignProcessor;
            }());
            exports_1("DesignProcessor", DesignProcessor);
        }
    };
});
