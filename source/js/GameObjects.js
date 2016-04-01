var objects = [];
var icon_texture;
var updatequeue;
var rollmenu;
function GameObjects(){
    this.init();
}
GameObjects.prototype = {
    init: function(){
        PIXI.loader
        .add('assets/1.png')

        .load(this.onassetsloaded.bind(this));
    }, // end init
    onassetsloaded : function(){
        console.log("onAssetsLoaded");
        icon_texture = new PIXI.Texture.fromImage("assets/1.png");

        updatequeue = new UpdateQueue();
        rollmenu = new RollMenu();
        rollmenu.init();

        assetsloaded = true;
    },
    update: function(time){
        if(updatequeue != undefined) updatequeue.update();

    },
}; // end GameObjects
