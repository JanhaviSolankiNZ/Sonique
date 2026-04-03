import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const StyledSearchbar = styled(TextField)(() => ({
  background: "grey",
  borderRadius: "32px",
  "& input": {
    fontSize: "18px",
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#121212",
    borderRadius: "32px",
    border: "none",
    "& fieldset": {
      border: "1px solid #555 !important",
    },

    "&:hover fieldset": {
      borderColor: "#888",
    },

    '&.Mui-focused fieldset': {
      borderColor: '#1DB954',
      boxShadow: '0 0 0 2px rgba(29,185,84,0.3)',
    }
  },

  "& .MuiInputBase-input": {
    color: "#fff",
  },
  "& .searchIcon":{
    color: "#fff"
  }
}));

const Searchbar = () => {
  return (
    <StyledSearchbar
      variant="outlined"
      size="small"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start" className="searchIcon">
              <SearchIcon />
            </InputAdornment>
          ),
        },
        htmlInput: { "aria-label": "search music" },
      }}
      placeholder="What do you want to play?"
    />
  );
};

export default Searchbar;
