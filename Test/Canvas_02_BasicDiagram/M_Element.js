function element(x, y, width=50, height=50, Text = null) {
    this.graphic = new Graphic('rect',x,y,width,height);
    this.selected = false;
    this.Text = Text;
    this.node = { left: new Node(this, 'left'), right: new Node(this, 'right') }
}

//Content Draw funciton
Object.defineProperties(element.prototype,{
    x: {
        get:function(){return this.graphic.x},
        set: function(input){ this.graphic.x = input}
    },
    y:{
        get: function(){return this.graphic.y},
        set : function(input){this.graphic.y = input}
    },
    width :{
        set:function(input){
            this.graphic.width = input;
        },
        get : function(){
            return this.graphic.width;
        }
    },
    height : {
        get : function (){
            return this.graphic.height;
        },
        set :function (input) {
            this.graphic.height = input;
        }
    },
    center : {
        get: function(){
            return (point(this.x+(this.width/2),this.y+(this.height/2)));
        },
        set: function(input){
            this.x = input.x - (this.width/2);
            this.y = input.y - (this.height/2);
        }
    },
    left : {
        get: function(){
            console.log(this.graphic.left);
            
            return this.graphic.left;
        }
    },
    right: {
        get:function() {
            return this.graphic.right
        }
    }
    // _x : {
    //     value : this.ix,
    //     writable : !0,
    //     enumerable : !0
    // },

});





element.prototype.OnElementDetect = function () {
    d.beginPath();
    d.rect(this.x, this.y, this.width, this.height);
    d.closePath();

}

element.prototype.isOnControl = function (e) {
    if (this.node.left.isOnNode(e)) { return this.node.left; }
    if (this.node.right.isOnNode(e)) { return this.node.right; }
    return false;
}


element.prototype.textDraw = function () {
    if (this.Text) {
        // if content text isnt null
        var margin = 2;
        CanvStyle.Text();
        var Widthminmum = d.measureText(this.Text).width;
        if (Widthminmum + margin * 2 > this.width) {
            this.width = Widthminmum + margin * 2;
            this.draw();
        }
        d.fillText(this.Text, this.x + margin, this.y + 15 + margin, this.width - (margin * 2));

    }
}
element.prototype.Draw_onControl = function () {
    CanvStyle.ElementSelected();
    Draw(this.node.left);
    Draw(this.node.right);
    // this.node.left.drawLinkControl();
    // this.node.right.drawLinkControl();

}