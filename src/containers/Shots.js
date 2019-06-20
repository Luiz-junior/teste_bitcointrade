import React, { Component } from 'react';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import ListShots from '../components/ListShots';
import { fetchShots } from '../store/actions/fetchShots';

class Shots extends Component {

    state = {
        renderShotDetail: false,
        idShot: null,
    };

    componentDidMount() {
        this.props.fetchShots();
    }

    selectShot = shot => {
        if (shot)
            this.setState({ renderShotDetail: true, idShot: shot.id });
    };

    render() {
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