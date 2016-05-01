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
var navbar_component_1 = require('./navbar.component');
var toolbar_component_1 = require('./toolbar.component');
var index_1 = require('../shared/index');
var top_navbar_1 = require('./top-navbar/top-navbar');
var sidebar_1 = require('./sidebar/sidebar');
var widgets_1 = require('../widgets/widgets');
var dashboard_1 = require('../dashboard/dashboard');
var preloader_1 = require('../common/preloader/preloader');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'sd-app',
            viewProviders: [index_1.NameListService],
            templateUrl: 'app/components/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, preloader_1.Preloader, navbar_component_1.NavbarComponent, toolbar_component_1.ToolbarComponent, sidebar_1.SideBarCmp, top_navbar_1.TopNavbarCmp, widgets_1.WidgetsCmp, dashboard_1.DashboardCmp]
        }),
        router_1.RouteConfig([
            { path: '/', component: dashboard_1.DashboardCmp, as: 'Dashboard' },
            { path: '/dashboard', component: dashboard_1.DashboardCmp, as: 'Dashboard' },
            { path: '/widgets', component: widgets_1.WidgetsCmp, as: 'Widgets' }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBNkMsaUJBQWlCLENBQUMsQ0FBQTtBQUMvRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUNuRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCxzQkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUdoRCwyQkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCx3QkFBeUIsbUJBQW1CLENBQUMsQ0FBQTtBQUM3Qyx3QkFBeUIsb0JBQW9CLENBQUMsQ0FBQTtBQUM5QywwQkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQUNwRCwwQkFBd0IsK0JBQStCLENBQUMsQ0FBQTtBQWF4RDtJQUFBO0lBQTJCLENBQUM7SUFYNUI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsYUFBYSxFQUFFLENBQUMsdUJBQWUsQ0FBQztZQUNoQyxXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLHFCQUFTLEVBQUUsa0NBQWUsRUFBRSxvQ0FBZ0IsRUFBRSxvQkFBVSxFQUFFLHlCQUFZLEVBQUUsb0JBQVUsRUFBRSx3QkFBWSxDQUFDO1NBQ2xJLENBQUM7UUFDRCxvQkFBVyxDQUFDO1lBQ1gsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSx3QkFBWSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUU7WUFDdkQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSx3QkFBWSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUU7WUFDaEUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxvQkFBVSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUU7U0FDM0QsQ0FBQzs7b0JBQUE7SUFDeUIsbUJBQUM7QUFBRCxDQUEzQixBQUE0QixJQUFBO0FBQWYsb0JBQVksZUFBRyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge05hdmJhckNvbXBvbmVudH0gZnJvbSAnLi9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtUb29sYmFyQ29tcG9uZW50fSBmcm9tICcuL3Rvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtOYW1lTGlzdFNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSAnLi4vK2hvbWUvaW5kZXgnO1xyXG5pbXBvcnQge0Fib3V0Q29tcG9uZW50fSBmcm9tICcuLi8rYWJvdXQvaW5kZXgnO1xyXG5pbXBvcnQge1RvcE5hdmJhckNtcH0gZnJvbSAnLi90b3AtbmF2YmFyL3RvcC1uYXZiYXInO1xyXG5pbXBvcnQge1NpZGVCYXJDbXB9IGZyb20gJy4vc2lkZWJhci9zaWRlYmFyJztcclxuaW1wb3J0IHtXaWRnZXRzQ21wfSBmcm9tICcuLi93aWRnZXRzL3dpZGdldHMnO1xyXG5pbXBvcnQge0Rhc2hib2FyZENtcH0gZnJvbSAnLi4vZGFzaGJvYXJkL2Rhc2hib2FyZCc7XHJcbmltcG9ydCB7UHJlbG9hZGVyfSBmcm9tICcuLi9jb21tb24vcHJlbG9hZGVyL3ByZWxvYWRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NkLWFwcCcsXHJcbiAgdmlld1Byb3ZpZGVyczogW05hbWVMaXN0U2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgUHJlbG9hZGVyLCBOYXZiYXJDb21wb25lbnQsIFRvb2xiYXJDb21wb25lbnQsIFNpZGVCYXJDbXAsIFRvcE5hdmJhckNtcCwgV2lkZ2V0c0NtcCwgRGFzaGJvYXJkQ21wXVxyXG59KVxyXG5AUm91dGVDb25maWcoW1xyXG4gIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IERhc2hib2FyZENtcCwgYXM6ICdEYXNoYm9hcmQnIH0sXHJcbiAgeyBwYXRoOiAnL2Rhc2hib2FyZCcsIGNvbXBvbmVudDogRGFzaGJvYXJkQ21wLCBhczogJ0Rhc2hib2FyZCcgfSxcclxuICB7IHBhdGg6ICcvd2lkZ2V0cycsIGNvbXBvbmVudDogV2lkZ2V0c0NtcCwgYXM6ICdXaWRnZXRzJyB9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge31cclxuIl19
