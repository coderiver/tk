requirejs.config({
	"baseUrl": "js/plugins",
	"paths": {
		"jquery" : '../lib/jquery-1.11.1.min',
		"idangerous" : 'idangerous.swiper.min',
		"app" : "../app",
		"colorbox" : "jquery.colorbox",
		"video" : "video"
	},
    "shim": {
        "idangerous": ["jquery"],
        "colorbox": ["jquery"],
        "colorbox": ["jquery"],
        "scaffolding": ["jquery"],
        "fotorama": ["jquery"]
    }
});



requirejs(["app/swiper"]);
requirejs(["app/cutsocials"]);
requirejs(["app/bootstrap"]);
requirejs(["app/nav"]);
requirejs(["app/yotube"]);
requirejs(["app/insta"]);
requirejs(["app/colorbox"]);
requirejs(["app/fotorama"]);








