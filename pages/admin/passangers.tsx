import { useQuery } from "react-query";

function Passengers() {
    const { isLoading, error, data, isSuccess } = useQuery("passengers", () =>
        fetch(
            "https://api.instantwebtools.net/v1/passenger?page=0&size=10"
        ).then((res) => res.json())
    );
    return (
        <div>
            {isSuccess &&
            data.data.map((item) => (
                <div key={item._id}>
                    <p>{item.name}</p>
                    <p>{item._id}</p>
                </div>
            ))}
            {isLoading && <p>Loading..</p>}
            {error && <p>Error occurred!</p>}
        </div>
    );
}

export default Passengers;