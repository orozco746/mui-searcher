import { Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import LocationInformation from "../../components/LocationInformation";
import PaperInformation from "../../components/PaperInformation";

const Description = (props) =>{
    const {userState} = props;
    const { bio } = userState;

    return(
        <Fragment>
            <Stack sx={{justifyContent:'center'}} >
                <Typography variant="body1">
                    {bio ? bio : "Sin descripción." }
                </Typography>
            </Stack>
            <PaperInformation userState={userState} />
            <LocationInformation userState={userState} />
        </Fragment>

    )
}

export default Description;