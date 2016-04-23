var app;
(function (app) {
    var productList;
    (function (productList) {
        var ProductListCtrl = (function () {
            function ProductListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = "Product List";
                this.showImage = false;
                this.products = [];
                var productResource = dataAccessService.getProductResource();
                productResource.query(function (data) {
                    _this.products = data;
                    var tt = '[{"a":"b"}, {"a": "c"}]';
                    var mm = JSON.parse(tt);
                });
            }
            ProductListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            ProductListCtrl.$inject = ["DataAccessService"];
            return ProductListCtrl;
        }());
        angular
            .module("productManagement")
            .controller("ProductListCtrl", ProductListCtrl);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdExpc3RDdHJsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVjdExpc3RDdHJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sR0FBRyxDQTBDVDtBQTFDRCxXQUFPLEdBQUc7SUFBQyxJQUFBLFdBQVcsQ0EwQ3JCO0lBMUNVLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFRcEI7WUFNSSx5QkFBb0IsaUJBQStDO2dCQU52RSxpQkE2QkM7Z0JBdkJ1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQThCO2dCQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUVuQixJQUFJLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUM3RCxlQUFlLENBQUMsS0FBSyxDQUNqQixVQUFDLElBQTJCO29CQUN4QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFFckIsSUFBSSxFQUFFLEdBQUcseUJBQXlCLENBQUM7b0JBQ25DLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRTVCLENBQUMsQ0FDSixDQUFDO1lBR04sQ0FBQztZQUVELHFDQUFXLEdBQVg7Z0JBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFFckMsQ0FBQztZQXZCTSx1QkFBTyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQXdCM0Msc0JBQUM7UUFBRCxDQUFDLEFBN0JELElBNkJDO1FBRUQsT0FBTzthQUNGLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQzthQUMzQixVQUFVLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDeEQsQ0FBQyxFQTFDVSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUEwQ3JCO0FBQUQsQ0FBQyxFQTFDTSxHQUFHLEtBQUgsR0FBRyxRQTBDVCIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBhcHAucHJvZHVjdExpc3Qge1xyXG4gICAgaW50ZXJmYWNlIElQcm9kdWN0TGlzdE1vZGVsIHtcclxuICAgICAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgICAgIHNob3dJbWFnZTogYm9vbGVhbjtcclxuICAgICAgICBwcm9kdWN0czogYXBwLmRvbWFpbi5JUHJvZHVjdFtdO1xyXG4gICAgICAgIHRvZ2dsZUltYWdlKCk6IHZvaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgUHJvZHVjdExpc3RDdHJsIGltcGxlbWVudHMgSVByb2R1Y3RMaXN0TW9kZWwge1xyXG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgc2hvd0ltYWdlOiBib29sZWFuO1xyXG4gICAgICAgIHByb2R1Y3RzOiBhcHAuZG9tYWluLklQcm9kdWN0W107XHJcblxyXG4gICAgICAgIHN0YXRpYyAkaW5qZWN0ID0gW1wiRGF0YUFjY2Vzc1NlcnZpY2VcIl07XHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhQWNjZXNzU2VydmljZTogYXBwLmNvbW1vbi5EYXRhQWNjZXNzU2VydmljZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gXCJQcm9kdWN0IExpc3RcIjtcclxuICAgICAgICAgICAgdGhpcy5zaG93SW1hZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIHByb2R1Y3RSZXNvdXJjZSA9IGRhdGFBY2Nlc3NTZXJ2aWNlLmdldFByb2R1Y3RSZXNvdXJjZSgpO1xyXG4gICAgICAgICAgICBwcm9kdWN0UmVzb3VyY2UucXVlcnkoXHJcbiAgICAgICAgICAgICAgICAoZGF0YTogYXBwLmRvbWFpbi5JUHJvZHVjdFtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHR0ID0gJ1t7XCJhXCI6XCJiXCJ9LCB7XCJhXCI6IFwiY1wifV0nO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtbSA9IEpTT04ucGFyc2UodHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b2dnbGVJbWFnZSgpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93SW1hZ2UgPSAhdGhpcy5zaG93SW1hZ2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbmd1bGFyXHJcbiAgICAgICAgLm1vZHVsZShcInByb2R1Y3RNYW5hZ2VtZW50XCIpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoXCJQcm9kdWN0TGlzdEN0cmxcIiwgUHJvZHVjdExpc3RDdHJsKTtcclxufSJdfQ==