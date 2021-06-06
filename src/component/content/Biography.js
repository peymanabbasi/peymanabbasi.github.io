import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Typography, useMediaQuery} from "@material-ui/core";
import ShareIcon from '@material-ui/icons/Share';
import Divider from "@material-ui/core/Divider";
import StickyImg from "./stickyImg";
import useTheme from "@material-ui/core/styles/useTheme";

const style = makeStyles({
    root: {
        width: '100%',
        paddingLeft: '20%',
        paddingRight: '20%'
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    imgs: {
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },
    firstImg: {
        width: '100%',
        height: '202px',
        objectFit: 'cover',
        borderRadius: '5px',
        '@media (max-width:900px)': {
            height: '122px',
        },
    },
    rowFirstImg: {
        width: '29.5%', marginRight: '.5%',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '5px',
        '@media (max-width:900px)': {
            height: '61px',
        },
    },
    rowFirstImgCenter: {
        width: '39.5%', marginRight: '.5%',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '5px',
        '@media (max-width:900px)': {
            height: '61px',
        },
    },
    rowTwoImg: {
        width: '44.5%',
        marginRight: '.5%',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '5px',
        '@media (max-width:900px)': {
            height: '61px',
        },
    },
    rowTwoImgTwo: {
        width: '54.5%',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '5px',
        '@media (max-width:900px)': {
            height: '61px',
        },
    },
    header: {
        padding: '0 6% 10px 6%',
        height: 'max-content',
        '@media (max-width:900px)': {
            padding: '0 4%',
        },
    },
    titleName: {
        fontSize: '30px',
        color: '#222',
        fontFamily: 'Google Sans,arial,sans-serif !important',
        '@media (max-width:900px)': {
            fontSize: '20px',
        },
    },
    shareIcon: {
        color: '#70757a',
        '@media (max-width:900px)': {
            width: '20px'
        },
    },
    descTitleName: {
        color: '#70757a',
        fontFamily: 'arial,sans-serif',
        fontSize: '14px',
        margin: '4px 0'
    },
    description: {
        padding: '10px 6%',
        '@media (max-width:900px)': {
            padding: '10px 4%',

        }
    },

    descBio: {
        color: '#4d5156',
        fontSize: '14px',
        fontFamily: 'arial,sans-serif',
    },
    born: {
        fontSize: '14px',
        fontFamily: 'arial,sans-serif',
        color: '#202124',
        marginTop: '10px'
    },
    quotes: {
        marginTop: '24px',
        color: '#222',
        lineHeight: '1.3',
        fontSize: '20px',
        fontFamily: 'Google Sans,arial,sans-serif !important',

    },
    quotesText: {
        fontSize: '14px',
        color: '#4d5156',
        fontFamily: 'arial,sans-serif',
        fontStyle: 'italic',
        marginTop: '15px'
    }
})

const Biography = () => {
    const classes = style();
    const theme = useTheme();
    const isPageSize = useMediaQuery(theme.breakpoints.down('900'));

    return (
        <Grid container style={{border: '1px solid #dfe1e5', borderRadius: '8px', height: 'max-content'}}>
            {isPageSize ? <StickyImg/>
                : <>
                    <Grid item style={{width: '34.5%', marginRight: '.5%', height: 'max-content'}}>
                        <img alt={''} className={classes.firstImg}
                             src={'https://avatars.githubusercontent.com/u/38778926?s=400&u=15d8c7f8d83805a604ced1a7215a47e8265bf061&v=4'}/>
                    </Grid>
                    <Grid container item style={{width: '65%', height: 'max-content'}} direction={"column"}>
                        <Grid container>
                            <img className={classes.rowFirstImg}
                                 src={'https://avatars.githubusercontent.com/u/38778926?s=400&u=15d8c7f8d83805a604ced1a7215a47e8265bf061&v=4'}
                                 alt={'peymanabbasi'}/>
                            <img alt={''} className={classes.rowFirstImgCenter}
                                 src={'https://thumbor.jjcloud.ir/k4fziGjzMoAUcP1-wy41VdNK-6o=/256x256/filters:strip_exif():format(jpeg)/https://storage.jjcloud.ir/other/js_avatar_image_blob/6/4/5/412625-64549a146ac7d7c777b7d3a5ce0bd5b5fd84a109/1_main.png'}/>
                            <img alt={''} className={classes.rowFirstImg}
                                 src={'https://avatars.githubusercontent.com/u/38778926?s=400&u=15d8c7f8d83805a604ced1a7215a47e8265bf061&v=4'}/>
                        </Grid>

                        <Grid container style={{paddingTop: '2px'}}>
                            <img alt={''} className={classes.rowTwoImg}
                                 src={'https://avatars.githubusercontent.com/u/38778926?s=400&u=15d8c7f8d83805a604ced1a7215a47e8265bf061&v=4'}/>
                            <img alt={''} className={classes.rowTwoImgTwo}
                                 src={'https://thumbor.jjcloud.ir/k4fziGjzMoAUcP1-wy41VdNK-6o=/256x256/filters:strip_exif():format(jpeg)/https://storage.jjcloud.ir/other/js_avatar_image_blob/6/4/5/412625-64549a146ac7d7c777b7d3a5ce0bd5b5fd84a109/1_main.png'}/>
                        </Grid>
                    </Grid>
                </>


            }


            <Grid container direction={"column"} className={classes.header}>
                <Grid container justify={"space-between"} alignItems={"center"}>
                    <Typography className={classes.titleName}>Peyman Abbasi</Typography>
                    <ShareIcon className={classes.shareIcon}/>
                </Grid>
                <Typography className={classes.descTitleName}>Iranian software engineer</Typography>
            </Grid>


            <Divider style={{width: '100%'}}/>

            <Grid container direction={"column"} className={classes.description}>
                <Typography className={classes.descBio}>
                    Peyman Abbasi is a software engineer currently working as a DevOps engineer and Programmer in
                    advance level.
                </Typography>

                <Typography className={classes.born}>
                    <span
                        style={{fontWeight: 'bold', color: '202124', fontFamily: 'arial,sans-serif'}}>Born:</span> July
                    16, 1994, Sabzevar, Khorasan, Iran
                </Typography>

                <Typography className={classes.quotes}>
                    Quotes
                </Typography>
                <Typography className={classes.quotesText}>
                    Design is not just what it looks like and feels like. Design is how it works.
                </Typography>
            </Grid>

        </Grid>
    );
}
;

export default Biography;