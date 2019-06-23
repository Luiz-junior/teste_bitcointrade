import React from 'react';
import { storiesOf } from '@storybook/react';

import ListShots from '../src/components/ListShots';
import Test from '../src/components/Test';
import { popularShots } from '../src/services/fakeApi';

storiesOf('React List Shots', module)
    .add('with Shots', () => {
        return <ListShots shots={popularShots} />
    })
    // .add('with shots, with selectShot,', () => {
    //     return popularShots.map(shot => {
    //         return <ListShots selectShot={popularShots} popularShots={shot} />
    //     })
    // })
