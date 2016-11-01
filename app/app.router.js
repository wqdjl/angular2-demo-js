(function(app){
    let routes=[
        {path:'deps',component:app.DepartmentListComponent},
        {path:'',component:app.DepartmentListComponent}
    ];

    app.routeModule=ng.router.RouterModule.forRoot(routes);
})(window.app||(window.app={}))