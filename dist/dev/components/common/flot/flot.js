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
var emitterService_1 = require('../../../services/emitterService');
var FlotCmp = (function () {
    function FlotCmp(el) {
        this.el = el;
        this.chosenInitialized = false;
        this.width = '100%';
        this.height = '220';
    }
    FlotCmp.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.chosenInitialized) {
            var plotArea = $(this.el.nativeElement).find('div').empty();
            plotArea.css({
                width: this.width,
                height: this.height
            });
            $.plot(plotArea, this.dataset, this.options);
            this.chosenInitialized = true;
            this.emitter = emitterService_1.EmitterService.get('channel_1');
            this.emitter.subscribe(function (msg) {
                console.log('MESSAGE:', msg);
                $.plot(plotArea, _this.dataset, _this.options);
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
            template: "<div>loading</div>"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], FlotCmp);
    return FlotCmp;
})();
exports.FlotCmp = FlotCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL2Zsb3QvZmxvdC50cyJdLCJuYW1lcyI6WyJGbG90Q21wIiwiRmxvdENtcC5jb25zdHJ1Y3RvciIsIkZsb3RDbXAubmdPbkluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCwrQkFBNkIsa0NBQWtDLENBQUMsQ0FBQTtBQUNoRTtJQWdCRUEsaUJBQW1CQSxFQUFjQTtRQUFkQyxPQUFFQSxHQUFGQSxFQUFFQSxDQUFZQTtRQVJ6QkEsc0JBQWlCQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUtoQkEsVUFBS0EsR0FBU0EsTUFBTUEsQ0FBQ0E7UUFDckJBLFdBQU1BLEdBQVVBLEtBQUtBLENBQUNBO0lBRUpBLENBQUNBO0lBRXJDRCwwQkFBUUEsR0FBUkE7UUFBQUUsaUJBaUJDQTtRQWhCR0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMzQkEsSUFBSUEsUUFBUUEsR0FBR0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7WUFDNURBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBO2dCQUNUQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQSxLQUFLQTtnQkFDakJBLE1BQU1BLEVBQUVBLElBQUlBLENBQUNBLE1BQU1BO2FBQ3RCQSxDQUFDQSxDQUFDQTtZQUVIQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFFQSxRQUFRQSxFQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtZQUM5Q0EsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUM5QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsK0JBQWNBLENBQUNBLEdBQUdBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBO1lBQy9DQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFBQSxHQUFHQTtnQkFDdEJBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLEVBQUNBLEdBQUdBLENBQUNBLENBQUNBO2dCQUM1QkEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBRUEsUUFBUUEsRUFBRUEsS0FBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7WUFFbERBLENBQUNBLENBQUNBLENBQUNBO1FBQ0xBLENBQUNBO0lBQ0xBLENBQUNBO0lBeEJERjtRQUFDQSxZQUFLQSxFQUFFQTs7T0FBVUEsNEJBQU9BLFVBQU1BO0lBQy9CQTtRQUFDQSxZQUFLQSxFQUFFQTs7T0FBVUEsNEJBQU9BLFVBQUtBO0lBQzlCQTtRQUFDQSxZQUFLQSxFQUFFQTs7T0FBVUEsMEJBQUtBLFVBQWdCQTtJQUN2Q0E7UUFBQ0EsWUFBS0EsRUFBRUE7O09BQVVBLDJCQUFNQSxVQUFnQkE7SUFkMUNBO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxNQUFNQTtZQUNoQkEsUUFBUUEsRUFBRUEsb0JBQW9CQTtTQUUvQkEsQ0FBQ0E7O2dCQWlDREE7SUFBREEsY0FBQ0E7QUFBREEsQ0FyQ0EsQUFxQ0NBLElBQUE7QUEvQlksZUFBTyxVQStCbkIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2NvbW1vbi9mbG90L2Zsb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtFbWl0dGVyU2VydmljZX0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZW1pdHRlclNlcnZpY2UnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZmxvdCcsXG4gIHRlbXBsYXRlOiBgPGRpdj5sb2FkaW5nPC9kaXY+YFxuXG59KVxuXG5leHBvcnQgY2xhc3MgRmxvdENtcCB7XG5cbiAgcHJpdmF0ZSBjaG9zZW5Jbml0aWFsaXplZCA9IGZhbHNlO1xuICBwcml2YXRlIGVtaXR0ZXI6YW55O1xuXG4gIEBJbnB1dCgpIHByaXZhdGUgIG9wdGlvbnM6IGFueTtcbiAgQElucHV0KCkgcHJpdmF0ZSAgZGF0YXNldDphbnk7XG4gIEBJbnB1dCgpIHByaXZhdGUgIHdpZHRoOnN0cmluZz0gJzEwMCUnO1xuICBASW5wdXQoKSBwcml2YXRlICBoZWlnaHQ6c3RyaW5nID0gJzIyMCc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgaWYoIXRoaXMuY2hvc2VuSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgbGV0IHBsb3RBcmVhID0gJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmZpbmQoJ2RpdicpLmVtcHR5KCk7XG4gICAgICAgIHBsb3RBcmVhLmNzcyh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJC5wbG90KCBwbG90QXJlYSwgdGhpcy5kYXRhc2V0LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNob3NlbkluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbWl0dGVyID0gRW1pdHRlclNlcnZpY2UuZ2V0KCdjaGFubmVsXzEnKTtcbiAgICAgICAgdGhpcy5lbWl0dGVyLnN1YnNjcmliZShtc2cgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01FU1NBR0U6Jyxtc2cpO1xuICAgICAgICAgICAgJC5wbG90KCBwbG90QXJlYSwgdGhpcy5kYXRhc2V0LCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgICAgIH0pO1xuICAgICAgfVxuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==