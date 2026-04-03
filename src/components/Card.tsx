import React from 'react'
import { styled } from '@mui/material/styles';

const Container = styled("div")({
    minWidth: "160px",
    cursor: "pointer"
});

const Image = styled("img")({
    width: "100%",
    borderRadius: "8px"
})

const Card = ({image, title, subtitle}: {image: string; title: string; subtitle: string}) => {
  return (
    <Container>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <span>{subtitle}</span>
    </Container>
  )
}

export default Card
