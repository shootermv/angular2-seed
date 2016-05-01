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
})();
exports.EmitterService = EmitterService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2VtaXR0ZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkVtaXR0ZXJTZXJ2aWNlIiwiRW1pdHRlclNlcnZpY2UuY29uc3RydWN0b3IiLCJFbWl0dGVyU2VydmljZS5nZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RDtJQUFBQTtJQVFBQyxDQUFDQTtJQUxRRCxrQkFBR0EsR0FBVkEsVUFBV0EsT0FBZUE7UUFDeEJFLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBQzNCQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxPQUFPQSxDQUFDQSxHQUFHQSxJQUFJQSxtQkFBWUEsRUFBRUEsQ0FBQ0E7UUFDL0NBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO0lBQ2pDQSxDQUFDQTtJQUxjRix3QkFBU0EsR0FBNkNBLEVBQUVBLENBQUNBO0lBRjFFQTtRQUFDQSxpQkFBVUEsRUFBRUE7O3VCQVFaQTtJQUFEQSxxQkFBQ0E7QUFBREEsQ0FSQSxBQVFDQSxJQUFBO0FBUFksc0JBQWMsaUJBTzFCLENBQUEiLCJmaWxlIjoic2VydmljZXMvZW1pdHRlclNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7SW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbWl0dGVyU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIF9lbWl0dGVyczogeyBbY2hhbm5lbDogc3RyaW5nXTogRXZlbnRFbWl0dGVyPGFueT4gfSA9IHt9O1xuICBzdGF0aWMgZ2V0KGNoYW5uZWw6IHN0cmluZyk6IEV2ZW50RW1pdHRlcjxhbnk+IHtcbiAgICBpZiAoIXRoaXMuX2VtaXR0ZXJzW2NoYW5uZWxdKVxuICAgICAgdGhpcy5fZW1pdHRlcnNbY2hhbm5lbF0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgcmV0dXJuIHRoaXMuX2VtaXR0ZXJzW2NoYW5uZWxdO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=