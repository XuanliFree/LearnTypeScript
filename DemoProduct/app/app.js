var app;
(function (app) {
    var main = angular.module("productManagement", ["ngRoute", "common.services", "productResourceMock"]);
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider) {
        $routeProvider
            .when("/productList", {
            templateUrl: "app/products/productListView.html",
            controller: "ProductListCtrl as vm"
        })
            .when("/productDetail/:productId", {
            templateUrl: "/app/products/productDetailView.html",
            controller: "ProductDetailCtrl as vm"
        })
            .otherwise("/productList");
    }
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsR0FBRyxDQW1CWjtBQW5CRCxXQUFVLEdBQUcsRUFBQyxDQUFDO0lBQ1YsSUFBSSxJQUFJLEdBQ0wsT0FBTyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFFL0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUV6QixXQUFXLENBQUMsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN6QyxxQkFBcUIsY0FBdUM7UUFDeEQsY0FBYzthQUNULElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbEIsV0FBVyxFQUFFLG1DQUFtQztZQUNoRCxVQUFVLEVBQUUsdUJBQXVCO1NBQ3RDLENBQUM7YUFDRCxJQUFJLENBQUMsMkJBQTJCLEVBQUU7WUFDL0IsV0FBVyxFQUFFLHNDQUFzQztZQUNuRCxVQUFVLEVBQUUseUJBQXlCO1NBQ3hDLENBQUM7YUFDRCxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDbEMsQ0FBQztBQUNMLENBQUMsRUFuQlMsR0FBRyxLQUFILEdBQUcsUUFtQloiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgYXBwIHtcclxuICAgICB2YXIgbWFpbiAgPVxyXG4gICAgICAgIGFuZ3VsYXIubW9kdWxlKFwicHJvZHVjdE1hbmFnZW1lbnRcIiwgW1wibmdSb3V0ZVwiLCBcImNvbW1vbi5zZXJ2aWNlc1wiLCBcInByb2R1Y3RSZXNvdXJjZU1vY2tcIl0pO1xyXG5cclxuICAgIG1haW4uY29uZmlnKHJvdXRlQ29uZmlnKTtcclxuXHJcbiAgICByb3V0ZUNvbmZpZy4kaW5qZWN0ID0gW1wiJHJvdXRlUHJvdmlkZXJcIl07XHJcbiAgICBmdW5jdGlvbiByb3V0ZUNvbmZpZygkcm91dGVQcm92aWRlcjogbmcucm91dGUuSVJvdXRlUHJvdmlkZXIpOiB2b2lkIHtcclxuICAgICAgICAkcm91dGVQcm92aWRlclxyXG4gICAgICAgICAgICAud2hlbihcIi9wcm9kdWN0TGlzdFwiLCB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJhcHAvcHJvZHVjdHMvcHJvZHVjdExpc3RWaWV3Lmh0bWxcIixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFwiUHJvZHVjdExpc3RDdHJsIGFzIHZtXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLndoZW4oXCIvcHJvZHVjdERldGFpbC86cHJvZHVjdElkXCIsIHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9hcHAvcHJvZHVjdHMvcHJvZHVjdERldGFpbFZpZXcuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJQcm9kdWN0RGV0YWlsQ3RybCBhcyB2bVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vdGhlcndpc2UoXCIvcHJvZHVjdExpc3RcIilcclxuICAgIH1cclxufSJdfQ==