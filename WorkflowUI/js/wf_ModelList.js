/// <reference path="../typings/tsd.d.ts" />
define(["wf_ModuleInit"], function (wfModule) {
    var WfModelList = (function () {
        function WfModelList($state) {
            this.$state = $state;
        }
        WfModelList.$inject = ["$state"];
        return WfModelList;
    }());
    wfModule.controller("wfModelList", WfModelList);
});
//# sourceMappingURL=wf_ModelList.js.map