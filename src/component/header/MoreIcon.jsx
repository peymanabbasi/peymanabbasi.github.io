import React from 'react';

const MoreIcon = (props) => {
    return (
        <div className={props.className} style={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center'}}>
            <div style={{width:'3px',height:'3px',borderRadius:'50px',backgroundColor: 'rgba(0, 0, 0, 0.54)'}}></div>
            <div style={{width:'3px',height:'3px',borderRadius:'50px',backgroundColor: 'rgba(0, 0, 0, 0.54)',marginTop:'1px'}}></div>
            <div style={{width:'3px',height:'3px',borderRadius:'50px',backgroundColor: 'rgba(0, 0, 0, 0.54)',marginTop:'1px'}}></div>

        </div>
    );
};

export default MoreIcon;