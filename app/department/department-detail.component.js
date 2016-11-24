(function (app) {
    app.DepartmentDetailComponent = ng.core
        .Component({
            selector: 'dep-detail',
            inputs: [
                'selecteddepartment'
            ],
            outputs: [
                'afterSaved',
                'cancel'
            ],
            templateUrl: '/app/department/department-detail.component.html'
        })
        .Class({

            constructor: [app.DepartmentServer, function (depServer) {
                this.depServer = depServer;
                this.afterSaved = new ng.core.EventEmitter();
                this.cancel = new ng.core.EventEmitter();

            }],
            onSave: function () {
                this.depServer.save(this.selecteddepartment);
                this.afterSaved.emit();
            },
            onCancel: function () {
                this.cancel.next();
            },
          
            ngDoCheck: () => {
                console.log("ngDoCheck-detail");
            },
            ngAfterContentInit: () => {
                console.log("ngAfterContentInit-detail");
            },
            ngAfterContentChecked: () => {
                console.log("ngAgterContentChecked-detail");
            },
            ngAfterViewInit: () => {
                console.log("ngAfterViewInit-detail");
            },
            ngAfterViewChecked: () => {
                console.log("ngAgterViewChecked-detail");
            },
            ngOnDestroy: () => {
                alert("OnDestroy");
                console.log("OnDestroy-detail");
            },
            ngOnChanges: () => {
                console.log("ngOnChanges-detail");
            }

        })
})(window.app || (window.app = {}));