/*
    Bubble Style Hatena Bookmark Button
    author: 1024jp <wolfrosch.com>
    version: v1.0 (2012-07-24)
*/


(function($){
// 	// append stylesheet (@@@ will be replaced to CSS code when this minified
// 	$('head').append('<style>@@@</style>');

	// define hatena bookmark standard button
	var standardButtons = $('a.hatena-bookmark-button[data-hatena-bookmark-layout="standard"]');

	// execute
	standardButtons.each(function(){
		// mimic simple button and give bubble class
		$(this).attr('data-hatena-bookmark-layout','simple').addClass('bubble');
		
		// get entry url
	 	var entryUrl;
	 	entryUrl = $(this).attr('href').replace('http://b.hatena.ne.jp/entry/','');
	 	if (!entryUrl) {
	 		entryUrl = $(location).attr('href');
	 	} else if (!entryUrl.match(/^http/)) {
	 		entryUrl = 'http://' + entryUrl;
	 	}
	 	
	 	// get count from Hatena via JSON
		var placeholder = $(this);
		$.getJSON('http://api.b.st-hatena.com/entry.count?url='+entryUrl+'&callback=?', function(count){
			placeholder.append('<span class="count">' + count + '</span>');
		});
	});
})(jQuery);