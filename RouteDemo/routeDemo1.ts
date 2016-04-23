

define(["routeDemo"], function(routeDemo: ng.IModule) {
    class DemoCrtl {
        title: string;
        constructor(
        ) {
            this.title = "hello aTu";
        }
    }

    routeDemo.controller("abc", DemoCrtl);
});