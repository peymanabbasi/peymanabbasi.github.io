import React from 'react';
import Biography from "./Biography";
import Resume from "./Resume";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import {useMediaQuery} from "@material-ui/core";


const style=makeStyles({
    myResume:{
        width:'56%',
        marginRight:'2%',
        '@media (max-width:900px)': {
            width:'100%',
            marginTop:'13px'
        },
    },
    biography:{
        width:'32%',
        marginTop:'18px',
        '@media (max-width:900px)': {
            width:'100%',
        },
    }
})

const Content = () => {
    const classes=style();
    const theme = useTheme();
    const isPageSize = useMediaQuery(theme.breakpoints.down('900'));


    if (isPageSize)
    return (
        <Grid container justify={"center"} direction={'column'}>
            <Grid item container className={classes.biography} >
                <Biography/>
            </Grid>

            <Grid item container className={classes.myResume}>
                <Resume/>
            </Grid>
        </Grid>
    );
    else
        return (
            <Grid container justify={"space-around"}>
                <Grid item container className={classes.myResume}>
                    <Resume/>
                </Grid>
                <Grid item container className={classes.biography} >
                    <Biography/>
                </Grid>

            </Grid>
        );


};

export default Content;