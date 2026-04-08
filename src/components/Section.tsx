import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Wrapper = styled("div")({
    marginBottom: "32px"
});

const Header = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px",
    "& .showAll":{
    color: "grey",
    fontWeight: "bolder",
    fontSize: "14px",
    }
});

const Row = styled("div")({
    display: "flex",
    gap: "16px",
    overflowX: "auto",
    "&::-webkit-scrollbar": {
        display: "none"
    }
});

const Title = styled(Typography)({
    fontWeight: "bold",
    fontSize: "30px"
});

const Section = ({title, children}: {title: string, children: React.ReactNode}) => {
  return (
    <Wrapper>
        <Header>
            <Title>{title}</Title>
            <Typography className='showAll'>Show all</Typography>
        </Header>
        <Row>
            {children}
        </Row>
    </Wrapper>
  )
}

export default Section
