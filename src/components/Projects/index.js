import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        color: '#537636',
        backgroundColor: '#422e13'
    },
    media: {
        height: 350,
    },
    flex: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%',
        padding: '20px 0 100px 0',
        width: '100%',
        textAlign: "center",
        color: '#537636',
        backgroundColor:'#878532'
    },
    flexInner: {
        display: 'flex',
        // flexWrap: '',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '100%',
        width: '100%',
    },
    arrow: {
        fontSize: "50px",
        color: '#537636',
        
    },
    btn: {
        color: '#422e13',
        backgroundColor: '#537636',
        fontWeight: 'bold'
    },
    icon: {
        fontSize: 35
    },
    smldivs: {
        width: '50%'
    },
    p: {
        fontWeight:'bold',
        fontSize: 15
    }
});

function Projects({ projects, currentProject, setCurrentProject }) {
    const classes = useStyles();

    const projectIndex = () => {
        return projects.findIndex(project => project === currentProject)
    }


    return (
        <div className={classes.flex}>
            <div>
                <h1>Project: {projectIndex() + 1}/{projects.length} </h1>
            </div>
            <div className={classes.flexInner}>
                <IconButton onClick={() => setCurrentProject(projects[projectIndex() - 1] || currentProject)}   aria-label="add to shopping cart">
                    <ArrowBackIosIcon className={classes.arrow}/>
                </IconButton >
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={currentProject.image}
                            title={currentProject.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {currentProject.title}
                            </Typography>
                            <Typography variant="body2" component="p" className={classes.p}>
                                {currentProject.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.flexInner}>
                        <Button size="small" variant='contained' className={classes.btn} onClick={() => window.open(currentProject.repo, '_blank')}>
                            Repo
                        </Button>
                        <Button size="small" variant='contained' className={classes.btn} onClick={() => window.open(currentProject.app, '_blank')}>
                            App
                        </Button>
                    </CardActions>
                </Card>
                <IconButton onClick={() => setCurrentProject(projects[projectIndex() + 1] || currentProject)}  aria-label="add to shopping cart">
                    <ArrowForwardIosIcon className={classes.arrow} />
                </IconButton>
            </div>
            <div className={classes.smldivs}>
                <h2>Usage</h2>
                <div className={classes.flexInner}>
                    {currentProject.usage.map(code => (<FontAwesomeIcon key={code} className={classes.icon} icon={['fab', code]} />))}
                </div>
            </div>
        </div >
    )
}


export default Projects