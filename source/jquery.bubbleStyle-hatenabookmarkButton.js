/*
    Bubble Style Hatena Bookmark Button
    author: 1024jp <wolfrosch.com>
    version: v1.0 (2012-07-24)
*/

$(function(){
	$('a.hatena-bookmark-button[data-hatena-bookmark-layout="standard"]').attr('data-hatena-bookmark-layout','simple').addClass('bubble');

	if (0 < $('.hatena-bookmark-button.bubble').size()) {
		$('a.hatena-bookmark-button.bubble').each(function(){
			// get entry url
		 	var entryUrl;
		 	entryUrl = $(this).attr('href').replace('http://b.hatena.ne.jp/entry/','');
		 	if (!entryUrl) {
		 		entryUrl = $(location).attr('href');
		 	} else if (!entryUrl.match(/^http/)) {
		 		entryUrl = 'http://' + entryUrl;
		 	}
		 	
		 	// get count
			getHatenaBookmarkCount(entryUrl, $(this));
		});
	}
});

function getHatenaBookmarkCount(entryUrl, placeholder) {
	$.getJSON('http://api.b.st-hatena.com/entry.count?url='+entryUrl+'&callback=?', function(count) {
		placeholder.append('<span class="count">'  + count + '</span>');
	});
}