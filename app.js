// your code here!

function countWords(entry) {
	$('.js-word-count').text(entry.length);
}

function countUniqueWords(entry) {
	var uniqueWords = 0;
	var wordLibrary = {};
	for (i=0; i<entry.length; i++) {
		if (!(entry[i] in wordLibrary)) {
			uniqueWords++;
			wordLibrary[entry[i]] = 1;
		}
	}
	$('.js-unique-word-count').text(uniqueWords);	
}

function calculateAverageLength(entry) {
	var wordCount = entry.length;
	var total = 0;
	for (var i=0; i<entry.length; i++) {
		total += entry[i].length;
	}
	avgLength = (total / wordCount);
	$('.js-avg-word-length').text(avgLength.toFixed(2));
}

$(function() {
	$('button[type=submit]').click(function(e) {
		e.preventDefault();
		$('.hidden').removeClass('hidden');
		var sentenceText = $('#user-text').val().split(' ');
		countWords(sentenceText);
		countUniqueWords(sentenceText);
		calculateAverageLength(sentenceText);
	});
});