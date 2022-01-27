import { GRAPHCMS } from "../API";
import { gql } from 'graphql-request'
export const ContactUsMutation = async (values: { name: string, email: string, message: string }) => {
    const mutation = gql`
    mutation CreateContact($name:String!,$message:String!,$email:String!) {
        createContact(data:{name:$name,email:$email,message:$message}){
          name
          email
          message
        }
      }
    `
    return GRAPHCMS.request(
        mutation,
        values
    )
};
