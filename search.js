//
// Search for an article
//  - send a search query
//  - receive a list of results
//


/**
 * Request
 */

$.ajax({
    url: 'https://domain.com/api/search',
    type: 'GET',
    dataType: 'jsonp'
    data: {
        format: 'json',
        query: 'something like this',
        limit: 5,
        offset: 0 // for pagination
    }
});


/**
 * Response
 */

var response = {
    search: {
        totalhits: 4189,
        results: [
            {
                relevance: 0.9,
                article: {
                    id: '',
                    title: '',
                    abstract: '',
                    year: '',
                    field: '',
                    eigenfactor: 0.0,
                    authors: []
                }
            },
            {
                relevance: 0.8,
                article: {
                    id: '',
                    title: '',
                    abstract: '',
                    year: '',
                    field: '',
                    eigenfactor: 0.0,
                    authors: []
                }
            },
            {
                relevance: 0.7,
                article: {
                    id: '',
                    title: '',
                    abstract: '',
                    year: '',
                    field: '',
                    eigenfactor: 0.0,
                    authors: []
                }
            },
            {
                relevance: 0.7,
                article: {
                    id: '',
                    title: '',
                    abstract: '',
                    year: '',
                    field: '',
                    eigenfactor: 0.0,
                    authors: []
                }
            },
            {
                relevance: 0.6,
                article: {
                    id: '',
                    title: '',
                    abstract: '',
                    year: '',
                    field: '',
                    eigenfactor: 0.0,
                    authors: []
                }
            }
        ]
    }
};
