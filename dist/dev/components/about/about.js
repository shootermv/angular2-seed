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
var name_list_1 = require('../../services/name_list');
var AboutCmp = (function () {
    function AboutCmp(list) {
        this.list = list;
    }
    AboutCmp.prototype.addName = function (newname) {
        this.list.add(newname.value);
        newname.value = '';
        return false;
    };
    AboutCmp = __decorate([
        core_1.Component({
            selector: 'about',
            template: "\n    <p>\n      For reward, here is a list of awesome computer scientists!\n    </p>\n\n    <p>\n      You want more? Add them yourself!\n    </p>\n    <form (submit)=\"addName(newname)\">\n      <input #newname>\n      <button type=\"submit\">Add</button>\n    </form>\n    <ul>\n      <li *ngFor=\"#name of list.get()\">{{name}}</li>\n    </ul>\n  ",
            directives: [common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [name_list_1.NameList])
    ], AboutCmp);
    return AboutCmp;
})();
exports.AboutCmp = AboutCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWJvdXQvYWJvdXQudHMiXSwibmFtZXMiOlsiQWJvdXRDbXAiLCJBYm91dENtcC5jb25zdHJ1Y3RvciIsIkFib3V0Q21wLmFkZE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUVoRCwwQkFBdUIsMEJBQTBCLENBQUMsQ0FBQTtBQUVsRDtJQXFCRUEsa0JBQW1CQSxJQUFjQTtRQUFkQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFVQTtJQUNqQ0EsQ0FBQ0E7SUFLREQsMEJBQU9BLEdBQVBBLFVBQVFBLE9BQU9BO1FBQ2JFLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQzdCQSxPQUFPQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNuQkEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDZkEsQ0FBQ0E7SUEvQkhGO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxPQUFPQTtZQUNqQkEsUUFBUUEsRUFBRUEsaVdBZVRBO1lBQ0RBLFVBQVVBLEVBQUVBLENBQUNBLHdCQUFlQSxDQUFDQTtTQUM5QkEsQ0FBQ0E7O2lCQWFEQTtJQUFEQSxlQUFDQTtBQUFEQSxDQWhDQSxBQWdDQ0EsSUFBQTtBQVpZLGdCQUFRLFdBWXBCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hYm91dC9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuXG5pbXBvcnQge05hbWVMaXN0fSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYW1lX2xpc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYm91dCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBGb3IgcmV3YXJkLCBoZXJlIGlzIGEgbGlzdCBvZiBhd2Vzb21lIGNvbXB1dGVyIHNjaWVudGlzdHMhXG4gICAgPC9wPlxuXG4gICAgPHA+XG4gICAgICBZb3Ugd2FudCBtb3JlPyBBZGQgdGhlbSB5b3Vyc2VsZiFcbiAgICA8L3A+XG4gICAgPGZvcm0gKHN1Ym1pdCk9XCJhZGROYW1lKG5ld25hbWUpXCI+XG4gICAgICA8aW5wdXQgI25ld25hbWU+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgPHVsPlxuICAgICAgPGxpICpuZ0Zvcj1cIiNuYW1lIG9mIGxpc3QuZ2V0KClcIj57e25hbWV9fTwvbGk+XG4gICAgPC91bD5cbiAgYCxcbiAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRDbXAge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGlzdDogTmFtZUxpc3QpIHtcbiAgfVxuIC8qXG4gKiBAcGFyYW0gbmV3bmFtZSAgYW55IHRleHQgYXMgaW5wdXQuXG4gKiBAcmV0dXJucyByZXR1cm4gZmFsc2UgdG8gcHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWl0IGJlaGF2aW9yIHRvIHJlZnJlc2ggdGhlIHBhZ2UuXG4gKi9cbiAgYWRkTmFtZShuZXduYW1lKTogYm9vbGVhbiB7XG4gICAgdGhpcy5saXN0LmFkZChuZXduYW1lLnZhbHVlKTtcbiAgICBuZXduYW1lLnZhbHVlID0gJyc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=