System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ComponentBlock;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ComponentBlock = (function () {
                function ComponentBlock() {
                    this.block = [
                        {
                            "icon": "asd",
                            "title": "Legal Updates",
                            "message": "We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers."
                        }
                    ];
                }
                ComponentBlock = __decorate([
                    core_1.Component({
                        selector: 'content-block',
                        templateUrl: 'app/content-block.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ComponentBlock);
                return ComponentBlock;
            }());
            exports_1("ComponentBlock", ComponentBlock);
        }
    }
});
//# sourceMappingURL=content-block.js.map