require.config({
	paths: {
		"underscore": "pi/scripts/vendor/underscore/underscore.1.7.0.min",
		"cme_tracker": "pi/scripts/cme/tracker/app/js/cme_tracker"
	}
});
require(["underscore","cme_tracker"], function(){
	jQuery(document).ready(function(){
		var cme_instance = new cme_tracker();
		cme_instance.init();
	});
});