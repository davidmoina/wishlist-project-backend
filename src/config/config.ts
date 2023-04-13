import dotenv from "dotenv";
import { ConfigDictionary } from "../interfaces/config";

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
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