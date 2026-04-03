import { Button, IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import Searchbar from "./Searchbar";
import HomeFilledIcon from '@mui/icons-material/HomeFilled';

const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100%"
});

const Left = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "12px"
});

const Right = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "12px",
    '& button': {
    fontWeight: 'bold',
    padding: '12px',
    width: '140px',
    height: '60px',
    borderRadius: '32px',
    textTransform: 'none',
    fontSize: '18px',
    color: 'grey',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  '& button:hover': {
    color: 'white',
  },
  '& .active': {
    background: 'white',
    color: 'black',
  },
  '& .active:hover':{
    color: 'grey'
  }
});

const Appbar = () => {
  return (
    <Container>
      <Left>
        <IconButton sx={{ background: "#333", color: "#fff" }} ><HomeFilledIcon/></IconButton>
        <Searchbar/>
      </Left>

      <Right>
        <Button variant="text">Sign up</Button>
        <Button variant="contained" className="active">Log in</Button>
      </Right>
    </Container>
  );
};

export default Appbar;
