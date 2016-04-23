var app;
(function (app) {
    var domain;
    (function (domain) {
        var Product = (function () {
            function Product(productId, productName, productCode, releaseDate, price, description, imageUrl) {
                this.productId = productId;
                this.productName = productName;
                this.productCode = productCode;
                this.releaseDate = releaseDate;
                this.price = price;
                this.description = description;
                this.imageUrl = imageUrl;
            }
            Product.prototype.calculateDiscount = function (percent) {
                return this.price - (this.price * percent / 100);
            };
            return Product;
        }());
        domain.Product = Product;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTyxHQUFHLENBMkJUO0FBM0JELFdBQU8sR0FBRztJQUFDLElBQUEsTUFBTSxDQTJCaEI7SUEzQlUsV0FBQSxNQUFNLEVBQUMsQ0FBQztRQVlmO1lBRUksaUJBQ1csU0FBaUIsRUFDakIsV0FBbUIsRUFDbkIsV0FBbUIsRUFDbkIsV0FBaUIsRUFDakIsS0FBYSxFQUNiLFdBQW1CLEVBQ25CLFFBQWdCO2dCQU5oQixjQUFTLEdBQVQsU0FBUyxDQUFRO2dCQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtnQkFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7Z0JBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFNO2dCQUNqQixVQUFLLEdBQUwsS0FBSyxDQUFRO2dCQUNiLGdCQUFXLEdBQVgsV0FBVyxDQUFRO2dCQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFRO1lBQ3ZCLENBQUM7WUFDTCxtQ0FBaUIsR0FBakIsVUFBa0IsT0FBZTtnQkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRCxDQUFDO1lBQ0wsY0FBQztRQUFELENBQUMsQUFkRCxJQWNDO1FBZFksY0FBTyxVQWNuQixDQUFBO0lBQ0wsQ0FBQyxFQTNCVSxNQUFNLEdBQU4sVUFBTSxLQUFOLFVBQU0sUUEyQmhCO0FBQUQsQ0FBQyxFQTNCTSxHQUFHLEtBQUgsR0FBRyxRQTJCVCIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBhcHAuZG9tYWluIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVByb2R1Y3Qge1xyXG4gICAgICAgIHByb2R1Y3RJZDogbnVtYmVyO1xyXG4gICAgICAgIHByb2R1Y3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcHJvZHVjdENvZGU6IHN0cmluZztcclxuICAgICAgICByZWxlYXNlRGF0ZTogRGF0ZTtcclxuICAgICAgICBwcmljZTogbnVtYmVyO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgaW1hZ2VVcmw6IHN0cmluZztcclxuICAgICAgICBjYWxjdWxhdGVEaXNjb3VudChwZXJjZW50OiBudW1iZXIpOiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3QgaW1wbGVtZW50cyBJUHJvZHVjdCB7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICBwdWJsaWMgcHJvZHVjdElkOiBudW1iZXIsXHJcbiAgICAgICAgICAgIHB1YmxpYyBwcm9kdWN0TmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICBwdWJsaWMgcHJvZHVjdENvZGU6IHN0cmluZyxcclxuICAgICAgICAgICAgcHVibGljIHJlbGVhc2VEYXRlOiBEYXRlLFxyXG4gICAgICAgICAgICBwdWJsaWMgcHJpY2U6IG51bWJlcixcclxuICAgICAgICAgICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHB1YmxpYyBpbWFnZVVybDogc3RyaW5nXHJcbiAgICAgICAgKSB7IH1cclxuICAgICAgICBjYWxjdWxhdGVEaXNjb3VudChwZXJjZW50OiBudW1iZXIpOiBudW1iZXJ7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaWNlIC0gKHRoaXMucHJpY2UgKiBwZXJjZW50LzEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19