System.register(["aurelia-dependency-injection", "aurelia-logging", "aurelia-loader", "aurelia-pal", "./styles/global-style-engine"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_dependency_injection_1, aurelia_logging_1, aurelia_loader_1, aurelia_pal_1, global_style_engine_1, UXConfiguration;
    return {
        setters: [
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (aurelia_loader_1_1) {
                aurelia_loader_1 = aurelia_loader_1_1;
            },
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            },
            function (global_style_engine_1_1) {
                global_style_engine_1 = global_style_engine_1_1;
            }
        ],
        execute: function () {
            UXConfiguration = /** @class */ (function () {
                function UXConfiguration(loader, globalStyleEngine) {
                    this.loader = loader;
                    this.globalStyleEngine = globalStyleEngine;
                    this.logger = aurelia_logging_1.getLogger('aurelia-ux');
                }
                UXConfiguration.prototype.defaultConfiguration = function () {
                    this.cssReset();
                    return this;
                };
                UXConfiguration.prototype.cssReset = function () {
                    var _this = this;
                    aurelia_pal_1.PLATFORM.moduleName('./reset.css');
                    this.loader.loadText('@aurelia-ux/core/reset.css')
                        .catch(function (err) {
                        _this.logger.warn('Aurelia-UX Core failed to load reset.css, some visual errors may appear.', err);
                    })
                        .then(function (text) {
                        if (text) {
                            _this.globalStyleEngine.addOrUpdateGlobalStyle('@aurelia-ux/core/reset.css', text);
                        }
                    });
                    return this;
                };
                UXConfiguration = __decorate([
                    aurelia_dependency_injection_1.inject(aurelia_loader_1.Loader, global_style_engine_1.GlobalStyleEngine)
                ], UXConfiguration);
                return UXConfiguration;
            }());
            exports_1("UXConfiguration", UXConfiguration);
        }
    };
});
