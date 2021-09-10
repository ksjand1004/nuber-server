import cors from "cors";
import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";

class App {
  public app: GraphQLServer;
  // App 클래스를 새로 시작할 때마다 호출되는 함수(가장처음)
  constructor() {
    this.app = new GraphQLServer({});
    this.middlewares();
  }
  // express : graphql-yoga의 서버 부분 / node.js에 서버를 만드는 프레임워크
  private middlewares = (): void => {
    this.app.express.use(cors());
    this.app.express.use(logger("dev"));
    this.app.express.use(helmet());
  };
}

export default new App().app;
