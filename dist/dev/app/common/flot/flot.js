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
var emitterService_1 = require('../../shared/services/emitterService');
var FlotCmp = (function () {
    function FlotCmp(el, emitter) {
        this.el = el;
        this.emitter = emitter;
        this.chosenInitialized = false;
        this.width = '100%';
        this.height = '220';
    }
    FlotCmp.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.chosenInitialized) {
            var plotArea_1 = $(this.el.nativeElement).find('div').empty();
            plotArea_1.css({
                width: this.width,
                height: this.height
            });
            $.plot(plotArea_1, this.dataset, this.options);
            this.chosenInitialized = true;
            this.emitter = emitterService_1.EmitterService.get('channel_1');
            this.emitter.subscribe(function (msg) {
                console.log('MESSAGE:', msg);
                $.plot(plotArea_1, _this.dataset, _this.options);
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FlotCmp.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FlotCmp.prototype, "dataset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FlotCmp.prototype, "width", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FlotCmp.prototype, "height", void 0);
    FlotCmp = __decorate([
        core_1.Component({
            selector: 'flot',
            template: "<div>loading</div>",
            providers: [emitterService_1.EmitterService]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, emitterService_1.EmitterService])
    ], FlotCmp);
    return FlotCmp;
}());
exports.FlotCmp = FlotCmp;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21tb24vZmxvdC9mbG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsK0JBQTZCLHNDQUFzQyxDQUFDLENBQUE7QUFPcEU7SUFVRSxpQkFBbUIsRUFBYyxFQUFTLE9BQXVCO1FBQTlDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQVJ6RCxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFLaEIsVUFBSyxHQUFTLE1BQU0sQ0FBQztRQUNyQixXQUFNLEdBQVUsS0FBSyxDQUFDO0lBRTRCLENBQUM7SUFFckUsMEJBQVEsR0FBUjtRQUFBLGlCQWlCQztRQWhCRyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxVQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVELFVBQVEsQ0FBQyxHQUFHLENBQUM7Z0JBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDdEIsQ0FBQyxDQUFDO1lBRUgsQ0FBQyxDQUFDLElBQUksQ0FBRSxVQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLCtCQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUUsVUFBUSxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWxELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUF4QkQ7UUFBQyxZQUFLLEVBQUU7OzRDQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzRDQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzBDQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzJDQUFBO0lBZFY7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUMsQ0FBQywrQkFBYyxDQUFDO1NBQzNCLENBQUM7O2VBQUE7SUFpQ0YsY0FBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUEvQlksZUFBTyxVQStCbkIsQ0FBQSIsImZpbGUiOiJhcHAvY29tbW9uL2Zsb3QvZmxvdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7RW1pdHRlclNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9lbWl0dGVyU2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZmxvdCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2PmxvYWRpbmc8L2Rpdj5gLFxyXG4gIHByb3ZpZGVyczpbRW1pdHRlclNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmxvdENtcCB7XHJcblxyXG4gIHByaXZhdGUgY2hvc2VuSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICBcclxuXHJcbiAgQElucHV0KCkgcHJpdmF0ZSAgb3B0aW9uczogYW55O1xyXG4gIEBJbnB1dCgpIHByaXZhdGUgIGRhdGFzZXQ6YW55O1xyXG4gIEBJbnB1dCgpIHByaXZhdGUgIHdpZHRoOnN0cmluZz0gJzEwMCUnO1xyXG4gIEBJbnB1dCgpIHByaXZhdGUgIGhlaWdodDpzdHJpbmcgPSAnMjIwJztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgZW1pdHRlcjogRW1pdHRlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgICBpZighdGhpcy5jaG9zZW5Jbml0aWFsaXplZCkge1xyXG4gICAgICAgIGxldCBwbG90QXJlYSA9ICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5maW5kKCdkaXYnKS5lbXB0eSgpO1xyXG4gICAgICAgIHBsb3RBcmVhLmNzcyh7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQucGxvdCggcGxvdEFyZWEsIHRoaXMuZGF0YXNldCwgdGhpcy5vcHRpb25zKTtcclxuICAgICAgICB0aGlzLmNob3NlbkluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVtaXR0ZXIgPSBFbWl0dGVyU2VydmljZS5nZXQoJ2NoYW5uZWxfMScpO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlci5zdWJzY3JpYmUobXNnID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ01FU1NBR0U6Jyxtc2cpO1xyXG4gICAgICAgICAgICAkLnBsb3QoIHBsb3RBcmVhLCB0aGlzLmRhdGFzZXQsIHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
