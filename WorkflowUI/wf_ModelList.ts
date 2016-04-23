/// <reference path="../typings/tsd.d.ts" />
define(["wf_ModuleInit"], function(wfModule: ng.IModule) {
    class WfModelList {
        static $inject = ["$state"];
        constructor(public $state: angular.ui.IStateService) {

        }
    }
    wfModule.controller("wfModelList", WfModelList);
});