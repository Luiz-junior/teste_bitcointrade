import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux';

import api from '../services/api';
import ListShots from '../components/ListShots';
import { fetchShots } from '../store/actions/fetchShots';

class Shots extends Component {

    state = {
        renderShotDetail: false,
        idShot: null,
        shots: [],
    };

    componentDidMount() {
        api.get(`user/shots?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
            .then(res => this.props.fetchShots(res.data))
            .catch(err => console.log(err));
        //const a = this.props.fetchShots()
        //console.log('a', a)
    }

    selectShot = shot => {
        if (shot)
            this.setState({ renderShotDetail: true, idShot: shot.id });
    };

    render() {
        console.log(this.props)
        const shots = [...this.props.listShots.shots];

        if (this.state.renderShotDetail) {
            return <Redirect to={`detail-shot/${this.state.idShot}`} />;
        };

        return !shots.length ? <h5>Carregando...</h5>
            : (
                <div className="container" style={{ display: 'flex' }}>
                    <div className="main">
                        <ListShots
                            shots={shots}
                            selectShot={this.selectShot}
                        />
                    </div>
                </div >
            )
    }
};

const mapStateToProps = state => ({
    listShots: state.listShots,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ fetchShots }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Shots);