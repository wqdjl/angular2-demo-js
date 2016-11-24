(function(app){
    app.highlight=ng.core.Directive({
        selector:'[highlight]'
    })
    .Class({
        constructor:[ng.core.ElementRef,ng.core.Renderer, function(el,render){
            this.el=el;
            this.render=render;
            this.highColor('red');
        }],
        highColor:function(color){
            this.render.setElementStyle(this.el.nativeElement,'backgroundColor',color);
        }
    })
})(window.app||(window.app={}))