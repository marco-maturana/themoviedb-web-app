import server from "@core/server";
import { Request, Response } from "express";
import morgan from "morgan";

if (process.env.NODE_ENV !== "test") server.express.use(morgan("common"));

server.config({ envConfig: { path: "../.env" } });

server.express.get("/api", (_req: Request, res: Response) => {
  return res.json({ messagee: "ok" });
});

export default server;
