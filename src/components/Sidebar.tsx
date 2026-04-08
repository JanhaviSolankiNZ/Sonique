import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IMG_URL } from '../utils/constants';

const Container = styled("div")({
    background: "#121212",
    borderRadius: "12px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    "& .innerContainer":{
        margin: "12px"
    },
});

const Wrapper = styled("div")({
    margin: "12px",
    "& p" :{}
});

const Card = styled("div")({
    background: "#242424",
    padding: "16px",
    borderRadius: "8px"
});

const PlayListWrapper = styled(List)({
   display: "flex",
   overflowY: "auto",
   flexDirection: "column"
});

const PlayList = styled(ListItem)({
    display: "flex",
    flexDirection: "row",
    borderRadius: "4px",
    padding: "10px",
    gap: "12px",
    "&:hover":{
    background: "#242424"
   }
});

const PlayListAvatar = styled("img")({
    height: "56px",
    width: "56px",
    borderRadius: "4px",
    objectFit: "cover"
});

const PlayListText = styled(ListItemText)({
    flex: 1,
    "& h6":{
        fontSize: "18px",
    },
    "& p":{
        fontWeight: "bold",
        color: "grey"
    }
});

const Sidebar = () => {
  return (
    <Container>
        <Wrapper>
        <Typography fontWeight="bold" variant="h6">Your Library</Typography>
        {/* <Card>
            <Typography variant="h6">Create your first playlist</Typography>
        </Card> */}
        <PlayListWrapper>
            <PlayList>
                <PlayListAvatar src={IMG_URL} alt="" />
                <PlayListText
                    primary={<Typography variant="subtitle1" noWrap>Liked Songs</Typography>}
                    secondary={<Typography variant="body2" color="info" noWrap>
                        PlayList
                    </Typography>}
                />
            </PlayList>
            <PlayList>
                <PlayListAvatar src={IMG_URL} alt="" />
                <PlayListText
                    primary={<Typography variant="subtitle1" noWrap>Liked Songs</Typography>}
                    secondary={<Typography variant="body2" color="info" noWrap>
                        PlayList
                    </Typography>}
                />
            </PlayList>
            <PlayList>
                <PlayListAvatar src={IMG_URL} alt="" />
                <PlayListText
                    primary={<Typography variant="subtitle1" noWrap>Liked Songs</Typography>}
                    secondary={<Typography variant="body2" color="info" noWrap>
                        PlayList
                    </Typography>}
                />
            </PlayList>
            <PlayList>
                <PlayListAvatar src={IMG_URL} alt="" />
                <PlayListText
                    primary={<Typography variant="subtitle1" noWrap>Liked Songs</Typography>}
                    secondary={<Typography variant="body2" color="info" noWrap>
                        PlayList
                    </Typography>}
                />
            </PlayList>
        </PlayListWrapper>
        </Wrapper>
    </Container>
  )
}

export default Sidebar
