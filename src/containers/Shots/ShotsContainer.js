import React, { Component } from 'react';
import { connect, } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import List from '../../components/Shots/List';
import { requestShots } from '../../store/actions/shotsAction';

class ShotsContainer extends Component {

    state = {
        renderShotDetail: false,
        idShot: null,
    };

    componentDidMount() {
        this.props.requestShots();
    }

    selectShot = shot => {
        if (shot)
            this.setState({ renderShotDetail: true, idShot: shot.id });
    };

    render() {
        const shots = [...this.props.listShots];
        const { idShot, renderShotDetail } = this.state;

        if (renderShotDetail) {
            return <Redirect to={`detail-shot/${idShot}`} />;
        };

        return !shots.length ? <h5>Carregando...</h5>
            : (
                <div className="container" style={{ display: 'flex' }}>
                    <div className="main">
                        <List
                            shots={shots}
                            selectShot={this.selectShot}
                        />
                    </div>
                </div >
            )
    }
};

const mapStateToProps = state => ({
    listShots: state.listShots.shots,
    error: state.listShots.error,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestShots }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShotsContainer);
