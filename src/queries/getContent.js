import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

export const GET_CONTENT_LATEST_CONTENT = gql`
  query {
    getLatestContent {
      title
      url
      image
      date
    }
  }
`;
export const useGetContentLatestContent = () => {
  const { loading, error, data } = useQuery(GET_CONTENT_LATEST_CONTENT);
  return { loading, error, data };
};
