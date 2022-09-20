import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import React from "react";
import { useState } from "react";

const Searcher =(props) => {

    const {setInputUser} = props;

    const[ valueInput,setValueInput] = useState('');

    const onSearchValueChange = (event) =>{
        setValueInput(event.target.value)
    }

    const handleSubmit = () =>{
        setInputUser(valueInput)
        console.log(valueInput)
    }

    return(
        <Stack 
            direction='row'
            sx={{
            marginTop: '50px',
            width: '80%'
        }}>
            <TextField 
                id="outlined-basic" 
                label="GitHub User"
                placeholder='Search Username'
                size='small'
                variant="outlined"
                value = {valueInput}
                onChange={onSearchValueChange}
                sx={{
                    width: '60%',
                }}
            />
            <IconButton 
                onClick={handleSubmit}
                sx={{
                left: '-45px',
            }}>
                <SearchIcon />
            </IconButton>
        </Stack>

    )

}

export default Searcher;