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
var NowCmp = (function () {
    function NowCmp() {
        var _this = this;
        this.date = new Date();
        setInterval(function () {
            _this.date = new Date();
        }, 1000);
    }
    Object.defineProperty(NowCmp.prototype, "format", {
        set: function (formatName) {
            this._format = formatName;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], NowCmp.prototype, "format", null);
    NowCmp = __decorate([
        core_1.Component({
            selector: 'now',
            template: "{{date | date: _format}}"
        }), 
        __metadata('design:paramtypes', [])
    ], NowCmp);
    return NowCmp;
}());
exports.NowCmp = NowCmp;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21tb24vbm93L25vdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBTy9DO0lBT0U7UUFQRixpQkFjQztRQU5HLElBQUksQ0FBQyxJQUFJLEdBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN4QixXQUFXLENBQUM7WUFDUixLQUFJLENBQUMsSUFBSSxHQUFJLElBQUksSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQVRRLHNCQUFJLDBCQUFNO2FBQVYsVUFBVyxVQUFpQjtZQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUU3QixDQUFDOzs7T0FBQTtJQUhEO1FBQUMsWUFBSyxFQUFFOzs7d0NBQUE7SUFSVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSwwQkFBMEI7U0FDckMsQ0FBQzs7Y0FBQTtJQWdCRixhQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSxjQUFNLFNBY2xCLENBQUEiLCJmaWxlIjoiYXBwL2NvbW1vbi9ub3cvbm93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbm93JyxcclxuICB0ZW1wbGF0ZTogYHt7ZGF0ZSB8IGRhdGU6IF9mb3JtYXR9fWBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOb3dDbXAge1xyXG4gIHByaXZhdGUgZGF0ZTtcclxuICBwcml2YXRlIF9mb3JtYXQ7XHJcbiAgQElucHV0KCkgc2V0IGZvcm1hdChmb3JtYXROYW1lOnN0cmluZyl7XHJcbiAgICAgdGhpcy5fZm9ybWF0ID0gZm9ybWF0TmFtZTtcclxuXHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5kYXRlID0gIG5ldyBEYXRlKCk7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gIG5ldyBEYXRlKCk7XHJcbiAgICAgfSwgMTAwMCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
