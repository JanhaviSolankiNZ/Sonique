import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Wrapper = styled("div")({
    marginBottom: "32px"
});

const Header = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px"
});

const Row = styled("div")({
    display: "flex",
    gap: "16px",
    overflowX: "auto",
    "&::-webkit-scrollbar": {
        display: "none"
    }
});

const Section = ({title, children}: {title: string, children: React.ReactNode}) => {
  return (
    <Wrapper>
        <Header>
            <Typography>{title}</Typography>
            <span>Show all</span>
        </Header>
        <Row>
            {children}
        </Row>
    </Wrapper>
  )
}

export default Section
