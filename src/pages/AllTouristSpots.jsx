import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard";

const AllTouristsSports = () => {
    const touristSpots = useLoaderData();
    const [spots, setSpots]=useState(touristSpots)

    const handleSelect = (e) => {
        let item=[...spots]
        if (e.target.value === 'average_cost') {
            item.sort((a, b) => {
                return parseFloat(b.average_cost) - parseFloat(a.average_cost) 
            });
        }
        setSpots(item);
    }

    return (
        <div className="container mx-auto">
            <div className="text-center mt-10">
                <select onChange={handleSelect} className="select text-2xl text-white bg-primary border-none  ">
                    <option defaultValue>Sort By</option>
                    <option value={'average_cost'}>Average Cost</option>
                </select>
            </div>

            <div className="grid  grid-cols-1 my-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    spots.map(spot => <SpotCard spot={spot} key={spot._id}></SpotCard>)
                }
            </div>

        </div>
    );
};

export default AllTouristsSports;