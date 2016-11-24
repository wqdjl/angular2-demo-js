(function (app) {
    app.DepartmentListComponent = ng.core.Component({

        selector: 'dep-list',
        templateUrl: '/app/department/department-list.component.html'
    }).Class({
        constructor: [app.DepartmentServer, function (depServer) {
            this.depServer = depServer;
        }],

        ngOnInit: function () {
            this.getList();
            this.selectedDep = {};
        },

        ngDoCheck: () => {
            console.log("ngDoCheck-list");
        },
        ngAfterContentInit: () => {
            console.log("ngAfterContentInit-list");
        },
        ngAfterContentChecked: () => {
            console.log("ngAgterContentChecked-list");
        },
        ngAfterViewInit: () => {
            console.log("ngAfterViewInit-list");
        },
        ngAfterViewChecked: () => {
            console.log("ngAgterViewChecked-list");
        },
        ngOnDestroy: () => {
            alert("OnDestroy");
            console.log("OnDestroy-list");
        },
        ngOnChanges: () => {
            console.log("ngOnChanges-list");
        },


        onCreate: function () {
            this.selectedDep = {};
        },
        onUpdate: function (dep) {
            this.selectedDep = JSON.parse(JSON.stringify(dep));
        },
        onDelete: function (dep) {
            this.depServer.delete(dep.Id);
            this.getList();
        },

        getList: function () {
            this.deps = this.depServer.getList();
        }
    });
})(window.app || (window.app = {}));