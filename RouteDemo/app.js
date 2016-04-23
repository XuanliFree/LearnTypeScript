var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define("stateDemo", ["require", "exports"], function (require, exports) {
    "use strict";
    /// <amd-module name="stateDemo"/>
    var app;
    (function (app) {
        var StateDemo;
        (function (StateDemo) {
            StateProviderInit.$inject = ["$stateProvider"];
            function StateProviderInit($stateProvider) {
                $stateProvider.state("route1", {
                    templateUrl: "route1.html",
                    controller: "route1Ctrl as vm"
                }).state("route2", {
                    templateUrl: "route2.html",
                    controller: "route2Ctrl as vm"
                });
            }
            ss.$inject = ["$stateProvider"];
            function ss($stateProvider) {
                $stateProvider.state("demo", {
                    templateUrl: "dkdkd",
                    controller: "dddd"
                });
            }
            var Route1Ctrl = (function () {
                function Route1Ctrl() {
                    this.title = "route1";
                    this.description = "this is a route1";
                }
                return Route1Ctrl;
            }());
            var Route2Ctrl = (function (_super) {
                __extends(Route2Ctrl, _super);
                function Route2Ctrl() {
                    _super.call(this);
                    this.title = "route2";
                    this.description = "this is a route2";
                }
                return Route2Ctrl;
            }(Route1Ctrl));
            var MainCtrl = (function () {
                function MainCtrl($state) {
                    this.$state = $state;
                }
                MainCtrl.prototype.stateRoute = function (id) {
                    this.$state.go("route" + id.toString());
                };
                MainCtrl.$inject = ["$state"];
                return MainCtrl;
            }());
            angular.module("stateDemo", ["ui.router"])
                .config(StateProviderInit)
                .controller("route1Ctrl", Route1Ctrl)
                .controller("route2Ctrl", Route2Ctrl)
                .controller("mainCtrl", MainCtrl);
            angular.module("stateDemo").config(ss);
        })(StateDemo = app.StateDemo || (app.StateDemo = {}));
    })(app = exports.app || (exports.app = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBQSxrQ0FBa0M7SUFDbEMsSUFBaUIsR0FBRyxDQW1FbkI7SUFuRUQsV0FBaUIsR0FBRztRQUFDLElBQUEsU0FBUyxDQW1FN0I7UUFuRW9CLFdBQUEsU0FBUyxFQUFDLENBQUM7WUFFNUIsaUJBQWlCLENBQUMsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMvQywyQkFBMkIsY0FBeUM7Z0JBQ2hFLGNBQWMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO29CQUMzQixXQUFXLEVBQUUsYUFBYTtvQkFDMUIsVUFBVSxFQUFFLGtCQUFrQjtpQkFDakMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ2YsV0FBVyxFQUFFLGFBQWE7b0JBQzFCLFVBQVUsRUFBRSxrQkFBa0I7aUJBQ2pDLENBQUMsQ0FBQztZQUVQLENBQUM7WUFFRCxFQUFFLENBQUMsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNoQyxZQUFZLGNBQXlDO2dCQUNqRCxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDekIsV0FBVyxFQUFFLE9BQU87b0JBQ3BCLFVBQVUsRUFBRSxNQUFNO2lCQUNyQixDQUFDLENBQUM7WUFDUCxDQUFDO1lBR0Q7Z0JBS0k7b0JBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsa0JBQWtCLENBQUM7Z0JBQzFDLENBQUM7Z0JBQ0wsaUJBQUM7WUFBRCxDQUFDLEFBVEQsSUFTQztZQUVEO2dCQUF5Qiw4QkFBVTtnQkFDL0I7b0JBQ0ksaUJBQU8sQ0FBQztvQkFDUixJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQztnQkFDMUMsQ0FBQztnQkFFTCxpQkFBQztZQUFELENBQUMsQUFQRCxDQUF5QixVQUFVLEdBT2xDO1lBSUQ7Z0JBRUksa0JBQ1csTUFBZ0M7b0JBQWhDLFdBQU0sR0FBTixNQUFNLENBQTBCO2dCQUUzQyxDQUFDO2dCQUVELDZCQUFVLEdBQVYsVUFBVyxFQUFVO29CQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBUk0sZ0JBQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQVVoQyxlQUFDO1lBQUQsQ0FBQyxBQVhELElBV0M7WUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNyQyxNQUFNLENBQUMsaUJBQWlCLENBQUM7aUJBQ3pCLFVBQVUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDO2lCQUNwQyxVQUFVLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQztpQkFDcEMsVUFBVSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FDaEM7WUFFTCxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUzQyxDQUFDLEVBbkVvQixTQUFTLEdBQVQsYUFBUyxLQUFULGFBQVMsUUFtRTdCO0lBQUQsQ0FBQyxFQW5FZ0IsR0FBRyxHQUFILFdBQUcsS0FBSCxXQUFHLFFBbUVuQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8YW1kLW1vZHVsZSBuYW1lPVwic3RhdGVEZW1vXCIvPlxyXG5leHBvcnQgbmFtZXNwYWNlIGFwcC5TdGF0ZURlbW8ge1xyXG5cclxuICAgIFN0YXRlUHJvdmlkZXJJbml0LiRpbmplY3QgPSBbXCIkc3RhdGVQcm92aWRlclwiXTtcclxuICAgIGZ1bmN0aW9uIFN0YXRlUHJvdmlkZXJJbml0KCRzdGF0ZVByb3ZpZGVyOiBhbmd1bGFyLnVpLklTdGF0ZVByb3ZpZGVyKTogdm9pZCB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoXCJyb3V0ZTFcIiwge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJyb3V0ZTEuaHRtbFwiLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBcInJvdXRlMUN0cmwgYXMgdm1cIlxyXG4gICAgICAgIH0pLnN0YXRlKFwicm91dGUyXCIsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwicm91dGUyLmh0bWxcIixcclxuICAgICAgICAgICAgY29udHJvbGxlcjogXCJyb3V0ZTJDdHJsIGFzIHZtXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3MuJGluamVjdCA9IFtcIiRzdGF0ZVByb3ZpZGVyXCJdO1xyXG4gICAgZnVuY3Rpb24gc3MoJHN0YXRlUHJvdmlkZXI6IGFuZ3VsYXIudWkuSVN0YXRlUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlci5zdGF0ZShcImRlbW9cIiwge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJka2RrZFwiLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBcImRkZGRcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGFzcyBSb3V0ZTFDdHJsIHtcclxuXHJcbiAgICAgICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gXCJyb3V0ZTFcIjtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IFwidGhpcyBpcyBhIHJvdXRlMVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBSb3V0ZTJDdHJsIGV4dGVuZHMgUm91dGUxQ3RybCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBcInJvdXRlMlwiO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gXCJ0aGlzIGlzIGEgcm91dGUyXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGNsYXNzIE1haW5DdHJsIHtcclxuICAgICAgICBzdGF0aWMgJGluamVjdCA9IFtcIiRzdGF0ZVwiXTtcclxuICAgICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcHVibGljICRzdGF0ZTogYW5ndWxhci51aS5JU3RhdGVTZXJ2aWNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0ZVJvdXRlKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy4kc3RhdGUuZ28oXCJyb3V0ZVwiICsgaWQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN0YXRlRGVtb1wiLCBbXCJ1aS5yb3V0ZXJcIl0pXHJcbiAgICAgICAgLmNvbmZpZyhTdGF0ZVByb3ZpZGVySW5pdClcclxuICAgICAgICAuY29udHJvbGxlcihcInJvdXRlMUN0cmxcIiwgUm91dGUxQ3RybClcclxuICAgICAgICAuY29udHJvbGxlcihcInJvdXRlMkN0cmxcIiwgUm91dGUyQ3RybClcclxuICAgICAgICAuY29udHJvbGxlcihcIm1haW5DdHJsXCIsIE1haW5DdHJsKVxyXG4gICAgICAgIDtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZShcInN0YXRlRGVtb1wiKS5jb25maWcoc3MpO1xyXG5cclxufSJdfQ==