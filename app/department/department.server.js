(function (app) {
    let deps = [];
    let lastId = 1;
    app.DepartmentServer = ng.core.Class({
        constructor:function() {
            for (let i = 1; i <= 3; i++) {
                let dep = {
                    Id: lastId=i,
                    Name: "dep-" + i,
                };
                deps.push(dep);
            }
        },
        add:function(dep) {
            dep.Id = ++lastId;
            deps.push(dep);
        },
        delete:function(id){
            let index = deps.findIndex((curDep) => {
                return curDep.Id == id;
            });
            deps.splice(index, 1); 
        },
        update:function(dep) {
            let index = deps.findIndex((curDep) => {
                return curDep.Id == dep.Id;
            });
            deps.splice(index, 1, dep);
        },
        save:function(dep) {
            if (dep.Id) {
                this.update(dep);
            } else {
                this.add(dep);
            }
        },
        getList:function() {
            return JSON.parse(JSON.stringify(deps));
        },
        get:function(id) {
            return deps.filter((dep) => {
                return dep.Id = id;
            });
        },
    });
})(window.app || (window.app = {}));