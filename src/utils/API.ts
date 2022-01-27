import { GraphQLClient } from 'graphql-request'
export const GRAPHCMS = new GraphQLClient(`${process.env.NEXT_PUBLIC_BACKEND_API}`);