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
})();
exports.FlotService = FlotService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zsb3RTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkZsb3RTZXJ2aWNlIiwiRmxvdFNlcnZpY2UuY29uc3RydWN0b3IiLCJGbG90U2VydmljZS5nZXRGbG90RW50cmllcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUNuQyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBRWpCO0lBRUVBLHFCQUFtQkEsS0FBVUE7UUFBVkMsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBS0E7SUFDN0JBLENBQUNBO0lBQ0RELG9DQUFjQSxHQUFkQTtRQUNFRSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSwwQkFBMEJBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFVBQUFBLFFBQVFBLElBQUlBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBLENBQUNBO0lBQ3JGQSxDQUFDQTtJQU5IRjtRQUFDQSxpQkFBVUEsRUFBRUE7O29CQU9aQTtJQUFEQSxrQkFBQ0E7QUFBREEsQ0FQQSxBQU9DQSxJQUFBO0FBTlksbUJBQVcsY0FNdkIsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9mbG90U2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZsb3RTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIF9odHRwOkh0dHApIHtcbiAgfVxuICBnZXRGbG90RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2Fzc2V0cy9tb2NrL2VudHJpZXMuanNvbicpLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=