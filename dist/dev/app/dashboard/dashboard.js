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
var common_1 = require('angular2/common');
var now_1 = require('../common/now/now');
var flot_1 = require('../common/flot/flot');
var my_collapse_1 = require('../common/my-collapse/my-collapse');
var flotService_1 = require('../shared/services/flotService');
var emitterService_1 = require('../shared/services/emitterService');
var http_1 = require('angular2/http');
var DashboardCmp = (function () {
    function DashboardCmp(_flotService) {
        this._flotService = _flotService;
        this.splineOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150,
                tickColor: '#eee',
                position: 'left',
                tickFormatter: function (v) {
                    return v;
                }
            },
            shadowSize: 0
        };
        this.dataset = [];
        this.emitter = emitterService_1.EmitterService.get('channel_1');
    }
    DashboardCmp.prototype.getEntries = function () {
        var _this = this;
        this._flotService.getFlotEntries().subscribe(function (entries) {
            _this.dataset = entries;
            document.querySelector('flot').className = document.querySelector('flot').className.replace('whirl' + ' ' + 'traditional', '');
            _this.emitter.emit('Broadcast');
        }, function (error) { _this.errorMessage = error; });
    };
    DashboardCmp.prototype.chartRefresh = function () {
        document.querySelector('flot').className = document.querySelector('flot').className + 'whirl' + ' ' + 'traditional';
        this.getEntries();
    };
    DashboardCmp.prototype.ngOnInit = function () {
        this.getEntries();
    };
    DashboardCmp = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
            styleUrls: ['app/dashboard/dashboard.css'],
            directives: [common_1.CORE_DIRECTIVES, now_1.NowCmp, flot_1.FlotCmp, my_collapse_1.CollapseCmp],
            providers: [flotService_1.FlotService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [flotService_1.FlotService])
    ], DashboardCmp);
    return DashboardCmp;
}());
exports.DashboardCmp = DashboardCmp;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsb0JBQXFCLG1CQUFtQixDQUFDLENBQUE7QUFDekMscUJBQXNCLHFCQUFxQixDQUFDLENBQUE7QUFDNUMsNEJBQTBCLG1DQUFtQyxDQUFDLENBQUE7QUFDOUQsNEJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFDM0QsK0JBQTZCLG1DQUFtQyxDQUFDLENBQUE7QUFDakUscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBUTlDO0lBS0Usc0JBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUc7WUFDWCxNQUFNLEVBQUU7Z0JBQ0osS0FBSyxFQUFFO29CQUNILElBQUksRUFBRSxLQUFLO2lCQUNkO2dCQUNELE1BQU0sRUFBRTtvQkFDSixJQUFJLEVBQUUsSUFBSTtvQkFDVixNQUFNLEVBQUUsQ0FBQztpQkFDWjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLElBQUk7b0JBQ1YsT0FBTyxFQUFFLEdBQUc7b0JBQ1osU0FBUyxFQUFFLENBQUM7b0JBQ1osSUFBSSxFQUFFLEdBQUc7aUJBQ1o7YUFDSjtZQUNELElBQUksRUFBRTtnQkFDRixXQUFXLEVBQUUsTUFBTTtnQkFDbkIsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsZUFBZSxFQUFFLFNBQVM7YUFDN0I7WUFDRCxPQUFPLEVBQUUsSUFBSTtZQUNiLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsVUFBVSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzVEO1lBQ0QsS0FBSyxFQUFFO2dCQUNILFNBQVMsRUFBRSxTQUFTO2dCQUNwQixJQUFJLEVBQUUsWUFBWTthQUNyQjtZQUNELEtBQUssRUFBRTtnQkFDSCxHQUFHLEVBQUUsQ0FBQztnQkFDTixHQUFHLEVBQUUsR0FBRztnQkFDUixTQUFTLEVBQUUsTUFBTTtnQkFDakIsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLGFBQWEsRUFBRSxVQUFVLENBQUM7b0JBQ3RCLE1BQU0sQ0FBQyxDQUFDLENBQW1CO2dCQUMvQixDQUFDO2FBQ0o7WUFDRCxVQUFVLEVBQUUsQ0FBQztTQUNoQixDQUFDO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRywrQkFBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsaUNBQVUsR0FBVjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQy9CLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvSCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQU0sS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsbUNBQVksR0FBWjtRQUNFLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFFLE9BQU8sR0FBRyxHQUFHLEdBQUcsYUFBYSxDQUFDO1FBQ25ILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsK0JBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBdkVIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7WUFDMUMsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSxZQUFNLEVBQUUsY0FBTyxFQUFFLHlCQUFXLENBQUM7WUFDM0QsU0FBUyxFQUFFLENBQUMseUJBQVcsRUFBRSxxQkFBYyxDQUFDO1NBQ3pDLENBQUM7O29CQUFBO0lBa0VGLG1CQUFDO0FBQUQsQ0FqRUEsQUFpRUMsSUFBQTtBQWpFWSxvQkFBWSxlQWlFeEIsQ0FBQSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0NPUkVfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcclxuaW1wb3J0IHtOb3dDbXB9IGZyb20gJy4uL2NvbW1vbi9ub3cvbm93JztcclxuaW1wb3J0IHtGbG90Q21wfSBmcm9tICcuLi9jb21tb24vZmxvdC9mbG90JztcclxuaW1wb3J0IHtDb2xsYXBzZUNtcH0gZnJvbSAnLi4vY29tbW9uL215LWNvbGxhcHNlL215LWNvbGxhcHNlJztcclxuaW1wb3J0IHtGbG90U2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2Zsb3RTZXJ2aWNlJztcclxuaW1wb3J0IHtFbWl0dGVyU2VydmljZX0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2VtaXR0ZXJTZXJ2aWNlJztcclxuaW1wb3J0IHsgSFRUUF9QUk9WSURFUlN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Rhc2hib2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgTm93Q21wLCBGbG90Q21wLCBDb2xsYXBzZUNtcF0sXHJcbiAgcHJvdmlkZXJzOiBbRmxvdFNlcnZpY2UsIEhUVFBfUFJPVklERVJTXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ21wIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIHNwbGluZU9wdGlvbnM6YW55O1xyXG4gIHByaXZhdGUgZGF0YXNldDphbnk7XHJcbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2U6c3RyaW5nO1xyXG4gIHByaXZhdGUgZW1pdHRlcjphbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmxvdFNlcnZpY2U6IEZsb3RTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnNwbGluZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBwb2ludHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDRcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgc3BsaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgIHRlbnNpb246IDAuNCxcclxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IDAuNVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZjZmMnXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHRvb2x0aXBPcHRzOiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uIChsYWJlbCwgeCwgeSkgeyByZXR1cm4geCArICcgOiAnICsgeTsgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgdGlja0NvbG9yOiAnI2ZjZmNmYycsXHJcbiAgICAgICAgICAgICAgICAgIG1vZGU6ICdjYXRlZ29yaWVzJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgICBtYXg6IDE1MCwgLy8gb3B0aW9uYWw6IHVzZSBpdCBmb3IgYSBjbGVhciByZXByZXNldGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgICB0aWNrRm9ybWF0dGVyOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYvKiArICcgdmlzaXRvcnMnKi87XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHNoYWRvd1NpemU6IDBcclxuICAgICAgICAgIH07XHJcbiAgICB0aGlzLmRhdGFzZXQgPSBbXTtcclxuICAgIHRoaXMuZW1pdHRlciA9IEVtaXR0ZXJTZXJ2aWNlLmdldCgnY2hhbm5lbF8xJyk7XHJcbiAgfS8vZW5kIG9mIGNvbnN0cnVjdG9yXHJcbiAgZ2V0RW50cmllcygpIHtcclxuICAgIHRoaXMuX2Zsb3RTZXJ2aWNlLmdldEZsb3RFbnRyaWVzKCkuc3Vic2NyaWJlKGVudHJpZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc2V0ID0gZW50cmllcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zsb3QnKS5jbGFzc05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmbG90JykuY2xhc3NOYW1lLnJlcGxhY2UoJ3doaXJsJyArICcgJyArICd0cmFkaXRpb25hbCcsICcnKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnQnJvYWRjYXN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB7IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcjt9KTtcclxuICB9XHJcbiAgY2hhcnRSZWZyZXNoKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZmxvdCcpLmNsYXNzTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zsb3QnKS5jbGFzc05hbWUgKyd3aGlybCcgKyAnICcgKyAndHJhZGl0aW9uYWwnO1xyXG4gICAgdGhpcy5nZXRFbnRyaWVzKCk7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXRFbnRyaWVzKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
