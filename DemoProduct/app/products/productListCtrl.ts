module app.productList {
    interface IProductListModel {
        title: string;
        showImage: boolean;
        products: app.domain.IProduct[];
        toggleImage(): void;
    }

    class ProductListCtrl implements IProductListModel {
        title: string;
        showImage: boolean;
        products: app.domain.IProduct[];

        static $inject = ["DataAccessService"];
        constructor(private dataAccessService: app.common.DataAccessService) {
            this.title = "Product List";
            this.showImage = false;
            this.products = [];

            var productResource = dataAccessService.getProductResource();
            productResource.query(
                (data: app.domain.IProduct[]) => {
                    this.products = data;
                    
                    var tt = '[{"a":"b"}, {"a": "c"}]';
                    var mm = JSON.parse(tt);
                    
                }
            );


        }

        toggleImage(): void {
            this.showImage = !this.showImage;
            
        }
    }

    angular
        .module("productManagement")
        .controller("ProductListCtrl", ProductListCtrl);
}