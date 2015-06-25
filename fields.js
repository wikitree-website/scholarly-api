//
// Fields of study
//  - send (nothing special)
//  - receive list of all fields and their colors
//


/**
 * Request
 */

$.ajax({
    url: 'https://domain.com/api/fields',
    type: 'GET',
    dataType: 'jsonp'
    data: {
        format: 'json'
    }
});


/**
 * Response
 */

var response = {
    fields: [
        {
            id: 'HJDK9283',
            name: 'Botany',
            color: '#A1C659'
        },
        {
            id: '',
            name: '',
            color: ''
        },
        {
            id: '',
            name: '',
            color: ''
        },
        {
            id: '',
            name: '',
            color: ''
        },
        {
            id: '',
            name: '',
            color: ''
        },
        {
            id: '',
            name: '',
            color: ''
        },
        {
            id: '',
            name: '',
            color: ''
        },
        {
            id: '',
            name: '',
            color: ''
        },
        {
            id: '',
            name: '',
            color: ''
        },
        {
            id: '',
            name: '',
            color: ''
        },
        {
            id: '',
            name: '',
            color: ''
        }
    ]
};
