var ground;
var backbutton_count = 0;
var Engine = (function(global) {
    document.addEventListener('DOMContentLoaded', function() {

        window.scrollTo(0,1);
        startTime = Date.now();
        width = screen.availWidth;
        height = screen.availHeight;

        dim = (width < height) ? width : height;
        big_dim = (width < height) ? height : width;
        stage_width = width;
        stage_height = height;
        scope_width = width*0.15;
        scope_height = height*0.15;
        //console.log('width ' + width + ' height ' + height + ' stage_width ' + stage_width + ' stage_height ' + stage_height)


        renderer = PIXI.autoDetectRenderer(width, height*1.0 ,{backgroundColor : 0x59b4ff});//LightCyan});//'Black'});GrassColor 0x4F8EDB
        // view is canvas
        document.body.appendChild(renderer.view);

        //addListeners();

        stage = new PIXI.Container();
        stage0 = new PIXI.Container();
        stage0.addChild(stage);

        gravity = new PVector(0, height*1.5/10000);


        animate();
    }); // end DOMContentLoaded
})(this);


function update(){
     var now = Date.now(),
         dt  = (now - lastTime),
         t   = (now - startTime);
    time = {t:t, dt: dt};
    lastTime = now;

    if(assetsloaded){
        if(gameobjects !== undefined) gameobjects.update(time);

    }
}

function animate() {
    renderer.render(stage0);
    update();
    requestAnimationFrame( animate );
}
