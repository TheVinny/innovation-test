import Server from "@shared/infra/http/Server";
import "dotenv/config";

new Server().start(process.env.BACKEND_PORT || 2222);
