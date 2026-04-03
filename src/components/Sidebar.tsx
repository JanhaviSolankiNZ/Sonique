import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled("div")({
    background: "#121212",
    bordeRadius: "12px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    borderRadius: "12px",
    "& .innerContainer":{
        margin: "12px"
    },
});

const Card = styled("div")({
    background: "#242424",
    padding: "16px",
    borderRadius: "8px"
});

const Sidebar = () => {
  return (
    <Container>
        <div className="innerContainer">
        <Typography variant="h6">Your Library</Typography>
        <Card>
            <Typography variant="h6">Create your first playlist</Typography>
        </Card>
        </div>
    </Container>
  )
}

export default Sidebar
