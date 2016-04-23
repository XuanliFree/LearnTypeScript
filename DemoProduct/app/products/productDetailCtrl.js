var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        var ProductDetailCtrl = (function () {
            function ProductDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Product Detail";
                var productResource = dataAccessService.getProductResource();
                productResource.get({ productId: $routeParams.productId }, function (data) {
                    _this.product = data;
                });
            }
            ProductDetailCtrl.$inject = ["$routeParams", "DataAccessService"];
            return ProductDetailCtrl;
        }());
        angular.module("productManagement")
            .controller("ProductDetailCtrl", ProductDetailCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdERldGFpbEN0cmwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0RGV0YWlsQ3RybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLEdBQUcsQ0FnQ1Q7QUFoQ0QsV0FBTyxHQUFHO0lBQUMsSUFBQSxhQUFhLENBZ0N2QjtJQWhDVSxXQUFBLGFBQWEsRUFBQyxDQUFDO1FBVXRCO1lBS0ksMkJBQ1ksWUFBNEIsRUFDNUIsaUJBQStDO2dCQVAvRCxpQkFrQkM7Z0JBWmUsaUJBQVksR0FBWixZQUFZLENBQWdCO2dCQUM1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQThCO2dCQUV2RCxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDO2dCQUM5QixJQUFJLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUM3RCxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTLEVBQUUsRUFDckQsVUFBQyxJQUF5QjtvQkFDdEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBRXhCLENBQUMsQ0FDSixDQUFBO1lBQ0wsQ0FBQztZQWJNLHlCQUFPLEdBQUcsQ0FBQyxjQUFjLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQWMzRCx3QkFBQztRQUFELENBQUMsQUFsQkQsSUFrQkM7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDO2FBQzlCLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVELENBQUMsRUFoQ1UsYUFBYSxHQUFiLGlCQUFhLEtBQWIsaUJBQWEsUUFnQ3ZCO0FBQUQsQ0FBQyxFQWhDTSxHQUFHLEtBQUgsR0FBRyxRQWdDVCIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBhcHAucHJvZHVjdERldGFpbCB7XHJcbiAgICBpbnRlcmZhY2UgSVByb2R1Y3REZXRhaWxNb2RlbCB7XHJcbiAgICAgICAgdGl0bGU6IHN0cmluZztcclxuICAgICAgICBwcm9kdWN0OiBhcHAuZG9tYWluLklQcm9kdWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJUHJvZHVjdFBhcmFtcyBleHRlbmRzIG5nLnJvdXRlLklSb3V0ZVBhcmFtc1NlcnZpY2Uge1xyXG4gICAgICAgIHByb2R1Y3RJZDogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNsYXNzIFByb2R1Y3REZXRhaWxDdHJsIGltcGxlbWVudHMgSVByb2R1Y3REZXRhaWxNb2RlbCB7XHJcbiAgICAgICAgdGl0bGU6IHN0cmluZztcclxuICAgICAgICBwcm9kdWN0OiBhcHAuZG9tYWluLklQcm9kdWN0O1xyXG5cclxuICAgICAgICBzdGF0aWMgJGluamVjdCA9IFtcIiRyb3V0ZVBhcmFtc1wiLCBcIkRhdGFBY2Nlc3NTZXJ2aWNlXCJdO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwcml2YXRlICRyb3V0ZVBhcmFtczogSVByb2R1Y3RQYXJhbXMsXHJcbiAgICAgICAgICAgIHByaXZhdGUgZGF0YUFjY2Vzc1NlcnZpY2U6IGFwcC5jb21tb24uRGF0YUFjY2Vzc1NlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBcIlByb2R1Y3QgRGV0YWlsXCI7XHJcbiAgICAgICAgICAgIHZhciBwcm9kdWN0UmVzb3VyY2UgPSBkYXRhQWNjZXNzU2VydmljZS5nZXRQcm9kdWN0UmVzb3VyY2UoKTtcclxuICAgICAgICAgICAgcHJvZHVjdFJlc291cmNlLmdldCh7IHByb2R1Y3RJZDogJHJvdXRlUGFyYW1zLnByb2R1Y3RJZCB9LFxyXG4gICAgICAgICAgICAgICAgKGRhdGE6IGFwcC5kb21haW4uSVByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3QgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKFwicHJvZHVjdE1hbmFnZW1lbnRcIilcclxuICAgICAgICAuY29udHJvbGxlcihcIlByb2R1Y3REZXRhaWxDdHJsXCIsIFByb2R1Y3REZXRhaWxDdHJsKTtcclxufSJdfQ==