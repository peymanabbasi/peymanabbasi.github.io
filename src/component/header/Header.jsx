import React from 'react';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import Divider from "@material-ui/core/Divider";

import google from "../../assets/img/google.png"
import styleHeader from "./styleHeader";
import voice from '../../assets/img/512px-Google_mic.svg.png'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Appbar from "./Appbar";

const Header = () => {
    const classes = styleHeader()
    return (
        <>
            <Grid container className={classes.boxHeader}>
                <Grid item className={classes.boxImgGoogle}>
                    <img src={google} className={classes.imgGoogle}/>
                </Grid>

                <Grid item container className={classes.inputGroup} direction={"row-reverse"}>
                    <Grid item container style={{width: '20%'}} direction={"row"} alignItems={"center"} justify={"space-around"}>
                        <CloseIcon color={"disabled"}/>
                        <Divider orientation="vertical" style={{height: '25px'}}/>
                        <MicIcon src={voice} className={classes.iconVoice}/>
                        <SearchIcon src={voice} className={classes.searchIcon}/>
                    </Grid>
                    <Grid item className={classes.boxInput}>
                        <input type="text" id='userName'
                               value={'peyman abbasi'}
                               className={classes.inputText}/>
                    </Grid>
                </Grid>

                <Grid item>

                </Grid>

            </Grid>

            <Grid className={classes.appbar}>
            <Appbar/>
            </Grid>

        </>
    );
};

export default Header;