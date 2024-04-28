import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard";

const CountryBaseSpot = () => {

    const touristSpots = useLoaderData();


    return (
        <div className="container mx-auto">
            <Helmet><title>Dream Wander | Country Base Spot</title></Helmet>
            <h2 className="text-center mt-16 text-2xl md:text-4xl font-bold">Best Tourist Spots </h2>
            <div className="grid grid-cols-1 my-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    touristSpots.map(spot => <SpotCard spot={spot} key={spot._id}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default CountryBaseSpot;