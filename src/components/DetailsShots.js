import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
// import moment from 'moment';
import PropTypes from 'prop-types';

import api from '../services/api';

class DetailsShots extends React.Component {

    state = {
        shot: {},
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        api.get(`/shots/${id}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
            .then(res => {
                this.setState({ shot: res.data })
            })
            .catch(err => console.log(err));
    }

    render() {
        const shot = { ...this.state.shot };
        console.log(shot);
        return (
            <div style={{ justifyContent: 'center' }}>
                <Card>
                    {
                        !shot.id ? <h5>Carregando...</h5> :
                            <div>
                                <Link to="/" style={{ display: 'flex', color: '#333', margin: '20px', textDecoration: 'none', }}>
                                    <i className="large material-icons">arrow_back</i>
                                </Link>

                                <div style={{ display: 'flex', maxHeight: 800, maxWidth: 600, margin: '0 auto' }}>

                                    <div style={{ justifyContent: 'center' }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                            style={{ color: '#333', marginBottom: '20px' }}>
                                            {shot.title}
                                        </Typography>

                                        <CardMedia
                                            style={{ borderRadius: '10px', border: '10px solid #eee' }}
                                            component="img"
                                            image={shot.images.hidpi}
                                            title={shot.title}
                                        />
                                    </div>
                                </div>
                                <br />

                                <div style={{ display: 'flex', background: '#eee', height: '265px', marginTop: '10px' }}>
                                    <div style={{ maxHeight: 800, maxWidth: 600, margin: '0 auto' }}>
                                        <CardContent>
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                                component="p"
                                            >
                                                {shot.description}
                                            </Typography>
                                        </CardContent>

                                        <CardContent>
                                            <Typography
                                                style={{ margin: '5px' }}
                                                variant="body2"
                                                color="textSecondary"
                                                component="p">

                                                Tags: {shot.tags.map(tag => <Chip label={tag} />)} <br /><br />
                                                {shot.published_at}
                                            </Typography>
                                        </CardContent>
                                    </div>

                                </div>
                            </div>
                    }
                </Card >
            </div>
        );
    }
}

DetailsShots.propTypes = {
    id: PropTypes.string,

}

export default DetailsShots;