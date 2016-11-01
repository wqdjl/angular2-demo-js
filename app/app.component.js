// //Hello world
// (function(){
//     app.AppComponent=
//     ng.core.Component({
//         selector:'my-app',
//         template:`
//           <h1>Hello {{name}}</h1>
//           <input [(ngModel)]='name'/>
//         `
//     })
//     .Class({
//         constructor:function(){
            
//         },
//         onHiClick:function(){
//             alert("Hi "+this.name);
//         },
//     });
// })(window.app||(window.app={}))

(function(app){
     app.AppComponent=ng.core.Component({
        selector:'my-app',
        template:`<dep-list></dep-list>`   
    }).Class({
        constructor:function(){},
    });
})(window.app||(window.app={}))