import {useQuery, gql} from "@apollo/client";

function DogPhoto({ breed }) {
    const GET_DOG_PHOTO = gql`
        query Dog($breed: String!) {
            dog(breed: $breed) {
                id
                displayImage
            }
        }
    `;
    const {loading, error, data} = useQuery(GET_DOG_PHOTO,{
        variables: { breed }
    });

    if (loading) return <p>Loading…</p>;
    if (error) return <p>Error : ( </p>;

    return(
        <img src={data.dog.displayImage} style={{ height: 100, width: 100 }}/>
    )
}

export default DogPhoto;
