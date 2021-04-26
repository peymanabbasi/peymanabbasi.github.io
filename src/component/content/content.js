import React from 'react';
import Biography from "./Biography";
import Resume from "./Resume";
import Grid from "@material-ui/core/Grid";

const Content = () => {
    return (
        <Grid container>
            <Grid item container xs={8}>
                <Resume/>
            </Grid>
            <Grid item container xs={4}>
                <Biography/>
            </Grid>

        </Grid>
    );
};

export default Content;