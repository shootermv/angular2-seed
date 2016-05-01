"use strict";
var NameListService = (function () {
    function NameListService() {
        this.names = [
            'Edsger Dijkstra',
            'Donald Knuth',
            'Alan Turing',
            'Grace Hopper'
        ];
    }
    NameListService.prototype.get = function () {
        return this.names;
    };
    NameListService.prototype.add = function (value) {
        this.names.push(value);
    };
    return NameListService;
}());
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2VydmljZXMvbmFtZS1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7UUFDRSxVQUFLLEdBQUc7WUFDTixpQkFBaUI7WUFDakIsY0FBYztZQUNkLGFBQWE7WUFDYixjQUFjO1NBQ2YsQ0FBQztJQVFKLENBQUM7SUFOQyw2QkFBRyxHQUFIO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELDZCQUFHLEdBQUgsVUFBSSxLQUFhO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSx1QkFBZSxrQkFjM0IsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL3NlcnZpY2VzL25hbWUtbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5hbWVMaXN0U2VydmljZSB7XHJcbiAgbmFtZXMgPSBbXHJcbiAgICAnRWRzZ2VyIERpamtzdHJhJyxcclxuICAgICdEb25hbGQgS251dGgnLFxyXG4gICAgJ0FsYW4gVHVyaW5nJyxcclxuICAgICdHcmFjZSBIb3BwZXInXHJcbiAgXTtcclxuXHJcbiAgZ2V0KCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWVzO1xyXG4gIH1cclxuICBhZGQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5uYW1lcy5wdXNoKHZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19
