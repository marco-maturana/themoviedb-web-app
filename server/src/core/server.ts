import { RouteExplorer } from "@marcomaturana/express-decorators";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import http from "http";
import path from "path";

export interface  ServerOptions {
  envConfig?: dotenv.DotenvConfigOptions;
  controllersPath?: string;
}

export class Server {
  private configOptions: ServerOptions;
  private configured: Boolean;
  private httpServer: http.Server;

  readonly express: express.Express;

  constructor () {
    this.express = express();
  }

  private middlewares () {
    this.express.use(compression());
    this.express.use(cors());
    this.express.use(helmet());

    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(bodyParser.json());
  }

  private static (): void {
    const publicPath = path.join(__dirname, "../../../public");

    this.express.use(express.static(publicPath));
    this.express.get("*", (_req: express.Request, res: express.Response) => res.sendFile(path.join(publicPath, "index.html")));
  }

  private async router (): Promise<void> {
    const routeExplorer = new RouteExplorer({
      server: this.express,
      controllersPath: this.configOptions.controllersPath
    });

    await routeExplorer.loadControllers();
  }

  config (options?: ServerOptions): void {
    options = options || { };
    options.envConfig = options.envConfig || { path: "./.env" };

    this.configOptions = options;

    const envResult = dotenv.config(options.envConfig);

    if (envResult.error) throw new Error("Failed to load .env file!");

    this.configured = true;
  }

  async start () {
    if (!this.configured) throw new Error("Configure the server before start it!");

    this.middlewares();

    await this.router();

    this.static();

    this.httpServer = this.express.listen(process.env.APP_PORT, () => {
      console.log(`Server is running on the port ${process.env.APP_PORT}!`);
    });
  }

  public stop () {
    this.httpServer.close();
  }
}

const server = new Server();

export { server };

export default server;
