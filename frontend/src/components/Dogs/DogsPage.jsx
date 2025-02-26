import { useEffect, useState } from "react";
import "./dogs.css";
import DogsCard from "./DogsCard";

const DogsPage = () => {
    const [allDogs, setAllDogs] = useState([]);

    // Step 2: Fetch data from API
    useEffect(() => {
        fetch("http://localhost:3000/dogs") // Adjust API URL if needed
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched data:", data); // Debugging API response
                if (Array.isArray(data)) {
                    setAllDogs(data);
                } else {
                    console.error("Expected an array but got:", data);
                    setAllDogs([]); // Fallback to empty array
                }
            })
            .catch((err) => console.error("Error fetching dogs:", err));
    }, []);

    // Step 3: Check if allDogs is an array before using .map()
    if (!Array.isArray(allDogs)) {
        console.error("allDogs is not an array:", allDogs);
        return <p>Loading dogs...</p>;
    }

    return (
        <>
            <section className="dogs-container">
                {allDogs.length === 0 ? (
                    <p>No dogs available.</p>
                ) : (
                    allDogs.map((dog) => (
                        <div key={dog.id}>
                            <DogsCard 
                                id={dog.id} 
                                name={dog.name} 
                                breed={dog.breed} 
                                description={dog.description} 
                                price={dog.price} 
                                imageUrl={dog.imageUrl} 
                            />
                        </div>
                    ))
                )}
            </section>
        </>
    );
};

export default DogsPage;
