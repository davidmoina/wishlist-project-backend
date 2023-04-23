export interface AppConfig {
  PORT: number | undefined,
}

export interface DbConfig {
  uri: string;
}

export interface Config {
  app: AppConfig;
  db: DbConfig;
}

export interface ConfigDictionary {
  [key: string]: Config;
}