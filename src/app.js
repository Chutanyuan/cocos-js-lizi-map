
var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.dituXiaoguo();
        return true;
    },
    onEnter:function () {
        this._super();
        this.liziXiaoGuo();
    },
    liziXiaoGuo:function () {
        var layer = new ParticleLayer();
        this.addChild(layer);
        // setTimeout(function () {
        //     layer.removeFromParent();
        // },3000);
    },
    dituXiaoguo:function () {
        var map = new cc.TMXTiledMap("res/ditu/TiledMap.tmx");
        this.addChild(map);
        map.x = cc.winSize.width/2-map.width/2;
        map.y = cc.winSize.height/2-map.height/2;
        var layer = map.getLayer("obstacle");
        // 判断当前位置是否有瓦片
        if (layer.getTileGIDAt(2, 4) > 0) {
            var tile = layer.getTileAt(2, 4);
            tile.setVisible(false);
        }
        setInterval(function () {
            var move = cc.moveTo(1000,map.x,map.y+10);
            map.runAction(cc.sequence(move));
            cc.log("aaas");
        },1000);
    }
});
var ParticleLayer = cc.Layer.extend({
    ctor : function () {
        this._super();

        var particle = new cc.ParticleSystem(res.shan_show);
        this.addChild(particle);
        particle.setPosition(cc.winSize.width / 2, 100);
    }
});
var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

