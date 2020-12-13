import { gql, useQuery } from '@apollo/client';

const GET_GREETING = gql`
  query {
    profile {
      id
      name
    }
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
      {data.profile.map((profile) => (
        <li key={profile.id}>{profile.name}</li>
      ))}
    </>
  );
}

export default Hello;
