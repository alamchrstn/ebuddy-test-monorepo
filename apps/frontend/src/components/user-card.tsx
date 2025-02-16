import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import KeyIcon from "@mui/icons-material/Key";
import { User } from "@repo/models/user";
import { formatDate, getDate } from "@frontend/utils/date";

export default function UserCard({ user }: { user: User }) {
  const {
    firstName,
    lastName,
    username,
    totalAverageWeightRatings,
    numberOfRents,
    recentlyActive,
  } = user;
  return (
    <Card
      sx={{
        backgroundColor: "secondary.light",
        color: "secondary.contrastText",
      }}
    >
      <CardContent>
        <Typography component="div" variant="h5">
          {firstName} {lastName}
        </Typography>
        <Typography variant="subtitle1" component="div">
          {username}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            marginTop: 3,
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "no-wrap",
            }}
          >
            <Chip
              size="small"
              icon={<StarIcon />}
              color="secondary"
              label={totalAverageWeightRatings}
            />
            <Chip
              size="small"
              icon={<KeyIcon />}
              color="info"
              label={numberOfRents}
            />
          </Box>
          <Box>
            <Typography variant="subtitle2">
              Last active: {formatDate(getDate(recentlyActive))}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
