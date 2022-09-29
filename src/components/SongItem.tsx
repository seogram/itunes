import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { DEAULT_IMAGE_SIZE } from "../config";
import { SingleSong } from "../types";

const StyledSongItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export const SongItem = ({
  title,
  src,
}: {
  title: string;
  src: string;
}): JSX.Element => {
  return (
    <StyledSongItem>
      <Box
        component="img"
        sx={{
          height: DEAULT_IMAGE_SIZE,
        }}
        alt={title}
        src={src}
      />
      <div data-testid="songTitle">{title}</div>
    </StyledSongItem>
  );
};

export const songItemMaker = (songs: SingleSong[]): JSX.Element[] => {
  return songs.map((song: SingleSong) => {
    const id = song.id.attributes["im:id"];
    const title = song.title.label;
    const image60 = song["im:image"].find(
      (image) => image.attributes.height === DEAULT_IMAGE_SIZE
    )?.label;
    return (
      <Grid item xs={12} md={3} key={id} >
        <SongItem title={title} src={image60 || ""}  />
      </Grid>
    );
  });
};
