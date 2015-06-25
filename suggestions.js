//
// Article suggestions
//  - send an article ID
//  - receive a list of similar articles
//


/**
 * Request
 */

$.ajax({
    url: 'https://domain.com/api/suggestions',
    type: 'GET',
    dataType: 'jsonp'
    data: {
        format: 'json',
        articleid: 'JDKS393',
        limit: 5
    }
});


/**
 * Response
 */

// just enough info to display them in graph
// full article can be fetched on user click
var response = {
    suggestions: [
        {
            id: 'KDSJD8209',
            title: 'Some related article',
            field: 'Botany',
            eigenfactor: 0.039748
        },
        {
            id: '',
            title: '',
            field: '',
            eigenfactor: 0.0
        },
        {
            id: '',
            title: '',
            field: '',
            eigenfactor: 0.0
        },
        {
            id: '',
            title: '',
            field: '',
            eigenfactor: 0.0
        },
        {
            id: '',
            title: '',
            field: '',
            eigenfactor: 0.0
        }
    ]
};
