import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import api from '../services/api';

class DetailsShots extends React.Component {

    state = {
        shot: {},
        images: {}
    };

    componentDidMount() {
        const id = this.props.match.params.id;

        api.get(`/shots/${id}?access_token=56c09f7bf89c758e934100c0423639cdac6029de4cb92fc9e175bb93d7e7aeae`)
            .then(res => {
                this.setState({ shot: res.data, images: res.data.images });
                console.log(this.state.shot)
            })
            .catch(err => console.log(err));
    }

    render() {

        return (
            <div>

                <Button onClick={() => { this.props.history.push("/") }} variant="contained" style={{ margin: 10 }}>
                    Voltar
                </Button>
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <Card style={{ justifyContent: 'center', marginTop: 15 }} >
                        {
                            !this.state.shot ? <h5>Carregando...</h5> :
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        image={this.state.images.normal}
                                        title={this.state.shot.title}
                                    />
                                    <CardContent style={{ marginTop: 100 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {this.state.shot.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="h2">
                                            {this.state.shot.description}
                                        </Typography>
                                        <Typography variant="body3" color="textSecondary" component="p">
                                            {this.state.shot.tags}
                                        </Typography>
                                        <Typography variant="body4" color="textSecondary" component="p">
                                            {this.state.shot.published_at}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                        }
                    </Card >
                </div>
            </div>

        );
    }
}

export default DetailsShots;