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
var about_1 = require('../about/about');
var widgets_1 = require('../widgets/widgets');
var dashboard_1 = require('../dashboard/dashboard');
var name_list_1 = require('../../services/name_list');
var top_navbar_1 = require('../layout/top-navbar/top-navbar');
var sidebar_1 = require('../layout/sidebar/sidebar');
var AppCmp = (function () {
    function AppCmp() {
    }
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app',
            viewProviders: [name_list_1.NameList],
            template: "\n    <section class=\"wrapper\">\n      <top-navbar class=\"topnavbar-wrapper\"></top-navbar>\n  \n      <sidebar class=\"aside\"></sidebar>\n      <section><div class=\"content-wrapper\"><router-outlet></router-outlet></div></section>\n\n    </section>\n  ",
            styles: ["\n    /*override bootstrap*/\n    .nav>li>a:focus, .nav>li>a:hover {\n        text-decoration: none;\n        background-color: transparent;\n    }\n    .navbar, .nav-wrapper {\n        min-height:55px;\n    }\n\n    .panel-default > .panel-heading {\n        color: #444444;\n        background-color: #ffffff;\n        border-color: #cfdbe2;\n    }\n  "],
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES, top_navbar_1.TopNavbarCmp, sidebar_1.SideBarCmp, about_1.AboutCmp, widgets_1.WidgetsCmp]
        }),
        router_1.RouteConfig([
            { path: '/', component: dashboard_1.DashboardCmp, as: 'Dashboard' },
            { path: '/dashboard', component: dashboard_1.DashboardCmp, as: 'Dashboard' },
            { path: '/widgets', component: widgets_1.WidgetsCmp, as: 'Widgets' }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDbXAiLCJBcHBDbXAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUMzRCx1QkFHTyxpQkFBaUIsQ0FBQyxDQUFBO0FBSXpCLHNCQUF1QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3hDLHdCQUF5QixvQkFBb0IsQ0FBQyxDQUFBO0FBQzlDLDBCQUEyQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ3BELDBCQUF1QiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ2xELDJCQUEyQixpQ0FBaUMsQ0FBQyxDQUFBO0FBQzdELHdCQUF5QiwyQkFBMkIsQ0FBQyxDQUFBO0FBRXJEO0lBQUFBO0lBb0NxQkMsQ0FBQ0E7SUFwQ3RCRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsS0FBS0E7WUFDZkEsYUFBYUEsRUFBRUEsQ0FBQ0Esb0JBQVFBLENBQUNBO1lBQ3pCQSxRQUFRQSxFQUFFQSxvUUFRVEE7WUFDREEsTUFBTUEsRUFBRUEsQ0FBQ0Esb1dBZVJBLENBQUNBO1lBQ0ZBLGFBQWFBLEVBQUVBLHdCQUFpQkEsQ0FBQ0EsSUFBSUE7WUFDckNBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsRUFBRUEseUJBQVlBLEVBQUVBLG9CQUFVQSxFQUFFQSxnQkFBUUEsRUFBRUEsb0JBQVVBLENBQUNBO1NBQ2hGQSxDQUFDQTtRQUNEQSxvQkFBV0EsQ0FBQ0E7WUFDWEEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsU0FBU0EsRUFBRUEsd0JBQVlBLEVBQUVBLEVBQUVBLEVBQUVBLFdBQVdBLEVBQUVBO1lBQ3ZEQSxFQUFFQSxJQUFJQSxFQUFFQSxZQUFZQSxFQUFFQSxTQUFTQSxFQUFFQSx3QkFBWUEsRUFBRUEsRUFBRUEsRUFBRUEsV0FBV0EsRUFBRUE7WUFDaEVBLEVBQUVBLElBQUlBLEVBQUVBLFVBQVVBLEVBQUVBLFNBQVNBLEVBQUVBLG9CQUFVQSxFQUFFQSxFQUFFQSxFQUFFQSxTQUFTQSxFQUFFQTtTQUMzREEsQ0FBQ0E7O2VBQ29CQTtJQUFEQSxhQUFDQTtBQUFEQSxDQXBDckIsQUFvQ3NCQSxJQUFBO0FBQVQsY0FBTSxTQUFHLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hcHAvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7XG4gIFJvdXRlQ29uZmlnLFxuICBST1VURVJfRElSRUNUSVZFU1xufSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuLy8gaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cblxuaW1wb3J0IHtBYm91dENtcH0gZnJvbSAnLi4vYWJvdXQvYWJvdXQnO1xuaW1wb3J0IHtXaWRnZXRzQ21wfSBmcm9tICcuLi93aWRnZXRzL3dpZGdldHMnO1xuaW1wb3J0IHtEYXNoYm9hcmRDbXB9IGZyb20gJy4uL2Rhc2hib2FyZC9kYXNoYm9hcmQnO1xuaW1wb3J0IHtOYW1lTGlzdH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbmFtZV9saXN0JztcbmltcG9ydCB7VG9wTmF2YmFyQ21wfSBmcm9tICcuLi9sYXlvdXQvdG9wLW5hdmJhci90b3AtbmF2YmFyJztcbmltcG9ydCB7U2lkZUJhckNtcH0gZnJvbSAnLi4vbGF5b3V0L3NpZGViYXIvc2lkZWJhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcCcsXG4gIHZpZXdQcm92aWRlcnM6IFtOYW1lTGlzdF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICA8dG9wLW5hdmJhciBjbGFzcz1cInRvcG5hdmJhci13cmFwcGVyXCI+PC90b3AtbmF2YmFyPlxuICBcbiAgICAgIDxzaWRlYmFyIGNsYXNzPVwiYXNpZGVcIj48L3NpZGViYXI+XG4gICAgICA8c2VjdGlvbj48ZGl2IGNsYXNzPVwiY29udGVudC13cmFwcGVyXCI+PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PjwvZGl2Pjwvc2VjdGlvbj5cblxuICAgIDwvc2VjdGlvbj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIC8qb3ZlcnJpZGUgYm9vdHN0cmFwKi9cbiAgICAubmF2PmxpPmE6Zm9jdXMsIC5uYXY+bGk+YTpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIC5uYXZiYXIsIC5uYXYtd3JhcHBlciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6NTVweDtcbiAgICB9XG5cbiAgICAucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nIHtcbiAgICAgICAgY29sb3I6ICM0NDQ0NDQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2NmZGJlMjtcbiAgICB9XG4gIGBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFRvcE5hdmJhckNtcCwgU2lkZUJhckNtcCwgQWJvdXRDbXAsIFdpZGdldHNDbXBdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogRGFzaGJvYXJkQ21wLCBhczogJ0Rhc2hib2FyZCcgfSxcbiAgeyBwYXRoOiAnL2Rhc2hib2FyZCcsIGNvbXBvbmVudDogRGFzaGJvYXJkQ21wLCBhczogJ0Rhc2hib2FyZCcgfSxcbiAgeyBwYXRoOiAnL3dpZGdldHMnLCBjb21wb25lbnQ6IFdpZGdldHNDbXAsIGFzOiAnV2lkZ2V0cycgfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDbXAge31cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==