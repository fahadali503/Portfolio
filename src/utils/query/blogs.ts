import { GRAPHCMS } from "../API";
import { gql } from 'graphql-request';
;


export async function getAllBlogs() {
  const query = gql`
   query {
            blogs {
              id
              body {
                html
              }
              createdAt
              title
              categories {
                id
                title
              }
              slug
              coverImage {
                id
                url
              }
              readtime
            }
          }
  `
  return await GRAPHCMS.request(
    query
  )
}


export const GetSingleBlog = async (id: string) => {
  const query = gql`
    query GetBlog($id:ID!){
      blog(where:{id:$id}){
        id
    body {
      html
    }
    createdAt
    isFeatured
    categories {
      id
      title
    }
    slug
    coverImage {
      id
      url
    }
    readtime
      }
    }
  `;
  return await GRAPHCMS.request(query, { id });
}