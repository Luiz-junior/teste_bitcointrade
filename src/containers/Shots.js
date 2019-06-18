import React, { Component } from 'react';

import { popularShots } from '../services/fakeApi';

import ListShots from '../components/ListShots';
import DetailsShots from '../components/DetailsShots';

class Shots extends Component {

    selectShot = (e) => {
        console.log('test')
    };

    render() {
        return (
            <div className="container" style={{ display: 'flex' }}>

                <div className="main" style={{ flex: '100%' }}>
                    <ListShots shots={popularShots} selectShot={this.selectShot} />
                </div>

                {/* <div className="details" style={{ flex: '40%' }}>
                    <DetailsShots shots={popularShots} />
                </div> */}
            </div>
        );
    }
}

export default Shots;