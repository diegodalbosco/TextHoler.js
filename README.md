TextHoler.js
------------
Use this JQuery plugin to make your text like a hole in the page

You can find a demo page with some <a href="http://diegodalbosco.github.io/TextHoler.js/demo.html" target="blank">examples here</a>

<img src="img/example.png" alt="This is the result">

### Basic example ###
This is a basic usage example providing only an URL/path to locate the image

The result of this example is the image above

**HTML markup**

    <span id="test">TEXT HOLER</span>

**jQuery**

	$('#test').textHoler({
		background: "http://i.giphy.com/fnMmGzRnQD6Ny.gif"
	});
	

### Available Options ###
These are the available options with the default values

	color: "transparent",
	size: "48px",
	family: "arial",
	repeat: "repeat",
	weight: 700

NOTE: backgroud option is required! If you don't provide any background image the plugin doesn't work and it will log to console "Damn! I need an image to use for the background!" message.
