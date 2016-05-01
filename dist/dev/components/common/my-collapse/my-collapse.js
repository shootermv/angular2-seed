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
})();
exports.CollapseCmp = CollapseCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL215LWNvbGxhcHNlL215LWNvbGxhcHNlLnRzIl0sIm5hbWVzIjpbIkNvbGxhcHNlQ21wIiwiQ29sbGFwc2VDbXAuY29uc3RydWN0b3IiLCJDb2xsYXBzZUNtcC5jb2xsYXBzZSIsIkNvbGxhcHNlQ21wLm1lYXN1cmVIZWlnaHQiLCJDb2xsYXBzZUNtcC5oaWRlIiwiQ29sbGFwc2VDbXAuc2hvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdELGVBQWUsQ0FBQyxDQUFBO0FBQ3hFO0lBc0JFQSxxQkFBbUJBLEVBQWNBO1FBQWRDLE9BQUVBLEdBQUZBLEVBQUVBLENBQVlBO0lBQUdBLENBQUNBO0lBWHJDRCxzQkFDWUEsaUNBQVFBO2FBRHBCQSxVQUNxQkEsS0FBYUE7WUFDaENFLEVBQUVBLENBQUFBLENBQUNBLEtBQUtBLEtBQUdBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO2dCQUNyQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ1ZBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO2dCQUNkQSxDQUFDQTtnQkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ05BLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO2dCQUNkQSxDQUFDQTtZQUNIQSxDQUFDQTtRQUVIQSxDQUFDQTs7O09BQUFGO0lBRURBLG1DQUFhQSxHQUFiQTtRQUNFRyxJQUFJQSxJQUFJQSxHQUFHQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxhQUFhQSxDQUFDQTtRQUVqQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDeERBLElBQUlBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBO0lBRTdCQSxDQUFDQTtJQUNESCwwQkFBSUEsR0FBSkE7UUFBQUksaUJBT0NBO1FBTkNBLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBO1FBQ3JCQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUM1QkEsVUFBVUEsQ0FBQ0E7WUFDUEEsS0FBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsS0FBS0EsQ0FBQ0E7WUFDcEJBLEtBQUlBLENBQUNBLFlBQVlBLEdBQUdBLElBQUlBLENBQUNBO1FBQzdCQSxDQUFDQSxFQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNQQSxDQUFDQTtJQUNESiwwQkFBSUEsR0FBSkE7UUFBQUssaUJBTUNBO1FBTENBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLEtBQUtBLENBQUNBO1FBQ3BCQSxVQUFVQSxDQUFDQTtZQUNQQSxLQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxLQUFJQSxDQUFDQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUM1QkEsS0FBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDN0JBLENBQUNBLEVBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBekNETDtRQUFDQSxrQkFBV0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQTs7T0FDeEJBLHFDQUFZQSxVQUFTQTtJQUc3QkE7UUFBQ0Esa0JBQVdBLENBQUNBLGNBQWNBLENBQUNBOztPQUNwQkEsK0JBQU1BLFVBQVFBO0lBR3RCQTtRQUFDQSxZQUFLQSxFQUFFQTs7O09BQ0lBLGlDQUFRQSxRQVNuQkE7SUFyQkhBO1FBQUNBLGdCQUFTQSxDQUFDQSxFQUFDQSxRQUFRQSxFQUFFQSxZQUFZQSxFQUFDQSxDQUFDQTs7b0JBOENuQ0E7SUFBREEsa0JBQUNBO0FBQURBLENBOUNBLEFBOENDQSxJQUFBO0FBN0NZLG1CQUFXLGNBNkN2QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29tbW9uL215LWNvbGxhcHNlL215LWNvbGxhcHNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBIb3N0QmluZGluZywgRWxlbWVudFJlZn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tjb2xsYXBzZV0nfSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzZUNtcCB7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xsYXBzaW5nJylcbiAgcHJpdmF0ZSBpc0NvbGxhcHNpbmc6Ym9vbGVhbjtcblxuICAgIC8vIHN0eWxlXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JylcbiAgcHJpdmF0ZSBoZWlnaHQ6c3RyaW5nO1xuICBwcml2YXRlIGg6c3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHByaXZhdGUgc2V0IGNvbGxhcHNlKHZhbHVlOmJvb2xlYW4pIHtcbiAgICBpZih2YWx1ZSE9PXVuZGVmaW5lZCkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vXG4gIH1cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7fVxuICBtZWFzdXJlSGVpZ2h0KCkge1xuICAgIGxldCBlbGVtID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIC8vbGV0cyBiZSBzdXJlIHRoZSBlbGVtZW50IGhhcyBkaXNwbGF5OmJsb2NrIHN0eWxlXG4gICAgZWxlbS5jbGFzc05hbWUgPSBlbGVtLmNsYXNzTmFtZS5yZXBsYWNlKCdjb2xsYXBzZScsICcnKTtcbiAgICB0aGlzLmggPSBlbGVtLnNjcm9sbEhlaWdodDtcblxuICB9XG4gIGhpZGUoKSB7XG4gICAgdGhpcy5tZWFzdXJlSGVpZ2h0KCk7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmggKyAncHgnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICB0aGlzLmlzQ29sbGFwc2luZyA9IHRydWU7Ly9hcHBseSAnY29sbGFwc2luZycgY2xhc3NcbiAgICB9LDEpO1xuICB9XG4gIHNob3coKSB7XG4gICAgdGhpcy5oZWlnaHQgPSAnMHB4JztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmggKyAncHgnO1xuICAgICAgICB0aGlzLmlzQ29sbGFwc2luZyA9IHRydWU7Ly9hcHBseSAnY29sbGFwc2luZycgY2xhc3NcbiAgICB9LDEpO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==