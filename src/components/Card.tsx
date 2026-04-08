import React from 'react'
import { styled } from '@mui/material/styles';
import { Box, Typography, IconButton } from '@mui/material';
import { IMG_URL } from '../utils/constants';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const CardWrapper = styled("div")({
    width: "180px",
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    padding: "12px",
    flexShrink: 0,
    "&:hover":{
    background: "#242424",
    "& .playButton":{
      opacity: 1,
      transform: "translateY(-18px)"
    }
    }
});

const TopSection = styled(Box)({
  position: "relative"
});

const BottomSection = styled(Box)(() => ({
  color: "grey"
}));

const Image = styled("img")({
    width: "100%",
    aspectRatio: "1/1",
    objectFit: "cover",
    borderRadius: "8px"
});

const PlayButtonWrapper = styled("div")({
  position: "absolute",
  right: "12px",
  bottom: "0px",
  opacity: 0,
  transition: "all 0.5s ease",
  zIndex: 9,
  "& button":{
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "#1DB954",
    transition: "all 0.5s ease",
    "&:hover":{
      transform: "scale(1.05)",
      background: "#1DB954",
    }
  }
});

const Card = ({image, title}: {image: string; title: string; subtitle: string}) => {
  return (
    <CardWrapper>
      <TopSection>
        <Image src={IMG_URL} alt={title} />
        <PlayButtonWrapper className='playButton'>
          <IconButton >
            <PlayArrowIcon/>
          </IconButton>
        </PlayButtonWrapper>
      </TopSection>
      <BottomSection>
        <Typography>Artists, A, B, C, D ...Artists, A, B, C, D ....</Typography>
      </BottomSection>
    </CardWrapper>
  )
}

export default Card
