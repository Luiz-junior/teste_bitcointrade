import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

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
    media: {
        height: 310,
        width: 420,
        paddingTop: '56.25%', // 16:9
    },

}));

const ListShots = props => {
    const classes = useStyles();

    return (
        <div className={classes.shotContainer}>
            {
                props.shots.map(shot => {
                    return (
                        <Card key={shot.id} onClick={() => props.selectShot} className={classes.card}>
                            <CardMedia
                                className={classes.media}
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

export default ListShots;