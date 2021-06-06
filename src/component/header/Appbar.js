import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {AppBar} from "@material-ui/core";
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import ArtTrackOutlinedIcon from '@material-ui/icons/ArtTrackOutlined';

import '../../assets/css/styleTab.css';
import MoreIcon from './MoreIcon'
import Content from "../content/content";
const Appbar = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

Appbar.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    appbar:{
        borderBottom:'1px solid #ebebeb',
        boxShadow:"unset"
    },
    wrapper:{
        display:'flex',
        flexDirection:"row",
    },
    tabRoot:{
        minHeight:'48px !important',
        minWidth:'max-content',
        textTransform:'none',
        '@media (max-width:900px)': {
           padding:'6px 3px'
        },
    },
    tabSelected:{
        color:'#1a73e8 !important',
        '@media (max-width:600px)': {
            color:'#202124 !important',
        },
    },
    tabs:{
        marginLeft:'15%',
        '@media (max-width:900px)': {
            marginLeft:'5%',
        },
    },
    iconTab:{
        marginRight:'5px',
        width:'16px',
        height:'16px',
        '@media (max-width:900px)': {
            width:'0px',
            height:'0px',
        },
    }
}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" className={classes.appbar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="standard"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    classes={{root:classes.tabs}}
                >
                    <Tab classes={{selected:classes.tabSelected,wrapper:classes.wrapper,root:classes.tabRoot}} label="All" icon={<svg className={classes.iconTab}  width={'16px'} height={'16px'} focusable="false" viewBox="0 0 24 24"><path fill="#34a853" d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"></path><path fill="#ea4335" d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"></path><path fill="#fbbc04" d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"></path><path fill="#4285f4" d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"></path></svg>} {...a11yProps(0)} />
                    <Tab classes={{selected:classes.tabSelected,wrapper:classes.wrapper,root:classes.tabRoot}} label="Images" {...a11yProps(1)} icon={<CropOriginalIcon className={classes.iconTab}/>} />
                    <Tab classes={{selected:classes.tabSelected,wrapper:classes.wrapper,root:classes.tabRoot}} label="Video" {...a11yProps(2)} icon={<OndemandVideoOutlinedIcon className={classes.iconTab}/>}/>
                    <Tab classes={{selected:classes.tabSelected,wrapper:classes.wrapper,root:classes.tabRoot}} label="Book" {...a11yProps(3)} icon={<BookOutlinedIcon className={classes.iconTab}/>} />
                    <Tab classes={{selected:classes.tabSelected,wrapper:classes.wrapper,root:classes.tabRoot}} label="News" {...a11yProps(4)} icon={<ArtTrackOutlinedIcon className={classes.iconTab}/>}/>
                    <Tab classes={{selected:classes.tabSelected,wrapper:classes.wrapper,root:classes.tabRoot}} label="More" {...a11yProps(5)} icon={<MoreIcon className={classes.iconTab}/>}/>
                </Tabs>
            </AppBar>
            <Appbar value={value} index={0}>
                <Content/>
            </Appbar>
            <Appbar value={value} index={1}>

            </Appbar>
            <Appbar value={value} index={2}>

            </Appbar>
            <Appbar value={value} index={3}>

            </Appbar>
            <Appbar value={value} index={4}>

            </Appbar>
            <Appbar value={value} index={5}>

            </Appbar>
            <Appbar value={value} index={6}>

            </Appbar>
        </div>
    );
};

