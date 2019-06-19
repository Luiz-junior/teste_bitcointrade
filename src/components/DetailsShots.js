import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';

import api from '../services/api';

class DetailsShots extends React.Component {

    state = {
        shot: {},
        images: {},
        tags: {}
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        api.get(`/shots/${id}?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
            .then(res => {
                console.log(this.state.shot.value == undefined)
                this.setState({
                    shot: res.data,
                    images: res.data.images,
                    tags: res.data.tags,
                });
                console.log(this.state.shot.value === undefined)
                // parei aqui
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

                    <Card  >
                        {
                            !this.state.shot ? <h5>Carregando...</h5> :
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={this.state.images.normal}
                                        title={this.state.shot.title}
                                    />
                                    <CardContent >
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {this.state.shot.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {this.state.shot.description}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {/* {this.state.tags.map(tag => {
                                                return (
                                                    <Chip label={tag} />
                                                )
                                            })} */}
                                            {/* <Chip label={this.state.shot.tags} /> */}

                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
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