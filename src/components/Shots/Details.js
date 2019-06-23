import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const formatDate = dateString => {
    const dateParse = (Date.parse(dateString));
    const published_at = new Date(dateParse);
    return published_at.toLocaleDateString();
};

const Details = props => {
    console.log(props.shot);
    return (
        <div style={{ justifyContent: 'center' }}>
            <Card>
                {
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
                                    {props.shot.title}
                                </Typography>

                                <CardMedia
                                    style={{ borderRadius: '10px', border: '10px solid #eee' }}
                                    component="img"
                                    image={props.shot.images.hidpi}
                                    title={props.shot.title}
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
                                        {props.shot.description.replace(/<.*?>/g, '')}
                                    </Typography>
                                </CardContent>

                                <CardContent>
                                    <Typography
                                        style={{ margin: '5px' }}
                                        variant="body2"
                                        color="textSecondary"
                                        component="p">

                                        Tags: {props.shot.tags.map(tag => <Chip label={tag} />)} <br /><br />

                                        Publicado em: {formatDate(props.shot.published_at)}
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


Details.propTypes = {
    id: PropTypes.string,
}

export default Details;