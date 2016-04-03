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
})();
exports.NowCmp = NowCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tbW9uL25vdy9ub3cudHMiXSwibmFtZXMiOlsiTm93Q21wIiwiTm93Q21wLmNvbnN0cnVjdG9yIiwiTm93Q21wLmZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQStCLGVBQWUsQ0FBQyxDQUFBO0FBRS9DO0lBWUVBO1FBWkZDLGlCQW1CQ0E7UUFOR0EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBSUEsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0E7UUFDeEJBLFdBQVdBLENBQUNBO1lBQ1JBLEtBQUlBLENBQUNBLElBQUlBLEdBQUlBLElBQUlBLElBQUlBLEVBQUVBLENBQUNBO1FBQzNCQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUNaQSxDQUFDQTtJQVRERCxzQkFBYUEsMEJBQU1BO2FBQW5CQSxVQUFvQkEsVUFBaUJBO1lBQ2xDRSxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxVQUFVQSxDQUFDQTtRQUU3QkEsQ0FBQ0E7OztPQUFBRjtJQUhEQTtRQUFDQSxZQUFLQSxFQUFFQTs7O09BQUtBLDBCQUFNQSxRQUdsQkE7SUFYSEE7UUFBQ0EsZ0JBQVNBLENBQUNBO1lBQ1RBLFFBQVFBLEVBQUVBLEtBQUtBO1lBQ2ZBLFFBQVFBLEVBQUVBLDBCQUEwQkE7U0FDckNBLENBQUNBOztlQWdCREE7SUFBREEsYUFBQ0E7QUFBREEsQ0FuQkEsQUFtQkNBLElBQUE7QUFkWSxjQUFNLFNBY2xCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9jb21tb24vbm93L25vdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdycsXG4gIHRlbXBsYXRlOiBge3tkYXRlIHwgZGF0ZTogX2Zvcm1hdH19YFxufSlcblxuZXhwb3J0IGNsYXNzIE5vd0NtcCB7XG4gIHByaXZhdGUgZGF0ZTtcbiAgcHJpdmF0ZSBfZm9ybWF0O1xuICBASW5wdXQoKSBzZXQgZm9ybWF0KGZvcm1hdE5hbWU6c3RyaW5nKXtcbiAgICAgdGhpcy5fZm9ybWF0ID0gZm9ybWF0TmFtZTtcblxuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0ZSA9ICBuZXcgRGF0ZSgpO1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5kYXRlID0gIG5ldyBEYXRlKCk7XG4gICAgIH0sIDEwMDApO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==