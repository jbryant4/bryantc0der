import React from 'react';
import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100%',
        padding: '15px 0 75px 0',
        minWidth: 375,
        maxWidth: 700,
        color: '#dbb95f',
        backgroundColor:'#537636'
    },
    image: {
        minWidth: 150,
        maxWidth: 300,
        // float: 'left',
        padding: '10px 5px'
    },
    innerFlex: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerFlexImg: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    p: {
        maxWidth: 350
    }
});



function About({ aboutInfo }) {
    const { image,about, body,family, hobbies } = aboutInfo;
    const classes = useStyles();


    return (
        
        <div className={classes.container}>
            <h1>Hi, I'm Joseph</h1>
            
            <div className={classes.innerFlex}>
                <img src={image[0]} alt='wife' className={classes.image} />
                <div>
                <p className={classes.p}>{about}</p>
                <p className={classes.p}>{body}</p>
                </div>
                <p className={classes.p}>{family}</p>
                <img src={image[1]} alt='family' className={classes.image} />
            </div>
            
            <h2>Other Hobbies:</h2>
            <div>
                <div className={classes.innerFlexImg}>
                    {hobbies.map(hobby => (
                        <img key={hobby} src={hobby} alt='hobby' className={classes.image} />
                    ))}
                </div>
            </div>
        </div>

    )
}


export default About