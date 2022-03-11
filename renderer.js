"use strict";

foo.setup_receiver("pong", (event, msg) => {
	console.log(performance.now() - msg);
});

