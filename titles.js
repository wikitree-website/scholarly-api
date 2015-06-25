//
// Title autocomplete
//  - send a string (title fragment)
//  - receive a list of complete titles
//


/**
 * Request
 */

$.ajax({
    url: 'https://domain.com/api/titles',
    type: 'GET',
    dataType: 'jsonp'
    data: {
        format: 'json',
        fragment: 'sugg',
        limit: 10
    }
});


/**
 * Response
 */

var response = {
    titles: [
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
    ]
};
