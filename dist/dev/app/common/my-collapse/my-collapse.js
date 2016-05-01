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
var CollapseCmp = (function () {
    function CollapseCmp(el) {
        this.el = el;
    }
    Object.defineProperty(CollapseCmp.prototype, "collapse", {
        set: function (value) {
            if (value !== undefined) {
                if (value) {
                    this.hide();
                }
                else {
                    this.show();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    CollapseCmp.prototype.measureHeight = function () {
        var elem = this.el.nativeElement;
        elem.className = elem.className.replace('collapse', '');
        this.h = elem.scrollHeight;
    };
    CollapseCmp.prototype.hide = function () {
        var _this = this;
        this.measureHeight();
        this.height = this.h + 'px';
        setTimeout(function () {
            _this.height = '0px';
            _this.isCollapsing = true;
        }, 1);
    };
    CollapseCmp.prototype.show = function () {
        var _this = this;
        this.height = '0px';
        setTimeout(function () {
            _this.height = _this.h + 'px';
            _this.isCollapsing = true;
        }, 1);
    };
    __decorate([
        core_1.HostBinding('class.collapsing'), 
        __metadata('design:type', Boolean)
    ], CollapseCmp.prototype, "isCollapsing", void 0);
    __decorate([
        core_1.HostBinding('style.height'), 
        __metadata('design:type', String)
    ], CollapseCmp.prototype, "height", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], CollapseCmp.prototype, "collapse", null);
    CollapseCmp = __decorate([
        core_1.Directive({ selector: '[collapse]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], CollapseCmp);
    return CollapseCmp;
}());
exports.CollapseCmp = CollapseCmp;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21tb24vbXktY29sbGFwc2UvbXktY29sbGFwc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3RCxlQUFlLENBQUMsQ0FBQTtBQUV4RTtJQXFCRSxxQkFBbUIsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRyxDQUFDO0lBVnJDLHNCQUFZLGlDQUFRO2FBQXBCLFVBQXFCLEtBQWE7WUFDaEMsRUFBRSxDQUFBLENBQUMsS0FBSyxLQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ1YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNkLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNkLENBQUM7WUFDSCxDQUFDO1FBRUgsQ0FBQzs7O09BQUE7SUFFRCxtQ0FBYSxHQUFiO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFFakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBRTdCLENBQUM7SUFDRCwwQkFBSSxHQUFKO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM1QixVQUFVLENBQUM7WUFDUCxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsMEJBQUksR0FBSjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUM1QixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBekNEO1FBQUMsa0JBQVcsQ0FBQyxrQkFBa0IsQ0FBQzs7cURBQUE7SUFJaEM7UUFBQyxrQkFBVyxDQUFDLGNBQWMsQ0FBQzs7K0NBQUE7SUFJNUI7UUFBQyxZQUFLLEVBQUU7OzsrQ0FBQTtJQVhWO1FBQUMsZ0JBQVMsQ0FBQyxFQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUMsQ0FBQzs7bUJBQUE7SUE4Q3BDLGtCQUFDO0FBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtBQTdDWSxtQkFBVyxjQTZDdkIsQ0FBQSIsImZpbGUiOiJhcHAvY29tbW9uL215LWNvbGxhcHNlL215LWNvbGxhcHNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBIb3N0QmluZGluZywgRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW2NvbGxhcHNlXSd9KVxyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2VDbXAge1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbGxhcHNpbmcnKVxyXG4gIHByaXZhdGUgaXNDb2xsYXBzaW5nOmJvb2xlYW47XHJcblxyXG4gICAgLy8gc3R5bGVcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpXHJcbiAgcHJpdmF0ZSBoZWlnaHQ6c3RyaW5nO1xyXG4gIHByaXZhdGUgaDpzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHJpdmF0ZSBzZXQgY29sbGFwc2UodmFsdWU6Ym9vbGVhbikge1xyXG4gICAgaWYodmFsdWUhPT11bmRlZmluZWQpIHtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vXHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikge31cclxuICBtZWFzdXJlSGVpZ2h0KCkge1xyXG4gICAgbGV0IGVsZW0gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAvL2xldHMgYmUgc3VyZSB0aGUgZWxlbWVudCBoYXMgZGlzcGxheTpibG9jayBzdHlsZVxyXG4gICAgZWxlbS5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZS5yZXBsYWNlKCdjb2xsYXBzZScsICcnKTtcclxuICAgIHRoaXMuaCA9IGVsZW0uc2Nyb2xsSGVpZ2h0O1xyXG5cclxuICB9XHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMubWVhc3VyZUhlaWdodCgpO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmggKyAncHgnO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAnMHB4JztcclxuICAgICAgICB0aGlzLmlzQ29sbGFwc2luZyA9IHRydWU7Ly9hcHBseSAnY29sbGFwc2luZycgY2xhc3NcclxuICAgIH0sMSk7XHJcbiAgfVxyXG4gIHNob3coKSB7XHJcbiAgICB0aGlzLmhlaWdodCA9ICcwcHgnO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmggKyAncHgnO1xyXG4gICAgICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gdHJ1ZTsvL2FwcGx5ICdjb2xsYXBzaW5nJyBjbGFzc1xyXG4gICAgfSwxKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
