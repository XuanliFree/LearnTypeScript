var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getProductResource = function () {
                return this.$resource("/api/products/:productId");
            };
            DataAccessService.$inject = ["$resource"];
            return DataAccessService;
        }());
        common.DataAccessService = DataAccessService;
        angular
            .module("common.services")
            .service("DataAccessService", DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YUFjY2Vzc1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhQWNjZXNzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLEdBQUcsQ0F5QlQ7QUF6QkQsV0FBTyxHQUFHO0lBQUMsSUFBQSxNQUFNLENBeUJoQjtJQXpCVSxXQUFBLE1BQU0sRUFBQyxDQUFDO1FBU2Y7WUFFSSwyQkFBb0IsU0FBdUM7Z0JBQXZDLGNBQVMsR0FBVCxTQUFTLENBQThCO1lBRTNELENBQUM7WUFFRCw4Q0FBa0IsR0FBbEI7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN0RCxDQUFDO1lBUE0seUJBQU8sR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBUW5DLHdCQUFDO1FBQUQsQ0FBQyxBQVRELElBU0M7UUFUWSx3QkFBaUIsb0JBUzdCLENBQUE7UUFFRCxPQUFPO2FBQ0YsTUFBTSxDQUFDLGlCQUFpQixDQUFDO2FBQ3pCLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBR3pELENBQUMsRUF6QlUsTUFBTSxHQUFOLFVBQU0sS0FBTixVQUFNLFFBeUJoQjtBQUFELENBQUMsRUF6Qk0sR0FBRyxLQUFILEdBQUcsUUF5QlQiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUgYXBwLmNvbW1vbiB7XHJcbiAgICBpbnRlcmZhY2UgSURhdGFBY2Nlc3NTZXJ2aWNlIHtcclxuICAgICAgICBnZXRQcm9kdWN0UmVzb3VyY2UoKTogbmcucmVzb3VyY2UuSVJlc291cmNlQ2xhc3M8SVByb2R1Y3RSZXNvdXJjZT5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElQcm9kdWN0UmVzb3VyY2UgZXh0ZW5kcyBuZy5yZXNvdXJjZS5JUmVzb3VyY2U8YXBwLmRvbWFpbi5JUHJvZHVjdD4ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRGF0YUFjY2Vzc1NlcnZpY2UgaW1wbGVtZW50cyBJRGF0YUFjY2Vzc1NlcnZpY2Uge1xyXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0ID0gW1wiJHJlc291cmNlXCJdO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHJlc291cmNlOiBuZy5yZXNvdXJjZS5JUmVzb3VyY2VTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0UHJvZHVjdFJlc291cmNlKCk6IG5nLnJlc291cmNlLklSZXNvdXJjZUNsYXNzPElQcm9kdWN0UmVzb3VyY2U+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHJlc291cmNlKFwiL2FwaS9wcm9kdWN0cy86cHJvZHVjdElkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZShcImNvbW1vbi5zZXJ2aWNlc1wiKVxyXG4gICAgICAgIC5zZXJ2aWNlKFwiRGF0YUFjY2Vzc1NlcnZpY2VcIiwgRGF0YUFjY2Vzc1NlcnZpY2UpO1xyXG5cclxuXHJcbn0iXX0=