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
            templateUrl: 'app/components/trigger-resize/trigger-resize.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TriggerResize);
    return TriggerResize;
}());
exports.TriggerResize = TriggerResize;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3RyaWdnZXItcmVzaXplL3RyaWdnZXItcmVzaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFNeEM7SUFBQTtJQVNBLENBQUM7SUFSQyxpQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNkLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkQsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFFLGtCQUFrQixDQUFDO1FBQ2hELENBQUM7SUFDRixDQUFDO0lBWkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsbURBQW1EO1NBQ2pFLENBQUM7O3FCQUFBO0lBVUYsb0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHFCQUFhLGdCQVN6QixDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL3RyaWdnZXItcmVzaXplL3RyaWdnZXItcmVzaXplLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbdHJpZ2dlci1yZXNpemVdJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL3RyaWdnZXItcmVzaXplL3RyaWdnZXItcmVzaXplLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmlnZ2VyUmVzaXplIHtcclxuICBvbkNsaWNrTWUoZXZlbnQpIHtcclxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgaWYgKC9hc2lkZS1jb2xsYXBzZWQvLnRlc3QoZG9jdW1lbnQuYm9keS5jbGFzc05hbWUpICkge1xyXG4gICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKCcgYXNpZGUtY29sbGFwc2VkJywnJyk7XHJcbiAgIH0gZWxzZSB7XHJcbiAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSs9JyBhc2lkZS1jb2xsYXBzZWQnO1xyXG4gICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
