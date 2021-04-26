import {makeStyles} from "@material-ui/core/styles";

const styleHeader = makeStyles({
    imgGoogle: {
        width: '90px',
        height: '30px'
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
    },
    appbar: {
        marginTop: '10px',
    },
    iconVoice: {
        color: 'blue',

        width: '20px',
        height: "20px"
    },
    searchIcon: {
        color: 'blue',
        width: '20px',
        height: "20px"
    },
    inputGroup: {
        width: '50%',
        border: '1px solid transparent',
        boxShadow: '0 2px 5px 1px rgba(64,60,67,.16)',
        borderRadius: '24px',
        height: '44px'
    },
    boxInput: {
        width: '80%',
        flexBasis: '76%',
        display: 'flex',
        alignItems: 'center'
    },
    inputText: {
        width: '100%',
        color: 'rgba(36, 36, 36, 0.85) !important',
        outline: 'none',
        border: 'unset',
        fontSize: '14px',
        '@media (max-width:900px)': {
            fontSize: '10px',
        },
        '@media (max-width:600px)': {
            fontSize: '12px',
        },

    },
})
export default styleHeader