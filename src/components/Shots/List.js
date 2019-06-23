import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    shotContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        maxWidth: 420,
        maxHeight: 310,
        margin: '20px',
    },

}));

const List = props => {
    const classes = useStyles();

    return (
        <div className={classes.shotContainer}>
            {
                props.shots.map(shot => {
                    return (
                        <Card
                            onClick={() => props.selectShot(shot)}
                            key={shot.id}
                            className={classes.card}
                        >
                            <CardMedia
                                style={{ border: '10px solid #eee' }}
                                component="img"
                                image={shot.images.normal}
                                title={shot.title}
                            />
                        </Card>
                    );
                })
            }
        </div>
    );
}

List.propTypes = {
    shots: PropTypes.array,
    selectShot: PropTypes.func
}

export default List;