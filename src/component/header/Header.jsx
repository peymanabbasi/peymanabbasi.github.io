import React from 'react';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import Divider from "@material-ui/core/Divider";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import useTheme from "@material-ui/core/styles/useTheme";
import {ButtonBase, useMediaQuery} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import google from "../../assets/img/google.png"
import styleHeader from "./styleHeader";
import voice from '../../assets/img/512px-Google_mic.svg.png'
import Appbar from "./Appbar";
import AppsIcon from '@material-ui/icons/Apps';

const Header = () => {
    const classes = styleHeader();
    const theme = useTheme();
    const isPageSize = useMediaQuery(theme.breakpoints.down('900'));

    if (isPageSize)
    return (
        <>
                <Grid container alignItems={"center"} justify={"space-between"} className={classes.boxHeaderSmall}>
                    <MenuIcon style={{color:'#70757a'}}/>
                    <Grid item className={classes.boxImgGoogle}>
                        <img src={google} className={classes.imgGoogle} alt={''}/>
                    </Grid>
                    <Grid item className={classes.boxImgUser} container alignItems={"center"} justify={'center'}>
                        <img alt={''} className={classes.imgUser} src={'https://media-exp3.licdn.com/dms/image/C4D03AQE6BgVTYcANpg/profile-displayphoto-shrink_800_800/0/1620930557137?e=1628726400&v=beta&t=6D0lXpJyEWxoqiws-c0OWKfLo7sgwuYLhsGTcq8obsQ'}/>
                    </Grid>
                </Grid>

                <Grid container justify={"center"}>
                    <Grid item container className={classes.inputGroup} direction={"row-reverse"}>
                        <Grid item container style={{width: '20%'}} direction={"row"} alignItems={"center"} justify={"space-around"}>

                            {/*<CloseIcon color={"disabled"} className={classes.closeIcon}/>*/}
                            {/*<Divider orientation="vertical" className={classes.divider}/>*/}
                            <MicIcon src={voice} className={classes.iconVoice}/>
                            {/*<SearchIcon src={voice} className={classes.searchIcon}/>*/}
                        </Grid>
                        <Grid item className={classes.boxInput}>
                            <SearchIcon src={voice} className={classes.searchIcon}/>

                            <input type="text" id='userName'
                                   value={'peyman abbasi'}
                                   className={classes.inputText}/>
                        </Grid>
                    </Grid>

                </Grid>

            <Grid className={classes.appbar}>
            <Appbar/>
            </Grid>

        </>
    );
    else
        return (
            <>
                <Grid container className={classes.boxHeader}>
                    <Grid item className={classes.boxImgGoogle}>
                        <img src={google} className={classes.imgGoogle} alt={''}/>
                    </Grid>

                    <Grid container style={{width:'75%'}}>
                        <Grid item container className={classes.inputGroup} direction={"row-reverse"}>
                            <Grid item container style={{width: '20%'}} direction={"row"} alignItems={"center"} justify={"space-around"}>
                                <CloseIcon color={"disabled"} className={classes.closeIcon}/>
                                <Divider orientation="vertical" className={classes.divider}/>
                                <MicIcon src={voice} className={classes.iconVoice}/>
                                <SearchIcon src={voice} className={classes.searchIcon}/>
                            </Grid>
                            <Grid item className={classes.boxInput}>
                                <input type="text" id='userName'
                                       value={'peyman abbasi'}
                                       className={classes.inputText}/>
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid container style={{width:'10%'}} direction={"row-reverse"} alignItems={'center'} justify={"space-around"}>
                        <ButtonBase item className={classes.boxImgUser}>
                            <img alt={''} className={classes.imgUser} src={'https://media-exp3.licdn.com/dms/image/C4D03AQE6BgVTYcANpg/profile-displayphoto-shrink_800_800/0/1620930557137?e=1628726400&v=beta&t=6D0lXpJyEWxoqiws-c0OWKfLo7sgwuYLhsGTcq8obsQ'}/>
                        </ButtonBase>
                        <AppsIcon style={{color:'#4d5156',    cursor:'pointer'}}/>
                    </Grid>


                </Grid>

                <Grid className={classes.appbar}>
                    <Appbar/>
                </Grid>

            </>
        );

};

export default Header;