import "dotenv/config";
import { createServer } from "./server";
import { ROUTE_HEALTH, ROUTE_USERS } from "./routes/user";
import healthController from "./controllers/health";
import userController from "./controllers/user";

const port = process.env.PORT || 5001;
const server = createServer();

server.use(ROUTE_HEALTH, healthController);
server.use(ROUTE_USERS, userController);

server.listen(port, () => {
  console.log(`backend running on ${port}`);
});
