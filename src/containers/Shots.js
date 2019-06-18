import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import api from '../services/api';
import { popularShots } from '../services/fakeApi';
import ListShots from '../components/ListShots';

class Shots extends Component {

    state = {
        renderShotDetail: false,
        idShot: null,
        shots: [],
    };

    componentDidMount() {
        api.get(`user/shots?access_token=56c09f7bf89c758e934100c0423639cdac6029de4cb92fc9e175bb93d7e7aeae`)
            .then(res => this.setState({ shots: res.data }))
            .catch(err => console.log(err));
    }

    selectShot = shot => {
        if (shot)
            this.setState({ renderShotDetail: true, idShot: shot.id });
    };

    render() {

        if (this.state.renderShotDetail) {
            return <Redirect to={`detail-shot/${this.state.idShot}`} />;
        };

        {
            return !this.state.shots.length ? <h5>Carregando...</h5>

                : (
                    <div className="container" style={{ display: 'flex' }}>
                        <div className="main">
                            <ListShots
                                shots={this.state.shots}
                                selectShot={this.selectShot}
                            />
                        </div>
                    </div >
                )
        }

    }
}

export default Shots;