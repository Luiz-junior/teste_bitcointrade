//const ListShots = require('../src/components/ListShots');
jest.mock('../src/components/ListShots', () => 'ListShots');

const popularShots = [
    {
        "id": 471756,
        "title": "Sasquatch",
        "description": "<p>Quick, messy, five minute sketch of something that might become a fictional something.</p>",
        "images": {
            "hidpi": null,
            "normal": "http://thaiat.github.io/keynote-loopback/img/loopback.png",
            "teaser": "https://d13yacurqjgara.cloudfront.net/users/1/screenshots/471756/sasquatch_teaser.png"
        },
        "published_at": "2012-03-15T01:52:33Z",
        "html_url": "https://dribbble.com/shots/471756-Sasquatch",
        "height": 300,
        "width": 400
    },
    {
        "id": 471757,
        "title": "advaljdvak",
        "description": "<p>Quick, messy, five minute sketch of something that might become a fictional something.</p>",
        "images": {
            "hidpi": null,
            "normal": "http://thaiat.github.io/keynote-loopback/img/loopback.png",
            "teaser": "https://d13yacurqjgara.cloudfront.net/users/1/screenshots/471756/sasquatch_teaser.png"
        },
        "published_at": "2012-03-15T01:52:33Z",
        "html_url": "https://dribbble.com/shots/471756-Sasquatch",
        "height": 300,
        "width": 400
    }
];

test('esperado retornar todas as props', () => {
    console.log('testando')
});