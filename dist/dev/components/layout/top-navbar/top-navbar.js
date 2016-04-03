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
var trigger_resize_1 = require('../layout-components/trigger-resize/trigger-resize');
var TopNavbarCmp = (function () {
    function TopNavbarCmp() {
    }
    TopNavbarCmp = __decorate([
        core_1.Component({
            selector: 'top-navbar',
            template: "\n    <!-- START Top Navbar-->\n    <nav role=\"navigation\" class=\"navbar topnavbar\">\n        <!-- START navbar header-->\n        <div class=\"navbar-header\">\n           <a href=\"#/\" class=\"navbar-brand\">\n             <div class=\"brand-logo\">\n                <img src=\"./assets/img/logo.png\" alt=\"App Logo\" class=\"img-responsive\" />\n             </div>\n             <div class=\"brand-logo-collapsed\">\n                <img src=\"./assets/img/logo-single.png\" alt=\"App Logo\" class=\"img-responsive\" />\n             </div>\n          </a>       \n        </div>\n        <!-- END navbar header-->\n        <!-- START Nav wrapper-->   \n       <div class=\"nav-wrapper\">\n           <ul class=\"nav navbar-nav\">\n             <li trigger-resize>\n                <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\n             </li>           \n           \n           </ul> \n       </div> \n       <!-- END Nav wrapper-->\n    </nav>\n    <!-- END navbar header-->\n  ",
            directives: [trigger_resize_1.TriggerResize]
        }), 
        __metadata('design:paramtypes', [])
    ], TopNavbarCmp);
    return TopNavbarCmp;
})();
exports.TopNavbarCmp = TopNavbarCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0L3RvcC1uYXZiYXIvdG9wLW5hdmJhci50cyJdLCJuYW1lcyI6WyJUb3BOYXZiYXJDbXAiLCJUb3BOYXZiYXJDbXAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QywrQkFBNEIsb0RBQW9ELENBQUMsQ0FBQTtBQUVqRjtJQUFBQTtJQWlDQUMsQ0FBQ0E7SUFqQ0REO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxZQUFZQTtZQUN0QkEsUUFBUUEsRUFBRUEsNmdDQTJCVEE7WUFDREEsVUFBVUEsRUFBRUEsQ0FBQ0EsOEJBQWFBLENBQUNBO1NBQzVCQSxDQUFDQTs7cUJBRURBO0lBQURBLG1CQUFDQTtBQUFEQSxDQWpDQSxBQWlDQ0EsSUFBQTtBQURZLG9CQUFZLGVBQ3hCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9sYXlvdXQvdG9wLW5hdmJhci90b3AtbmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtUcmlnZ2VyUmVzaXplfSBmcm9tICcuLi9sYXlvdXQtY29tcG9uZW50cy90cmlnZ2VyLXJlc2l6ZS90cmlnZ2VyLXJlc2l6ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RvcC1uYXZiYXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDwhLS0gU1RBUlQgVG9wIE5hdmJhci0tPlxuICAgIDxuYXYgcm9sZT1cIm5hdmlnYXRpb25cIiBjbGFzcz1cIm5hdmJhciB0b3BuYXZiYXJcIj5cbiAgICAgICAgPCEtLSBTVEFSVCBuYXZiYXIgaGVhZGVyLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgIDxhIGhyZWY9XCIjL1wiIGNsYXNzPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJyYW5kLWxvZ29cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltZy9sb2dvLnBuZ1wiIGFsdD1cIkFwcCBMb2dvXCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJyYW5kLWxvZ28tY29sbGFwc2VkXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWcvbG9nby1zaW5nbGUucG5nXCIgYWx0PVwiQXBwIExvZ29cIiBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2E+ICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBFTkQgbmF2YmFyIGhlYWRlci0tPlxuICAgICAgICA8IS0tIFNUQVJUIE5hdiB3cmFwcGVyLS0+ICAgXG4gICAgICAgPGRpdiBjbGFzcz1cIm5hdi13cmFwcGVyXCI+XG4gICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgPGxpIHRyaWdnZXItcmVzaXplPlxuICAgICAgICAgICAgICAgIDwhLS0gQnV0dG9uIHVzZWQgdG8gY29sbGFwc2UgdGhlIGxlZnQgc2lkZWJhci4gT25seSB2aXNpYmxlIG9uIHRhYmxldCBhbmQgZGVza3RvcHMtLT5cbiAgICAgICAgICAgICA8L2xpPiAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICA8L3VsPiBcbiAgICAgICA8L2Rpdj4gXG4gICAgICAgPCEtLSBFTkQgTmF2IHdyYXBwZXItLT5cbiAgICA8L25hdj5cbiAgICA8IS0tIEVORCBuYXZiYXIgaGVhZGVyLS0+XG4gIGAsXG4gIGRpcmVjdGl2ZXM6IFtUcmlnZ2VyUmVzaXplXVxufSlcbmV4cG9ydCBjbGFzcyBUb3BOYXZiYXJDbXAge1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9