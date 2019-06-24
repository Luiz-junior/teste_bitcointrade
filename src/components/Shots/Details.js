import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    LinkBack: {
        display: 'flex',
        color: '#333',
        margin: '20px',
        textDecoration: 'none',
    },
    containerCardMedia: {
        display: 'flex',
        maxHeight: 800,
        maxWidth: 600,
        margin: '0 auto',
    },
    containerDetails: {
        display: 'flex',
        background: '#eee',
        height: '265px',
        marginTop: '10px',
    }
}));

const formatDate = dateString => {
    const dateParse = (Date.parse(dateString));
    const published_at = new Date(dateParse);
    return published_at.toLocaleDateString();
};

const Details = props => {
    const classes = useStyles();

    return (
        <div style={{ justifyContent: 'center' }}>
            <Card>
                {
                    <div>
                        <Link to="/" className={classes.LinkBack}>
                            <i className="large material-icons">arrow_back</i>
                        </Link>

                        <div className={classes.containerCardMedia} >
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

                        <div className={classes.containerDetails}>
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
                                        component="div">

                                        Tags: {props.shot.tags.map(tag => <Chip label={tag} />)}
                                        <br /><br />

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
    title: PropTypes.string,
    images: PropTypes.object,
    description: PropTypes.string,
    tags: PropTypes.array,
    published_at: PropTypes.string,
}

export default Details;