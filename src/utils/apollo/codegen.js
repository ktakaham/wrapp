module.exports = {
  schema: {
    [process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT]: {
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET_KEY,
      },
    },
  },
  documents: [
    // "src/utils/apollo/graphql/fragment/*.graphql",
    "src/utils/apollo/graphql/query/*.graphql",
    // "src/utils/apollo/graphql/mutation/*.graphql",
  ],
  generates: {
    "src/utils/apollo/generated.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        withHooks: true,
        scalars: {
          uuid: "string",
        },
        namingConvention: {
          typeNames: "pascal-case#pascalCase",
          enumValues: "upper-case#upperCase",
        },
      },
    },
  },
};
