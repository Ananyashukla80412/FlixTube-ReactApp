import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material"


const SearchBar = () => {
    const [searchTerm, setSearchTerm ]= useState('');
    const navigate = useNavigate();

    // const handleSubmit = (e) => {
    //     console.log(e);
    //     console.log("SDsdsds");
        
    //     e.preventDeafult();

    //     if(searchTerm){
    //         navigate(`/search/${searchTerm}`);
    //         console.log(searchTerm);
    //         setSearchTerm('');
    //     }
    // }

    return (
        <>
            <Paper
                component="form"
                onSubmit = {(e) => {
                    e.preventDefault();
                    if(searchTerm){
                        navigate(`/search/${searchTerm}`);
                        console.log(searchTerm);
                        setSearchTerm('');
                    }
                    }}
                sx={{
                    borderRadius: 20,
                    border: '1px solid #e3e3e3',
                    pl: 2,
                    mr: { sm: 5 },
                    boxShadow: 'none'
                }}
            >
                <input
                    className='search-bar'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)
                        }
                />
                <IconButton type="submit" sx={{ p: "10px", color: 'red' }}>
                    <Search />
                </IconButton>
            </Paper>
        </>
    )
}

export default SearchBar
