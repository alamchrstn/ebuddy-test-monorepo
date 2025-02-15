import { LoginCard } from "@frontend/components/login-card";
import Box from "@mui/material/Box";

export default function LoginPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <LoginCard />
    </Box>
  );
}
