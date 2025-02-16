import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

export default function UserCardSkeleton() {
  const skeletonColor = "grey.400";
  return (
    <Card
      sx={{
        backgroundColor: "secondary.light",
        color: "secondary.contrastText",
      }}
    >
      <CardContent>
        <Skeleton
          variant="text"
          sx={{ fontSize: "1.5rem", bgcolor: skeletonColor }}
        />
        <Skeleton
          variant="text"
          sx={{ fontSize: "1rem", bgcolor: skeletonColor }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            marginTop: 3,
          }}
        >
          <Skeleton
            variant="rectangular"
            width={200}
            height={24}
            sx={{ bgcolor: skeletonColor }}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem", bgcolor: skeletonColor }}
            width={100}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
