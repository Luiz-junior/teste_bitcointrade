import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestShotId } from '../../store/actions/shotsAction';
import Details from '../../components/Shots/Details';

class DetailsContainer extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.requestShotId(id);
    };

    render() {
        const shot = { ...this.props.shot };
        return !shot.id ? <h5>Carregando...</h5> : (<Details shot={shot} />)
    }
}

const mapStateToProps = state => ({
    shot: state.listShots.shot,
    error: state.listShots.error,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestShotId }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);