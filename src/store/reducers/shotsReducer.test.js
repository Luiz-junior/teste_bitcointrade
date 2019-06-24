import { fetchShotsReducer } from './shotsReducer';
import { popularShots } from '../../services/fakeApi';

const shot = {
    "id": 471756,
    "title": "Sasquatch",
    "description": "<p>Quick, messy, five minute sketch of something that might become a fictional something.</p>",
    "images": {
        "hidpi": null,
        "normal": "https://cdn.dribbble.com/users/276611/screenshots/6647396/netga_2x.png",
        "teaser": "https://cdn.dribbble.com/users/276611/screenshots/6647396/netga_2x.png"
    },
    "published_at": "2012-03-15T01:52:33Z",
    "html_url": "https://dribbble.com/shots/471756-Sasquatch",
    "height": 300,
    "width": 400
};

describe('FetchShot reducer', () => {
    it('should return the initial state', () => {
        expect(fetchShotsReducer(undefined, {})).toEqual(
            {
                shots: [],
                shot: {},
                error: '',
            }
        )
    });

    it('should handle fetch shots', () => {
        const error = {
            type: 'ERROR',
            error: ''
        };

        expect(fetchShotsReducer({}, {
            type: 'SUCCESS_SHOTS',
            shots: popularShots
        })).toEqual({ shots: popularShots });

        expect(fetchShotsReducer({}, {
            type: 'SUCCESS_SHOT_ID',
            shot
        })).toEqual({ shot });

        expect(fetchShotsReducer({}, {
            type: 'ERROR',
            error
        })).toEqual({ error });

    });
});
