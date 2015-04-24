/**
 * TextHoler.js
 * https://github.com/diegodalbosco/TextHoler.js
 * MIT licensed
 *
 * Copyright (C) 2015 Diego Dal Bosco
 */

(function($) {
	$.fn.textHoler = function(options) {
		var settings = $.extend({
			color: "transparent",
			size: "48px",
			family: "arial",
			repeat: "repeat",
			weight: 700
		}, options );
		if(typeof options.background == 'undefined') { 
			console.log("Damn! I need an image to use for the background!");
			return this;
		} else {
			var img = "url(" + options.background + ") ";
		}
		this.css('color', settings.color).css('background', img+settings.repeat+" center center").css('-webkit-background-clip', 'text').css('background-size', 'cover').css('-webkit-background-size', 'cover').css('-moz-background-size', 'cover').css('-o-background-size', 'cover').css('font-size', settings.size).css('font-family', settings.family).css('font-weight', settings.weight);
		return this;
	};
}(jQuery));