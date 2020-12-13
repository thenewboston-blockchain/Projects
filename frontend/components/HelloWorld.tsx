import { gql, useQuery } from '@apollo/client';

const GET_GREETING = gql`
  query {
    hello
  }
`;

function Hello() {
  const { loading, data } = useQuery(GET_GREETING);
  console.log(data);
  if (loading)
    return (
      <>
        <p>Loading ...</p>
      </>
    );
  return (
    <>
      <h1>{data.hello} from my graphql endpoint</h1>
    </>
  );
}

export default Hello;
