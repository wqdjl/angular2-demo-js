(function (app) {
    app.DepartmentListComponent = ng.core.Component({
      
        selector: 'dep-list',
        templateUrl: '/app/department/department-list.component.html'
    }).Class({
        constructor: [app.DepartmentServer, function (depServer) { 
             this.depServer=depServer;
        }],
        ngOnInit: function () {
            this.deps = this.depServer.getList();
        },
        onCreate:function() {

        },
        onUpdate:function(dep) {

        },
        onDelete:function(dep) {

        }
    });
})(window.app || (window.app = {}));