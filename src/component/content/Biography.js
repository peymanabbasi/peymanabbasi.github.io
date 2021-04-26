import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {GridList, GridListTile, GridListTileBar, IconButton} from "@material-ui/core";

const style = makeStyles({
    root: {
        width: '100%',
        paddingLeft: '20%',
        paddingRight: '20%'
    },
    gridList: {
        width: 500,
        height: 1100,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
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
}
})

const Biography = () => {
    const classes = style()

    var tileData = [
        {
            img:'https://media-exp1.licdn.com/dms/image/C4D03AQGRQMvHEgkrug/profile-displayphoto-shrink_800_800/0/1618469327660?e=1625097600&v=beta&t=XJoRJ70YpzNsy2Kkh2UmIFNc0GEbie2NDYTiifjd2jA',
            title:'test',
            featured:true

        },


        {
            img:'https://media-exp1.licdn.com/dms/image/C4D03AQGRQMvHEgkrug/profile-displayphoto-shrink_800_800/0/1618469327660?e=1625097600&v=beta&t=XJoRJ70YpzNsy2Kkh2UmIFNc0GEbie2NDYTiifjd2jA',
            title:'test'
        },
        {
            img:'https://avatars.githubusercontent.com/u/38778926?s=400&u=15d8c7f8d83805a604ced1a7215a47e8265bf061&v=4',
            title:'test'
        },
        {
            img:'https://thumbor.jjcloud.ir/k4fziGjzMoAUcP1-wy41VdNK-6o=/256x256/filters:strip_exif():format(jpeg)/https://storage.jjcloud.ir/other/js_avatar_image_blob/6/4/5/412625-64549a146ac7d7c777b7d3a5ce0bd5b5fd84a109/1_main.png',
            title:'test',
        }
    ]
    return (
        <div className={classes.root}>
            <GridList cellHeight={200} spacing={1} className={classes.gridList}>
                {tileData.map((tile) => (
                    // <GridListTile key={tile.img} ccols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                    //     <img src={tile.img} alt={tile.title}/>
                    // </GridListTile>

                    <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                        <img src={tile.img} alt={tile.title} className={classes.imgs}/>
                    </GridListTile>
                ))}
            </GridList></div>
    );
};

export default Biography;