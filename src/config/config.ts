import dotenv from "dotenv";
import { config } from "dotenv";
import { ConfigDictionary } from "../interfaces/config";

dotenv.config();

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
      uri: String(process.env.MONGODB_URI),
    },
  },
  production: {
    app: {
      PORT: Number(process.env.PORT) || 4002,
    },
    db: {
      uri: String(process.env.MONGODB_URI),
    },
  },
};

console.log(process.env.MONGODB_URI);


export default CONFIG[ENV];