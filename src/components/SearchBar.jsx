import React from "react";
import TextField from "@mui/material/TextField";

const SearchBar = ({ onSearch }) => {
    return (
        <div className="SearchBar w-100 relative">
            <TextField
                id="search-bar"
                variant="outlined"
                fullWidth
                label="Search"
                onChange={(e) => onSearch(e.target.value)} // Call onSearch with the input value
                slotProps={{
                    input: {
                        style: {
                            backgroundColor: "transparent",
                            color: "white",
                            caretColor: "white",
                            paddingLeft: "35px",
                        },
                    },
                    label: {
                        style: { color: "white" },
                    },
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        backgroundColor: "#D84040",
                        borderRadius: "25px",
                        paddingLeft: "15px",
                        "& fieldset": {
                            borderColor: "#F59E0B",
                            borderWidth: "2px",
                        },
                        "&:hover fieldset": {
                            borderColor: "#F472B6",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#F472B6",
                        },
                        "& input": {
                            color: "#F3F4F6",
                            caretColor: "#F3F4F6",
                        },
                    },
                    "& .MuiInputAdornment-root": {
                        color: "#F3F4F6",
                    },
                }}
            />
        </div>
    );
};

export default SearchBar;