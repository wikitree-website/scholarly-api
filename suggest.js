/**
 * Suggest request
 */

$.ajax({
    url: 'https://domain.com/api/suggestions',
    type: 'GET',
    dataType: 'jsonp'
    data: {
        format: 'json',
        query: 'sugg',
        limit: 10
    }
});


/**
 * Suggest response
 */

var response = [
	'Sugg',
    'Suggestion',
    'Suggs (singer)',
    'Suggs',
    'Suggen',
    'Suggested Retail Price',
    'Suggan Buggan River',
    'Suggestion box',
    'Suggestibility',
    'Suggestopedia'
];
