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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ZfTW9kZWxMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2ZfTW9kZWxMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0QztBQUM1QyxNQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBRSxVQUFTLFFBQW9CO0lBQ25EO1FBRUkscUJBQW1CLE1BQWdDO1lBQWhDLFdBQU0sR0FBTixNQUFNLENBQTBCO1FBRW5ELENBQUM7UUFITSxtQkFBTyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFJaEMsa0JBQUM7SUFBRCxDQUFDLEFBTEQsSUFLQztJQUNELFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5kZWZpbmUoW1wid2ZfTW9kdWxlSW5pdFwiXSwgZnVuY3Rpb24od2ZNb2R1bGU6IG5nLklNb2R1bGUpIHtcclxuICAgIGNsYXNzIFdmTW9kZWxMaXN0IHtcclxuICAgICAgICBzdGF0aWMgJGluamVjdCA9IFtcIiRzdGF0ZVwiXTtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgJHN0YXRlOiBhbmd1bGFyLnVpLklTdGF0ZVNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2ZNb2R1bGUuY29udHJvbGxlcihcIndmTW9kZWxMaXN0XCIsIFdmTW9kZWxMaXN0KTtcclxufSk7Il19