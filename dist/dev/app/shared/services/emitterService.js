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
var EmitterService = (function () {
    function EmitterService() {
    }
    EmitterService.get = function (channel) {
        if (!this._emitters[channel])
            this._emitters[channel] = new core_1.EventEmitter();
        return this._emitters[channel];
    };
    EmitterService._emitters = {};
    EmitterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EmitterService);
    return EmitterService;
}());
exports.EmitterService = EmitterService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvZW1pdHRlclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUV2RDtJQUFBO0lBT0EsQ0FBQztJQUxRLGtCQUFHLEdBQVYsVUFBVyxPQUFlO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFMYyx3QkFBUyxHQUE2QyxFQUFFLENBQUM7SUFGMUU7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQVFiLHFCQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxzQkFBYyxpQkFPMUIsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL2VtaXR0ZXJTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7SW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRW1pdHRlclNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc3RhdGljIF9lbWl0dGVyczogeyBbY2hhbm5lbDogc3RyaW5nXTogRXZlbnRFbWl0dGVyPGFueT4gfSA9IHt9O1xyXG4gIHN0YXRpYyBnZXQoY2hhbm5lbDogc3RyaW5nKTogRXZlbnRFbWl0dGVyPGFueT4ge1xyXG4gICAgaWYgKCF0aGlzLl9lbWl0dGVyc1tjaGFubmVsXSlcclxuICAgICAgdGhpcy5fZW1pdHRlcnNbY2hhbm5lbF0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICByZXR1cm4gdGhpcy5fZW1pdHRlcnNbY2hhbm5lbF07XHJcbiAgfVxyXG59XHJcbiJdfQ==
