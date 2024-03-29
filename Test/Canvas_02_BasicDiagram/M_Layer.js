function ResourceManager (){
    this.elements = new Set();
    this.link = new Set();
    this.elementSelection = new Set();
    
}

Layer_ = ResourceManager.prototype;
Layer_.push = function(s) {

    if (s instanceof eBattery ){
        this.elements.add(s);
        s.id = this.elements.size;
       return ;
   }
    if (s instanceof eLink ){
       this.link.add(s);
       return;
   }
}
Layer_.del  = function (s){
    if (s instanceof eBattery){
       this.elements.delete(s);
       this.elementSelection.delete(s);
       
       return;
    }
    if (s instanceof eLink){
        this.link.delete(s);
        return;
    }
}
