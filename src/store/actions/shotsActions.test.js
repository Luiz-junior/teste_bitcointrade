import * as shotsAction from './shotsAction';
import fakeApi from '../../services/fakeApi';

describe('actions', () => {
    it('should create an action to add a todo', () => {

        const expectedAction = {
            type: 'SUCCESS_SHOTS',
            shots: fakeApi,
        }
        expect(shotsAction.successShots(fakeApi)).toEqual(expectedAction)
    })
})

