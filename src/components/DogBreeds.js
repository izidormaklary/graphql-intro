import {useQuery, gql} from "@apollo/client";

function Dogs({ onDogSelected }) {
    const GET_DOGS = gql`
         query GetDogs {
            dogs{
                id
                breed                
            }
         }
    `;
    const {loading, error, data} = useQuery(GET_DOGS);

    if (loading) return <p>Loading…</p>;
    if (error) return <p>Error : ( </p>;

    return(
        <select name="dog" onChange={onDogSelected}>
            {data.dogs.map(dog=>(
                <option key={dog.id} value={dog.breed}>
                    {dog.breed}
                </option>
            ))}
        </select>
    )
}

export default Dogs;
