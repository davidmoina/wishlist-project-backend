import "dotenv/config";
import { config } from "dotenv";
import { ConfigDictionary } from "../interfaces/config";

if (process.env.NODE_ENV === "production") {
  config({ path: ".env.production" });
} else {
  config({ path: ".env.development" });
}

const ENV: string = process.env.NODE_ENV || "development";

const CONFIG: ConfigDictionary = {
  development: {
    app: {
      PORT: Number(process.env.PORT) || 4001,
    },
    db: {
      url: "http://localhost:3000",
    },
  },
  production: {
    app: {
      PORT: Number(process.env.PORT) || 4002,
    },
    db: {
      url: "http://localhost:4000",
    },
  },
};

export default CONFIG[ENV];