function RollMenu(){
    this.create();
}
RollMenu.prototype = {
    create: function(){
        this.container = new PIXI.Container();
        this.sprite = new PIXI.Sprite(icon_texture);
        this.sprite.anchor.x = 0.5;
        this.sprite.anchor.y = 0.5;
        this.sprite.position.x = 0;
        this.sprite.position.y = 0;
        this.sprite.r = width/8;
        this.sprite.scale.set( this.sprite.r*2 / this.sprite.width);
        this.sprite.tint = 0xAAAAFF;
        this.container.x = width/2;
        this.container.y = height/2;

        this.rolls = [];
        for(var i = 0; i < 5; i++){
            this.rolls.push(new Roll(this, i, this.sprite.r*3, PI*1.125 + i*0.75*PI/4));
        }
        this.sprite.mousedown = this.touchstart.bind(this);
        this.sprite.touchstart = this.touchstart.bind(this);
        this.container.addChild(this.sprite);
    },
    init: function(){
        this.Dead = false;
        this.sprite.interactive = true;
        stage.addChild(this.container);
    },
    update: function(){
        this.sprite.rotation += PI/10;
        /*this.rolls.forEach(function(r){
            r.update();
        })*/
        if(this.sprite.rotation >= 2*PI){
            this.sprite.rotation -= 2*PI;
            updatequeue.remove(this);
        }
    },
    touchstart: function(){
        console.log('touchstart')
        updatequeue.add(this);
        this.rolls.forEach(function(r){
            r.toggle();
        })
    },
    rolltouch: function(index){
        console.log('index ' + index)
    },
    isDead: function(){
        return this.Dead;
    },
} // end RollMenu
function Roll(menu, index, R, angle){
    this.create(menu, index, R, angle);
}
Roll.prototype = {
    create: function(menu, index, R, angle){
        this.menu = menu;
        this.angle = angle;
        this.index = index;
        this.count = 0;

        this.r0 = 0;
        this.r1 = R;
        this.r = this.r0;

        this.sprite = new PIXI.Sprite(icon_texture);
        this.sprite.anchor.x = 0.5;
        this.sprite.anchor.y = 0.5;
        this.sprite.x = 0;
        this.sprite.y = 0;

        this.sprite.r = width/16;
        this.sprite.scale.set( this.sprite.r*2 / this.sprite.width);
        menu.container.addChild(this.sprite)
        this.sprite.interactive = false;
        this.sprite.mousedown = this.touchstart.bind(this);
        this.sprite.touchstart = this.touchstart.bind(this);
        this.expand = false;
    },
    toggle: function(){
        updatequeue.add(this);
        this.expand = !this.expand;
        this.count = 0;
    },
    end: function(){
        this.sprite.interactive = !this.sprite.interactive;
        updatequeue.remove(this);
    },
    update: function(){
        if(this.expand){
            this.r += (this.r1 - this.r) / 10;
            this.sprite.x = this.r*Math.cos(this.angle)
            this.sprite.y = this.r*Math.sin(this.angle)
            if(Math.abs(this.r - this.r1) < 1) this.end();
        }else{
            this.r += (this.r0 - this.r) / 10;
            this.sprite.x = this.r*Math.cos(this.angle)
            this.sprite.y = this.r*Math.sin(this.angle)
            if(Math.abs(this.r - this.r0) < 1) this.end();
        }
    },
    touchstart: function(){
        this.menu.rolltouch(this.index);
    },
} // end Roll
