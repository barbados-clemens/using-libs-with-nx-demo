import {Avatar, Box, Card, Chip, Divider, IconButton, Stack, Switch, Typography} from "@mui/material";

/* eslint-disable-next-line */
export interface RLibTwoProps {
}

export function RLibTwo(props: RLibTwoProps) {
  return (
    <Card>
      <Box sx={{p: 2, display: 'flex'}}>
        <Avatar variant="rounded" src="avatar1.jpg"/>
        <Stack spacing={0.5}>
          <Typography fontWeight={700}>Michael Scott</Typography>
          <Typography variant="body2" color="text.secondary">
            Scranton, PA
          </Typography>
        </Stack>
        <IconButton>
          click me
        </IconButton>
      </Box>
      <Divider/>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{px: 2, py: 1, bgcolor: 'background.default'}}
      >
        <Switch/>
      </Stack>
    </Card>

  );
}

export default RLibTwo;
