/**
 * Article request
 */

// by article title (for search bar)
$.ajax({
    url: 'https://domain.com/api/articles',
    type: 'GET',
    dataType: 'jsonp'
    data: {
        format: 'json',
        articletitle: 'My great article'
    }
});

// by article ID (for linking from reference)
$.ajax({
    url: 'https://domain.com/api/articles',
    type: 'GET',
    dataType: 'jsonp'
    data: {
        format: 'json',
        articleid: 'JDKS393'
    }
});


/**
 * Article response
 */

// article object
var response = {
    id: 'JDKS393',
    title: 'My great article',
    abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    year: '1999',
    field: 'Botany',
    eigenfactor: 0.039748,
    authors: [
        {
            id: 'LDKD93948',
            name: 'George Costanza'
        },
        {
            id: 'OIAS389234',
            name: 'Elaine Benes'
        },
        {
            id: 'MXCJKH3892',
            name: 'Cosmo Kramer'
        }
    ],
    figures: [
        'http://i.imgur.com/2k23gWp.jpg',
        'http://i.imgur.com/BcqItX6.jpg',
        'http://i.imgur.com/owyWGdo.jpg',
    ],
    references: {
        outbound: [
            {
                id: '',
                title: '',
                abstract: '',
                year: '',
                field: '',
                eigenfactor: 0.0,
                authors: []
            },
            {
                id: '',
                title: '',
                abstract: '',
                year: '',
                field: '',
                eigenfactor: 0.0,
                authors: []
            }
        ],
        inbound: [
            {
                id: '',
                title: '',
                abstract: '',
                year: '',
                field: '',
                eigenfactor: 0.0,
                authors: []
            },
            {
                id: '',
                title: '',
                abstract: '',
                year: '',
                field: '',
                eigenfactor: 0.0,
                authors: []
            }
        ]
    }
};
