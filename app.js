// your code here!

function countWords(entry) {
	var wordCount = 0;
	for (i=0; i<entry.length; i++) {
		wordCount = i;
	}
	return wordCount;
	$('.js-word-count').append(wordCount);
}

function countUniqueWords(entry) {
	var uniqueWords = 0;
	var wordLibrary = [];
	for (i=0; i<entry.length; i++) {
		if (!(entry[i] in wordLibrary)) {
			uniqueWords++;
			wordLibrary.push(entry[i]);
		}
	}
	return uniqueWords;
	$('.js-unique-word-count').append(uniqueWords);	
}

function calculateAverageLength(entry) {
	var wordLengths = [];
	var avgLength = 0;
	var total = 0;
	for (i=0; i<entry.length; i++) {
		wordLengths.push(entry[i].length);
	}
	for (var i in wordLengths) {
		total += wordLengths[i];
	}
	avgLength = (total / wordLengths.length);
	return avgLength;
	$('.js-avg-word-length').append(avgLength);
}

$(function() {
	$('button[type=submit]').click(function(e) {
		$('.hidden').removeClass('hidden');
		countWords('#user-text');
		countUniqueWords('#user-text');
		calculateAverageLength('#user-text');
		e.preventDefault();
	})
})