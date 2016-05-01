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
var http_1 = require('angular2/http');
require('rxjs/Rx');
var FlotService = (function () {
    function FlotService(_http) {
        this._http = _http;
    }
    FlotService.prototype.getFlotEntries = function () {
        return this._http.get('assets/mock/entries.json').map(function (response) { return response.json(); });
    };
    FlotService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FlotService);
    return FlotService;
}());
exports.FlotService = FlotService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvZmxvdFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFDbkMsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUdqQjtJQUNFLHFCQUFtQixLQUFVO1FBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztJQUM3QixDQUFDO0lBQ0Qsb0NBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBTkg7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQU9iLGtCQUFDO0FBQUQsQ0FOQSxBQU1DLElBQUE7QUFOWSxtQkFBVyxjQU12QixDQUFBIiwiZmlsZSI6ImFwcC9zaGFyZWQvc2VydmljZXMvZmxvdFNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmxvdFNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfaHR0cDpIdHRwKSB7XHJcbiAgfVxyXG4gIGdldEZsb3RFbnRyaWVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdhc3NldHMvbW9jay9lbnRyaWVzLmpzb24nKS5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICB9XHJcbn1cclxuIl19
