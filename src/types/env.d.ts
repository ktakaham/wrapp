declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_ENV: "production" | "develop" | "local";
  }
}
