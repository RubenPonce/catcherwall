import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_CHANNELS = gql`
  query Query {
    channels {
      name
      socials {
        url
        name
      }
      status {
        live {
          isLive
        }
      }
      content {
        title
        url
        image
        date
      }
    }
  }
`;

export const useGetChannels = () => {
  const { loading, error, data } = useQuery(GET_CHANNELS, {
    fetchPolicy: "cache-and-network",
  });
  return { loading, error, data };
};
