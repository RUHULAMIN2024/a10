import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard";

const Home = () => {

    const touristSpots=useLoaderData();
    return (
        <div>
            <Helmet><title>Dream Wander | Home</title></Helmet>
            <h2 className="text-center text-2xl md:text-3xl font-bold">Best Tourist Spots in America </h2>
            <div className="grid grid-cols-1 my-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                touristSpots.map(spot=><SpotCard spot={spot} key={spot._id}></SpotCard>)
            }
            </div>
        </div>
    );
};

export default Home;