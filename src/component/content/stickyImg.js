import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Sticky from 'react-sticky-el';
import clsx from "clsx";

const style=makeStyles({
    sticky: {
        zIndex: 20,
        width: '100%',
        boxShadow: '0 2px 6px 0 rgba(222, 222, 222, 0.5)',
        borderRadius:'30px'
    },
    list: {
        maxWidth: '100%',
        overflow: 'auto',
        background: '#fff',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',

    },
    categoryImg: {
        objectFit:'cover',
        width: '16%',
        height: '100px',
        padding:'2px',
        '@media (max-width:600px)': {
            width:'33%',
        },
    }
})

const picturePeyman=[
    {urlPic:'https://media-exp3.licdn.com/dms/image/C4D03AQE6BgVTYcANpg/profile-displayphoto-shrink_800_800/0/1620930557137?e=1628726400&v=beta&t=6D0lXpJyEWxoqiws-c0OWKfLo7sgwuYLhsGTcq8obsQ'},
    {urlPic:'https://avatars.githubusercontent.com/u/38778926?s=400&u=15d8c7f8d83805a604ced1a7215a47e8265bf061&v=4'},
    {urlPic:'https://thumbor.jjcloud.ir/k4fziGjzMoAUcP1-wy41VdNK-6o=/256x256/filters:strip_exif():format(jpeg)/https://storage.jjcloud.ir/other/js_avatar_image_blob/6/4/5/412625-64549a146ac7d7c777b7d3a5ce0bd5b5fd84a109/1_main.png'},
    {urlPic:'https://avatars.githubusercontent.com/u/38778926?s=400&u=15d8c7f8d83805a604ced1a7215a47e8265bf061&v=4'},
    {urlPic:'https://avatars.githubusercontent.com/u/38778926?s=400&u=15d8c7f8d83805a604ced1a7215a47e8265bf061&v=4'},
    {urlPic:'https://thumbor.jjcloud.ir/k4fziGjzMoAUcP1-wy41VdNK-6o=/256x256/filters:strip_exif():format(jpeg)/https://storage.jjcloud.ir/other/js_avatar_image_blob/6/4/5/412625-64549a146ac7d7c777b7d3a5ce0bd5b5fd84a109/1_main.png'}
]

const StickyImg = () => {
    const classes=style()
    return (
        <Sticky stickyClassName={classes.sticky}>
            <List className={clsx(classes.list)}>
                {picturePeyman.map((img, index) => (
                        <img className={classes.categoryImg} src={img.urlPic}
                             alt={'images'}/>

                ))}
            </List>
        </Sticky>
    );
};

export default StickyImg;