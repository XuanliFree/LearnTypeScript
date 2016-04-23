/// <amd-module name="stateDemo"/>
export namespace app.StateDemo {

    StateProviderInit.$inject = ["$stateProvider"];
    function StateProviderInit($stateProvider: angular.ui.IStateProvider): void {
        $stateProvider.state("route1", {
            templateUrl: "route1.html",
            controller: "route1Ctrl as vm"
        }).state("route2", {
            templateUrl: "route2.html",
            controller: "route2Ctrl as vm"
        });

    }

    ss.$inject = ["$stateProvider"];
    function ss($stateProvider: angular.ui.IStateProvider) {
        $stateProvider.state("demo", {
            templateUrl: "dkdkd",
            controller: "dddd"
        });
    }


    class Route1Ctrl {

        public title: string;
        public description: string;

        constructor() {
            this.title = "route1";
            this.description = "this is a route1";
        }
    }

    class Route2Ctrl extends Route1Ctrl {
        constructor() {
            super();
            this.title = "route2";
            this.description = "this is a route2";
        }

    }



    class MainCtrl {
        static $inject = ["$state"];
        constructor(
            public $state: angular.ui.IStateService
        ) {
        }

        stateRoute(id: number): void {
            this.$state.go("route" + id.toString());
        }

    }

    angular.module("stateDemo", ["ui.router"])
        .config(StateProviderInit)
        .controller("route1Ctrl", Route1Ctrl)
        .controller("route2Ctrl", Route2Ctrl)
        .controller("mainCtrl", MainCtrl)
        ;

    angular.module("stateDemo").config(ss);

}