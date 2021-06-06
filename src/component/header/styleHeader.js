import {makeStyles} from "@material-ui/core/styles";

const styleHeader = makeStyles({
    imgGoogle: {
        width: '90px',
        height: '30px',
        '@media (max-width:900px)': {
            width: '70px',
            height: '23px',
        },
    },
    boxHeaderSmall:{
        padding:'15px'
    },
    boxImgGoogle: {
        width: '13%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    boxHeader: {
        marginTop: '10px',
        width: '100%',
        height: '65px',
        alignItems: 'flex-end',
        '@media (max-width:900px)': {
            height: '44px',
        },
    },
    appbar: {
        marginTop: '1%',
    },
    iconVoice: {
        color: 'blue',
        width: '20px',
        height: "20px",
        '@media (max-width:900px)': {
            height: "17px",
        },
        '@media (max-width:600px)': {
            color: '#70757a',
            width: '25px',
            height: "25px",
        },
    },
    searchIcon: {
        color: 'blue',
        width: '20px',
        height: "20px",
        '@media (max-width:900px)': {
            height: "17px",

        },
        '@media (max-width:600px)': {
            color: '#70757a',
            width: '25px',
            height: "25px",
            marginRight:'6%'

        },
    },
    inputGroup: {
        width: '75%',
        border: '1px solid transparent',
        boxShadow: '0 2px 5px 1px rgba(64,60,67,.16)',
        borderRadius: '24px',
        height: '44px',
        '@media (max-width:900px)': {
            width: '90%',
        },
    },
    closeIcon:{
        '@media (max-width:900px)': {
            width:'18px'
        },
    },
    divider:{
        height: '25px',
        '@media (max-width:900px)': {
            height: '18px',
        },
    },
    boxInput: {
        width: '80%',
        flexBasis: '76%',
        display: 'flex',
        alignItems: 'center',
    },
    inputText: {
        width: '100%',
        color: 'rgba(36, 36, 36, 0.85) !important',
        outline: 'none',
        border: 'unset',
        fontSize: '14px',
        fontWeight:'500',
        '@media (max-width:600px)': {
            fontSize: '16px',
        },

    },
    boxImgUser:{
        width:'50px',
        height:'50px',
        '@media (max-width:600px)': {
            width:'40px',
            height:'40px',
        },

    },
    imgUser:{
        width:'100%',
        height:'100%',
        borderRadius:'100px'
    }
})
export default styleHeader