import * as shotsAction from './shotsAction';
import fakeApi from '../../services/fakeApi';
import { REQUEST_SHOTS, SUCCESS_SHOTS, REQUEST_SHOT_ID, SUCCESS_SHOT_ID, ERROR } from './types';

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

describe('actions', () => {
    it('should return a type request shots', () => {

        const expectedAction = {
            type: REQUEST_SHOTS,
        };

        expect(shotsAction.requestShots()).toEqual(expectedAction);
    });

    it('should receive and return a list of shots', () => {
        const expectedAction = {
            type: SUCCESS_SHOTS,
            shots: fakeApi,
        };

        expect(shotsAction.successShots(fakeApi)).toEqual(expectedAction)
    });

    it('should receive and return a id shot', () => {
        const id = 471756;
        const expectedAction = {
            type: REQUEST_SHOT_ID,
            id,
        };

        expect(shotsAction.requestShotId(id)).toEqual(expectedAction);
    });

    it('should receive and return a shot', () => {

        const expectedAction = {
            type: SUCCESS_SHOT_ID,
            shot,
        };

        expect(shotsAction.successShotId(shot)).toEqual(expectedAction);
    });

    it('should receive and return a shot', () => {
        const error = 'a error';
        const expectedAction = {
            type: ERROR,
            error,
        };

        expect(shotsAction.error(error)).toEqual(expectedAction);
    });
});


