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
        this.width = '100%';
        this.height = '220';
    }
    FlotCmp.prototype.ngOnInit = function () {
        var _this = this;
        if (!FlotCmp.chosenInitialized) {
            var plotArea = $(this.el.nativeElement).find('div').empty();
            plotArea.css({
                width: this.width,
                height: this.height
            });
            $.plot(plotArea, this.dataset, this.options);
            FlotCmp.chosenInitialized = true;
            this.emitter = emitterService_1.EmitterService.get("channel_1");
            this.emitter.subscribe(function (msg) {
                console.log('MESSAGE:', msg);
                $.plot(plotArea, _this.dataset, _this.options);
            });
        }
    };
    FlotCmp.chosenInitialized = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL2Zsb3QvZmxvdC50cyJdLCJuYW1lcyI6WyJGbG90Q21wIiwiRmxvdENtcC5jb25zdHJ1Y3RvciIsIkZsb3RDbXAubmdPbkluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCwrQkFBNkIsa0NBQWtDLENBQUMsQ0FBQTtBQUNoRTtJQWlCRUEsaUJBQW1CQSxFQUFjQTtRQUFkQyxPQUFFQSxHQUFGQSxFQUFFQSxDQUFZQTtRQUhmQSxVQUFLQSxHQUFTQSxNQUFNQSxDQUFDQTtRQUNyQkEsV0FBTUEsR0FBVUEsS0FBS0EsQ0FBQ0E7SUFFSkEsQ0FBQ0E7SUFFckNELDBCQUFRQSxHQUFSQTtRQUFBRSxpQkFpQkNBO1FBaEJHQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxPQUFPQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBLENBQUNBO1lBQzlCQSxJQUFJQSxRQUFRQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTtZQUM1REEsUUFBUUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7Z0JBQ1RBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBLEtBQUtBO2dCQUNqQkEsTUFBTUEsRUFBRUEsSUFBSUEsQ0FBQ0EsTUFBTUE7YUFDdEJBLENBQUNBLENBQUNBO1lBRUhBLENBQUNBLENBQUNBLElBQUlBLENBQUVBLFFBQVFBLEVBQUVBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBQzlDQSxPQUFPQSxDQUFDQSxpQkFBaUJBLEdBQUdBLElBQUlBLENBQUNBO1lBQ2pDQSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSwrQkFBY0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7WUFDL0NBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFNBQVNBLENBQUNBLFVBQUFBLEdBQUdBO2dCQUN0QkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsVUFBVUEsRUFBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzVCQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFFQSxRQUFRQSxFQUFFQSxLQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtZQUVsREEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDTEEsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUEzQk1GLHlCQUFpQkEsR0FBR0EsS0FBS0EsQ0FBQ0E7SUFHakNBO1FBQUNBLFlBQUtBLEVBQUVBOztPQUFVQSw0QkFBT0EsVUFBTUE7SUFDL0JBO1FBQUNBLFlBQUtBLEVBQUVBOztPQUFVQSw0QkFBT0EsVUFBS0E7SUFDOUJBO1FBQUNBLFlBQUtBLEVBQUVBOztPQUFVQSwwQkFBS0EsVUFBZ0JBO0lBQ3ZDQTtRQUFDQSxZQUFLQSxFQUFFQTs7T0FBVUEsMkJBQU1BLFVBQWdCQTtJQWYxQ0E7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLE1BQU1BO1lBQ2hCQSxRQUFRQSxFQUFFQSxvQkFBb0JBO1NBRS9CQSxDQUFDQTs7Z0JBMENEQTtJQUFEQSxjQUFDQTtBQUFEQSxDQTlDQSxBQThDQ0EsSUFBQTtBQXhDWSxlQUFPLFVBd0NuQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY29tbW9uL2Zsb3QvZmxvdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0VtaXR0ZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9lbWl0dGVyU2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmbG90JyxcbiAgdGVtcGxhdGU6IGA8ZGl2PmxvYWRpbmc8L2Rpdj5gXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBGbG90Q21we1xuXG4gIHByaXZhdGUgZGF0YVBsb3R0ZWQ6YW55O1xuICBzdGF0aWMgY2hvc2VuSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBlbWl0dGVyOmFueTtcbiAgXG4gIEBJbnB1dCgpIHByaXZhdGUgIG9wdGlvbnM6IGFueTtcbiAgQElucHV0KCkgcHJpdmF0ZSAgZGF0YXNldDphbnk7XG4gIEBJbnB1dCgpIHByaXZhdGUgIHdpZHRoOnN0cmluZz0gJzEwMCUnO1xuICBASW5wdXQoKSBwcml2YXRlICBoZWlnaHQ6c3RyaW5nID0gJzIyMCc7XG4gICAgICBcbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgaWYoIUZsb3RDbXAuY2hvc2VuSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgbGV0IHBsb3RBcmVhID0gJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmZpbmQoJ2RpdicpLmVtcHR5KCk7XG4gICAgICAgIHBsb3RBcmVhLmNzcyh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCwgXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgJC5wbG90KCBwbG90QXJlYSwgdGhpcy5kYXRhc2V0LCB0aGlzLm9wdGlvbnMpOyAgICBcbiAgICAgICAgRmxvdENtcC5jaG9zZW5Jbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZW1pdHRlciA9IEVtaXR0ZXJTZXJ2aWNlLmdldChcImNoYW5uZWxfMVwiKTtcbiAgICAgICAgdGhpcy5lbWl0dGVyLnN1YnNjcmliZShtc2cgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01FU1NBR0U6Jyxtc2cpO1xuICAgICAgICAgICAgJC5wbG90KCBwbG90QXJlYSwgdGhpcy5kYXRhc2V0LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgfSBcbiAgLypcbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmKHRoaXMuZGF0YXNldFswXS5kYXRhICE9PSBudWxsICYmICF0aGlzLmRhdGFQbG90dGVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwbG90dGluZyBkYXRhJyk7XG4gICAgICAgIGxldCBwbG90QXJlYSA9ICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5maW5kKCdkaXYnKS5lbXB0eSgpO1xuICAgICAgICAkLnBsb3QoIHBsb3RBcmVhLCB0aGlzLmRhdGFzZXQsIHRoaXMub3B0aW9ucyk7ICAgIFxuICAgICAgICB0aGlzLmRhdGFQbG90dGVkID0gdHJ1ZTsgXG4gICAgfVxuICB9ICAqL1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9