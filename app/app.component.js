(function(){
    app.AppComponent=
    ng.core.Component({
        selector:'my-app',
        template:`
          <h1>Hello {{name}}</h1>
          <input [(ngModel)]='name'/>
        `
    })
    .Class({
        constructor:function(){
            
        },
        onHiClick:function(){
            alert("Hi "+this.name);
        },
        ngOnChanges:function(changes){
            console.log(this.name);
        },
        ngOnInit:function(){
             this.name='World';
        },
        // ngDoCheck:function(){
        //     console.log('do check');
        // },
        // ngAfterViewInit:function(){
        //     console.log('ngAfterViewInit');
        // },
        // ngAfterViewChecked:function(){
        //     console.log('ngAfterViewChecked');
        // },
        // ngAfterContentInit:function(){
        //     console.log('ngAfterContentInit');
        // },
        // ngAfterContentChecked:function(){
        //     console.log('ngAfterContentChecked');
        // }
    });
})(window.app||(window.app={}))