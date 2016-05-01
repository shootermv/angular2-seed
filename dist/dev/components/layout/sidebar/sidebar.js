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
var SideBarCmp = (function () {
    function SideBarCmp() {
    }
    SideBarCmp = __decorate([
        core_1.Component({
            selector: 'sidebar',
            template: "\n    <div class=\"aside-inner\">\n        <nav class=\"sidebar\">\n           <ul class=\"nav\">\n                <li class=\"nav-heading\">\n                   <span>Main Navigation</span>\n                </li>           \n                <li>\n                    <a [routerLink]=\"['/Dashboard']\">\n                        <em class=\"icon-speedometer\"></em><span>Dashboard</span>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/Widgets']\">\n                       <em class=\"icon-grid\"></em><span>Widgets</span>\n                    </a>\n                </li>\n            \n            </ul>\n        </nav>\n    </div>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], SideBarCmp);
    return SideBarCmp;
})();
exports.SideBarCmp = SideBarCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L3NpZGViYXIvc2lkZWJhci50cyJdLCJuYW1lcyI6WyJTaWRlQmFyQ21wIiwiU2lkZUJhckNtcC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUVPLGlCQUFpQixDQUFDLENBQUE7QUFFekI7SUFBQUE7SUEyQkFDLENBQUNBO0lBM0JERDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsU0FBU0E7WUFDbkJBLFFBQVFBLEVBQUVBLCtyQkFxQlRBO1lBQ0RBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsQ0FBQ0E7U0FDaENBLENBQUNBOzttQkFFREE7SUFBREEsaUJBQUNBO0FBQURBLENBM0JBLEFBMkJDQSxJQUFBO0FBRFksa0JBQVUsYUFDdEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2xheW91dC9zaWRlYmFyL3NpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1xuICBST1VURVJfRElSRUNUSVZFU1xufSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlYmFyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYXNpZGUtaW5uZXJcIj5cbiAgICAgICAgPG5hdiBjbGFzcz1cInNpZGViYXJcIj5cbiAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICA8c3Bhbj5NYWluIE5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvRGFzaGJvYXJkJ11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxlbSBjbGFzcz1cImljb24tc3BlZWRvbWV0ZXJcIj48L2VtPjxzcGFuPkRhc2hib2FyZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9XaWRnZXRzJ11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGVtIGNsYXNzPVwiaWNvbi1ncmlkXCI+PC9lbT48c3Bhbj5XaWRnZXRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZUJhckNtcCB7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=