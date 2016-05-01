"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var Preloader = (function () {
    function Preloader(el, renderer, router) {
        this.el = el;
        this.renderer = renderer;
        this.router = router;
        this.loadCounter = 0;
        this.counter = 0;
        this.setUpEvents();
    }
    Preloader.prototype.ngOnInit = function () {
        this.renderer.setElementClass(this.el.nativeElement, 'preloader', true);
        this.startCounter();
    };
    Preloader.prototype.endCounter = function () {
        this.viewloaded = true;
        this.loadCounter = 100;
        this.renderer.setElementClass(this.el.nativeElement, 'preloader', false);
    };
    Preloader.prototype.startCounter = function () {
        var _this = this;
        var remaining = 100 - this.counter;
        this.counter = this.counter + (0.015 * Math.pow(1 - Math.sqrt(remaining), 2));
        this.loadCounter = parseInt(this.counter.toString(), 10);
        if (!this.viewloaded) {
            setTimeout(function () { _this.startCounter(); }, 20);
        }
    };
    Preloader.prototype.setUpEvents = function () {
        var _this = this;
        this.router.subscribe(function (value) { return _this.onNext(value); });
    };
    Preloader.prototype.onNext = function (value) {
        var _this = this;
        setTimeout(function () {
            _this.endCounter();
        }, 2000);
    };
    Preloader = __decorate([
        core_1.Component({
            selector: 'preloader',
            template: "\n     <div class=\"preloader-progress\">\n      <div class=\"preloader-progress-bar\" \n             [ngStyle]=\"{width: loadCounter + '%'}\"></div>\n     </div>\n  "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, router_1.Router])
    ], Preloader);
    return Preloader;
}());
exports.Preloader = Preloader;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21tb24vcHJlbG9hZGVyL3ByZWxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXNELGVBQWUsQ0FBQyxDQUFBO0FBQ3RFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBVXZDO0lBSUUsbUJBQW1CLEVBQWMsRUFDekIsUUFBa0IsRUFDbEIsTUFBYztRQUZILE9BQUUsR0FBRixFQUFFLENBQVk7UUFDekIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNELDhCQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFBQSxpQkFLQztRQUpJLElBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6RCxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQUMsVUFBVSxDQUFDLGNBQU8sS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU0sK0JBQVcsR0FBbkI7UUFBQSxpQkFFQztRQURBLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTywwQkFBTSxHQUFkLFVBQWUsS0FBVTtRQUF6QixpQkFJQztRQUhDLFVBQVUsQ0FBQztZQUNWLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBOUNGO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSx3S0FLVDtTQUNGLENBQUM7O2lCQUFBO0lBdUNGLGdCQUFDO0FBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtBQXRDWSxpQkFBUyxZQXNDckIsQ0FBQSIsImZpbGUiOiJhcHAvY29tbW9uL3ByZWxvYWRlci9wcmVsb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ByZWxvYWRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICA8ZGl2IGNsYXNzPVwicHJlbG9hZGVyLXByb2dyZXNzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcmVsb2FkZXItcHJvZ3Jlc3MtYmFyXCIgXHJcbiAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7d2lkdGg6IGxvYWRDb3VudGVyICsgXFwnJVxcJ31cIj48L2Rpdj5cclxuICAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcmVsb2FkZXIgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBsb2FkQ291bnRlcjpudW1iZXI7XHJcbiAgcHJpdmF0ZSBjb3VudGVyOm51bWJlcjtcclxuICBwcml2YXRlIHZpZXdsb2FkZWQ6Ym9vbGVhbjtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXHJcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy5sb2FkQ291bnRlciA9IDA7XHJcbiAgICB0aGlzLmNvdW50ZXIgID0gMDtcclxuICAgIHRoaXMuc2V0VXBFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3ByZWxvYWRlcicsIHRydWUpO1xyXG4gICAgIHRoaXMuc3RhcnRDb3VudGVyKCk7XHJcbiAgfVxyXG4gIGVuZENvdW50ZXIoKSB7XHJcbiAgICB0aGlzLnZpZXdsb2FkZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5sb2FkQ291bnRlciA9IDEwMDtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3ByZWxvYWRlcicsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0Q291bnRlcigpICB7XHJcbiAgICAgICBsZXQgcmVtYWluaW5nID0gMTAwIC0gdGhpcy5jb3VudGVyO1xyXG4gICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5jb3VudGVyICsgKDAuMDE1ICogTWF0aC5wb3coMSAtIE1hdGguc3FydChyZW1haW5pbmcpLCAyKSk7XHJcbiAgICAgICB0aGlzLmxvYWRDb3VudGVyID0gcGFyc2VJbnQodGhpcy5jb3VudGVyLnRvU3RyaW5nKCksIDEwKTtcclxuICAgICAgIGlmKCF0aGlzLnZpZXdsb2FkZWQpIHsgc2V0VGltZW91dCgoKSA9PiB7dGhpcy5zdGFydENvdW50ZXIoKTt9LCAyMCk7IH1cclxuICB9XHJcblxyXG5cdHByaXZhdGUgc2V0VXBFdmVudHMoKTogdm9pZCB7XHJcblx0XHR0aGlzLnJvdXRlci5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHRoaXMub25OZXh0KHZhbHVlKSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uTmV4dCh2YWx1ZTogYW55KTogdm9pZCB7XHJcblx0ICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdCAgdGhpcy5lbmRDb3VudGVyKCk7XHJcblx0ICB9LCAyMDAwKTtcclxuXHR9XHJcbn1cclxuIl19
