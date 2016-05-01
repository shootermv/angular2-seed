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
var TriggerResize = (function () {
    function TriggerResize() {
    }
    TriggerResize.prototype.onClickMe = function (event) {
        event.preventDefault();
        if (/aside-collapsed/.test(document.body.className)) {
            document.body.className = document.body.className.replace(' aside-collapsed', '');
        }
        else {
            document.body.className += ' aside-collapsed';
        }
    };
    TriggerResize = __decorate([
        core_1.Component({
            selector: '[trigger-resize]',
            template: "\n    <a href=\"\" class=\"hidden-xs\" (click)=\"onClickMe($event)\">\n    \t<em class=\"fa fa-navicon\"></em>\n    </a>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TriggerResize);
    return TriggerResize;
})();
exports.TriggerResize = TriggerResize;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1jb21wb25lbnRzL3RyaWdnZXItcmVzaXplL3RyaWdnZXItcmVzaXplLnRzIl0sIm5hbWVzIjpbIlRyaWdnZXJSZXNpemUiLCJUcmlnZ2VyUmVzaXplLmNvbnN0cnVjdG9yIiwiVHJpZ2dlclJlc2l6ZS5vbkNsaWNrTWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUV4QztJQUFBQTtJQWlCQUMsQ0FBQ0E7SUFSQ0QsaUNBQVNBLEdBQVRBLFVBQVVBLEtBQUtBO1FBQ2RFLEtBQUtBLENBQUNBLGNBQWNBLEVBQUVBLENBQUNBO1FBQ3ZCQSxFQUFFQSxDQUFDQSxDQUFDQSxpQkFBaUJBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUVBLENBQUNBLENBQUNBLENBQUNBO1lBQ25EQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxHQUFHQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxrQkFBa0JBLEVBQUNBLEVBQUVBLENBQUNBLENBQUNBO1FBQ3JGQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNKQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxJQUFFQSxrQkFBa0JBLENBQUNBO1FBQ2hEQSxDQUFDQTtJQUNGQSxDQUFDQTtJQWhCSEY7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLGtCQUFrQkE7WUFDNUJBLFFBQVFBLEVBQUVBLDhIQUlUQTtTQUNGQSxDQUFDQTs7c0JBVURBO0lBQURBLG9CQUFDQTtBQUFEQSxDQWpCQSxBQWlCQ0EsSUFBQTtBQVRZLHFCQUFhLGdCQVN6QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbGF5b3V0L2xheW91dC1jb21wb25lbnRzL3RyaWdnZXItcmVzaXplL3RyaWdnZXItcmVzaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbdHJpZ2dlci1yZXNpemVdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJoaWRkZW4teHNcIiAoY2xpY2spPVwib25DbGlja01lKCRldmVudClcIj5cbiAgICBcdDxlbSBjbGFzcz1cImZhIGZhLW5hdmljb25cIj48L2VtPlxuICAgIDwvYT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUcmlnZ2VyUmVzaXplIHtcbiAgb25DbGlja01lKGV2ZW50KSB7XG4gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgaWYgKC9hc2lkZS1jb2xsYXBzZWQvLnRlc3QoZG9jdW1lbnQuYm9keS5jbGFzc05hbWUpICkge1xuICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZSgnIGFzaWRlLWNvbGxhcHNlZCcsJycpO1xuICAgfSBlbHNlIHtcbiAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSs9JyBhc2lkZS1jb2xsYXBzZWQnO1xuICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=