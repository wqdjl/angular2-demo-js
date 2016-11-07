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