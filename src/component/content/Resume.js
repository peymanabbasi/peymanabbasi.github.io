import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Link} from "@material-ui/core";

const style = makeStyles({
    root:{
        width:'100%',
        paddingLeft:'20%'
    },
    searchResultCount:{
        fontWeight:'100',
        fontSize:'14px',
        color:'#70757a',
        lineHeight:'43px',
        fontFamily:'Google Sans,arial,sans-serif'
    },
    searchResultFirstLink:{
        fontWeight:'100',
        fontSize:'14px',
        color:'#202124',
        fontStyle:'normal',
        paddingTop:'1px',
        fontFamily:'Google Sans,arial,sans-serif'
    },
    description:{
        fontWeight:'100',
        fontSize:'14px',
        color:'#4d5156',
        fontStyle:'normal',
        paddingTop:'1px',
        fontFamily:'arial,sans-serif',
        lineHeight:'1.7'

    },
    firstLink:{
        cursor:'pointer',
        fontSize:'20px',
        paddingTop:'1px'
    }


})
const Resume = () => {
    const classes = style()

    return (
        <div className={classes.root}>

            <Typography className={classes.searchResultCount}>
                About 789,000,000 results (1.14 seconds)
            </Typography>

            <Typography className={classes.searchResultFirstLink}>
                https://en.wikipedia.org › wiki › Peyman_abbasi_sardar

            </Typography>

            <Link className={classes.firstLink}>
                Peyman Abbasi - Wikipedia
            </Link>

            <Typography className={classes.description}>

                <strong>Peyman Abbasi </strong>
                Software engineer,
                Java <strong>developer </strong>with +3 years experience.
                Android and backend developer.
                Familiar with linux,front-end and devops technologies.
                <br/>
                <strong>His focus </strong> right now is on backend and using cool tools and technologies for enterprise
                projects.
            </Typography>

        </div>
    );
};

export default Resume;